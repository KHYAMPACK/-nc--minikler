type LogoProps = {
  className?: string;
  /** Pixel width/height of the circular mark */
  size?: number;
  title?: string;
};

type BrandNameProps = {
  className?: string;
  /** Visual scale — hero makes Şahika the dominant brand signal */
  size?: "sm" | "md" | "lg" | "hero";
  /** Render as heading when true (hero / about) */
  as?: "h1" | "p" | "span";
};

const brandNameSizes = {
  sm: {
    first: "text-base font-bold leading-none sm:text-lg",
    second: "mt-0.5 text-[0.65rem] font-semibold tracking-wide text-muted sm:text-xs",
  },
  md: {
    first: "text-xl font-bold leading-none sm:text-2xl",
    second: "mt-1 text-xs font-semibold tracking-wide text-muted sm:text-sm",
  },
  lg: {
    first: "text-3xl font-bold leading-none sm:text-4xl",
    second: "mt-1.5 text-sm font-semibold tracking-wide text-ink/75 sm:text-base",
  },
  hero: {
    first:
      "text-[2.75rem] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl",
    second:
      "mt-2 text-lg font-semibold tracking-wide text-ink/80 sm:mt-3 sm:text-2xl lg:text-3xl",
  },
} as const;

/**
 * Wordmark with Şahika as the lead name (Şahika Hoca brand).
 */
export function BrandName({
  className = "",
  size = "md",
  as: Tag = "p",
}: BrandNameProps) {
  const s = brandNameSizes[size];
  return (
    <Tag className={`font-display ${className}`}>
      <span className={`block ${s.first}`}>Şahika</span>
      <span className={`block ${s.second}`}>Öncü Minikler</span>
    </Tag>
  );
}

/**
 * Brand mark: overlapping color bubbles + wordmark.
 * Built as SVG so it scales cleanly (no photo crop).
 */
export function Logo({
  className = "",
  size = 160,
  title = "Şahika Öncü Minikler",
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <circle cx="100" cy="100" r="100" fill="#ffffff" />

      {/* Bubbles — left → right, matching brand palette */}
      <circle cx="48" cy="102" r="34" fill="#4CAF50" />
      <circle cx="78" cy="98" r="36" fill="#8BC34A" />
      <circle cx="98" cy="118" r="18" fill="#B7E4C7" />
      <circle cx="108" cy="78" r="28" fill="#FFF59D" />
      <circle cx="138" cy="88" r="34" fill="#FF7043" />
      <circle cx="148" cy="118" r="24" fill="#FF9800" />
      <circle cx="172" cy="108" r="20" fill="#9C27B0" />

      {/* Wordmark — Quicksand via CSS var for correct Turkish glyphs */}
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fill="#1a1a1a"
        textLength="158"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily:
            "var(--font-quicksand), Quicksand, 'Segoe UI', system-ui, sans-serif",
          fontSize: "13.5px",
          fontWeight: 700,
        }}
      >
        ŞAHİKA ÖNCÜ MİNİKLER
      </text>
      <text
        x="182"
        y="92"
        textAnchor="middle"
        fill="#1a1a1a"
        style={{
          fontFamily:
            "var(--font-quicksand), Quicksand, 'Segoe UI', system-ui, sans-serif",
          fontSize: "7px",
          fontWeight: 600,
        }}
      >
        ®
      </text>
    </svg>
  );
}

/** Compact mark for tiny spots — bubbles only */
export function LogoMark({
  className = "",
  size = 40,
  title = "Şahika Öncü Minikler",
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 40"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <circle cx="12" cy="20" r="11" fill="#4CAF50" />
      <circle cx="24" cy="18" r="12" fill="#8BC34A" />
      <circle cx="34" cy="14" r="9" fill="#FFF59D" />
      <circle cx="46" cy="16" r="11" fill="#FF7043" />
      <circle cx="54" cy="24" r="8" fill="#FF9800" />
      <circle cx="66" cy="20" r="7" fill="#9C27B0" />
    </svg>
  );
}
