# Quality remediation — 13 Aug 2026

Critical first. No CRITICAL findings.

---

## HIGH

### H1 — FAQ age band

In `src/lib/content.ts`, change the FAQ answer to **18–27 ay** to match `ageGroups` and `/programlar`, unless the client confirms they accept 16 months.

```ts
a: "Programlarımız özellikle 18–27 ay, 28–36 ay ve 36–48 ay gruplarına göre yapılandırılır.",
```

One string; homepage, `/sss`, and FAQ JSON-LD all consume `faqs`.

### H2 — Lint script red

In `eslint.config.mjs` `ignores`, add `"scripts/**"`.

Or delete `scripts/fix-one-gallery-path.js` (SnapInsta leftover) and keep ignore anyway so one-off Node scripts do not fail `npm run lint`.

Confirm: `npm run lint` exits 0.

---

## MEDIUM

### M1 / M2 — Tests + CI (optional for this brochure site)

Minimum GitHub Action:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build
```

Smoke test later: Playwright hit `/`, `/iletisim`, `/galeri`.

`manual — user action required` if the GitHub repo is not connected in this environment.

### M4 — Sitemap from nav

```ts
import { navLinks } from "@/lib/site";

const routes = ["", ...navLinks.filter((l) => l.href !== "/").map((l) => l.href), "/gizlilik"];
```

### M6 — Phone field always visible

Remove `hidden sm:block` from the phone wrapper in `ContactForm.tsx`.

### M5 — Branded 404

Add `src/app/not-found.tsx` with logo, short message, link home + WhatsApp.

### M3 — Split homepage

Do after launch unless you are already in that file.

---

## LOW

- L1: drop `lastModified` or set a constant content date.
- L2: `"typecheck": "tsc --noEmit"` in `package.json`.
- L3: delete `scripts/fix-one-gallery-path.js`.

---

## Suggested order if fixing now

1. H1 FAQ 18–27  
2. H2 eslint ignore `scripts/**`  
3. M6 phone field  
4. L3 delete SnapInsta script  
5. L2 typecheck script  
6. M4 sitemap from navLinks  
7. CI / 404 when you want
