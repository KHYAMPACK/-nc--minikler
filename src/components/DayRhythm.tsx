import { dayRhythm } from "@/lib/content";

const stepColors = [
  "bg-[#4CAF50]",
  "bg-[#8BC34A]",
  "bg-[#FF9800]",
  "bg-[#FF7043]",
  "bg-[#9C27B0]",
  "bg-[#4CAF50]",
] as const;

const timeColors = [
  "text-[#2e7d32]",
  "text-[#558b2f]",
  "text-[#ef6c00]",
  "text-[#d84315]",
  "text-[#6a1b9a]",
  "text-[#2e7d32]",
] as const;

export function DayRhythm() {
  return (
    <section
      id="rutin"
      className="scroll-mt-24 bg-gradient-to-b from-[#B7E4C7]/50 via-[#FFF59D]/35 to-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Bir Günün Ritmi
        </h2>

        <ol className="mt-8 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:gap-0 md:overflow-visible md:pb-0">
          {dayRhythm.map((item, i) => (
            <li
              key={item.time}
              className="relative min-w-[9.5rem] shrink-0 md:min-w-0 md:px-2"
            >
              {i < dayRhythm.length - 1 && (
                <span
                  className="absolute left-[calc(50%+1.25rem)] top-4 hidden h-0.5 w-[calc(100%-1rem)] bg-[#8BC34A]/50 md:block"
                  aria-hidden="true"
                />
              )}
              <div
                className={`relative z-[1] flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${stepColors[i]}`}
              >
                {i + 1}
              </div>
              <p
                className={`mt-4 font-display text-xl font-semibold ${timeColors[i]}`}
              >
                {item.time}
              </p>
              <p className="mt-1 font-medium text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
