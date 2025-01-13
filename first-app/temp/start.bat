@echo off
cd /d "%~dp0app"

echo building...
npm start

:: check
if %errorlevel% equ 0 (
    echo build completed successfully!
) else (
    echo build failed. please check the logs.
)

:: pause
pause
