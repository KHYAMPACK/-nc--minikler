import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { faqs } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
          SSS
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Sıkça sorulan sorular
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Saatler, yaş grupları, program seçenekleri ve beslenme hakkında en çok
          sorulanlar.
        </p>

        <div className="mt-12 max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line pb-4 open:pb-5"
            >
              <summary className="cursor-pointer list-none font-display text-xl text-ink marker:content-none [&::-webkit-details-marker]:hidden">
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
      <CtaBanner
        title="Sorunuz listede yok mu?"
        subtitle="WhatsApp veya telefon ile yazın; size özel yanıtlayalım."
      />
    </>
  );
}
