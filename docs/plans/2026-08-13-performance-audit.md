# Performance audit — 13 Aug 2026

## Summary

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH     | 0 |
| MEDIUM   | 2 |
| LOW      | 2 |

Live Lighthouse/CWV: **manual** after the next deploy (gallery images changed). Prior live HTML was ~347 KB uncompressed.

`next build` (earlier): home First Load JS ~117 kB. Static `○` for all routes.

---

## MEDIUM

### M1 — Homepage image weight

Hero mounts **6** full-bleed `next/image` slides (`Hero.tsx` 31–47); only index 0 has `priority`. The rest still decode in the DOM.

`GalleryMarquee` renders `marqueeImages` **twice** (seamless loop) = 24 `<Image>` on the homepage plus section photos.

**Fix:** Hero: render the active slide + maybe ±1, or `loading="lazy"` / hide `display:none` inactive slides so they are not `priority` and not eagerly fetched. Marquee: `loading="lazy"` (Next default below fold) is OK if the section is below the fold; keep `sizes` as now.

### M2 — CWV not re-measured after photo swap

**Fix:** After deploy, PageSpeed on `/` and `/galeri`. Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1. `manual` until live.

---

## LOW

### L1 — `next/image` pipeline is on

`formats: avif/webp`, local JPEGs ~100–340 KB, width/height 1536×1024. Good.

### L2 — No API / N+1

N/A.

---

## What looks sound

- Fonts `display: swap` via `next/font`.
- Listeners cleaned up (no interval leak in Hero).
- Maps iframes `loading="lazy"`.
