from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def list_clips(lang: str = None):
    clips = [
        {"id": "1", "title": "AI will change everything", "viral_score": 94, "duration": 47, "language": "ar"},
        {"id": "2", "title": "The price nobody talks about", "viral_score": 87, "duration": 62, "language": "ar"},
        {"id": "3", "title": "3 tips I wish I knew", "viral_score": 91, "duration": 55, "language": "hi"},
    ]
    if lang: clips = [c for c in clips if c["language"] == lang]
    return {"clips": clips, "total": len(clips)}

@router.get("/{clip_id}/download")
async def download_clip(clip_id: str, quality: str = "1080p"):
    return {"clip_id": clip_id,
            "download_url": f"https://cdn.clipai.app/clips/{clip_id}.mp4",
            "quality": quality, "expires_in": 3600}
