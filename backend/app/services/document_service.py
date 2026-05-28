from sqlalchemy.orm import Session
from uuid import UUID
from fastapi import HTTPException, UploadFile
from ..models.document import Document
from ..models.user import User
from ..utils import file_utils


def get_documents(db: Session, user: User) -> list[Document]:
    return db.query(Document).filter(Document.user_id == user.id).order_by(Document.created_at.desc()).all()


def get_document(db: Session, doc_id: UUID, user: User) -> Document:
    doc = db.query(Document).filter(Document.id == doc_id, Document.user_id == user.id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc


async def create_document(db: Session, file: UploadFile, user: User) -> Document:
    """Save uploaded file, extract text, and store in DB."""
    file_path, file_type, file_size = await file_utils.save_upload(file)

    doc = Document(
        user_id=user.id,
        title=file.filename,
        file_path=file_path,
        file_type=file_type,
        file_size=file_size,
        status="processing",
    )
    db.add(doc)
    db.commit()
    db.refresh(doc)

    # Extract text synchronously for now (Phase 7 will move this to Celery)
    try:
        extracted = file_utils.extract_text(file_path, file_type)
        doc.extracted_text = extracted
        doc.status = "ready"
    except Exception:
        doc.status = "failed"
    finally:
        db.commit()
        db.refresh(doc)

    return doc


def delete_document(db: Session, doc_id: UUID, user: User):
    doc = get_document(db, doc_id, user)
    file_utils.delete_file(doc.file_path)
    db.delete(doc)
    db.commit()
    return {"message": "Document deleted"}
