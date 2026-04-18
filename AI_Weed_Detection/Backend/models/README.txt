# 📦 Model Files

This directory is designated for storing all trained model weights required for inference within the application.

> [!CAUTION]
> **Model files are not included in this repository** due to GitHub file size limitations. You must download them manually using the instructions below.

## 📥 Download Pre-trained Models

Please download all required model files from the following link:

**[Download Models from Google Drive](https://drive.google.com/drive/folders/111AF8riHsAJPGhkfDPMxdL4adboonN00?usp=sharing)**

---

## ⚙️ Setup Instructions

After downloading the model files, follow these steps to ensure the backend functions correctly:

1.  **Extract** the files (if they are compressed).
2.  **Move** all model files into the following directory:
    ```bash
    Backend/models/
    ```

### 📁 Required Files

Ensure the following files are present inside the `Backend/models/` folder:

| File Name | Description |
| :--- | :--- |
| `stage1_weed_detector.pt` | Weed detection model (YOLO-based) |
| `stage2_species_classifier.pth` | Weed species classification model |
| `stage3_growth_localizer.pth` | Growth stage localization model |

---

## ✅ Important Notes

* **Do Not Rename:** The application depends on exact filenames to load the models.
* **No Nested Folders:** Ensure all files are placed directly inside the `models/` folder, not within sub-directories.
* **Integrity Check:** Verify that all files are downloaded completely to avoid runtime or "corrupt file" errors.

## 🚀 Ready to Run

Once the models are correctly placed in the directory, the backend is ready for inference.
