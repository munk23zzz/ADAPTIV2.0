from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from ...database import get_db
from ...models.user import User
from ...schemas.document import DocumentResponse, DocumentDetail
from ...services import document_service
from ...utils.security import get_current_user

router = APIRouter()


@router.get("/", response_model=List[DocumentResponse])
def list_documents(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """List all documents uploaded by the current user."""
    return document_service.get_documents(db, current_user)


@router.post("/upload", response_model=DocumentResponse, status_code=201)
async def upload_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Upload a PDF, DOCX, TXT, or MD file. Text is extracted automatically."""
    return await document_service.create_document(db, file, current_user)


@router.get("/{doc_id}", response_model=DocumentDetail)
def get_document(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Get a single document with extracted text."""
    return document_service.get_document(db, doc_id, current_user)


@router.get("/{doc_id}/status")
def get_document_status(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Poll the processing status of a document."""
    doc = document_service.get_document(db, doc_id, current_user)
    return {"id": str(doc.id), "status": doc.status}


@router.delete("/{doc_id}")
def delete_document(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Delete a document and its file from disk."""
    return document_service.delete_document(db, doc_id, current_user)
