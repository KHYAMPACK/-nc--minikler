# Compliance audit — 13 Aug 2026

Not legal advice.

**Project:** Şahika Öncü Minikler Kreş — public preschool marketing site (parents, TR).

## Summary

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH     | 1 |
| MEDIUM   | 2 |
| LOW      | 2 |

## N/A

- **ToS / EULA:** no accounts, no downloads.
- **Payments / PCI / refunds:** no payments on the site.
- **Cookie banner (MUST*):** no analytics, GTM, pixels, or `document.cookie` in source. `next/font` is self-hosted at build. No non-essential cookies found — banner not required from source.
- **GDPR/CCPA extra:** audience is TR (KVKK). No evidence of US/EU targeting beyond a public website.
- **App Store / Play:** N/A.

---

## HIGH

### H1 — Privacy text does not match what the site actually does

**Where:** `src/app/gizlilik/page.tsx`

The page covers WhatsApp (name/phone/message) and temsili photos. It does **not** mention:

1. **Google Maps iframe** (`siteConfig.mapEmbedUrl` on `/` and `/iletisim`) — Google is a processor; IP/referrer go to Google.
2. **Hosting** — Vercel (USA/EU regions) processes page requests.
3. **Child-related data** — form placeholder asks for the child’s age (`ContactForm.tsx`). That is data about a minor, supplied by a parent.
4. **Retention** — no “how long we keep WhatsApp messages.”
5. **AI / generated visuals** — gallery images are generated illustrative photos, not Unsplash stock; “temsili” is true but not explicit.

**Why:** KVKK-style notice must match processing. A preschool site is sensitive. Footer already links `/gizlilik` on every page (`Footer.tsx` 74–79); contact form also links it.

**Fix:** Expand `/gizlilik` with Maps, hosting, child data in messages, retention (e.g. WhatsApp thread until the inquiry is closed), and that gallery images are illustrative (including generated imagery), not photos of enrolled children.

Do **not** invent a trade-registry unvan. `siteConfig.legalName` is currently the brand name.

---

## MEDIUM

### M1 — Legal entity is the brand name only

`siteConfig.legalName` = `"Şahika Öncü Minikler"`. Footer copyright uses `siteConfig.name`. Fine if that is the operating name; incomplete if they have a company unvan.

**Fix:** `manual — user action required` — confirm official unvan with the client. Do not guess.

### M2 — COPPA / children

The site is for **parents**, not child users. Enrolled-child photos were removed. Residual: parents may type a child’s age/name into WhatsApp. Covered by H1 if gizlilik mentions it. No child-directed tracking found.

---

## LOW

### L1 — No cookie policy section

If Vercel injects only essential cookies, a one-liner “zorunlu teknik çerez yok / yalnızca barındırma” on `/gizlilik` is enough.

### L2 — Instagram is linked, not embedded

`sameAs` / footer link to Instagram. No widget scraping visitors. Optional mention under aktarım.

---

## What looks sound

- Privacy page exists and is in the footer on all pages.
- Contact form discloses WhatsApp + gizlilik link.
- No marketing pixels.
- Gallery copy states enrolled children are not shown.
