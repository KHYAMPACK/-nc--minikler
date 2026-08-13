# Performance remediation — 13 Aug 2026

## M1 Hero slides

In `src/components/Hero.tsx`, only `priority` on `i === 0`. For inactive slides add:

```tsx
loading={i === 0 ? undefined : "lazy"}
```

`fill` + `priority` already handles LCP. Optionally skip rendering slides farther than 1 away from `active` to cut decoder work.

Do not add a heavy carousel library.

## M2 Lighthouse

`manual — user action required` after production deploy.
