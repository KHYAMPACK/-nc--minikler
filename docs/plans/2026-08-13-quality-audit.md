# Quality audit — 13 Aug 2026

**Project:** Şahika Öncü Minikler Kreş (preschool website)  
**Stack:** Next.js 15.5.22, React 19, TypeScript `strict`, ESLint `next/core-web-vitals`  
**Scope:** source reliability. Not Lighthouse.

## Summary

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH     | 2 |
| MEDIUM   | 5 |
| LOW      | 3 |

Typecheck is clean (`npx tsc --noEmit`). `next build` succeeded earlier. Listeners in `Header`, `Hero`, and `FloatingActions` are cleaned up. No `as any`, no swallowed `catch` in app code.

## Infrastructure

| Check | Result |
|-------|--------|
| Test runner / tests | **None.** No Vitest/Jest/Playwright. 0 test files. |
| Coverage | N/A |
| Linter | ESLint 9 + `eslint-config-next`. `npm run lint` (`eslint`) **fails** (5 errors in `scripts/`). `next build` still typechecks/lints app routes. |
| Formatter | No Prettier / format script. |
| Typecheck | `strict: true`. No `npm run typecheck` script (must call `tsc` by hand). |
| Pre-commit hooks | None (no Husky). |
| CI | **No `.github/workflows`.** Deploy is Vercel `next build` only — not a full lint+test gate. |
| SAST | None. |

---

## HIGH

### H1 — FAQ age band contradicts the rest of the site

**Where:** `src/lib/content.ts` line 443 vs lines 21–24 and 42.

```443:443:src/lib/content.ts
    a: "Programlarımız özellikle 16–27 ay, 28–36 ay ve 36–48 ay gruplarına göre yapılandırılır.",
```

Programs, homepage age cards, and `/programlar` all say **18–27 ay**. The FAQ (also on the homepage and `/sss`, and in FAQ JSON-LD) says **16–27 ay**.

**Why:** Parents get two different minimum ages. This is broken under real use, not a style nit.

**Fix:** Align on one band (almost certainly 18–27 unless the client confirms 16). Change the FAQ string in one place (`faqs`).

### H2 — Documented lint script is red

**Command:** `npx eslint . --max-warnings 0` (2026-08-13)

```
scripts/clean-logo.js          error  require() forbidden
scripts/crop-logo.js           error  require() forbidden (×2)
scripts/fix-one-gallery-path.js error  require() forbidden
scripts/verify-gallery.js      error  require() forbidden
                               warning unused `srcs`
```

`package.json` `"lint": "eslint"` therefore exits non-zero. One-off logo/gallery scripts are not production, but the only lint command fails.

**Why:** Anyone (or future CI) running `npm run lint` gets a red build. Easy to ignore real app regressions.

**Fix:** Ignore `scripts/**` in `eslint.config.mjs` (or delete the spent SnapInsta helper). Keep `verify-gallery.js` if useful, but out of the app lint path.

---

## MEDIUM

### M1 — No automated tests

No unit, component, or smoke tests. A brochure site has little logic, but nothing would catch H1, a broken `navLinks` href, or a missing gallery file except a human.

**Fix:** One Playwright (or `next build` + `node scripts/verify-gallery.js`) job is enough. Optional until CI exists.

### M2 — No GitHub Actions CI

No workflow. Vercel still runs `next build` (types + Next lint on app). There is no PR check for `npm run lint`, tests, or `verify-gallery`.

**Fix:** A single workflow: `npm ci && npm run lint && npx tsc --noEmit && npm run build`.

### M3 — Homepage is a god component

**Where:** `src/app/page.tsx` — 543 lines. About, gallery, Montessori, garden, rhythm, ages, teachers, programs, nutrition, manifesto, kayıt, FAQ, and contact are all inlined.

**Why:** Hard to review; copy/accent arrays live next to layout. Not a runtime bug.

**Fix:** Split remaining sections into components (same pattern as `Hero` / `GardenSection`). Not blocking launch.

### M4 — Route lists can drift

Routes are copied in `src/lib/site.ts` (`navLinks`), `src/app/sitemap.ts` (`routes` array), and hardcoded `href="/hakkimizda"` etc. in `page.tsx`. H1 is this class of bug for copy.

**Fix:** Derive sitemap from `navLinks` + `/gizlilik`.

### M5 — No `not-found` / `error` UI

No `src/app/not-found.tsx` or `error.tsx`. Unknown URLs get the default Next 404.

**Fix:** Small branded 404 + error boundary matching the site.

### M6 — Contact phone field hidden on small screens

**Where:** `src/components/ContactForm.tsx` — `className="hidden sm:block"` on the phone field.

**Why:** Most WhatsApp traffic is mobile; the phone input never shows, so the message often has no callback number.

**Fix:** Show the field on all breakpoints (or use `inputMode="tel"` always).

---

## LOW

### L1 — Sitemap `lastModified` is `new Date()` every build

`src/app/sitemap.ts` line 15. Search engines see a perpetual “updated today”. Prefer a real content date or omit.

### L2 — No formatter / `typecheck` script

Add `"typecheck": "tsc --noEmit"` to `package.json`. Prettier optional.

### L3 — Leftover SnapInsta helper

`scripts/fix-one-gallery-path.js` still looks for `SnapInsta.to_669646398`. Dead after the gallery replacement. Delete it.

---

## What looks sound

- TypeScript `strict: true`; no unsafe casts in `src/`.
- ESLint next + typescript for app code (aside from `scripts/`).
- Effects remove scroll / interval / pointer listeners.
- JSON-LD uses `serializeJsonLd` (no raw user HTML).
- `next build` produces static pages for all public routes.
