from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from uuid import UUID


class ChatMessageResponse(BaseModel):
    id: UUID
    role: str
    content: str
    created_at: datetime

    class Config:
        from_attributes = True


class ChatHistoryResponse(BaseModel):
    id: UUID
    title: str
    document_id: Optional[UUID] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ChatHistoryDetail(ChatHistoryResponse):
    messages: List[ChatMessageResponse] = []


class SendMessageRequest(BaseModel):
    content: str
