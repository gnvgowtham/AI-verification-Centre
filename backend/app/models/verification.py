from pydantic import BaseModel


class VerifyRequest(BaseModel):
    type: str
    content: str