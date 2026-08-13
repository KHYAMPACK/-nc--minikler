# Security remediation — 13 Aug 2026

Critical first. No CRITICAL findings. Do HIGH before the next audit unless skipped.

---

## HIGH

### H1 — Security headers (`next.config.ts`)

Add `headers()` (and keep existing redirects). Deploy, then `curl.exe -sI https://www.sahikaoncuminikler.com` and confirm the new names are present.

```ts
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://maps.gstatic.com https://maps.googleapis.com https://*.google.com",
      "font-src 'self'",
      "frame-src https://www.google.com https://maps.google.com",
      "connect-src 'self'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me https://api.whatsapp.com",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];
```

`next/font` self-hosts Quicksand / Source Sans 3, so `font-src 'self'` is enough. JSON-LD inline scripts need `'unsafe-inline'` until a nonce is added. After deploy, load `/` and `/iletisim` and confirm the map iframe still renders.

Also set `poweredByHeader: false` explicitly.

### H2 — Dependency highs

1. From the project root: `npm audit fix` (**not** `--force`).
2. `npm run build` and smoke `/`, `/galeri`, `/iletisim`.
3. Do **not** take `npm audit fix --force` (it would install Next 16).
4. Residual `next` → `postcss@8.4.31` / `sharp` : wait for a Next **15.5.x** patch, then bump `next` + `eslint-config-next` together.

### H3 — Children's photos — `manual — user action required`

1. Ask the preschool: written parental consent to publish each child’s face on the website (and that Instagram was an allowed source)?
2. If no: remove those files from `public/galeri/` and `src/lib/gallery.ts` immediately.
3. If yes: rename `SnapInsta.to_*.jpg` to neutral names (`galeri-01.jpg`, …) and update `gallery.ts`.
4. Add a “Fotoğraflar” paragraph to `/gizlilik` (covered in the Compliance audit).

---

## MEDIUM

### M1 — `Access-Control-Allow-Origin: *` — `manual — user action required`

Not in this repo. In Vercel → Project → Settings → Headers (or a forgotten dashboard CORS setting), delete `Access-Control-Allow-Origin: *`. This site has no public API that needs CORS.

If you want a repo-level override, add to `next.config.ts` headers **only if** Vercel merges them; otherwise dashboard wins.

### M2 — JSON-LD escape

Shared helper, e.g. `src/lib/jsonld.ts`:

```ts
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
```

Use in `src/app/layout.tsx` and `src/app/sss/page.tsx`:

```tsx
dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
```

### M3 — Map iframe sandbox

On both iframes (`src/app/page.tsx`, `src/app/iletisim/page.tsx`):

```tsx
sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
```

Verify Google Maps still loads. Keep `title` and `loading="lazy"`.

---

## LOW

### L1 — Contact form limits

In `src/components/ContactForm.tsx`: `maxLength={80}` on name, `maxLength={20}` on phone, `maxLength={500}` on message.

### L2 — Vercel fingerprint

No action. Optional `poweredByHeader: false` in H1.

---

## Suggested order if fixing now

1. H1 headers (code + deploy)
2. H2 `npm audit fix` (no `--force`)
3. H3 client confirmation on photos (can proceed in parallel)
4. M2 JSON-LD helper
5. M3 iframe sandbox
6. M1 Vercel CORS (dashboard)
7. L1 maxlength
