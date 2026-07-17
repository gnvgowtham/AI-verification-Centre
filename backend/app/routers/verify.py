from fastapi import APIRouter
from app.models.verification import VerifyRequest
from app.services.verification_service import verify_claim
router = APIRouter()


@router.post("/verify")
def verify(request: VerifyRequest):
    return verify_claim(request)
    return {
    "status": "success",
    "received": {
        "type": request.type,
        "content": request.content
    },
    "verdict": "Likely True",
    "confidence": 91,
    "summary": "This is a mock verification response."
}