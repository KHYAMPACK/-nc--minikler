import Link from "next/link";

const lines = [
  "Biricikliğini Keşfetmenin",
  "Karşılaştırılmaktan Daha Kıymetli Olduğu Yerde…",
  "Sadeliğin Gösterişten Daha Kıymetli Olduğu Yerde…",
  "Şefkatin Bir Dil Olarak Konuşulduğu Yerde…",
] as const;

export function ManifestoBand() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Eğitim anlayışımız"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(118deg, #FFCCBC 0%, #FFAB91 28%, #FF8A65 55%, #F48FB1 82%, #CE93D8 100%)",
        }}
        aria-hidden="true"
      />
      {/* Soft watercolor edge wash */}
      <div
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-white/30 blur-[2px] sm:h-52 sm:w-52"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-[#FFF59D]/50 sm:h-36 sm:w-36"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-1/4 top-6 h-14 w-14 rounded-full bg-white/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <div className="space-y-3 sm:space-y-4">
          {lines.map((line, i) => (
            <p
              key={line}
              className={`font-display font-bold leading-[1.2] tracking-tight text-ink ${
                i === 0
                  ? "text-2xl sm:text-3xl lg:text-4xl"
                  : "text-lg sm:text-xl lg:text-2xl"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-10 h-px w-16 bg-ink/20 sm:mt-12" aria-hidden="true" />

        <Link
          href="#kayit"
          className="mt-8 inline-block font-display text-lg font-semibold text-ink underline-offset-4 transition hover:text-[#bf360c] hover:underline sm:mt-10 sm:text-xl"
        >
          Bir Eğitim Geleneğine Dahil Olmak İsterseniz
        </Link>
        <p className="mt-5 font-display text-base font-medium text-ink/75 sm:text-lg">
          Sizleri Okulumuza Bekliyoruz
        </p>
      </div>
    </section>
  );
}
