import type { Metadata } from "next";
import { AgeBands } from "@/components/AgeBands";
import { BranchTeachers } from "@/components/BranchTeachers";
import { MontessoriSection } from "@/components/MontessoriSection";
import { VisitStrip } from "@/components/VisitStrip";
import { focusAreas, programs } from "@/lib/content";
import { homePhotos } from "@/lib/gallery";
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

const programAccents = [
  { title: "text-[#2e7d32]", bar: "bg-[#4CAF50]" },
  { title: "text-[#ef6c00]", bar: "bg-[#FF9800]" },
  { title: "text-[#6a1b9a]", bar: "bg-[#9C27B0]" },
] as const;

const focusDots = [
  "bg-[#4CAF50]",
  "bg-[#8BC34A]",
  "bg-[#FFF59D]",
  "bg-[#FF7043]",
  "bg-[#FF9800]",
  "bg-[#9C27B0]",
] as const;

export default function ProgramlarPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 lg:pt-32">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Programlar Ve Yaş Grupları
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          Denizli / Merkezefendi&apos;de 0–6 yaş için butik kreş programları.
          Küçük gruplar, iki uzman, Montessori ilhamı ve branş öğretmenleriyle
          zengin bir gün.
        </p>
      </section>

      <AgeBands showProgramLink={false} />

      <MontessoriSection />

      <BranchTeachers
        photoSrc={homePhotos.programs.src}
        photoAlt={homePhotos.programs.alt}
      />

      <section className="bg-[#B7E4C7]/35">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Program Seçenekleri
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Tam gün {siteConfig.hours.fullDay}. Standart başlangıç{" "}
            {siteConfig.hours.standardStart}; yarım gün{" "}
            {siteConfig.hours.halfDayEnd} veya tercihe göre{" "}
            {siteConfig.hours.fullDayEnd}.
          </p>

          <ul className="mt-10 space-y-0">
            {programs.map((program, i) => {
              const accent = programAccents[i] ?? programAccents[0];
              return (
                <li
                  key={program.title}
                  className="flex gap-4 border-b border-[#8BC34A]/35 py-6 first:border-t"
                >
                  <span
                    className={`mt-1.5 h-10 w-1.5 shrink-0 rounded-full ${accent.bar}`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className={`font-display text-xl font-semibold ${accent.title}`}
                    >
                      {program.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted">
                      {program.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Gelişim Odaklarımız
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-muted"
                >
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${focusDots[i] ?? focusDots[0]}`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <VisitStrip
        title="Program Hakkında Bilgi Alın"
        subtitle="Çocuğunuzun yaşına uygun grup, branş ve gün planını birlikte oluşturalım."
      />
    </>
  );
}
