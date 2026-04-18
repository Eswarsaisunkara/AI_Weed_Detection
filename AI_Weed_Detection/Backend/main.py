from pathlib import Path
import shutil
import uuid

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from inference import run_pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TEMP_DIR = Path(__file__).resolve().parent / "temp_uploads"
TEMP_DIR.mkdir(exist_ok=True)


@app.get("/")
def home():
    return {"message": "Weed AI API Running"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")

    suffix = Path(file.filename).suffix or ".jpg"
    path = TEMP_DIR / f"{uuid.uuid4().hex}{suffix}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        result = run_pipeline(str(path))
    finally:
        path.unlink(missing_ok=True)

    return result
