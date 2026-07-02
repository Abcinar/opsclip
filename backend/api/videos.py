from fastapi import APIRouter, UploadFile, File, Form, BackgroundTasks
from typing import Optional
import uuid
router = APIRouter()

@router.post("/upload")
async def upload_video(
    background_tasks: BackgroundTasks,
    file: Optional[UploadFile] = File(None),
    url: Optional[str] = Form(None),
    language: str = Form("ar"),
    command: Optional[str] = Form(None),
):
    job_id = str(uuid.uuid4())
    return {"job_id": job_id, "status": "queued", "language": language,
            "estimated_minutes": 3,
            "message": "Video queued. Credits auto-refunded on failure."}

@router.get("/status/{job_id}")
async def get_status(job_id: str):
    return {"job_id": job_id, "status": "processing", "progress": 65,
            "current_step": "AI analyzing content...",
            "steps": [
                {"label": "Uploading", "done": True},
                {"label": "Transcribing", "done": True},
                {"label": "AI Analysis", "done": False},
                {"label": "Clip Selection", "done": False},
                {"label": "Rendering", "done": False},
            ]}
