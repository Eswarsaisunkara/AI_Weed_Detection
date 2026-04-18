📦 Model Files

This directory stores all trained model weights required for inference in the application.

⚠️ Note: Model files are not included in this repository due to GitHub file size limitations.

📥 Download Pre-trained Models

Please download all required model files from the link below:

👉 https://drive.google.com/drive/folders/111AF8riHsAJPGhkfDPMxdL4adboonN00?usp=sharing

⚙️ Setup Instructions

After downloading the model files, follow these steps:

Extract the files (if they are compressed).
Move all model files into the following directory:
Backend/models/
📁 Required Files

Ensure the following files are present inside the Backend/models/ folder:

stage1_weed_detector.pt → Weed detection model (YOLO-based)
stage2_species_classifier.pth → Weed species classification model
stage3_growth_localizer.pth → Growth stage localization model
✅ Important Notes
Do not rename any of the files — the application depends on exact filenames.
Make sure all files are placed directly inside the models folder (no nested folders).
Verify that all files are downloaded completely to avoid runtime errors.
🚀 Ready to Run

Once the models are correctly placed, the backend is ready for inference.
