import Image from "next/image";
import Link from "next/link";
import {
  marqueeDisplaySize,
  marqueeImages,
  type GalleryImage,
} from "@/lib/gallery";

function MarqueeTrack({
  images,
  ariaHidden,
}: {
  images: GalleryImage[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={ariaHidden || undefined}
    >
      {images.map((img, i) => {
        const { displayWidth, displayHeight } = marqueeDisplaySize(img, i);
        return (
          <figure
            key={`${img.src}-${i}`}
            className="relative shrink-0 overflow-hidden shadow-md ring-2 ring-white/70"
            style={{ width: displayWidth, height: displayHeight }}
          >
            <Image
              src={img.src}
              alt={ariaHidden ? "" : img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-full object-cover"
              sizes={`${displayWidth}px`}
            />
          </figure>
        );
      })}
    </div>
  );
}

export function GalleryMarquee() {
  return (
    <section
      id="galeri"
      className="relative scroll-mt-24 overflow-hidden py-10 sm:py-12"
      style={{
        background:
          "linear-gradient(120deg, #8BC34A 0%, #FFF59D 38%, #FF7043 72%, #9C27B0 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #4CAF50 0 3rem, transparent 3.2rem), radial-gradient(circle at 85% 70%, #FF9800 0 2.5rem, transparent 2.7rem)",
        }}
      />

      <div className="relative mb-6 flex items-end justify-between gap-4 px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-6">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Kreş Yaşamından Kareler
          </h2>
        </div>
        <Link
          href="/galeri"
          className="shrink-0 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
        >
          Tüm galeri →
        </Link>
      </div>

      <div className="gallery-marquee relative">
        <div className="gallery-marquee-track flex w-max items-center">
          <MarqueeTrack images={marqueeImages} />
          <MarqueeTrack images={marqueeImages} ariaHidden />
        </div>
      </div>
    </section>
  );
}
