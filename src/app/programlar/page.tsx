import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { ageGroups, focusAreas, programs } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.programlar.title },
  description: pageMeta.programlar.description,
  alternates: { canonical: "/programlar" },
  openGraph: {
    title: pageMeta.programlar.title,
    description: pageMeta.programlar.description,
    url: "/programlar",
  },
};

export default function ProgramlarPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
          Programlar
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Yaş grupları ve program seçenekleri
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Denizli / Merkezefendi&apos;de 0–6 yaş için butik kreş programları.
          Küçük gruplar, iki uzman ve esnek gün seçenekleri.
        </p>

        <div className="mt-14">
          <h2 className="font-display text-2xl text-ink">Yaş grupları</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {ageGroups.map((group) => (
              <article
                key={group.title}
                className="border-t-[3px] border-leaf pt-5"
              >
                <h3 className="font-display text-2xl text-leaf-dark">
                  {group.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{group.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-ink">Program seçenekleri</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Tam gün {siteConfig.hours.fullDay}. Standart başlangıç{" "}
            {siteConfig.hours.standardStart}; yarım gün{" "}
            {siteConfig.hours.halfDayEnd} veya tercihe göre{" "}
            {siteConfig.hours.fullDayEnd}.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="border-t-[3px] border-coral pt-5"
              >
                <h3 className="font-display text-2xl text-ink">
                  {program.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{program.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl text-ink">
            Gelişim odaklarımız
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted before:mt-2 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-sun before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Organik öğünler ve yemek zamanı kültürü için{" "}
            <Link href="/beslenme" className="font-semibold text-leaf hover:underline">
              beslenme sayfamıza
            </Link>{" "}
            bakabilirsiniz.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Program hakkında bilgi alın"
        subtitle="Çocuğunuzun yaşına uygun grup ve gün planını birlikte oluşturalım."
      />
    </>
  );
}
