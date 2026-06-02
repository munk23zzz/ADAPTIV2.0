@echo off
echo ==============================================
echo Menjalankan ADAPTIV - Database, Backend, Frontend
echo ==============================================

echo.
echo [1/3] Menghidupkan Database (Docker)...
cd backend
docker-compose up -d
cd ..

echo.
echo [2/3] Menghidupkan Backend (FastAPI)...
echo Membuka terminal baru untuk Backend...
start cmd /k "cd backend && ..\venv\Scripts\activate && uvicorn app.main:app --reload"

echo.
echo [3/3] Menghidupkan Frontend (React/Vite)...
echo Membuka terminal baru untuk Frontend...
start cmd /k "npm run dev"

echo.
echo ==============================================
echo Semua sistem sedang berjalan!
echo Backend API: http://127.0.0.1:8000/docs
echo Frontend Web: http://localhost:5173
echo ==============================================
pause
