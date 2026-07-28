export const siteConfig = {
  name: "Şahika Öncü Minikler Kreş",
  shortName: "Öncü Minikler",
  legalName: "Şahika Öncü Minikler",
  domain: "sahikaoncuminikler.com",
  url: "https://www.sahikaoncuminikler.com",
  description:
    "Denizli'nin ilk ve tek butik kreşi. 0–6 yaş çocuklar için çocuk merkezli eğitim, organik beslenme ve güvenli ortam. Merkezefendi / Denizli.",
  tagline: "Çünkü içinde bir çocuk var",
  phoneDisplay: "0553 704 04 20",
  phoneTel: "+905537040420",
  phones: [
    { display: "0258 374 04 20", tel: "+902583740420", label: "Sabit hat" },
    { display: "0553 704 04 20", tel: "+905537040420", label: "Cep / WhatsApp" },
    { display: "0507 245 37 46", tel: "+905072453746", label: "Cep" },
  ],
  whatsapp: "905537040420",
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
    "https://www.google.com/maps?q=Yenişehir+Mahallesi+48+Sokak+No:+34+Merkezefendi+Denizli&z=17&hl=tr&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Yenişehir+Mahallesi+48+Sokak+No:+34+Merkezefendi+Denizli",
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
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/programlar", label: "Programlar" },
  { href: "/beslenme", label: "Beslenme" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const aboutLead =
  "Şahika Öncü Minikler, Denizli'nin ilk ve tek butik kreşi olarak 0–6 yaş çocuklara çocuk merkezli, yaratıcı ve güvenilir bir ortam sunar.";

export const aboutBody =
  "Küçük gruplar, iki çocuk gelişimi uzmanı ve doğal yaşam anlayışıyla miniklerinizin hayal gücünü, cesaretini ve sosyal becerilerini destekliyoruz. İşlenmiş gıda kullanmadan, kendi üretimimiz organik ürünlerle beslenmeye özel önem veriyoruz.";

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "Merhaba, Şahika Öncü Minikler Kreş hakkında bilgi almak istiyorum."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};
