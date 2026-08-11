import type { CSSProperties } from "react";

type LogoBuildProps = {
  className?: string;
  title?: string;
  /** When true, play the circle-by-circle intro */
  play?: boolean;
};

/** Same bubble layout as the brand mark — no white disc */
const bubbles = [
  { cx: 48, cy: 102, r: 34, fill: "#4CAF50" },
  { cx: 78, cy: 98, r: 36, fill: "#8BC34A" },
  { cx: 98, cy: 118, r: 18, fill: "#B7E4C7" },
  { cx: 108, cy: 78, r: 28, fill: "#FFF59D" },
  { cx: 138, cy: 88, r: 34, fill: "#FF7043" },
  { cx: 148, cy: 118, r: 24, fill: "#FF9800" },
  { cx: 172, cy: 108, r: 20, fill: "#9C27B0" },
] as const;

/**
 * Hero-only: oversized bubbles + wordmark on top (no disc).
 * Circles pop in first, then the name.
 */
export function LogoBuild({
  className = "",
  title = "Şahika Öncü Minikler",
  play = false,
}: LogoBuildProps) {
  return (
    <svg
      viewBox="8 48 188 100"
      role="img"
      aria-label={title}
      className={`logo-build h-auto w-full ${play ? "logo-build-play" : ""} ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      {bubbles.map((b, i) => (
        <g
          key={`${b.fill}-${i}`}
          className="logo-build-bubble"
          style={
            {
              ["--bubble-i"]: i,
              transformOrigin: `${b.cx}px ${b.cy}px`,
            } as CSSProperties
          }
        >
          <circle cx={b.cx} cy={b.cy} r={b.r} fill={b.fill} />
        </g>
      ))}

      <text
        className="logo-build-word"
        x="102"
        y="106"
        textAnchor="middle"
        fill="#1a1a1a"
        textLength="168"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily:
            "var(--font-quicksand), Quicksand, 'Segoe UI', system-ui, sans-serif",
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        ŞAHİKA ÖNCÜ MİNİKLER
      </text>
      <text
        className="logo-build-mark"
        x="184"
        y="94"
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
