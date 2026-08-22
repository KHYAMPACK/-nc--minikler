export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/** Temsili / üretilmiş görseller — ana sayfa bölümleri */
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

/** Kreş iç mekân fotoğrafları — galeri ve kareler şeridi */
function schoolPhoto(
  file: string,
  alt: string,
  caption: string,
  width: number,
  height: number
): GalleryImage {
  return {
    src: `/okul-resimleri/${file}`,
    alt,
    caption,
    width,
    height,
  };
}

function gardenPhoto(
  file: string,
  alt: string,
  caption: string
): GalleryImage {
  return {
    src: `/bahce/${file}`,
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
  schoolPhoto(
    "00a5cddf-e931-4117-b94b-038d827a86ce.JPG",
    "Aslan temalı sınıfta ahşap masalar ve turuncu sandalyeler",
    "Aslan Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "0abf50ed-0dd8-4e54-bf6d-b197b2c4fae6.JPG",
    "Aslan biçimli kitaplık ve çocuk kitapları",
    "Kitap Köşesi",
    3024,
    4032
  ),
  schoolPhoto(
    "12d30482-0047-4099-a576-b7e3349c62a3.JPG",
    "Gökkuşağı tavanlı sınıfta masalar ve oyun rafları",
    "Gökkuşağı Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "2bb13ba1-cb86-451b-ab84-3ed314955048.JPG",
    "Mavi sınıfta masalar, oyuncak rafları ve oyun mutfağı",
    "Mavi Sınıf",
    4032,
    3024
  ),
  schoolPhoto(
    "3ac50831-6a4a-46b5-b1fc-28164d232527.JPG",
    "Sarı duvarlı yemek salonunda uzun masalar ve sıralar",
    "Yemek Salonu",
    4032,
    3024
  ),
  schoolPhoto(
    "a9869ef0-3903-486f-9396-88c94ddeb42a.JPG",
    "Turuncu duvarda leylek motifli okuma köşesi ve kitaplık",
    "Okuma Köşesi",
    3024,
    4032
  ),
  schoolPhoto(
    "87f1cedf-9071-4c75-b098-ba795fe05559.JPG",
    "Penguen temalı sınıfta masalar ve dolaplar",
    "Penguen Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "b56f00fd-9974-4feb-86ac-e7d21b3bd84e.JPG",
    "Aslan panolu oyun köşesi ve eğitim materyalleri",
    "Oyun Köşesi",
    3024,
    4032
  ),
  schoolPhoto(
    "b9b149f9-5a7a-46f7-b626-0333a9a89f8a.JPG",
    "Gökkuşağı tavanlı sınıftan bahçeye açılan cam kapı",
    "Sınıf Ve Bahçe",
    4032,
    3024
  ),
  schoolPhoto(
    "66c670aa-1525-43e1-ae95-2a3555f98254.JPG",
    "Pencere önünde oyuncak ve materyal rafları",
    "Materyal Rafları",
    4032,
    3024
  ),
  schoolPhoto(
    "f2578a04-1c74-4344-b042-ad6959f18af9.JPG",
    "Yemek salonunda renkli sıralar ve çıkış kapısı",
    "Yemek Salonu",
    4032,
    3024
  ),
  schoolPhoto(
    "825beec6-3fe9-49d4-91c8-7c0b30dc1589.JPG",
    "Aslan panolu sınıfta masalar ve dolaplar",
    "Aslan Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "8a54505c-fc15-44c8-bce9-5f2dc227a32b.JPG",
    "Aslan temalı sınıfta pencereden doğal ışık",
    "Aslan Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "c578a20c-e24a-4432-a08f-eb06d102cb75.JPG",
    "Penguen temalı sınıfta masalar ve oyun alanı",
    "Penguen Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "e434ab1d-0dd5-42ad-80e7-6e43b0aaf901.JPG",
    "Sınıfta oyun mutfağı ve tavşan biçimli yazı tahtası",
    "Oyun Mutfağı",
    4032,
    3024
  ),
  schoolPhoto(
    "73a4748a-2176-40ba-8c42-b96b60984bf8.JPG",
    "Aslan temalı sınıfta masalar ve pencere önü rafları",
    "Aslan Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "c43586dd-bbfa-413e-91f2-51fbd62aece9.JPG",
    "Güneş alan aslan temalı sınıfta ahşap masalar",
    "Aslan Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "fc0dc198-df61-4cc0-b423-f19d3966d718.JPG",
    "Gökkuşağı tavanlı sınıfta tavşan panosu ve masalar",
    "Gökkuşağı Sınıfı",
    4032,
    3024
  ),
  schoolPhoto(
    "c3801f1d-e813-4f88-b522-29df6da7f3a7.JPG",
    "Gökkuşağı tavanlı sınıfta bahçe manzarası",
    "Gökkuşağı Tavanı",
    4032,
    3024
  ),
  schoolPhoto(
    "uyku-odasi-01.jpg",
    "Mavi duvarlı uyku odasında ayıcık temalı sarı yataklar",
    "Uyku Odası",
    3024,
    4032
  ),
  schoolPhoto(
    "uyku-odasi-02.jpg",
    "Ay ve yıldız süslemeli uyku odasında ayıcık yataklar",
    "Uyku Odası",
    3024,
    4032
  ),
  schoolPhoto(
    "uyku-odasi-03.jpg",
    "Sarı ayıcık yataklar ve her yatakta mavi peluş ayı",
    "Ayıcık Yataklar",
    3024,
    4032
  ),
  schoolPhoto(
    "uyku-odasi-04.jpg",
    "Mavi duvarda ay ve yıldızlarla uyku odası yatak sırası",
    "Uyku Odası",
    3024,
    4032
  ),
  schoolPhoto(
    "uyku-odasi-05.jpg",
    "Üç ayıcık yatak ve sarı ay-yıldız duvar süslemeleri",
    "Dinlenme Odası",
    3024,
    4032
  ),
  schoolPhoto(
    "uyku-odasi-06.jpg",
    "Geniş uyku odasında ayıcık temalı yataklar ve tavan ışıkları",
    "Uyku Odası",
    4032,
    3024
  ),
];

/** Marquee display heights (px) — width derived from native ratio */
const MARQUEE_HEIGHTS = [200, 260, 230, 300, 210, 280, 240, 290] as const;

export function marqueeDisplaySize(img: GalleryImage, index: number) {
  const displayHeight = MARQUEE_HEIGHTS[index % MARQUEE_HEIGHTS.length];
  const displayWidth = Math.round(displayHeight * (img.width / img.height));
  return { displayWidth, displayHeight };
}

export const marqueeImages = galleryImages;

export const gardenPhotos = [
  gardenPhoto(
    "bahce-genis-alan.jpg",
    "Temsili görsel: kreş bahçesinde açık alanda oyun",
    "Açık Oyun Alanı"
  ),
  gardenPhoto(
    "bahce-bayrak.jpg",
    "Temsili görsel: bahçede oyun ve açık hava",
    "Bahçe"
  ),
  gardenPhoto(
    "bahce-golgelik.jpg",
    "Temsili görsel: gölgelikli bahçede tırmanma ve oyun",
    "Gölgelik"
  ),
  gardenPhoto(
    "bahce-dinlenme.jpg",
    "Temsili görsel: bahçede dinlenme ve etkinlik köşesi",
    "Dinlenme Köşesi"
  ),
  gardenPhoto(
    "bahce-kaydirak.jpg",
    "Temsili görsel: bahçede kaydırak ve oyun evi",
    "Kaydırak"
  ),
] as const;

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
  team: {
    ...sinif,
    alt: "Temsili görsel: öğretmen eşliğinde sınıfta öğrenme",
    caption: "Deneyimli Ekip",
  },
  garden: gardenPhotos[0],
};
