import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { CtaBanner } from "@/components/CtaBanner";
import {
  highlights,
  processSteps,
} from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { aboutLead, siteConfig, whatsappLink } from "@/lib/site";

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

const accentBorder: Record<string, string> = {
  leaf: "border-leaf",
  sun: "border-sun",
  coral: "border-coral",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-plane">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
          <span
            className="bubble animate-float bg-[#8BC34A]/35"
            style={{ width: "3.5rem", height: "3.5rem", top: "12%", right: "38%" }}
            aria-hidden="true"
          />
          <span
            className="bubble animate-float bg-[#E76F51]/30"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              top: "28%",
              right: "18%",
              animationDelay: "1.2s",
            }}
            aria-hidden="true"
          />
          <span
            className="bubble animate-float bg-[#F0C24B]/40"
            style={{
              width: "2.75rem",
              height: "2.75rem",
              bottom: "18%",
              right: "42%",
              animationDelay: "0.6s",
            }}
            aria-hidden="true"
          />

          <div className="order-2 animate-fade-up lg:order-1">
            <p className="font-display text-4xl font-semibold tracking-tight text-leaf-dark sm:text-5xl lg:text-6xl">
              Şahika Öncü Minikler
            </p>
            <h1 className="animate-fade-up-delay mt-4 max-w-xl font-display text-xl leading-snug text-ink sm:mt-5 sm:text-3xl">
              Denizli&apos;nin butik kreşi —{" "}
              <span className="text-coral">çocuk merkezli</span>, güvenli ve{" "}
              <span className="text-leaf">doğal</span>.
            </h1>
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              0–6 yaş için küçük gruplar, organik beslenme ve sıcak bir ortam.
              {` “${siteConfig.tagline}.”`}
            </p>
            <div className="animate-fade-up-delay-2 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
              >
                Ara: {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
              >
                WhatsApp ile bilgi al
              </a>
              <Link
                href="/programlar"
                className="inline-flex items-center justify-center rounded-xl border border-leaf/35 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-leaf hover:bg-white"
              >
                Programları incele
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="animate-pop-in relative">
              <div
                className="absolute -inset-6 rounded-full bg-white/40 blur-2xl"
                aria-hidden="true"
              />
              <Image
                src="/logo.png"
                alt="Şahika Öncü Minikler — Denizli butik kreş logosu"
                width={420}
                height={420}
                priority
                className="relative h-auto w-44 rounded-full object-contain drop-shadow-sm sm:w-56 lg:w-[22rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Neden Öncü Minikler?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{aboutLead}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`border-t-[3px] pt-5 ${accentBorder[item.accent]}`}
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/beslenme" className="font-semibold text-leaf hover:underline">
            Organik beslenme →
          </Link>
          <Link href="/hakkimizda" className="font-semibold text-leaf hover:underline">
            Hakkımızda →
          </Link>
        </div>
      </section>

      <section className="border-y border-line/80 bg-sky/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl text-ink">Nasıl başlarız?</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Kayıt süreci sade: yazın, ziyaret edin, programı netleştirin.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {processSteps.map((item) => (
              <li key={item.step}>
                <p className="font-display text-3xl text-sun">{item.step}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl text-ink">
          Hizmet bölgemiz: Denizli / Merkezefendi
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {siteConfig.address.full}. Hafta içi {siteConfig.hours.fullDay} tam gün
          hizmet.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-leaf hover:underline"
          >
            Yol tarifi al →
          </a>
          <Link href="/iletisim" className="font-semibold text-leaf hover:underline">
            İletişim bilgileri →
          </Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-leaf hover:underline"
          >
            Instagram {siteConfig.instagramHandle} →
          </a>
        </div>
      </section>

      <CtaBanner />
      <ContactSection titleAs="h2" showEmail={false} />
    </>
  );
}
