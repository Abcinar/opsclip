from fastapi import APIRouter
router = APIRouter()

@router.get("/balance")
async def get_balance():
    return {"balance": 47, "never_expire": True,
            "total_purchased": 81, "total_used": 34, "total_refunded": 0}

@router.post("/refund/{job_id}")
async def auto_refund(job_id: str):
    return {"job_id": job_id, "refunded": True, "credits_returned": 1}
