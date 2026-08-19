import Image from "next/image";
import { teamContinuity } from "@/lib/content";
import { homePhotos } from "@/lib/gallery";

const pillarStyles = {
  green: {
    bg: "bg-[#4CAF50]/18",
    title: "text-[#2e7d32]",
    disc: "bg-[#4CAF50]",
  },
  coral: {
    bg: "bg-[#FF7043]/18",
    title: "text-[#bf360c]",
    disc: "bg-[#FF7043]",
  },
  berry: {
    bg: "bg-[#9C27B0]/12",
    title: "text-[#6a1b9a]",
    disc: "bg-[#9C27B0]",
  },
} as const;

const cluster = [
  { size: "h-16 w-16 sm:h-20 sm:w-20", color: "bg-[#4CAF50]", z: "z-[1]", offset: "ml-0", ink: false },
  { size: "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24", color: "bg-[#8BC34A]", z: "z-[2]", offset: "-ml-4 sm:-ml-5", ink: false },
  { size: "h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]", color: "bg-[#FFF59D]", z: "z-[3]", offset: "-ml-4 sm:-ml-5", ink: true },
  { size: "h-[4.25rem] w-[4.25rem] sm:h-[5.25rem] sm:w-[5.25rem]", color: "bg-[#FF7043]", z: "z-[4]", offset: "-ml-4 sm:-ml-6", ink: false },
  { size: "h-12 w-12 sm:h-16 sm:w-16", color: "bg-[#FF9800]", z: "z-[3]", offset: "-ml-3 sm:-ml-4", ink: false },
  { size: "h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]", color: "bg-[#9C27B0]", z: "z-[2]", offset: "-ml-4 sm:-ml-5", ink: false },
] as const;

function PersonGlyph({ ink }: { ink?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-[55%] w-[55%] ${ink ? "text-ink/70" : "text-white"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="20" cy="14" r="7.5" />
      <path d="M8 34c1.4-7.2 6.2-11 12-11s10.6 3.8 12 11H8z" />
    </svg>
  );
}

export function TeamContinuity() {
  return (
    <section id="ekip" className="scroll-mt-24" aria-labelledby="ekip-baslik">
      <div className="grid w-full lg:grid-cols-2">
        <div
          className="order-2 flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-14 lg:order-1 lg:px-12 xl:px-16"
          style={{
            background:
              "linear-gradient(125deg, rgba(183,228,199,0.7) 0%, rgba(255,245,157,0.55) 48%, rgba(255,112,67,0.22) 100%)",
          }}
        >
          <p className="text-sm font-semibold tracking-wide text-[#2e7d32]">
            Deneyimli ekip
          </p>
          <h2
            id="ekip-baslik"
            className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Güçlü Bir Eğitim,{" "}
            <span className="text-[#bf360c]">Güçlü Bir Ekip</span> ile Başlar
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            {teamContinuity.body}
          </p>

          <div
            className="mt-8 flex items-end"
            aria-hidden="true"
          >
            {cluster.map((person, i) => (
              <span
                key={i}
                className={`relative inline-flex shrink-0 items-end justify-center overflow-hidden rounded-full ring-2 ring-white/80 ${person.size} ${person.color} ${person.z} ${person.offset}`}
              >
                <PersonGlyph ink={person.ink} />
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm font-medium text-ink/60">
            Uzun yıllardır aynı çatı altında.
          </p>
        </div>

        <div className="relative order-1 min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:order-2 lg:min-h-[26rem]">
          <Image
            src={homePhotos.team.src}
            alt={homePhotos.team.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(200deg, #4CAF50 0%, transparent 48%, #9C27B0 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="grid w-full sm:grid-cols-3">
        {teamContinuity.pillars.map((item) => {
          const style = pillarStyles[item.accent];
          return (
            <article
              key={item.title}
              className={`${style.bg} px-4 py-8 sm:px-6 sm:py-10`}
            >
              <span
                className={`mb-3 block h-3 w-3 rounded-full ${style.disc}`}
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
