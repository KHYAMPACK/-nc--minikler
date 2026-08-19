import Image from "next/image";
import Link from "next/link";
import { BrandName, Logo } from "@/components/Logo";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#1e3a2a] text-[#e8f6ee]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-35"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, #8BC34A 0 0.55rem, transparent 0.65rem), radial-gradient(circle at 28% 30%, #F0C24B 0 0.4rem, transparent 0.5rem), radial-gradient(circle at 78% 8%, #E76F51 0 0.5rem, transparent 0.6rem), radial-gradient(circle at 92% 35%, #9B5DE5 0 0.35rem, transparent 0.45rem)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Logo size={56} className="shrink-0 rounded-full" />
              <div>
                <BrandName
                  size="md"
                  className="text-white [&_span:last-child]:text-[#b7d4c2]"
                />
                <p className="mt-1.5 text-sm text-[#b7d4c2]">
                  {siteConfig.hours.display}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#b7d4c2]">
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white hover:underline"
              >
                {siteConfig.address.full}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex rounded-xl border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ara: {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Yol tarifi
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8f6ee]/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gizlilik"
                  className="text-sm text-[#e8f6ee]/85 transition hover:text-white"
                >
                  Gizlilik / KVKK
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[#b7d4c2]">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
              <span className="mx-2 opacity-40">·</span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {siteConfig.instagramHandle}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#b7d4c2]/90 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <a
            href="https://ekizyazilim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 opacity-90 transition hover:opacity-100"
            aria-label="Powered by Ekiz Yazılım — ekizyazilim.com"
          >
            <span className="text-sm text-[#b7d4c2]">Powered by</span>
            <Image
              src="/ekiz-yazilim-watermark.png"
              alt="ekiz YAZILIM"
              width={280}
              height={72}
              className="h-11 w-auto mix-blend-screen sm:h-14"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
