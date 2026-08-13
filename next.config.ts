import type { NextConfig } from "next";
import path from "path";

const htmlRedirects = [
  "iletisim",
  "hakkimizda",
  "programlar",
  "beslenme",
  "galeri",
  "sss",
  "gizlilik",
  "index",
] as const;

const isDev = process.env.NODE_ENV !== "production";

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
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://maps.gstatic.com https://maps.googleapis.com https://*.google.com",
      "font-src 'self'",
      "frame-src https://www.google.com https://maps.google.com",
      `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      ...htmlRedirects.map((slug) => ({
        source: `/${slug}.html`,
        destination: slug === "index" ? "/" : `/${slug}`,
        permanent: true,
      })),
      {
        source: "/iletisim.htm",
        destination: "/iletisim",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
