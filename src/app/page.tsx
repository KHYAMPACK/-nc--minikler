import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgeBands } from "@/components/AgeBands";
import { BranchTeachers } from "@/components/BranchTeachers";
import { ContactForm } from "@/components/ContactForm";
import { DayRhythm } from "@/components/DayRhythm";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { GardenSection } from "@/components/GardenSection";
import { Hero } from "@/components/Hero";
import { ManifestoBand } from "@/components/ManifestoBand";
import { MontessoriSection } from "@/components/MontessoriSection";
import {
  faqs,
  focusAreas,
  nutritionPoints,
  processClosing,
  processSteps,
  programs,
} from "@/lib/content";
import { homePhotos } from "@/lib/gallery";
import { pageMeta } from "@/lib/seo";
import { aboutBody, aboutLead, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: "/",
  },
};

const programAccents = [
  { title: "text-[#2e7d32]", bar: "bg-[#4CAF50]" },
  { title: "text-[#ef6c00]", bar: "bg-[#FF9800]" },
  { title: "text-[#6a1b9a]", bar: "bg-[#9C27B0]" },
] as const;

const nutritionDots = [
  "bg-[#4CAF50]",
  "bg-[#8BC34A]",
  "bg-[#FF9800]",
  "bg-[#FF7043]",
] as const;

const stepAccents = [
  { num: "bg-[#4CAF50]", soft: "bg-[#4CAF50]/15", bar: "bg-[#4CAF50]" },
  { num: "bg-[#FF7043]", soft: "bg-[#FF7043]/15", bar: "bg-[#FF7043]" },
  { num: "bg-[#9C27B0]", soft: "bg-[#9C27B0]/12", bar: "bg-[#9C27B0]" },
  { num: "bg-[#FF9800]", soft: "bg-[#FF9800]/18", bar: "bg-[#FF9800]" },
] as const;

