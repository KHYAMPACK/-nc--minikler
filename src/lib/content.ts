export const highlights = [
  {
    title: "Butik Yaklaşım",
    text: "Denizli'nin ilk ve tek butik kreşi. Küçük gruplar, bireysel ilgi ve sıcak bir ortam.",
    accent: "leaf",
  },
  {
    title: "İki Uzman, En Fazla 15 Çocuk",
    text: "Her grupta iki çocuk gelişimi uzmanı; güvenli ve dikkatli bir bakım ortamı.",
    accent: "sun",
  },
  {
    title: "Organik Beslenme",
    text: "İşlenmiş gıda yok. Makarnadan salçaya, yumurtadan pekmeze doğal ve organik.",
    accent: "coral",
  },
] as const;

export const ageGroups = [
  {
    title: "18–27 Ay",
    text: "Keşif, duyusal oyun ve güvenli bağlanma. Temel beceriler ve alışkanlıklar.",
    accent: "leaf" as const,
  },
  {
    title: "28–36 Ay",
    text: "Dil, özgüven ve sosyal oyun. Tuvalet eğitimi ve birlikte yemek kültürü.",
    accent: "sun" as const,
  },
  {
    title: "36–48 Ay",
    text: "Hayal gücü, ifade ve hazırlık. Kelime dağarcığı ve akran ilişkileri güçlenir.",
    accent: "coral" as const,
  },
] as const;

export const dayRhythm = [
  { time: "07:30", label: "Kapılar Açılır", note: "Tam gün karşılama" },
  { time: "09:00", label: "Gün Başlar", note: "Oyun ve keşif" },
  { time: "Öğünler", label: "Sofraya Otururuz", note: "Kahvaltı · kuşluk · öğle · ikindi" },
  { time: "13:00", label: "Yarım Gün Çıkış", note: "İsteğe bağlı" },
  { time: "17:00", label: "Esnek Çıkış", note: "Tercihe göre" },
  { time: "18:30", label: "Gün Kapanır", note: "Tam gün bitiş" },
] as const;

export const programs = [
  {
    title: "Tam Gün",
    text: "Çalışan ebeveynler için 07:30–18:30. Kahvaltı, kuşluk, öğle ve ikindi.",
  },
  {
    title: "Yarım Gün",
    text: "09:00 başlangıç; 13:00 veya tercihe göre 17:00’ye kadar. Kahvaltı, kuşluk ve öğle.",
  },
  {
    title: "Esnek Günler",
    text: "5 tam gün, 5 / 3 / 2 yarım gün, 3 veya 2 tam gün ya da saatlik bakım seçenekleri.",
  },
] as const;

export const focusAreas = [
  "Beceri Ve Cesaret Gelişimi",
  "Hayal Gücü Ve Yaratıcılık",
  "Kelime Dağarcığı Ve Kendini İfade",
  "Tuvalet Eğitimi Desteği",
  "Sosyal Uyum: Birlikte Oyun Ve Yemek",
  "Masa Başı Alışkanlıkları",
] as const;

export const nutritionPoints = [
  {
    title: "İşlenmiş Gıda Yok",
    text: "Hazır ürün yerine doğal ve organik malzemelerle hazırlanan öğünler.",
  },
  {
    title: "Kendi Üretimimiz",
    text: "Makarna, salça, yumurta ve pekmez gibi temel ürünlerde organik ve kendi üretimine önem.",
  },
  {
    title: "Öğün Düzeni",
    text: "Tam gün: kahvaltı, kuşluk, öğle ve ikindi. Yarım gün: kahvaltı, kuşluk ve öğle.",
  },
  {
    title: "Sosyalleşme",
    text: "Yemek zamanı yalnızca beslenme değil; masa alışkanlığı ve birlikte yaşam eğitimi.",
  },
] as const;

export const montessoriPrinciples = [
  {
    title: "Çocuğun Temposu",
    text: "Her minik kendi ritminde keşfeder; zorlamadan, merakını izleyerek ilerleriz.",
    color: "green",
  },
  {
    title: "Hazırlanmış Ortam",
    text: "Ulaşılabilir malzemeler, düzenli köşeler ve çocuğun boyuna uygun bir yaşam alanı.",
    color: "yellow",
  },
  {
    title: "Pratik Yaşam",
    text: "Dökmek, katlamak, temizlemek, hazırlamak — bağımsızlık günlük işlerle güçlenir.",
    color: "coral",
  },
  {
    title: "Duyusal Keşif",
    text: "Dokunma, görme, işitme ve hareketle öğrenme; duyuları uyandıran etkinlikler.",
    color: "berry",
  },
] as const;

