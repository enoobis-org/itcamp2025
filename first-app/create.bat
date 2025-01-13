@echo off

set PROJECT_NAME=app

set CURRENT_DIR=%~dp0
set CURRENT_DIR=%CURRENT_DIR:~0,-1%

cd /d %CURRENT_DIR%

echo Creating Vite project in: %CURRENT_DIR%\%PROJECT_NAME%
npx create-vite@latest %PROJECT_NAME% --template react

cd %PROJECT_NAME%

echo Installing dependencies...
npm install

echo Starting development server...
npm run dev
