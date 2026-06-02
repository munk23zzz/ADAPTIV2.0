from typing import Optional
from ..config import settings


def get_gemini_client():
    """Initialize and return a Gemini GenerativeModel."""
    try:
        import google.generativeai as genai
        genai.configure(api_key=settings.GEMINI_API_KEY)
        return genai.GenerativeModel("gemini-1.5-flash")
    except ImportError:
        raise RuntimeError("google-generativeai is not installed. Run: pip install google-generativeai")


def ask_ai(prompt: str, context_text: Optional[str] = None) -> str:
    """
    Send a prompt to Gemini and return the response text.
    Optionally include document context for RAG-style queries.
    """
    if not settings.GEMINI_API_KEY:
        raise RuntimeError("GEMINI_API_KEY is not set in .env")

    model = get_gemini_client()

    if context_text:
        full_prompt = (
            f"You are an intelligent study assistant.\n\n"
            f"--- DOCUMENT CONTEXT ---\n{context_text[:15000]}\n--- END CONTEXT ---\n\n"
            f"{prompt}"
        )
    else:
        full_prompt = f"You are an intelligent study assistant.\n\n{prompt}"

    response = model.generate_content(full_prompt)
    return response.text


def generate_quiz(document_text: str, num_questions: int = 10) -> list[dict]:
    """Generate multiple-choice quiz questions from document text."""
    prompt = (
        f"Based on the following document, generate {num_questions} multiple-choice quiz questions.\n"
        f"Return ONLY a JSON array. Each item must have: "
        f'"question" (string), "options" (array of 4 strings), "answer" (index 0-3), "explanation" (string).\n'
        f"No markdown, no extra text — just the JSON array.\n\n"
        f"Document:\n{document_text[:12000]}"
    )
    import json
    raw = ask_ai(prompt)
    # Strip markdown code fences if present
    raw = raw.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    return json.loads(raw)


def generate_flashcards(document_text: str, num_cards: int = 15) -> list[dict]:
    """Generate flashcards (front/back) from document text."""
    prompt = (
        f"Based on the following document, generate {num_cards} flashcards.\n"
        f"Return ONLY a JSON array. Each item must have: "
        f'"front" (question or term), "back" (answer or definition).\n'
        f"No markdown, no extra text — just the JSON array.\n\n"
        f"Document:\n{document_text[:12000]}"
    )
    import json
    raw = ask_ai(prompt)
    raw = raw.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    return json.loads(raw)


def generate_summary(document_text: str) -> str:
    """Generate a concise summary of the document."""
    prompt = (
        "Please provide a clear and concise summary of the following document. "
        "Include the main topics, key points, and important conclusions.\n\n"
        f"Document:\n{document_text[:15000]}"
    )
    return ask_ai(prompt)


def generate_mindmap(document_text: str) -> dict:
    """Generate a mind map structure as JSON from document text."""
    prompt = (
        "Based on the following document, generate a mind map as a JSON object.\n"
        'The format must be: {"title": "Main Topic", "children": [{"title": "...", "children": [...]}]}\n'
        "Go up to 3 levels deep. No markdown, no extra text — just the JSON.\n\n"
        f"Document:\n{document_text[:12000]}"
    )
    import json
    raw = ask_ai(prompt)
    raw = raw.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    return json.loads(raw)


def generate_podcast_script(document_text: str) -> str:
    """Generate a conversational podcast script from document text."""
    prompt = (
        "Create an engaging podcast script based on the following document. "
        "Format it as a conversation between two hosts (Host A and Host B). "
        "The script should be educational, natural, and easy to follow. "
        "Length: approximately 800-1200 words.\n\n"
        f"Document:\n{document_text[:12000]}"
    )
    return ask_ai(prompt)
