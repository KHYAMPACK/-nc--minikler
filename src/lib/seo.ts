import { siteConfig } from "./site";

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.legalName],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
    sameAs: [siteConfig.instagram],
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Ara",
        target: `tel:${siteConfig.phoneTel}`,
      },
      {
        "@type": "CommunicateAction",
        name: "WhatsApp",
        target: `https://wa.me/${siteConfig.whatsapp}`,
      },
      {
        "@type": "FindAction",
        name: "Yol tarifi",
        target: siteConfig.mapLink,
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:30",
        closes: "18:30",
      },
    ],
  };
}

export const pageMeta = {
  home: {
    title: "Şahika Öncü Minikler Kreş | Butik Kreş Denizli",
    description:
      "Denizli Merkezefendi'de butik kreş. 0–6 yaş çocuk merkezli eğitim, organik beslenme, küçük gruplar. Şahika Öncü Minikler Kreş.",
  },
  hakkimizda: {
    title: "Hakkımızda | Şahika Öncü Minikler Kreş Denizli",
    description:
      "Denizli'nin ilk ve tek butik kreşi Şahika Öncü Minikler'i tanıyın. Çocuk merkezli yaklaşım, güven ve doğal yaşam.",
  },
  programlar: {
    title: "Programlar ve Yaş Grupları | Şahika Öncü Minikler Kreş",
    description:
      "18–48 ay yaş grupları, Montessori ilhamı, branş öğretmenleri, tam gün ve yarım gün programlar. Denizli butik kreş.",
  },
  beslenme: {
    title: "Organik Beslenme | Şahika Öncü Minikler Kreş",
    description:
      "İşlenmiş gıda yok. Organik makarna, salça, yumurta ve pekmezle doğal beslenme. Denizli kreş yemek menüsü.",
  },
  sss: {
    title: "Sıkça Sorulan Sorular | Şahika Öncü Minikler Kreş",
    description:
      "Saatler, program seçenekleri, yaş grupları, beslenme ve kayıt hakkında sık sorulan sorular.",
  },
  galeri: {
    title: "Galeri | Şahika Öncü Minikler Kreş Denizli",
    description:
      "Bahçe, oyun ve etkinliklerden temsili kareler. Kayıtlı çocuklarımızın fotoğrafları bu sitede yayınlanmaz.",
  },
  iletisim: {
    title: "İletişim | Kreş Denizli — Şahika Öncü Minikler",
    description:
      "Yenişehir Mah. 48 Sk. No: 34 Merkezefendi/Denizli. Telefon: 0507 245 37 46 · WhatsApp ve harita.",
  },
  gizlilik: {
    title: "Gizlilik ve KVKK | Şahika Öncü Minikler",
    description:
      "Şahika Öncü Minikler Kreş kişisel verilerin korunması ve gizlilik bilgilendirmesi.",
  },
} as const;
