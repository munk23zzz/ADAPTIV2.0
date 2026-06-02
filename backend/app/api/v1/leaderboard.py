from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ...database import get_db
from ...models.user import User
from ...services.gamification_service import get_leaderboard, get_user_rank
from ...utils.security import get_current_user

router = APIRouter()


@router.get("/")
def leaderboard(
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Return the top users sorted by XP."""
    return get_leaderboard(db, limit=limit)


@router.get("/me")
def my_rank(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Return the current user's leaderboard rank."""
    return get_user_rank(db, current_user)
