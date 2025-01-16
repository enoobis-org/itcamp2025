@echo off

cd /d "%~dp0vite-grocery-list-app"
start npm run dev
timeout /t 5 /nobreak
start http://localhost:5173


