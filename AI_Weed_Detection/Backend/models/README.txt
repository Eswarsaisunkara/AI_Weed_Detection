Place your trained model files in this folder with these exact names:

- stage1_weed_detector.pt
- stage2_species_classifier.pth
- stage3_growth_localizer.pth

Backend loading logic:
- Stage 1: YOLO detector for weed localization
- Stage 2: MobileNetV3 species classifier
- Stage 3: MobileNetV3 growth stage classifier

The backend resolves these paths relative to Backend/inference.py, so keep them inside Backend/models/.
