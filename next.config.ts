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

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingRoot: path.join(__dirname),
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
