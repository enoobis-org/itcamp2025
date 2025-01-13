@echo off

set PROJECT_NAME=homework1

set CURRENT_DIR=%~dp0
set CURRENT_DIR=%CURRENT_DIR:~0,-1%

cd /d %CURRENT_DIR%

echo Creating Vite project in: %CURRENT_DIR%\%PROJECT_NAME%
npx create-vite@latest %PROJECT_NAME% --template react



