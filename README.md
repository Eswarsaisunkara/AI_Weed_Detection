# Smart AI Weed Detection

A full-stack AI-powered weed detection system using a 3-stage deep learning pipeline built with PyTorch, Flask, and React.
Upload field images and automatically detect weeds, classify species, and identify growth stages in real-time.

---

## Live Demo

Frontend: [https://ai-weed-detection.vercel.app](https://ai-weed-detection.vercel.app)
Backend API: [https://ai-weed-detection.onrender.com]

---

## Features

* Upload images for weed detection
* 3-Stage AI Pipeline (Detection → Classification → Growth Stage)
* Accurate bounding box detection
* Weed species classification
* Growth stage prediction
* Fast inference using lightweight models
* Responsive UI

---

## 3-Stage Model Pipeline

### Stage 1: Weed Detection

* Model: EfficientDet-D0 (.pt)
* Detects weed regions in the image

Finds where the weed is

---

### Stage 2: Species Classification

* Model: MobileNetV3 (.pth)
* Classifies weed species from cropped regions

Identifies what weed it is

---

### Stage 3: Growth Stage Localization

* Model: YOLOv8n (.pth)
* Predicts growth stage with bounding boxes

Determines how mature the weed is

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Flask
* PyTorch

---

## Project Structure

```
AI_Weed_Detection/
│
├── Backend/
│   ├── models/
│   │   ├── stage1_weed_detector.pt
│   │   ├── stage2_species_classifier.pth
│   │   ├── stage3_growth_localizer.pth
│   │
│   ├── inference.py
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Demo.jsx
│   │   │   ├── Results.jsx
│   │   │   ├── Architecture.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Plots.jsx
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── App.css
│   └── README.md
│
└── README.md
```

---

## Environment Variables

### Backend (.env)

```
FLASK_ENV=development
PORT=5000
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000
```

---

## Installation and Setup

### 1. Clone Repository

```
git clone https://github.com/Eswarsaisunkara/AI_Weed_Detection.git
cd AI_Weed_Detection
```

---

### 2. Setup Backend

```
cd Backend
pip install -r requirements.txt
python main.py
```

---

### 3. Setup Frontend

```
cd Frontend
npm install
npm run dev
```

---

## Workflow

1. User uploads an image via frontend
2. Image is sent to Flask backend
3. Backend runs inference.py
4. Pipeline executes:
   Detection → Classification → Growth Stage
5. Results are returned and displayed

---

## Model Performance

* Accuracy: ~93%
* F1-Score: ~92%
* Real-time inference
* Optimized for low-power devices

---

## Use Cases

* Precision agriculture
* Smart farming
* Drone-based monitoring
* Automated weed control

---

## Future Improvements

* Drone/live camera integration
* Multi-crop support
* Improved dataset generalization
* Edge deployment optimization

---

## Author

Eswar Sai Sunkara

GitHub: [https://github.com/Eswarsaisunkara](https://github.com/Eswarsaisunkara)

---

## Support

If you like this project, give it a star on GitHub!
