import Image from "next/image";
import { montessoriLead, montessoriPrinciples } from "@/lib/content";
import { homePhotos } from "@/lib/gallery";

const montessoriStyles = {
  green: { bg: "bg-[#4CAF50]/18", title: "text-[#2e7d32]", dot: "bg-[#4CAF50]" },
  yellow: { bg: "bg-[#FFF59D]/75", title: "text-[#e65100]", dot: "bg-[#FF9800]" },
  coral: { bg: "bg-[#FF7043]/18", title: "text-[#bf360c]", dot: "bg-[#FF7043]" },
  berry: { bg: "bg-[#9C27B0]/12", title: "text-[#6a1b9a]", dot: "bg-[#9C27B0]" },
} as const;

type Props = {
  /** Use h1 on dedicated program page intro context */
  headingLevel?: "h1" | "h2";
};

export function MontessoriSection({ headingLevel = "h2" }: Props) {
  const Heading = headingLevel;

  return (
    <section id="montessori" className="scroll-mt-24">
      <div className="grid w-full lg:grid-cols-2">
        <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[26rem]">
          <Image
            src={homePhotos.montessori.src}
            alt={homePhotos.montessori.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background:
                "linear-gradient(160deg, #4CAF50 0%, transparent 50%, #9C27B0 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div
          className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-14 lg:px-12 xl:px-16"
          style={{
            background:
              "linear-gradient(115deg, rgba(183,228,199,0.75) 0%, rgba(255,245,157,0.65) 55%, rgba(255,112,67,0.28) 100%)",
          }}
        >
          <Heading className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Montessori İle Keşfederek Öğrenmek
          </Heading>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            {montessoriLead}
          </p>
        </div>
      </div>

      <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4">
        {montessoriPrinciples.map((item) => {
          const style = montessoriStyles[item.color];
          return (
            <article
              key={item.title}
              className={`${style.bg} px-4 py-8 sm:px-6 sm:py-10`}
            >
              <span
                className={`mb-3 block h-3 w-3 rounded-full ${style.dot}`}
                aria-hidden="true"
              />
              <h3
                className={`font-display text-lg font-semibold sm:text-xl ${style.title}`}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-[0.95rem]">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
