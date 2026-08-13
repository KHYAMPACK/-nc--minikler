import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localBusinessJsonLd, pageMeta, serializeJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/* Quicksand: rounded, multi-weight, solid Turkish (ş/ö/ü/ı/ğ/İ) */
const display = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

/* Source Sans 3: highly readable body with full Turkish support */
const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageMeta.home.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: pageMeta.home.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageMeta.home.title,
    description: pageMeta.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="tr">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <div className="page-shell relative flex min-h-screen flex-col">
          <a href="#icerik" className="skip-link">
            İçeriğe geç
          </a>
          <Header />
          <main id="icerik" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
