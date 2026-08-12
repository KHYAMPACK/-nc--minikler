type ScheduleItem = {
  time: string;
  title: string;
  text: string;
};

type AgeProgram = {
  title: string;
  intro: readonly string[];
  scheduleTitle: string;
  schedule: readonly ScheduleItem[];
  closingTitle: string;
  closing: readonly string[];
};

const themes = {
  leaf: {
    introBg:
      "linear-gradient(105deg, rgba(139,195,74,0.28) 0%, rgba(255,245,157,0.55) 50%, rgba(183,228,199,0.45) 100%)",
    closingBg: "bg-[#B7E4C7]/50",
    closingTitle: "text-[#2e7d32]",
    border: "border-[#8BC34A]/25",
  },
  sun: {
    introBg:
      "linear-gradient(105deg, rgba(255,245,157,0.75) 0%, rgba(255,152,0,0.22) 55%, rgba(255,112,67,0.18) 100%)",
    closingBg: "bg-[#FFF59D]/55",
    closingTitle: "text-[#e65100]",
    border: "border-[#FF9800]/30",
  },
  coral: {
    introBg:
      "linear-gradient(105deg, rgba(255,112,67,0.22) 0%, rgba(255,245,157,0.5) 50%, rgba(156,39,176,0.12) 100%)",
    closingBg: "bg-[#FF7043]/15",
    closingTitle: "text-[#bf360c]",
    border: "border-[#FF7043]/25",
  },
} as const;

const timeColors = [
  "text-[#2e7d32]",
  "text-[#558b2f]",
  "text-[#ef6c00]",
  "text-[#d84315]",
  "text-[#6a1b9a]",
  "text-[#0277bd]",
] as const;

const barColors = [
  "bg-[#4CAF50]",
  "bg-[#8BC34A]",
  "bg-[#FF9800]",
  "bg-[#FF7043]",
  "bg-[#9C27B0]",
  "bg-[#29B6F6]",
] as const;

type Props = {
  id: string;
  program: AgeProgram;
  theme?: keyof typeof themes;
};

export function AgeProgramDetail({ id, program, theme = "leaf" }: Props) {
  const style = themes[theme];

  return (
    <section id={id} className="scroll-mt-24">
      <div
        className="w-full px-4 py-12 sm:px-6 sm:py-14"
        style={{ background: style.introBg }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {program.title}
          </h2>
          {program.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-4 text-lg leading-relaxed text-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
        <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {program.scheduleTitle}
        </h3>
        <ol className="mt-8 space-y-0">
          {program.schedule.map((item, i) => {
            const color = timeColors[i % timeColors.length];
            const bar = barColors[i % barColors.length];
            return (
              <li
                key={`${item.time}-${item.title}`}
                className={`flex gap-4 border-b py-5 first:border-t ${style.border}`}
              >
                <span
                  className={`mt-1.5 h-10 w-1.5 shrink-0 rounded-full ${bar}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={`font-display text-sm font-semibold ${color}`}>
                    {item.time}
                  </p>
                  <h4 className="mt-0.5 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h4>
                  {item.text ? (
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {item.text}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={`${style.closingBg} px-4 py-12 sm:px-6 sm:py-14`}>
        <div className="mx-auto max-w-3xl">
          <h3
            className={`font-display text-2xl font-semibold sm:text-3xl ${style.closingTitle}`}
          >
            {program.closingTitle}
          </h3>
          {program.closing.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-4 text-lg leading-relaxed text-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
