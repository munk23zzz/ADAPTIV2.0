# Import all models so Alembic and SQLAlchemy can detect them
from .user import User
from .document import Document
from .chat import ChatHistory, ChatMessage
from .studio import Quiz, Flashcard

