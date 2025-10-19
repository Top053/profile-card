# Profile Card Component

A small, accessible, responsive Profile Card component built with plain HTML, CSS and vanilla JavaScript.

This project implements the assignment requirements:

- Semantic HTML (`article`, `header`, `figure`, `nav`, `section`, headings).
- All visible elements include the specified `data-testid` attributes required by the automated tests.
- Avatar supports file upload and pasting an image URL.
- Current time in milliseconds is shown using `Date.now()` and updates every second.
- Keyboard accessible (avatar is keyboard-triggerable, links are focusable, visible focus styles).
- Responsive layout (mobile / tablet / desktop).

---

## Live demo

https://top053.github.io/profile-card/

---

## Files

- `index.html` — main component (contains HTML, CSS, and JS).
- `styles.css` — external stylesheet for layout and responsive design.
- `script.js` — JavaScript for time updates, avatar upload, and accessibility.
- `images/lenox.png` — local avatar image (include or replace with a public image URL).
- `README.md` — this file.

---

## How to run locally

**Option A — Quick (open directly in browser)**

Double-click `index.html` or open it in your browser.

**Option B — Recommended (static server)**

```bash
# from project folder
python -m http.server 8000
# open http://localhost:8000 in your browser
