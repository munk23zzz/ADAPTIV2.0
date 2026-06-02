from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from typing import List, Optional
from uuid import UUID
import json
from ...database import get_db
from ...models.user import User
from ...models.chat import ChatHistory, ChatMessage
from ...schemas.chat import ChatHistoryResponse, ChatHistoryDetail, SendMessageRequest
from ...services import ai_service
from ...utils.security import get_current_user

router = APIRouter()


@router.get("/", response_model=List[ChatHistoryResponse])
def list_chats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """List all chat sessions for the current user."""
    return (
        db.query(ChatHistory)
        .filter(ChatHistory.user_id == current_user.id)
        .order_by(ChatHistory.updated_at.desc())
        .all()
    )


@router.post("/", response_model=ChatHistoryResponse, status_code=201)
def create_chat(
    title: str = "New Chat",
    document_id: Optional[UUID] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Start a new chat session, optionally linked to a document."""
    chat = ChatHistory(user_id=current_user.id, title=title, document_id=document_id)
    db.add(chat)
    db.commit()
    db.refresh(chat)
    return chat


@router.get("/{chat_id}", response_model=ChatHistoryDetail)
def get_chat(
    chat_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Get a chat session with all its messages."""
    chat = db.query(ChatHistory).filter(
        ChatHistory.id == chat_id, ChatHistory.user_id == current_user.id
    ).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat session not found")
    return chat


@router.post("/{chat_id}/messages")
def send_message(
    chat_id: UUID,
    request: SendMessageRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Send a user message and get an AI response."""
    chat = db.query(ChatHistory).filter(
        ChatHistory.id == chat_id, ChatHistory.user_id == current_user.id
    ).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat session not found")

    # Save user message
    user_msg = ChatMessage(chat_id=chat_id, role="user", content=request.content)
    db.add(user_msg)
    db.commit()

    # Get document context if chat is linked to a document
    doc_text = None
    if chat.document_id:
        from ...models.document import Document
        doc = db.query(Document).filter(Document.id == chat.document_id).first()
        if doc and doc.extracted_text:
            doc_text = doc.extracted_text

    # Build conversation context from recent messages (last 10)
    history = (
        db.query(ChatMessage)
        .filter(ChatMessage.chat_id == chat_id)
        .order_by(ChatMessage.created_at.desc())
        .limit(10)
        .all()
    )
    history_text = "\n".join(
        f"{'User' if m.role == 'user' else 'Assistant'}: {m.content}"
        for m in reversed(history[1:])  # exclude the message we just saved
    )

    full_prompt = (
        f"Previous conversation:\n{history_text}\n\nUser: {request.content}"
        if history_text else request.content
    )

    try:
        ai_reply = ai_service.ask_ai(full_prompt, context_text=doc_text)
    except Exception as e:
        ai_reply = f"Sorry, I encountered an error: {str(e)}"

    # Save AI response
    ai_msg = ChatMessage(chat_id=chat_id, role="assistant", content=ai_reply)
    db.add(ai_msg)

    # Update chat title from first message if still default
    if chat.title == "New Chat" and request.content:
        chat.title = request.content[:60]

    db.commit()
    db.refresh(ai_msg)

    return {
        "id": str(ai_msg.id),
        "role": "assistant",
        "content": ai_reply,
        "created_at": ai_msg.created_at,
    }


@router.delete("/{chat_id}")
def delete_chat(
    chat_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Delete a chat session and all its messages."""
    chat = db.query(ChatHistory).filter(
        ChatHistory.id == chat_id, ChatHistory.user_id == current_user.id
    ).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat session not found")
    db.delete(chat)
    db.commit()
    return {"message": "Chat deleted"}
