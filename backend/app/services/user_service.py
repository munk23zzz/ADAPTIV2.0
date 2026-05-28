from sqlalchemy.orm import Session
from fastapi import HTTPException
from uuid import UUID
from datetime import datetime
from ..models.user import User
from ..schemas.user import OnboardingUpdate


def get_user_by_id(db: Session, user_id: UUID) -> User:
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def update_profile(db: Session, user: User, name: str = None, avatar_url: str = None) -> User:
    if name is not None:
        user.name = name
    if avatar_url is not None:
        user.avatar_url = avatar_url
    db.commit()
    db.refresh(user)
    return user


def complete_onboarding(db: Session, user: User, data: OnboardingUpdate) -> User:
    user.learning_style = data.learning_style
    user.onboarding_done = True
    db.commit()
    db.refresh(user)
    return user


def get_user_stats(db: Session, user: User) -> dict:
    """Return gamification stats for the current user."""
    from ..models.studio import Quiz
    total_quizzes = db.query(Quiz).filter(Quiz.user_id == user.id, Quiz.completed_at != None).count()
    return {
        "xp": user.xp,
        "level": user.level,
        "streak_count": user.streak_count,
        "last_active_at": user.last_active_at,
        "total_quizzes_completed": total_quizzes,
        "plan": user.plan,
    }


def update_last_active(db: Session, user: User):
    user.last_active_at = datetime.utcnow()
    db.commit()
