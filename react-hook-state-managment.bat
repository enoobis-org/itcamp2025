@echo off

cd /d "%~dp0react-hook-state-management"
start npm run dev
timeout /t 5 /nobreak
start http://localhost:5173
