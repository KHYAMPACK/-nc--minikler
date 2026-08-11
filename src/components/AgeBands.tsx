import Link from "next/link";
import Image from "next/image";
import { ageGroups } from "@/lib/content";
import { homePhotos } from "@/lib/gallery";

const bandStyles = {
  leaf: "bg-[#8BC34A]/35 border-[#4CAF50]/40",
  sun: "bg-[#FFF59D]/70 border-[#FF9800]/35",
  coral: "bg-[#FF7043]/22 border-[#FF7043]/40",
} as const;

const titleStyles = {
  leaf: "text-[#2e7d32]",
  sun: "text-[#e65100]",
  coral: "text-[#bf360c]",
} as const;

type Props = {
  showProgramLink?: boolean;
};

export function AgeBands({ showProgramLink = true }: Props) {
  return (
    <section id="yas" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Yaş Grupları
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Küçük gruplar, iki uzman — her yaşa kendi temposu.
        </p>
      </div>

      <div className="mt-8 space-y-0">
        {ageGroups.map((group, i) => {
          const photo = homePhotos.age[i];
          const isLast = i === ageGroups.length - 1;
          return (
            <article
              key={group.title}
              className={`age-band border-t ${isLast ? "border-b-0" : "border-b"} ${bandStyles[group.accent]}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto grid max-w-6xl items-center gap-4 px-4 py-5 sm:grid-cols-[1fr_9rem] sm:gap-8 sm:px-6 sm:py-6 lg:grid-cols-[1fr_12rem]">
                <div>
                  <h3
                    className={`font-display text-2xl font-semibold sm:text-3xl ${titleStyles[group.accent]}`}
                  >
                    {group.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
                    {group.text}
                  </p>
                  {showProgramLink && (
                    <Link
                      href="/programlar"
                      className="mt-3 inline-flex text-sm font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      Program detayı →
                    </Link>
                  )}
                </div>
                {photo && (
                  <div className="relative aspect-square w-full overflow-hidden sm:justify-self-end">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 12rem"
                    />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