const focusDots = [
  "bg-[#4CAF50]",
  "bg-[#8BC34A]",
  "bg-[#FFF59D]",
  "bg-[#FF7043]",
  "bg-[#FF9800]",
  "bg-[#9C27B0]",
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ——— About + photos ——— */}
      <section id="hakkimizda" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 lg:pr-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Öncüde{" "}
              <span className="text-[#FF7043]">Eğitim</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{aboutLead}</p>
            <p className="mt-3 leading-relaxed text-muted">{aboutBody}</p>
            <Link
              href="/hakkimizda"
              className="mt-6 inline-flex text-sm font-semibold text-[#2e7d32] underline-offset-4 hover:underline"
            >
              Hakkımızda →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3 lg:min-h-[28rem]">
            <div className="relative col-span-2 min-h-[14rem] overflow-hidden sm:min-h-[18rem] lg:col-span-1 lg:row-span-2 lg:min-h-0">
              <Image
                src={homePhotos.about.src}
                alt={homePhotos.about.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative min-h-[10rem] overflow-hidden sm:min-h-[12rem]">
              <Image
                src={homePhotos.aboutSide.src}
                alt={homePhotos.aboutSide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div
              className="relative flex min-h-[10rem] items-end overflow-hidden p-5 sm:min-h-[12rem] sm:p-6"
              style={{
                background:
                  "linear-gradient(145deg, #8BC34A 0%, #FFF59D 50%, #FF7043 100%)",
              }}
            >
              <p className="relative max-w-[12ch] text-left font-display text-2xl font-bold leading-[1.2] tracking-tight text-ink sm:text-3xl">
                <span className="relative block">
                  Çünkü İçinde
                  <br />
                  <span className="text-[#bf360c]">Bir Çocuk</span>
                  <br />
                  Var
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <article className="bg-[#B7E4C7]/55 px-4 py-10 sm:px-6 md:px-10 md:py-12">
            <h3 className="font-display text-xl font-semibold text-[#2e7d32] sm:text-2xl">
              Yaklaşımımız
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              Çocuk merkezli bir bakışla hayal gücünü, cesareti ve kendini ifade
              etmeyi destekliyoruz. “{siteConfig.tagline}” anlayışıyla her
              çocuğun temposuna saygı duyuyoruz.
            </p>
          </article>
          <article className="bg-[#FF7043]/18 px-4 py-10 sm:px-6 md:px-10 md:py-12">
            <h3 className="font-display text-xl font-semibold text-[#bf360c] sm:text-2xl">
              Güven &amp; İlgi
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              Grup başına en fazla 15 çocuk ve iki çocuk gelişimi uzmanı ile
              dikkatli, sıcak ve öngörülebilir bir ortam sunuyoruz.
            </p>
          </article>
        </div>
      </section>

      <GalleryMarquee />

      <MontessoriSection />

      <GardenSection />

      <DayRhythm />

      <AgeBands />

      <BranchTeachers
        photoSrc={homePhotos.programs.src}
        photoAlt={homePhotos.programs.alt}
      />

      {/* ——— Programs ——— */}
      <section id="programlar" className="-mt-px scroll-mt-24 bg-[#B7E4C7]/35">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Program Seçenekleri
                </h2>
                <p className="mt-2 max-w-2xl text-muted">
                  Tam gün {siteConfig.hours.fullDay}. Standart başlangıç{" "}
                  {siteConfig.hours.standardStart}; yarım gün{" "}
                  {siteConfig.hours.halfDayEnd} veya tercihe göre{" "}
                  {siteConfig.hours.fullDayEnd}.
                </p>
              </div>
              <Link
                href="/programlar"
                className="shrink-0 text-sm font-semibold text-[#2e7d32] underline-offset-4 hover:underline"
              >
                Program Detayı →
              </Link>
            </div>

            <ul className="mt-8 space-y-0">
              {programs.map((program, i) => {
                const accent = programAccents[i] ?? programAccents[0];
                return (
                  <li
                    key={program.title}
                    className="flex gap-4 border-b border-[#8BC34A]/35 py-5 first:border-t"
                  >
                    <span
                      className={`mt-1.5 h-10 w-1.5 shrink-0 rounded-full ${accent.bar}`}
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        className={`font-display text-lg font-semibold sm:text-xl ${accent.title}`}
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

            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Gelişim Odaklarımız
              </h3>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {focusAreas.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted sm:text-base"
                  >
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${focusDots[i] ?? focusDots[0]}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative hidden min-h-[22rem] overflow-hidden lg:block">
            <Image
              src={homePhotos.programs.src}
              alt={homePhotos.programs.alt}
              fill
              className="object-cover"
              sizes="40vw"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(160deg, #4CAF50 0%, transparent 45%, #9C27B0 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ——— Nutrition ——— */}
      <section id="beslenme" className="scroll-mt-24 bg-[#FFF59D]/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem]">
            <Image
              src={homePhotos.nutrition.src}
              alt={homePhotos.nutrition.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Organik Ve Doğal Beslenme
                </h2>
                <p className="mt-2 text-muted">
                  İşlenmiş gıda yok. Sofrada da öğrenme var — masa alışkanlığı ve
                  birlikte yaşam.
                </p>
              </div>
              <Link
                href="/beslenme"
                className="shrink-0 text-sm font-semibold text-[#e65100] underline-offset-4 hover:underline"
              >
                Beslenme Yaklaşımı →
              </Link>
            </div>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {nutritionPoints.map((item, i) => (
                <li key={item.title}>
                  <span
                    className={`mb-2 inline-block h-2.5 w-2.5 rounded-full ${nutritionDots[i] ?? nutritionDots[0]}`}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ManifestoBand />

      {/* ——— Enrollment steps ——— */}
      <section
        id="kayit"
        className="scroll-mt-24"
        style={{
          background:
            "linear-gradient(115deg, rgba(76,175,80,0.14) 0%, rgba(255,245,157,0.45) 48%, rgba(156,39,176,0.12) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Kayıt Nasıl İşler?
          </h2>
          <p className="mt-2 text-muted">
            Kayıt sürecimiz öncelikle randevu oluşturulmasıyla başlar. Randevu
            gününde ise şöyle ilerleriz:
          </p>

          <ol className="mt-8 space-y-0">
            {processSteps.map((step, i) => {
              const accent = stepAccents[i] ?? stepAccents[0];
              return (
                <li
                  key={step.step}
                  className={`flex gap-4 border-b border-[#8BC34A]/25 py-6 first:border-t sm:gap-5`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${accent.num}`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-8 font-display text-xl font-semibold leading-snug text-[#2e7d32] sm:text-2xl">
            {processClosing}
          </p>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section id="sss" className="scroll-mt-24 bg-[#B7E4C7]/40">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Sıkça Sorulan Sorular
              </h2>
              <p className="mt-2 text-muted">
                Saatler, gruplar, program ve beslenme.
              </p>
            </div>
            <Link
              href="/sss"
              className="shrink-0 text-sm font-semibold text-[#2e7d32] underline-offset-4 hover:underline"
            >
              SSS Sayfası →
            </Link>
          </div>

          <div className="mt-8 space-y-0">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border-b border-[#4CAF50]/25 py-3.5 open:pb-4"
              >
                <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-0.5 text-[#FF7043] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Contact ——— */}
      <section id="iletisim" className="scroll-mt-24">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={homePhotos.visit.src}
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(76,175,80,0.88) 0%, rgba(255,245,157,0.85) 55%, rgba(255,112,67,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Bize Ulaşın
                </h2>
                <p className="mt-2 max-w-xl text-ink/80">
                  Merkezefendi Yenişehir — haritadan yol tarifi, telefon veya
                  WhatsApp.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="shrink-0 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
              >
                İletişim Sayfası →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full border-y border-line bg-white">
          <iframe
            title="Şahika Öncü Minikler Kreş konum haritası"
            src={siteConfig.mapEmbedUrl}
            className="h-[36vh] min-h-[240px] w-full border-0 sm:h-[42vh]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>

        <div className="bg-[#FFF59D]/30">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-14">
            <div className="space-y-7">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#2e7d32]">
                  Adres
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {siteConfig.address.full}
                </p>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-sm font-semibold text-[#2e7d32] hover:underline"
                >
                  Google Haritalar&apos;da aç →
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-[#bf360c]">
                  Telefon &amp; WhatsApp
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {siteConfig.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="font-semibold text-[#FF7043] hover:underline"
                      >
                        {phone.label}: {phone.display}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-whatsapp hover:underline"
                    >
                      WhatsApp ile yazın
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-[#6a1b9a]">
                  Saatler
                </h3>
                <p className="mt-2 text-muted">{siteConfig.hours.display}</p>
                <p className="mt-1 text-sm text-muted">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#2e7d32]"
                  >
                    {siteConfig.email}
                  </a>
                  {" · "}
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2e7d32]"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </p>
              </div>
            </div>

            <div className="border-2 border-[#9C27B0]/25 bg-white/95 p-5 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-ink">
                Mesaj Bırakın
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                Gönderince WhatsApp açılır; mesajınız hazır gelir.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
