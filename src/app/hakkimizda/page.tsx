import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
          Hakkımızda
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          {siteConfig.legalName}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
          {aboutLead}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {aboutBody}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <article className="border-l-[3px] border-leaf pl-6">
            <h2 className="font-display text-2xl text-ink">Yaklaşımımız</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Çocuk merkezli bir bakışla hayal gücünü, cesareti ve kendini ifade
              etmeyi destekliyoruz. “{siteConfig.tagline}” anlayışıyla her
              çocuğun temposuna saygı duyuyoruz.
            </p>
          </article>
          <article className="border-l-[3px] border-coral pl-6">
            <h2 className="font-display text-2xl text-ink">Güven & ilgi</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Grup başına en fazla 15 çocuk ve iki çocuk gelişimi uzmanı ile
              dikkatli, sıcak ve öngörülebilir bir ortam sunuyoruz.
            </p>
          </article>
        </div>

        <div className="mt-16 max-w-3xl border-t-[3px] border-sun pt-8">
          <h2 className="font-display text-2xl text-leaf-dark">
            Denizli&apos;de butik bir adres
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Merkezefendi Yenişehir&apos;deki kreşimiz; doğal beslenme, sosyal
            uyum ve gelişim odaklı etkinlikleri aynı çatı altında birleştirir.
            Ailelerle şeffaf iletişim kurmayı önemseriz.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Kurumumuzu yakından tanıyın"
        subtitle="Ziyaret veya WhatsApp üzerinden sorularınızı iletebilirsiniz."
      />
    </>
  );
}
