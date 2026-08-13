import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.iletisim.title },
  description: pageMeta.iletisim.description,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: pageMeta.iletisim.title,
    description: pageMeta.iletisim.description,
    url: "/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Bize Ulaşın
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Haritadan yol tarifi alın, arayın veya WhatsApp’tan yazın.
          </p>
        </div>
        <div className="w-full border-y border-line bg-white">
          <iframe
            title="Şahika Öncü Minikler Kreş konum haritası"
            src={siteConfig.mapEmbedUrl}
            className="h-[42vh] min-h-[280px] w-full border-0 sm:h-[50vh]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-leaf-dark">
                Adres
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {siteConfig.address.full}
              </p>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-leaf hover:underline"
              >
                Google Haritalar&apos;da aç →
              </a>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-leaf-dark">
                Telefon & WhatsApp
              </h2>
              <ul className="mt-3 space-y-2">
                {siteConfig.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="font-semibold text-coral hover:underline"
                    >
                      {phone.label}: {phone.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-whatsapp hover:underline"
                  >
                    WhatsApp ile yazın
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-leaf-dark">
                E-Posta & Saatler
              </h2>
              <p className="mt-3 text-muted">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-leaf"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2 text-muted">{siteConfig.hours.display}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white/90 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Mesaj Bırakın
            </h2>
            <p className="mt-2 text-sm text-muted">
              Form gönderildiğinde WhatsApp sohbeti açılır; mesajınız hazır gelir.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
