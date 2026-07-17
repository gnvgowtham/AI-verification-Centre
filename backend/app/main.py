from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.verify import router as verify_router

app = FastAPI(
    title="Veracity API",
    version="1.0.0"
)

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(verify_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Veracity Backend 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }