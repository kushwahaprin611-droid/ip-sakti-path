@echo off
title IP Sakti Path Launcher (SIH Edition)
echo ===================================================
echo        IP SAKTI PATH (ज्ञान & शक्ति)
echo   Ayurvedic IP & Sovereignty Educational Simulation
echo ===================================================
echo.
echo Opening game in your browser...
start http://localhost:8080/
echo.
echo If the localhost server is not running, opening direct index.html...
timeout /t 2 /nobreak >nul
start "" "%~dp0index.html"
echo Game launched! Enjoy playing IP Sakti Path.
pause