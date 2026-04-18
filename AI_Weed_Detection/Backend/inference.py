from pathlib import Path

import cv2
import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from torchvision.models import MobileNet_V3_Small_Weights
from ultralytics import YOLO

BASE_DIR = Path(__file__).resolve().parent
MODELS_DIR = BASE_DIR / "models"

stage1 = YOLO(str(MODELS_DIR / "stage1_weed_detector.pt"))

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

species_model = models.mobilenet_v3_small(
    weights=MobileNet_V3_Small_Weights.DEFAULT
)
species_model.classifier[3] = nn.Linear(
    species_model.classifier[3].in_features, 9
)
species_model.load_state_dict(
    torch.load(MODELS_DIR / "stage2_species_classifier.pth", map_location=device)
)
species_model = species_model.to(device)
species_model.eval()

growth_model = models.mobilenet_v3_small(
    weights=MobileNet_V3_Small_Weights.DEFAULT
)
growth_model.classifier[3] = nn.Linear(
    growth_model.classifier[3].in_features, 3
)
growth_model.load_state_dict(
    torch.load(MODELS_DIR / "stage3_growth_localizer.pth", map_location=device)
)
growth_model = growth_model.to(device)
growth_model.eval()

species_classes = [
    "Chinese Apple",
    "Lantana",
    "Parkinsonia",
    "Parthenium",
    "Prickly Acacia",
    "Rubber Vine",
    "Siam Weed",
    "Snake Weed",
    "Negative",
]

growth_classes = ["Early", "Mid", "Late"]

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])


def softmax_confidence(logits):
    probabilities = torch.softmax(logits, dim=1)
    confidence, prediction = torch.max(probabilities, 1)
    return prediction.item(), round(confidence.item() * 100, 2)


def run_pipeline(image_path):
    image = cv2.imread(image_path)
    if image is None:
        return {
            "detected": False,
            "non_plant": True,
            "message": "Unable to read the image.",
        }

    image_height, image_width = image.shape[:2]
    results = stage1(image_path)[0]

    if not results.boxes:
        return {
            "detected": False,
            "non_plant": True,
            "message": "This image does not appear to contain a plant or weed.",
        }

    best_box = max(results.boxes, key=lambda box: float(box.conf[0]))
    x1, y1, x2, y2 = map(int, best_box.xyxy[0])
    x1 = max(0, x1)
    y1 = max(0, y1)
    x2 = min(image_width, x2)
    y2 = min(image_height, y2)

    if x2 <= x1 or y2 <= y1:
        return {
            "detected": False,
            "non_plant": True,
            "message": "Detection box was invalid for this image.",
        }

    crop = image[y1:y2, x1:x2]
    crop_pil = Image.fromarray(cv2.cvtColor(crop, cv2.COLOR_BGR2RGB))
    input_tensor = transform(crop_pil).unsqueeze(0).to(device)

    with torch.no_grad():
        species_out = species_model(input_tensor)
        species_pred, species_confidence = softmax_confidence(species_out)

        growth_out = growth_model(input_tensor)
        growth_pred, growth_confidence = softmax_confidence(growth_out)

    species_name = species_classes[species_pred]
    if species_name == "Negative":
        return {
            "detected": False,
            "non_plant": True,
            "message": "This image is not a target weed plant.",
            "species": species_name,
            "confidence": species_confidence,
        }

    box_area = (x2 - x1) * (y2 - y1)
    weed_percentage = round((box_area / (image_width * image_height)) * 100, 2)
    detection_confidence = round(float(best_box.conf[0]) * 100, 2)

    return {
        "detected": True,
        "non_plant": False,
        "species": species_name,
        "growth_stage": growth_classes[growth_pred],
        "weed_percentage": weed_percentage,
        "confidence": species_confidence,
        "detection_confidence": detection_confidence,
        "growth_confidence": growth_confidence,
        "box": {
            "x1": x1,
            "y1": y1,
            "x2": x2,
            "y2": y2,
        },
        "image_size": {
            "width": image_width,
            "height": image_height,
        },
    }
