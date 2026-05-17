@echo off
REM Double-click me on Windows to start the local preview server.
REM Then open http://localhost:3000 in your browser.

cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel% == 0 (
    echo.
    echo   Starting local preview server...
    echo   Open this in your browser:  http://localhost:3000
    echo   Press Ctrl+C to stop, then close this window.
    echo.
    python -m http.server 3000
    goto end
)

where py >nul 2>nul
if %errorlevel% == 0 (
    echo.
    echo   Starting local preview server...
    echo   Open this in your browser:  http://localhost:3000
    echo   Press Ctrl+C to stop, then close this window.
    echo.
    py -m http.server 3000
    goto end
)

echo.
echo   Python is not installed. Install Python from https://python.org
echo   Or install Node.js from https://nodejs.org and run:  npx serve . -p 3000
echo.
pause

:end
