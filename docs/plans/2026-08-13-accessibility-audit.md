# Accessibility audit — 13 Aug 2026

## Summary

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH     | 1 |
| MEDIUM   | 2 |
| LOW      | 2 |

No axe/Lighthouse-CI in repo. `eslint-config-next` includes jsx-a11y (app code).

---

## HIGH

### H1 — No skip link

`src/app/layout.tsx` has `<main>` but no “içeriğe geç” link. Keyboard users tab through the full header/nav on every page.

**Fix:** First focusable element in `layout.tsx` (or `Header`): skip link to `#icerik`, set `id="icerik"` on `<main>`. Visible on `:focus`.

---

## MEDIUM

### M1 — Gallery marquee cannot be paused

`GalleryMarquee.tsx` CSS-animated infinite loop. Duplicate track is `aria-hidden`. No pause control; `prefers-reduced-motion` in `globals.css` already stops `.gallery-marquee-track` animation (line ~414). Good for reduced-motion users; others cannot pause.

**Fix:** Optional pause/play button. If reduced-motion is enough for WCAG 2.2 2.2.2, treat as SHOULD. Still add a pause button — small and useful.

### M2 — Focus visibility on nav links

Inputs have `focus:ring-2`. Header/footer `<Link>`s rely on browser outline. Tailwind preflight may weaken outline.

**Fix:** In `globals.css`:

```css
:focus-visible {
  outline: 2px solid var(--color-leaf);
  outline-offset: 3px;
}
```

---

## LOW

### L1 — Hero dots are `aria-hidden` and not buttons

Decorative; slides auto-advance. Acceptable if the hero is not the only way to get CTAs (CTAs are real links). Skip unless you add real slide controls.

### L2 — Contact form errors

Native `required` only; no `aria-describedby` live errors. Acceptable for three fields.

---

## What looks sound

- `lang="tr"`, `<header>` / `<main>` / `<footer>`, nav `aria-label`.
- Form labels + `htmlFor`.
- Decorative images `alt=""` / `aria-hidden`.
- Mobile menu `aria-expanded` / `aria-controls`.
- `prefers-reduced-motion` block in CSS.
- FAQ uses `<details>`.
- Floating actions have `aria-label`.
