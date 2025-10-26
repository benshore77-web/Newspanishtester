# Magnus' Rad Spanish Tester

An 80s-themed spaced repetition web app to help Magnus drill Spanish vocab and phrases with a Beastie Boys vibe.

## Getting Started

1. Open `index.html` in your favourite browser.
2. Pick a topic card and start reviewing.
3. Rate each prompt (Again, Hard, Good, Easy) to tune the SM-2 spaced repetition schedule.

Progress is stored in the browser via `localStorage`, so Magnus can jump back in and pick up where he left off.

## Current Sets

Each set combines individual words with phrases so Magnus can build full sentences:

- **Saludos y Presentaciones** – greetings, introductions, and social staples.
- **En el Aula** – classroom expressions and commands for everyday school life.
- **Después de Clases** – after-school plans, hobbies, and hanging out.

More sets can be added easily in `app.js` by updating the `vocabSets` array.

## Tech Notes

- Vanilla HTML, CSS, and JavaScript (no build step required).
- Uses the SM-2 algorithm to schedule reviews based on performance.
- Retro visuals inspired by 1980s neon arcades.

Have fun mixing in new school vocab as you get it!
