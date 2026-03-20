# Echo Interactive Prototype

Echo is now a **runnable interactive prototype** for a premium English learning mobile app concept.

## What is included

- `index.html` — the app shell and all main screens.
- `styles.css` — the dark organic premium visual system.
- `script.js` — interaction logic for navigation, exercises, XP, rewards, and adaptive profile updates.

## Run locally

You can open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000`

## What changed vs the previous version

The previous delivery was mainly a static visual presentation. This version behaves like an actual prototype:

- bottom navigation switches between screens
- campaign nodes are clickable
- session answers produce feedback
- XP, streak, metrics, rewards, and profile insights update live
