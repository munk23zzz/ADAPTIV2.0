from fastapi import APIRouter
from . import auth, users, documents, studio, chat, leaderboard

api_router = APIRouter()
api_router.include_router(auth.router,        prefix="/auth",        tags=["auth"])
api_router.include_router(users.router,       prefix="/users",       tags=["users"])
api_router.include_router(documents.router,   prefix="/documents",   tags=["documents"])
api_router.include_router(studio.router,      prefix="/studio",      tags=["studio"])
api_router.include_router(chat.router,        prefix="/chat",        tags=["chat"])
api_router.include_router(leaderboard.router, prefix="/leaderboard", tags=["leaderboard"])
