#!/usr/bin/env bash
# Double-click me on Mac/Linux to start the local preview server.
# Then open http://localhost:3000 in your browser.

cd "$(dirname "$0")"

if command -v python3 >/dev/null 2>&1; then
  echo ""
  echo "  Starting local preview server..."
  echo "  Open this in your browser:  http://localhost:3000"
  echo "  Press Ctrl+C to stop."
  echo ""
  python3 -m http.server 3000
elif command -v python >/dev/null 2>&1; then
  echo ""
  echo "  Starting local preview server..."
  echo "  Open this in your browser:  http://localhost:3000"
  echo "  Press Ctrl+C to stop."
  echo ""
  python -m http.server 3000
else
  echo ""
  echo "  Python is not installed. Install Python from https://python.org"
  echo "  Or install Node.js from https://nodejs.org and run:  npx serve . -p 3000"
  echo ""
  read -p "Press Enter to close..."
fi
