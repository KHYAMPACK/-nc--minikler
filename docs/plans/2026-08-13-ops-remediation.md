# Ops remediation — 13 Aug 2026

## MEDIUM

### M1 Sentry

Skip in code unless the user provides a DSN. Keep `error.tsx` from quality work.

### M2 README deploy / rollback

Append to README.md:

```markdown
## Yayın (Vercel)

- Production: main (veya bağlı branch) → sahikaoncuminikler.com
- Preview: her PR bir Vercel Preview URL alır — prod’a basmadan kontrol edin
- Rollback: Vercel → Project → Deployments → önceki successful deploy → Promote / Instant Rollback (< 5 dk)

Canlı kanonik adres: https://www.sahikaoncuminikler.com
```

## LOW

L1 uptime: `manual — user action required`.
L2 no custom health route.
