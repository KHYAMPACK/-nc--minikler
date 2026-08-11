import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export function VisitStrip({
  title = "Kurumu Ziyaret Edin",
  subtitle = "Merkezefendi’deki kreşimizi görün; WhatsApp’tan yazın, birlikte uygun bir saat ayarlayalım.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-y border-line/70 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">{subtitle}</p>
          <p className="mt-4 text-sm text-muted">{siteConfig.address.full}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappLink(
              "Merhaba, kreşi ziyaret etmek istiyorum. Uygun saatleri öğrenebilir miyim?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            Ziyaret için yazın
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center justify-center rounded-2xl border border-coral/40 bg-coral/5 px-5 py-3.5 text-sm font-semibold text-coral transition hover:bg-coral hover:text-white"
          >
            Ara: {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-leaf hover:bg-leaf-soft/50"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
