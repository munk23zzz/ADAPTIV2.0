from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from datetime import datetime
from ...database import get_db
from ...models.user import User
from ...models.studio import Quiz, Flashcard
from ...schemas.studio import (
    QuizResponse, FlashcardResponse, QuizSubmit,
    SummaryResponse, MindMapResponse, PodcastScriptResponse
)
from ...services import document_service, ai_service
from ...services.gamification_service import award_xp
from ...utils.security import get_current_user

router = APIRouter()


def _require_ready_doc(doc_id: UUID, current_user: User, db: Session):
    """Helper: get document and assert it's ready for AI processing."""
    doc = document_service.get_document(db, doc_id, current_user)
    if doc.status != "ready":
        raise HTTPException(status_code=400, detail=f"Document is not ready (status: {doc.status})")
    if not doc.extracted_text:
        raise HTTPException(status_code=400, detail="Document has no extractable text")
    return doc


# ─── Quiz ─────────────────────────────────────────────────────────────────────

@router.post("/{doc_id}/quiz", response_model=QuizResponse, status_code=201)
def generate_quiz(
    doc_id: UUID,
    num_questions: int = 10,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Generate a quiz from a document using Gemini AI."""
    doc = _require_ready_doc(doc_id, current_user, db)
    try:
        questions = ai_service.generate_quiz(doc.extracted_text, num_questions)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

    quiz = Quiz(
        user_id=current_user.id,
        document_id=doc_id,
        title=f"Quiz: {doc.title}",
        questions=questions,
    )
    db.add(quiz)
    db.commit()
    db.refresh(quiz)
    award_xp(db, current_user, 10, "Generated a quiz")
    return quiz


@router.get("/quiz/{quiz_id}", response_model=QuizResponse)
def get_quiz(
    quiz_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id, Quiz.user_id == current_user.id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz


@router.put("/quiz/{quiz_id}/submit", response_model=QuizResponse)
def submit_quiz(
    quiz_id: UUID,
    submission: QuizSubmit,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Submit quiz answers and calculate score."""
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id, Quiz.user_id == current_user.id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    if quiz.completed_at:
        raise HTTPException(status_code=400, detail="Quiz already submitted")

    questions = quiz.questions
    if len(submission.answers) != len(questions):
        raise HTTPException(status_code=400, detail="Answer count does not match question count")

    correct = sum(
        1 for i, q in enumerate(questions)
        if submission.answers[i] == q.get("answer")
    )
    score = round((correct / len(questions)) * 100, 1)
    quiz.score = score
    quiz.completed_at = datetime.utcnow()
    db.commit()
    db.refresh(quiz)

    xp_earned = max(5, int(score / 10) * 5)
    award_xp(db, current_user, xp_earned, f"Completed quiz with score {score}%")
    return quiz


# ─── Flashcards ───────────────────────────────────────────────────────────────

@router.post("/{doc_id}/flashcards", response_model=FlashcardResponse, status_code=201)
def generate_flashcards(
    doc_id: UUID,
    num_cards: int = 15,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Generate flashcards from a document using Gemini AI."""
    doc = _require_ready_doc(doc_id, current_user, db)
    try:
        cards = ai_service.generate_flashcards(doc.extracted_text, num_cards)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

    flashcard = Flashcard(
        user_id=current_user.id,
        document_id=doc_id,
        title=f"Flashcards: {doc.title}",
        cards=cards,
    )
    db.add(flashcard)
    db.commit()
    db.refresh(flashcard)
    award_xp(db, current_user, 10, "Generated flashcards")
    return flashcard


# ─── Summary ──────────────────────────────────────────────────────────────────

@router.post("/{doc_id}/summary", response_model=SummaryResponse)
def generate_summary(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Generate an AI summary of the document."""
    doc = _require_ready_doc(doc_id, current_user, db)
    try:
        summary = ai_service.generate_summary(doc.extracted_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")
    award_xp(db, current_user, 5, "Generated a summary")
    return {"document_id": doc_id, "summary": summary}


# ─── Mind Map ─────────────────────────────────────────────────────────────────

@router.post("/{doc_id}/mindmap", response_model=MindMapResponse)
def generate_mindmap(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Generate a hierarchical mind map JSON from the document."""
    doc = _require_ready_doc(doc_id, current_user, db)
    try:
        mindmap = ai_service.generate_mindmap(doc.extracted_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")
    award_xp(db, current_user, 5, "Generated a mind map")
    return {"document_id": doc_id, "mindmap": mindmap}


# ─── Podcast Script ───────────────────────────────────────────────────────────

@router.post("/{doc_id}/podcast-script", response_model=PodcastScriptResponse)
def generate_podcast_script(
    doc_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Generate a conversational podcast script from the document."""
    doc = _require_ready_doc(doc_id, current_user, db)
    try:
        script = ai_service.generate_podcast_script(doc.extracted_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")
    award_xp(db, current_user, 5, "Generated a podcast script")
    return {"document_id": doc_id, "script": script}
