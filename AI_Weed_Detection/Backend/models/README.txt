# 📦 Model Files

This directory contains the trained model weights required for running inference in the application.

> [!CAUTION]
> **Model files are not included in this repository** due to GitHub file size limitations.
> You must download them manually using the instructions below.

---

## 📥 Download Pre-trained Models

Download all required model files from the link below:

👉 **[Download Models from Google Drive](https://drive.google.com/drive/folders/111AF8riHsAJPGhkfDPMxdL4adboonN00?usp=sharing)**

---

## ⚙️ Setup Instructions

After downloading the files, follow these steps:

1. **Extract** the files (if compressed).
2. **Place all model files** into the directory:

```bash
Backend/models/
```

---

## 📁 Required Files

Ensure the following files are present inside the `Backend/models/` folder:

| File Name                       | Description                                |
| ------------------------------- | ------------------------------------------ |
| `stage1_weed_detector.pt`       | Stage 1: Weed detection model (YOLO-based) |
| `stage2_species_classifier.pth` | Stage 2: Weed species classification model |
| `stage3_growth_localizer.pth`   | Stage 3: Growth stage localization model   |

---

## ✅ Important Notes

* **Do not rename files**
  The backend strictly depends on these exact filenames.

* **Avoid nested folders**
  All files must be placed directly inside `Backend/models/`.

* **Verify file integrity**
  Ensure downloads are complete to prevent runtime errors or corrupted model issues.

---

## 🚀 Ready to Run

Once all required files are correctly placed, the backend is fully ready for inference.
