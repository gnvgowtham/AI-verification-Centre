def verify_claim(request):
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