import type { Metadata } from "next";
import { VisitStrip } from "@/components/VisitStrip";
import { faqs } from "@/lib/content";
import { pageMeta, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pageMeta.sss.title },
  description: pageMeta.sss.description,
  alternates: { canonical: "/sss" },
  openGraph: {
    title: pageMeta.sss.title,
    description: pageMeta.sss.description,
    url: "/sss",
  },
};

export default function SssPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
      <section className="mx-auto max-w-3xl px-4 pb-8 pt-28 sm:px-6 lg:pt-32">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Sıkça Sorulan Sorular
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Saatler, yaş grupları, program seçenekleri ve beslenme hakkında en çok
          sorulanlar.
        </p>

        <div className="mt-12 space-y-1">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line py-4 open:pb-5"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink marker:content-none sm:text-xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="mt-1 text-leaf transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <VisitStrip
        title="Sorunuz Listede Yok Mu?"
        subtitle="WhatsApp veya telefon ile yazın; size özel yanıtlayalım."
      />
    </>
  );
}
