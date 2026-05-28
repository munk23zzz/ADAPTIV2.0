import os
import uuid
from pathlib import Path
from fastapi import UploadFile, HTTPException

UPLOAD_DIR = Path(__file__).parent.parent.parent / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt", ".md"}
MAX_FILE_SIZE = 20 * 1024 * 1024  # 20 MB


def validate_file(file: UploadFile):
    ext = Path(file.filename).suffix.lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"File type '{ext}' not supported. Allowed: {', '.join(ALLOWED_EXTENSIONS)}"
        )
    return ext


async def save_upload(file: UploadFile) -> tuple[str, str, int]:
    """Save uploaded file to disk. Returns (file_path, file_type, file_size)."""
    ext = validate_file(file)
    unique_name = f"{uuid.uuid4()}{ext}"
    file_path = UPLOAD_DIR / unique_name

    content = await file.read()
    file_size = len(content)

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File too large. Maximum size is 20 MB.")

    with open(file_path, "wb") as f:
        f.write(content)

    return str(file_path), ext.lstrip("."), file_size


def delete_file(file_path: str):
    """Delete a file from disk if it exists."""
    if file_path and os.path.exists(file_path):
        os.remove(file_path)


def extract_text(file_path: str, file_type: str) -> str:
    """Extract plain text from a document file."""
    try:
        if file_type == "txt" or file_type == "md":
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                return f.read()

        elif file_type == "pdf":
            try:
                from pypdf import PdfReader
                reader = PdfReader(file_path)
                return "\n".join(page.extract_text() or "" for page in reader.pages)
            except ImportError:
                raise HTTPException(status_code=500, detail="pypdf not installed. Run: pip install pypdf")

        elif file_type == "docx":
            try:
                from docx import Document
                doc = Document(file_path)
                return "\n".join(p.text for p in doc.paragraphs)
            except ImportError:
                raise HTTPException(status_code=500, detail="python-docx not installed. Run: pip install python-docx")

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to extract text: {str(e)}")

    return ""
