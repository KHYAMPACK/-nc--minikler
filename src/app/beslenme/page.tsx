import type { Metadata } from "next";
import { VisitStrip } from "@/components/VisitStrip";
import { nutritionPoints } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pageMeta.beslenme.title },
  description: pageMeta.beslenme.description,
  alternates: { canonical: "/beslenme" },
  openGraph: {
    title: pageMeta.beslenme.title,
    description: pageMeta.beslenme.description,
    url: "/beslenme",
  },
};

export default function BeslenmePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-28 sm:px-6 lg:pt-32">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Organik Ve Doğal Beslenme
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Şahika Öncü Minikler&apos;de işlenmiş gıda kullanmıyoruz. Miniklerin
          sofrası; doğal, organik ve mümkün olduğunca kendi üretimimizle
          hazırlanır.
        </p>
      </section>

      <section className="border-y border-line">
        {nutritionPoints.map((item, i) => (
          <article
            key={item.title}
            className={`mx-auto grid max-w-6xl gap-2 px-4 py-10 sm:grid-cols-[12rem_1fr] sm:gap-10 sm:px-6 sm:py-12 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <h2 className="font-display text-xl font-semibold text-leaf-dark sm:text-2xl">
              {item.title}
            </h2>
            <p className="leading-relaxed text-muted sm:text-lg">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-sun-soft/70">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Sofrada Da Öğrenme Var
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Yemek zamanı yalnızca doymak değil; masa alışkanlığı, paylaşma ve
            birlikte yaşam becerilerinin de parçası. Tam gün ve yarım gün
            programlarında öğün düzeni çocuğunuzun saatine göre planlanır.
          </p>
        </div>
      </section>

      <VisitStrip
        title="Menü Ve Program Detayı İçin Yazın"
        subtitle="Beslenme yaklaşımımız ve günlük rutin hakkında sorularınızı yanıtlayalım."
      />
    </>
  );
}
