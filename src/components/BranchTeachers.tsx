import Image from "next/image";
import { branchTeachers } from "@/lib/content";

const accents = {
  lime: {
    bg: "bg-[#8BC34A]/25",
    title: "text-[#558b2f]",
    icon: "bg-[#8BC34A] text-white",
  },
  coral: {
    bg: "bg-[#FF7043]/20",
    title: "text-[#bf360c]",
    icon: "bg-[#FF7043] text-white",
  },
  berry: {
    bg: "bg-[#9C27B0]/14",
    title: "text-[#6a1b9a]",
    icon: "bg-[#9C27B0] text-white",
  },
  orange: {
    bg: "bg-[#FF9800]/22",
    title: "text-[#e65100]",
    icon: "bg-[#FF9800] text-white",
  },
  yellow: {
    bg: "bg-[#FFF59D]/90",
    title: "text-[#f57f17]",
    icon: "bg-[#F0C24B] text-ink",
  },
  green: {
    bg: "bg-[#4CAF50]/18",
    title: "text-[#2e7d32]",
    icon: "bg-[#4CAF50] text-white",
  },
  sky: {
    bg: "bg-[#81D4FA]/30",
    title: "text-[#0277bd]",
    icon: "bg-[#29B6F6] text-white",
  },
  mint: {
    bg: "bg-[#B7E4C7]/70",
    title: "text-[#1b5e20]",
    icon: "bg-[#66BB6A] text-white",
  },
} as const;

type IconName = (typeof branchTeachers)[number]["icon"];

function BranchIcon({ name }: { name: IconName }) {
  const common = "h-5 w-5";
  switch (name) {
    case "music":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      );
    case "drama":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C7 2 3 5.5 3 10c0 2.4 1.2 4.5 3 5.9V20l3-1.5c1 .3 2 .5 3 .5s2-.2 3-.5L18 20v-4.1c1.8-1.4 3-3.5 3-5.9 0-4.5-4-8-9-8zm-3.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm7 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM8.2 14.2c.8 1 2.1 1.6 3.8 1.6s3-.6 3.8-1.6c.2-.2 0-.5-.2-.5H8.4c-.2 0-.4.3-.2.5z" />
        </svg>
      );
    case "language":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.87 15.07l-2.54-2.51.03-.03A17.5 17.5 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.4 9.55 9 11.03 8.07 10.03 7.3 8.93 6.7 7.7l-1.74.8c.7 1.5 1.66 2.9 2.8 4.15l-4.76 4.7 1.42 1.41 4.7-4.7 2.9 2.9 1.85-1.89zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
      );
    case "sport":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-1 7h2v5.2l4.4 2.6-.9 1.5L12 15.5l-4.5 2.8-.9-1.5 4.4-2.6V9zM5.6 8.5l1.4-1.4 2.5 2.5-1.4 1.4-2.5-2.5zm12.8 0-2.5 2.5-1.4-1.4 2.5-2.5 1.4 1.4z" />
        </svg>
      );
    case "dance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm1.2 6.2 2.5 2.3 3.3-1.2.7 1.9-4.2 1.5-2 1.8V22h-2v-6.7l-2.4-2.1-1.7 4.4-1.9-.7 2.2-5.6 2.5 1.2 1.7-1.5V8.2h1.3z" />
        </svg>
      );
    case "art":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3c-4.4 0-8 3-8 7.2 0 2.6 1.5 4.6 3.6 5.7L7 21h2.3l.6-2.2c.7.1 1.4.2 2.1.2 4.4 0 8-3 8-7.2S16.4 3 12 3zm-3.2 8.5a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm2.4-3.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm3.2.4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm1.8 3.4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z" />
        </svg>
      );
    case "chess":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 9.5 6H8v2h1l-.8 3H7v2h1.5L7 18h10l-1.5-5H17v-2h-1.7L14.5 8H16V6h-1.5L12 2zm-3 17v2h6v-2H9z" />
        </svg>
      );
    case "nature":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17 8C8 10 5.9 16.2 4 22h2c.6-2 1.5-3.7 2.7-5.1 1.4 2 3.5 3.4 6.3 3.9-.2-2.3-1.1-4.4-2.6-6.1C15.4 12.8 18.5 10.5 22 10c-1.7-.8-3.4-1.4-5-2zm-5.5.5C9.2 6.2 7.2 3.5 7 2c2.8.8 5 2.8 6.4 5.3-.8.4-1.5.8-2.1 1.2H11.5z" />
        </svg>
      );
  }
}

type Props = {
  photoSrc?: string;
  photoAlt?: string;
};

export function BranchTeachers({ photoSrc, photoAlt }: Props) {
  return (
    <section id="brans" className="-mt-px scroll-mt-24">
      <div
        className="w-full px-4 py-12 sm:px-6 sm:py-14"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,245,157,0.7) 0%, rgba(183,228,199,0.55) 45%, rgba(156,39,176,0.12) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Uzman Branş Öğretmenleriyle Zengin Gün
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Müzikten dramaya, spordan sanata — branş öğretmenlerimiz miniklerin
            farklı yönlerini destekler.
          </p>
        </div>
      </div>

      {photoSrc && (
        <div className="relative h-44 w-full overflow-hidden sm:h-56 md:h-64">
          <Image
            src={photoSrc}
            alt={photoAlt ?? ""}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(90deg, #8BC34A 0%, transparent 40%, #FF7043 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      )}

      <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4">
        {branchTeachers.map((item, i) => {
          const style = accents[item.accent];
          const isLast = i === branchTeachers.length - 1;
          const isLastRowSm = i >= branchTeachers.length - 2;
          const isLastRowLg = i >= branchTeachers.length - 4;
          return (
            <article
              key={item.subject}
              className={`${style.bg} border-b border-white/40 px-4 py-8 sm:border-r sm:px-6 sm:py-10 ${
                isLast ? "border-b-0" : ""
              } ${isLastRowSm ? "sm:border-b-0" : ""} ${
                isLastRowLg ? "lg:border-b-0" : ""
              }`}
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${style.icon}`}
                aria-hidden="true"
              >
                <BranchIcon name={item.icon} />
              </span>
              <h3
                className={`font-display text-lg font-semibold sm:text-xl ${style.title}`}
              >
                {item.subject}
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
