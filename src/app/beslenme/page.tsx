import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
          Beslenme
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Organik ve doğal beslenme
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Şahika Öncü Minikler&apos;de işlenmiş gıda kullanmıyoruz. Miniklerin
          sofrası; doğal, organik ve mümkün olduğunca kendi üretimimizle
          hazırlanır.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {nutritionPoints.map((item) => (
            <article
              key={item.title}
              className="border-t-[3px] border-leaf pt-5"
            >
              <h2 className="font-display text-2xl text-leaf-dark">
                {item.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-3xl rounded-2xl bg-sun-soft/80 px-6 py-8 sm:px-8">
          <h2 className="font-display text-2xl text-ink">
            Sofrada da öğrenme var
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Yemek zamanı yalnızca doymak değil; masa alışkanlığı, paylaşma ve
            birlikte yaşam becerilerinin de parçası. Tam gün ve yarım gün
            programlarında öğün düzeni çocuğunuzun saatine göre planlanır.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Menü ve program detayı için yazın"
        subtitle="Beslenme yaklaşımımız ve günlük rutin hakkında sorularınızı yanıtlayalım."
      />
    </>
  );
}
