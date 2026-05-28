from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional
from ...database import get_db
from ...models.user import User
from ...schemas.user import UserResponse, OnboardingUpdate
from ...services import user_service
from ...utils.security import get_current_user

router = APIRouter()


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get the currently authenticated user's profile."""
    user_service.update_last_active(db, current_user)
    return current_user


@router.put("/me", response_model=UserResponse)
def update_me(
    name: Optional[str] = None,
    avatar_url: Optional[str] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Update name or avatar_url for the current user."""
    return user_service.update_profile(db, current_user, name=name, avatar_url=avatar_url)


@router.put("/me/onboarding", response_model=UserResponse)
def complete_onboarding(
    data: OnboardingUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Save onboarding results (learning style) and mark onboarding as done."""
    return user_service.complete_onboarding(db, current_user, data)


@router.get("/me/stats")
def get_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Get gamification stats: XP, level, streak, quiz count."""
    return user_service.get_user_stats(db, current_user)
