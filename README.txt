BENCHWELL QUOTATION - WINDOWS PC APPLICATION
============================================
An Electron project: the Benchwell quotation app as a real Windows program
with its own window, Benchwell icon, installer, desktop shortcut and offline use.
PDF / Word export opens a normal "Save as" window.

ROUTE A - Get the .exe without installing anything (free, ~10 minutes)
1. Create a free account at github.com and make a new repository.
2. Unzip this project and upload ALL files (including the hidden .github folder).
   Repository page > Add file > Upload files > drag everything in.
3. Open the Actions tab. "Build Windows App" runs by itself (or press Run workflow).
4. When it turns green, open it and download "Benchwell-Windows" at the bottom. Unzip it.
   You get:
   - "Benchwell Quotation Setup 1.0.0.exe"  -> installer (Start menu + desktop shortcut)
   - "Benchwell Quotation 1.0.0.exe"        -> portable, runs without installing
5. Double-click the installer on any Windows PC.
   If Windows SmartScreen warns about an unknown publisher, choose More info > Run anyway
   (the app is not code-signed; signing needs a paid certificate).

ROUTE B - On your own Windows PC
Install Node.js 20, open a terminal in this folder, then:
   npm install
   npm start        (test the app)
   npm run dist     (builds the .exe files into the "dist" folder)

Data is stored on each PC. Use History / Dashboard for Sent, Won and Lost tracking.
