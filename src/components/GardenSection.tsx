"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gardenPhotos } from "@/lib/gallery";

const SLIDE_MS = 5500;

export function GardenSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (gardenPhotos.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % gardenPhotos.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="bahce" className="scroll-mt-24">
      <div className="grid w-full lg:grid-cols-2">
        <div
          className="order-2 flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-14 lg:order-1 lg:px-12 xl:px-16"
          style={{
            background:
              "linear-gradient(125deg, rgba(76,175,80,0.22) 0%, rgba(139,195,74,0.35) 40%, rgba(255,245,157,0.55) 100%)",
          }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Güvenli Bahçede{" "}
            <span className="text-[#2e7d32]">Özgür Oyun</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            Şahika Öncü Minikler’de günün sevilen parçalarından biri bahçe
            zamanı. Temiz havada koşar, keşfeder ve arkadaşlarıyla oyun kurar;
            hareket, sosyalleşme ve hayal gücü birlikte büyür.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-ink/75">
            Güvenli oyun alanımızda açık hava etkinlikleri, serbest oyun ve doğa
            ile buluşma — her çocuğun temposuna saygıyla ilerliyoruz.
          </p>
        </div>

        <div className="relative order-1 min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:order-2 lg:min-h-[26rem]">
          {gardenPhotos.map((img, i) => (
            <div
              key={img.src}
              className={`garden-slide absolute inset-0 ${
                i === active ? "garden-slide-active" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={i === active ? img.alt : ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-20"
            style={{
              background:
                "linear-gradient(200deg, #8BC34A 0%, transparent 45%, #FF9800 100%)",
            }}
            aria-hidden="true"
          />
          {gardenPhotos.length > 1 && (
            <div
              className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-2"
              role="tablist"
              aria-label="Bahçe fotoğrafları"
            >
              {gardenPhotos.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={img.caption}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
