import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#1e3a2a] text-[#e8f6ee]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, #8BC34A 0 0.6rem, transparent 0.7rem), radial-gradient(circle at 28% 20%, #F0C24B 0 0.45rem, transparent 0.55rem), radial-gradient(circle at 72% 10%, #E76F51 0 0.55rem, transparent 0.65rem), radial-gradient(circle at 88% 25%, #9B5DE5 0 0.4rem, transparent 0.5rem)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-cover"
            />
            <p className="font-display text-xl font-semibold text-white">
              {siteConfig.legalName}
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#b7d4c2]">
            Denizli Merkezefendi&apos;de butik kreş. Çocuk merkezli eğitim,
            organik beslenme ve güvenli küçük gruplar.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8BC34A]">
            Sayfalar
          </p>
          <ul className="mt-4 space-y-2">
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
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8BC34A]">
            İletişim
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-[#e8f6ee]/85">
            <p>{siteConfig.address.full}</p>
            <p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-white hover:text-white/80"
              >
                Ara: {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-whatsapp hover:brightness-110"
              >
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[#b7d4c2]/90 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <a
            href="https://ekizyazilim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition opacity-90 hover:opacity-100"
          >
            Powered by Ekiz Yazılım
          </a>
        </div>
      </div>
    </footer>
  );
}
