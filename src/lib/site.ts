export const siteConfig = {
  name: "Şahika Öncü Minikler Kreş",
  shortName: "Şahika Öncü Minikler",
  legalName: "Şahika Öncü Minikler",
  domain: "sahikaoncuminikler.com",
  url: "https://www.sahikaoncuminikler.com",
  description:
    "Denizli'nin ilk ve tek butik kreşi. 0–6 yaş çocuklar için çocuk merkezli eğitim, organik beslenme ve güvenli ortam. Merkezefendi / Denizli.",
  tagline: "Çünkü içinde bir çocuk var",
  phoneDisplay: "0507 245 37 46",
  phoneTel: "+905072453746",
  phones: [
    { display: "0507 245 37 46", tel: "+905072453746", label: "Telefon / WhatsApp" },
  ],
  whatsapp: "905072453746",
  email: "info@sahikaoncuminikler.com",
  instagram: "https://www.instagram.com/oncuminikler/",
  instagramHandle: "@oncuminikler",
  address: {
    street: "Yenişehir Mahallesi 48 Sokak No: 34",
    postalCode: "20010",
    district: "Merkezefendi",
    city: "Denizli",
    full: "Yenişehir Mahallesi 48 Sokak No: 34, Merkezefendi / Denizli",
  },
  geo: {
    lat: 37.7765,
    lng: 29.0872,
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Şahika+Öncü+Minikler+Kreş&z=17&hl=tr&output=embed",
  mapLink: "https://share.google/0DSWjqNrUT3agupTA",
  hours: {
    fullDay: "07:30 – 18:30",
    standardStart: "09:00",
    halfDayEnd: "13:00",
    fullDayEnd: "17:00",
    display: "Hafta içi 07:30 – 18:30",
  },
  keywords: [
    "kreş denizli",
    "anaokulu denizli",
    "butik kreş denizli",
    "kreş merkezefendi",
    "0-6 yaş kreş denizli",
    "organik beslenme kreş",
    "şahika öncü minikler",
    "öncü minikler kreş",
    "yenişehir kreş denizli",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa", homeHash: null },
  { href: "/hakkimizda", label: "Hakkımızda", homeHash: "#hakkimizda" },
  { href: "/programlar", label: "Programlar", homeHash: "#programlar" },
  { href: "/beslenme", label: "Beslenme", homeHash: "#beslenme" },
  { href: "/galeri", label: "Galeri", homeHash: "#galeri" },
  { href: "/sss", label: "SSS", homeHash: "#sss" },
  { href: "/iletisim", label: "İletişim", homeHash: "#iletisim" },
] as const;

export const aboutLead =
  "Şahika Öncü Minikler Kreş’te her çocuk özeldir, her çocuk yakın ilgiyi hak eder.";

export const aboutBody =
  "Eğitim anlayışımızın merkezinde; çocuklarımızın gelişim özelliklerini bilen, alanında uzman, deneyimli ve sevgi dolu öğretmenlerimiz yer alır. Her sınıfımızda iki öğretmen görev yapar. Böylece çocuklarımızın bireysel ihtiyaçlarını daha yakından takip eder, gelişim süreçlerini titizlikle gözlemler ve her bir çocuğumuza ihtiyaç duyduğu ilgi ve desteği sunarız. Öğretmenlerimiz yalnızca eğitim veren değil; çocuklarımızın kendilerini güvende, değerli ve mutlu hissettikleri bir öğrenme ortamının rehberleridir. Deneyimli öğretmenler, güçlü iletişim, birebir ilgi… Çünkü Öncü Minikler’de her çocuk bizim için değerlidir.";

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "Merhaba, Şahika Öncü Minikler Kreş hakkında bilgi almak istiyorum."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};
