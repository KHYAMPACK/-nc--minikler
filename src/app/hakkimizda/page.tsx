import type { Metadata } from "next";
import { TeamContinuity } from "@/components/TeamContinuity";
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
      <section
        className="relative overflow-hidden pt-24 sm:pt-28"
        aria-label="Slogan"
        style={{
          background:
            "linear-gradient(125deg, #8BC34A 0%, #FFF59D 42%, #FF7043 78%, #9C27B0 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute -left-8 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/25 sm:h-48 sm:w-48"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-6 top-4 h-24 w-24 rounded-full bg-[#4CAF50]/45 sm:h-32 sm:w-32"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-2 right-1/4 h-16 w-16 rounded-full bg-[#FFF59D]/70 sm:h-20 sm:w-20"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute left-1/3 top-3 h-10 w-10 rounded-full bg-[#9C27B0]/35"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Güveninizin
            <br />
            <span className="text-white drop-shadow-[0_2px_12px_rgba(30,58,42,0.25)]">
              Eseri
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-ink/80 sm:text-lg">
            Ailelerin güveniyle büyüyen butik bir kreş — her çocuk için yakın
            ilgi, sıcak bir ortam.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Öncüde Eğitim
        </h2>
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

      <TeamContinuity />

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
