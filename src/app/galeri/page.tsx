import type { Metadata } from "next";
import Image from "next/image";
import { VisitStrip } from "@/components/VisitStrip";
import { galleryImages } from "@/lib/gallery";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.galeri.title },
  description: pageMeta.galeri.description,
  alternates: { canonical: "/galeri" },
  openGraph: {
    title: pageMeta.galeri.title,
    description: pageMeta.galeri.description,
    url: "/galeri",
  },
};

export default function GaleriPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 lg:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Galeri
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Sınıflarımız, yemek salonumuz ve oyun köşelerinden iç mekân
              kareleri. Kayıtlı çocuklarımızın fotoğrafları bu sitede
              yayınlanmaz. Instagram{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-leaf-dark hover:underline"
              >
                {siteConfig.instagramHandle}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <li key={img.src} className="mb-5 break-inside-avoid">
              <figure className="overflow-hidden rounded-2xl bg-white/70">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <figcaption className="px-4 py-3 text-sm text-muted">
                  {img.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <VisitStrip
        title="Kurumu Yerinde Görün"
        subtitle="Galeri bir başlangıç — ziyarette ortamı yakından tanıyın."
      />
    </>
  );
}
