@echo off

cd /d "%~dp0vite-form-profile-app-upd"
start npm run dev
timeout /t 5 /nobreak
start http://localhost:5173