export const montessoriLead =
  "Şahika Öncü Minikler’de Montessori yaklaşımından ilham alırız: çocuk merkezli, saygılı ve özgür keşfe alan açan bir gün.";

/** Branş dersleri — isimler netleşince `teacher` alanını doldurun */
export const branchTeachers = [
  {
    subject: "Müzik",
    text: "Ritim, ses ve şarkı ile ifade; kulak ve beden uyumu.",
    accent: "lime",
    icon: "music",
  },
  {
    subject: "Drama",
    text: "Hayal gücü, rol oynama ve kendini ifade etme.",
    accent: "coral",
    icon: "drama",
  },
  {
    subject: "İngilizce",
    text: "Oyun ve şarkı yoluyla erken dil farkındalığı.",
    accent: "berry",
    icon: "language",
  },
  {
    subject: "Jimnastik / Spor",
    text: "Denge, güç ve beden farkındalığı; hareketle özgüven.",
    accent: "orange",
    icon: "sport",
  },
  {
    subject: "Dans",
    text: "Müzik eşliğinde hareket, koordinasyon ve neşe.",
    accent: "yellow",
    icon: "dance",
  },
  {
    subject: "Görsel Sanatlar",
    text: "Boyama, yoğurma ve yaratıcı üretim; ince motor beceri.",
    accent: "green",
    icon: "art",
  },
  {
    subject: "Satranç / Zihin Oyunları",
    text: "Odak, planlama ve sabır — yaşa uygun zihin etkinlikleri.",
    accent: "sky",
    icon: "chess",
  },
  {
    subject: "Doğa & Keşif",
    text: "Açık hava, duyusal deneyim ve meraka dayalı gözlem.",
    accent: "mint",
    icon: "nature",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Bizi Arayın Veya Yazın",
    text: "WhatsApp veya telefon ile çocuğunuzun yaşı ve tercih ettiğiniz programı paylaşın.",
  },
  {
    step: "02",
    title: "Kurumu Ziyaret Edin",
    text: "Merkezefendi’deki kreşimizi görün; ortamı ve yaklaşımımızı yakından tanıyın.",
  },
  {
    step: "03",
    title: "Programı Birlikte Netleştirin",
    text: "Tam gün, yarım gün veya esnek seçeneklerden size uygun planı oluşturalım.",
  },
] as const;

export const faqs = [
  {
    q: "Hangi Yaş Gruplarını Kabul Ediyorsunuz?",
    a: "0–6 yaş genel aralığında hizmet veriyoruz. Programlarımız özellikle 18–27 ay, 28–36 ay ve 36–48 ay gruplarına göre yapılandırılır.",
  },
  {
    q: "Günlük Saatleriniz Nedir?",
    a: "Çalışan ebeveynler için tam gün 07:30–18:30’dir. Standart rutin 09:00’da başlar; yarım gün 13:00’te veya tercihe göre 17:00’de sona erebilir.",
  },
  {
    q: "Bir Grupta Kaç Çocuk Olur?",
    a: "Her grupta en fazla 15 çocuk bulunur ve iki çocuk gelişimi uzmanı eşlik eder.",
  },
  {
    q: "Hangi Program Seçenekleri Var?",
    a: "5 tam gün, 5 / 3 / 2 yarım gün, 3 veya 2 tam gün ve saatlik bakım seçenekleri sunuyoruz. Detay için bizi arayabilirsiniz.",
  },
  {
    q: "Yemekler Nasıl Hazırlanıyor?",
    a: "İşlenmiş gıda kullanmıyoruz. Organik ve doğal ürünlerle, mümkün olduğunca kendi üretimimizle beslenme sunuyoruz.",
  },
  {
    q: "Kayıt İçin Ne Yapmalıyım?",
    a: "Telefon veya WhatsApp ile iletişime geçin; ardından kurum ziyareti ve program planlaması ile süreci tamamlarız.",
  },
] as const;
