# Echo Premium App Prototype

Echo is now a richer **interactive mobile app prototype** rather than a static concept page.

## Included files

- `index.html` — app shell, mobile screens, navigation, onboarding modal, and screen containers.
- `styles.css` — premium dark organic visual system styled to feel like a polished mobile product.
- `script.js` — state management, level progression, exercises, rewards, onboarding, stats, and profile updates.

## Run locally

Open `index.html` in a browser, or serve the repo locally:

```bash
python3 -m http.server 8000
```

Then visit:

- `http://127.0.0.1:8000`

## What works now

- all bottom navigation buttons switch screens
- onboarding is interactive
- every campaign level button is wired
- locked levels show feedback and unlocked levels open playable sessions
- each lesson answer updates state, XP, profile skills, streak-related progression, and mission status
- rewards can be claimed once unlocked
- profile and stats react to user progress

## Reset the prototype

Press `Alt + R` in the browser to reset the prototype state stored in `localStorage`.
