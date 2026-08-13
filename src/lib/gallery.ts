export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

function photo(
  file: string,
  alt: string,
  caption: string
): GalleryImage {
  return {
    src: `/galeri/${file}`,
    alt,
    caption,
    width: 1536,
    height: 1024,
  };
}

const bahceKosu = photo(
  "bahce-kosu.jpg",
  "Temsili görsel: çocuklar açık havada koşuyor",
  "Açık Hava"
);

const parmakBoya = photo(
  "parmak-boya.jpg",
  "Temsili görsel: parmak boyası ile etkinlik",
  "Sanat Etkinliği"
);

const sinif = photo(
  "sinif.jpg",
  "Temsili görsel: sınıfta öğrenme",
  "Sınıf"
);

const ahsapOyuncak = photo(
  "ahsap-oyuncak.jpg",
  "Temsili görsel: ahşap oyuncaklar ve pratik yaşam malzemeleri",
  "Hazırlanmış Ortam"
);

const boyaKalemleri = photo(
  "boya-kalemleri.jpg",
  "Temsili görsel: boya kalemleri ve sanat malzemeleri",
  "Görsel Sanatlar"
);

const oyunParki = photo(
  "oyun-parki.jpg",
  "Temsili görsel: oyun parkında çocuklar",
  "Oyun Alanı"
);

const sinifEtkinlik = photo(
  "sinif-etkinlik.jpg",
  "Temsili görsel: öğretmen eşliğinde sınıf etkinliği",
  "Birlikte Öğrenme"
);

const bahceOyun = photo(
  "bahce-oyun.jpg",
  "Temsili görsel: bahçede serbest oyun",
  "Bahçe Oyunu"
);

const okuma = photo(
  "okuma.jpg",
  "Temsili görsel: grup halinde kitap ve etkinlik",
  "Grup Etkinliği"
);

const kucukYas = photo(
  "kucuk-yas.jpg",
  "Temsili görsel: küçük yaş grubu",
  "Küçük Grup"
);

const dogaKesif = photo(
  "doga-kesif.jpg",
  "Temsili görsel: bahçede doğa keşfi",
  "Doğa & Keşif"
);

const organikSofra = photo(
  "organik-sofra.jpg",
  "Temsili görsel: taze meyve ve doğal beslenme",
  "Doğal Beslenme"
);

export const galleryImages: GalleryImage[] = [
  bahceKosu,
  parmakBoya,
  sinif,
  ahsapOyuncak,
  boyaKalemleri,
  oyunParki,
  sinifEtkinlik,
  bahceOyun,
  okuma,
  kucukYas,
  dogaKesif,
  organikSofra,
];

/** Marquee display heights (px) — width derived from native ratio */
const MARQUEE_HEIGHTS = [200, 260, 230, 300, 210, 280, 240, 290] as const;

export function marqueeDisplaySize(img: GalleryImage, index: number) {
  const displayHeight = MARQUEE_HEIGHTS[index % MARQUEE_HEIGHTS.length];
  const displayWidth = Math.round(displayHeight * (img.width / img.height));
  return { displayWidth, displayHeight };
}

export const marqueeImages = galleryImages;

export const heroImages = [
  bahceKosu,
  bahceOyun,
  oyunParki,
  parmakBoya,
  dogaKesif,
  sinifEtkinlik,
];

export const homePhotos = {
  about: sinifEtkinlik,
  aboutSide: okuma,
  age: [kucukYas, parmakBoya, sinif],
  nutrition: organikSofra,
  programs: sinif,
  visit: oyunParki,
  montessori: ahsapOyuncak,
  garden: {
    ...bahceOyun,
    alt: "Temsili görsel: bahçede açık havada oyun",
    caption: "Bahçemizde Oyun",
  },
};
