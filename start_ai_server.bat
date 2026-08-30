@echo off
title IP SAKTI PATH - AI Server Launcher
echo =========================================================
echo                  IP SAKTI PATH
echo     AI Assistant Server (OpenAI Web Search Enabled)
echo =========================================================
echo.
echo Starting local server at http://localhost:8080 ...
echo.
start "" "http://localhost:8080"
node server.js
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Node is not installed in standard PATH. Trying Antigravity Node runtime...
    "%USERPROFILE%\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js
)
pause
