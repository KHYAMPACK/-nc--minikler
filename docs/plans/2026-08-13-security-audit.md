# Security audit — 13 Aug 2026

**Project:** Şahika Öncü Minikler Kreş (preschool website)  
**Stack:** Next.js 15.5.22 App Router, React 19, Tailwind 4, Vercel  
**Live URL:** https://www.sahikaoncuminikler.com  
**Scope:** source review + live response headers. Not a pentest.

## Summary

| Severity | Count |
|----------|------:|
| CRITICAL | 0 |
| HIGH     | 3 |
| MEDIUM   | 3 |
| LOW      | 2 |

No accounts, APIs, databases, or auth. Contact goes to WhatsApp in the browser. HTTPS redirect and HSTS are already on at Vercel.

## N/A (skipped)

- **Auth / sessions / CSRF / rate-limit on login:** no login, no cookies for auth, no server form endpoint.
- **Authz / IDOR / admin routes:** no roles, no `/api`, no admin.
- **SQL / command injection / path traversal / eval:** no DB, no `exec`/`spawn`, no user-controlled filesystem.
- **Crypto / homemade auth:** none.
- **LLM / prompt injection:** no model.
- **Secrets in source:** no `.env` committed; no `process.env` usage in `src/`. Business phone/email in `src/lib/site.ts` are public contact details, not credentials. Git history was not scanned (secret-hunting in history was skipped).

---

## HIGH

### H1 — Missing browser security headers

**Where:** `next.config.ts` has no `headers()`. Live `HEAD` of `https://www.sahikaoncuminikler.com/` (2026-08-13):

```
Strict-Transport-Security: max-age=63072000
Access-Control-Allow-Origin: *
Server: Vercel
```

Absent: `Content-Security-Policy`, `X-Frame-Options` / `frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

**Why:** The site can be embedded in a foreign iframe (clickjacking / overlay phishing on a preschool brand). Browsers will MIME-sniff without `nosniff`. There is no CSP to limit scripts or frames. HSTS is present (Vercel), HTTP→HTTPS 308 and apex→www 308 work.

**Fix:** Add headers in `next.config.ts` (see remediation). Re-check live after deploy.

### H2 — npm audit: 6 high-severity vulnerabilities

**Command:** `npm audit` (2026-08-13)

| Package | Advisory | Reachability on this site |
|---------|----------|---------------------------|
| `next` → `postcss@8.4.31` | XSS / source-map file read in PostCSS stringify | Next image/CSS pipeline at **build + image optimizer**. No user-uploaded CSS. |
| `next` → `sharp` `<0.35.0` | libvips CVEs | Next `<Image>` optimizer. No `remotePatterns`, no upload API — local `public/` only. |
| `brace-expansion` | DoS | **Dev** (`typescript-eslint`) |
| `js-yaml` | CPU DoS | **Dev** (ESLint stack) |
| `nanoid` `<3.3.18` | infinite loop if size 0 | Transitive (PostCSS / tooling) |

`npm audit fix` can patch some. `npm audit fix --force` would install **Next 16** (breaking). Residual Next 15 nested `postcss`/`sharp` likely remain until a patched 15.x.

**Why:** Known highs exist in the production Next install. Exploitability is limited (no untrusted CSS/images from users), but the lockfile should not stay on unpatched tooling where a non-breaking fix exists.

**Fix:** `npm audit fix` (no `--force`). Do not jump to Next 16 for this site. Track Next 15.5.x patch for `postcss`/`sharp`.

### H3 — Children's photos publicly served; privacy text does not mention them

**Where:** `src/lib/gallery.ts` (e.g. lines 14–20) and `public/galeri/SnapInsta.to_*.jpg`. Privacy page `src/app/gizlilik/page.tsx` only describes name/phone/message from the contact form.

Filenames like `SnapInsta.to_642871597_..._n.jpg` show the files were saved via an Instagram downloader. Gallery is indexable (`robots.ts` allows `/`; sitemap includes `/galeri`).

**Why:** Faces of minors are personal data. A public, crawler-visible gallery without mentioning photos (or Instagram as a source) in the KVKK text is an exposure and consent gap. This is also a compliance item; filed here because the files are world-readable PII.

**Fix:** Confirm parental/publication consent with the client. Rename files (drop `SnapInsta.to_`). Document photo processing in `/gizlilik`. If consent is missing, take images down. `manual — user action required` for consent.

---

## MEDIUM

### M1 — `Access-Control-Allow-Origin: *` on HTML

**Where:** Live response header on `/` (not set in this repo; not in `next.config.ts`).

**Why:** Skill flags `ACAO: *` especially with credentials. Credentials are not used, so this is not an API session leak. It still lets any origin read the HTML via a browser CORS request. Likely a Vercel project header.

**Fix:** Remove the wildcard in the Vercel dashboard (or override in `next.config.ts` / `vercel.json`). `manual — user action required` if it is only in the Vercel UI.

### M2 — JSON-LD via `dangerouslySetInnerHTML` without escaping `<`

**Where:**

```87:90:src/app/layout.tsx
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
```

Same pattern: `src/app/sss/page.tsx` lines 33–36 (`JSON.stringify(faqJsonLd)`).

**Why:** `JSON.stringify` does not escape `</script>`. Content today is static from `site.ts` / `content.ts` (no user input), so this is not currently exploitable. It is a footgun if copy ever includes `<`.

**Fix:** `JSON.stringify(data).replace(/</g, "\\u003c")` (Next.js recommended).

### M3 — Google Maps iframes have no `sandbox`

**Where:** `src/app/page.tsx` ~443–450; `src/app/iletisim/page.tsx` ~30–37. `src={siteConfig.mapEmbedUrl}` (`https://www.google.com/maps?...&output=embed`). `allowFullScreen` is set; `sandbox` is not.

**Why:** Third-party frame can run Google’s scripts. Without a CSP `frame-src` allowlist (H1) and without `sandbox`, the embed is unconstrained. Maps embeds typically need `allow-scripts allow-same-origin allow-popups`.

**Fix:** Add CSP `frame-src` (H1). Optionally `sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"` and verify the embed still works.

---

## LOW

### L1 — Contact form has no length limits

**Where:** `src/components/ContactForm.tsx` lines 11–20. Name/phone/message are concatenated, then `encodeURIComponent` in `whatsappLink()` (`src/lib/site.ts` 70–76), then `window.open(..., "noopener,noreferrer")`.

**Why:** Encoding prevents XSS in the `wa.me` URL. A huge message can still produce an oversized URL. No server to inject into.

**Fix:** `maxLength` on inputs (e.g. name 80, phone 20, message 500).

### L2 — Platform fingerprint headers

**Where:** Live `Server: Vercel`, `X-Vercel-Id`, `X-Matched-Path`, `X-Nextjs-Prerender`. No `X-Powered-By` observed.

**Why:** Reveals host/framework. Not exploitable by itself.

**Fix:** Optional; `poweredByHeader: false` already appears effective. Stripping Vercel IDs is not worth the ops cost.

---

## What looks sound

- HTTPS + HSTS + HTTP→HTTPS 308 + apex→www 308.
- External links use `rel="noopener noreferrer"`.
- WhatsApp body is `encodeURIComponent`’d.
- No `eval`, no `innerHTML` of user input, no API surface.
- `target="_blank"` consistently paired with noopener.
- `.gitignore` ignores `.env*`.
- TypeScript `strict: true`.
