@echo off
cd /d "%~dp0"

echo creating...
npx create-react-app app

:: check
if %errorlevel% equ 0 (
    echo react app created successfully!
) else (
    echo Failed to create the react app. Please check the logs.
)

:: pause
pause
