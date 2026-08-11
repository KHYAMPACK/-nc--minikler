import type { Metadata } from "next";
import { BrandName } from "@/components/Logo";
import { VisitStrip } from "@/components/VisitStrip";
import { pageMeta } from "@/lib/seo";
import { aboutBody, aboutLead, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.hakkimizda.title },
  description: pageMeta.hakkimizda.description,
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: pageMeta.hakkimizda.title,
    description: pageMeta.hakkimizda.description,
    url: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-28 sm:px-6 lg:pt-32">
        <BrandName as="h1" size="lg" className="text-ink" />
        <p className="mt-6 text-xl leading-relaxed text-muted">{aboutLead}</p>
        <p className="mt-4 text-lg leading-relaxed text-muted">{aboutBody}</p>
      </section>

      <section className="bg-sky/50">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <article className="border-b border-line/60 px-4 py-12 sm:px-6 md:border-b-0 md:border-r md:px-10 md:py-16">
            <h2 className="font-display text-2xl font-semibold text-leaf-dark">
              Yaklaşımımız
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Çocuk merkezli bir bakışla hayal gücünü, cesareti ve kendini ifade
              etmeyi destekliyoruz. “{siteConfig.tagline}” anlayışıyla her
              çocuğun temposuna saygı duyuyoruz.
            </p>
          </article>
          <article className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
            <h2 className="font-display text-2xl font-semibold text-coral-dark">
              Güven & İlgi
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Grup başına en fazla 15 çocuk ve iki çocuk gelişimi uzmanı ile
              dikkatli, sıcak ve öngörülebilir bir ortam sunuyoruz.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Denizli&apos;de Butik Bir Adres
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Merkezefendi Yenişehir&apos;deki kreşimiz; doğal beslenme, sosyal uyum
          ve gelişim odaklı etkinlikleri aynı çatı altında birleştirir.
          Ailelerle şeffaf iletişim kurmayı önemseriz.
        </p>
      </section>

      <VisitStrip
        title="Kurumumuzu Yakından Tanıyın"
        subtitle="Ziyaret veya WhatsApp üzerinden sorularınızı iletebilirsiniz."
      />
    </>
  );
}
