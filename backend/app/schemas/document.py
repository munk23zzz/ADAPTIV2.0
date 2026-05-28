from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID


class DocumentResponse(BaseModel):
    id: UUID
    title: str
    file_type: Optional[str] = None
    file_size: int = 0
    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class DocumentDetail(DocumentResponse):
    extracted_text: Optional[str] = None
