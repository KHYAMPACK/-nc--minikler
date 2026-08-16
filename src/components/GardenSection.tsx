import Image from "next/image";
import { homePhotos } from "@/lib/gallery";

export function GardenSection() {
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
          <Image
            src={homePhotos.garden.src}
            alt={homePhotos.garden.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(200deg, #8BC34A 0%, transparent 45%, #FF9800 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
