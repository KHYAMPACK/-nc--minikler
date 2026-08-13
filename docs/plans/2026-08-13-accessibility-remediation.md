# Accessibility remediation — 13 Aug 2026

## HIGH — H1 Skip link

`src/app/layout.tsx`:

```tsx
<a href="#icerik" className="skip-link">
  İçeriğe geç
</a>
...
<main id="icerik" className="flex-1">{children}</main>
```

`globals.css`:

```css
.skip-link {
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 100;
  background: var(--color-ink);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
.skip-link:focus {
  top: 1rem;
}
```

## MEDIUM

### M1 Pause marquee

Button toggling a class that sets `animation-play-state: paused` on `.gallery-marquee-track`. Label: Durdur / Oynat.

### M2 `:focus-visible` in `globals.css` as above.
