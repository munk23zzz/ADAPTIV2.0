from pydantic import BaseModel
from typing import Optional, Any, List
from datetime import datetime
from uuid import UUID


class QuizResponse(BaseModel):
    id: UUID
    title: str
    document_id: UUID
    questions: Any          # list of dicts from JSONB
    score: Optional[float] = None
    completed_at: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True


class FlashcardResponse(BaseModel):
    id: UUID
    title: str
    document_id: UUID
    cards: Any              # list of dicts from JSONB
    created_at: datetime

    class Config:
        from_attributes = True


class QuizSubmit(BaseModel):
    answers: List[int]      # index of selected option for each question


class SummaryResponse(BaseModel):
    document_id: UUID
    summary: str


class MindMapResponse(BaseModel):
    document_id: UUID
    mindmap: Any            # nested dict


class PodcastScriptResponse(BaseModel):
    document_id: UUID
    script: str
