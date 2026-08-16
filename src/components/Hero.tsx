"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LogoBuild } from "@/components/LogoBuild";
import { heroImages } from "@/lib/gallery";
import { siteConfig, whatsappLink } from "@/lib/site";
const SLIDE_MS = 5500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const boot = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(boot);
  }, []);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero-stage relative flex h-[100svh] max-h-[100svh] flex-col overflow-hidden">
      {/* Full-bleed photo plane */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`hero-slide absolute inset-0 ${
              i === active ? "hero-slide-active" : ""
            }`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="hero-veil pointer-events-none absolute inset-0" />

      <span className="hero-orb hero-orb-a" aria-hidden="true" />
      <span className="hero-orb hero-orb-b" aria-hidden="true" />
      <span className="hero-orb hero-orb-c" aria-hidden="true" />

      <div
        className={`relative z-[2] mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-12 sm:pt-24 ${
          ready ? "hero-ready" : "hero-boot"
        }`}
      >
        <h1 className="sr-only">Şahika Öncü Minikler</h1>

        <div className="hero-logo-wrap w-full max-w-[18rem] sm:max-w-md lg:max-w-lg">
          <LogoBuild
            play={ready}
            className="drop-shadow-[0_14px_32px_rgba(30,58,42,0.22)]"
            title="Şahika Öncü Minikler"
          />
        </div>

        <p className="hero-lead mx-auto mt-3 max-w-xl font-display text-sm leading-snug text-ink/90 sm:mt-4 sm:text-lg">
          Denizli&apos;nin Butik Kreşi — Çocuk Merkezli, Güvenli Ve Doğal.
        </p>
        <p className="hero-support mx-auto mt-1.5 max-w-lg text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
          16-48 Ay · Küçük Gruplar · Organik Beslenme.
          {` “${siteConfig.tagline}.”`}
        </p>

        {/* CTAs stay in first viewport and visible without waiting on intro */}
        <div className="hero-cta mt-4 w-full max-w-md sm:mt-5 sm:max-w-none">
          <div className="flex flex-col gap-2.5 rounded-3xl bg-white/85 p-2.5 shadow-[0_10px_40px_rgba(30,58,42,0.12)] backdrop-blur-md sm:inline-flex sm:flex-row sm:items-center sm:gap-3 sm:rounded-full sm:px-3 sm:py-2.5">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark sm:px-6"
            >
              <PhoneGlyph className="h-4 w-4 shrink-0" />
              Ara: {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark sm:px-6"
            >
              <WhatsAppGlyph className="h-4 w-4 shrink-0" />
              WhatsApp ile yazın
            </a>
          </div>
        </div>
      </div>

      {heroImages.length > 1 && (
        <div
          className="hero-dots absolute bottom-3 left-1/2 z-[3] flex -translate-x-1/2 gap-2"
          aria-hidden="true"
        >
          {heroImages.map((img, i) => (
            <span
              key={img.src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-6 bg-leaf" : "w-1.5 bg-ink/25"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
