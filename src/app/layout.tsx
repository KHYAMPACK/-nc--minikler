import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localBusinessJsonLd, pageMeta } from "@/lib/seo";
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
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Şahika Öncü Minikler logosu",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: ["/logo.png"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="page-shell flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
