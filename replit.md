# Solar System Personality Quiz

## Overview
A fun, interactive personality quiz that determines which celestial body in our solar system matches your personality. Users answer questions about their preferences (elements, weather, accessories, speed, etc.) and receive a result indicating whether they are a planet (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), the Sun, or a dwarf planet.

## Project Type
Static HTML/CSS/JavaScript web application

## Project Structure
- `index.html` - Main quiz page with questions 1-3
- `p2.html` - Second quiz page with questions 4-5
- `p3.html` - Third quiz page with questions 6-7
- `results.html` - Results page showing the quiz outcome
- `script.js` - Quiz logic and scoring system
- `style.css` - Styling for all pages
- `images/` - Directory containing image assets
- `server.py` - Python HTTP server for serving the static files

## Technology Stack
- Frontend: HTML, CSS, JavaScript (Vanilla)
- Server: Python 3.11 HTTP server
- No build system or package manager required

## How It Works
The quiz uses a scoring system where each answer adds points to different celestial bodies. After answering all questions, the JavaScript calculates which body has the highest score and displays the result.

## Development Setup
The project runs on a simple Python HTTP server bound to `0.0.0.0:5000` to work with Replit's proxy system.

## Recent Changes
- **2025-11-17**: Initial setup in Replit environment
  - Installed Python 3.11
  - Created server.py with cache-control headers for development
  - Configured workflow to run the web server
  - Added .gitignore for Python files
