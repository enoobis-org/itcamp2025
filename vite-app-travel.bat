@echo off

cd /d "%~dp0vite-app-travel"
start npm run dev
timeout /t 5 /nobreak
start http://localhost:5173

