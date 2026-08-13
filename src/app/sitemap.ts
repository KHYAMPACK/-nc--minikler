import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/site";

const CONTENT_DATE = new Date("2026-08-13");

const routes = [
  "",
  ...navLinks.filter((l) => l.href !== "/").map((l) => l.href),
  "/gizlilik",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: CONTENT_DATE,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/gizlilik" ? 0.3 : 0.8,
  }));
}
