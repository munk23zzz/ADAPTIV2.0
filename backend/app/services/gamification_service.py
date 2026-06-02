from sqlalchemy.orm import Session
from datetime import datetime
from ..models.user import User


XP_PER_LEVEL = 100  # XP needed to level up


def award_xp(db: Session, user: User, amount: int, reason: str = ""):
    """Award XP to a user and handle level-up."""
    user.xp = (user.xp or 0) + amount
    new_level = (user.xp // XP_PER_LEVEL) + 1
    user.level = max(user.level or 1, new_level)
    db.commit()


def update_streak(db: Session, user: User):
    """Increment streak if user active today, else reset."""
    now = datetime.utcnow()
    last = user.last_active_at

    if last is None:
        user.streak_count = 1
    else:
        delta = (now.date() - last.date()).days
        if delta == 1:
            user.streak_count = (user.streak_count or 0) + 1
        elif delta > 1:
            user.streak_count = 1
        # delta == 0 means same day — no change

    user.last_active_at = now
    db.commit()


def get_leaderboard(db: Session, limit: int = 50) -> list[dict]:
    """Return top users sorted by XP."""
    users = db.query(User).order_by(User.xp.desc()).limit(limit).all()
    return [
        {
            "rank": i + 1,
            "id": str(u.id),
            "name": u.name,
            "avatar_url": u.avatar_url,
            "xp": u.xp,
            "level": u.level,
            "streak_count": u.streak_count,
        }
        for i, u in enumerate(users)
    ]


def get_user_rank(db: Session, user: User) -> dict:
    """Get the rank of a specific user in the leaderboard."""
    rank = db.query(User).filter(User.xp > user.xp).count() + 1
    return {
        "rank": rank,
        "id": str(user.id),
        "name": user.name,
        "xp": user.xp,
        "level": user.level,
        "streak_count": user.streak_count,
    }
