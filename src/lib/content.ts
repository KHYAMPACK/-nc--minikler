export const teamContinuity = {
  title: "Güçlü Bir Eğitim, Güçlü Bir Ekip ile Başlar",
  body: "Öğretmenlerimizin büyük bir bölümü uzun yıllardır kurumumuzun eğitim yolculuğuna eşlik ediyor. Bizim için bu süreklilik yalnızca çalışma yılı değil; ortak bir eğitim anlayışının, güçlü ekip kültürünün ve kuruma duyulan aidiyetin göstergesidir.",
  pillars: [
    {
      title: "Ortak Anlayış",
      text: "Yıllar içinde birlikte yoğrulan bir dil: her çocuğun temposuna saygı, aynı bakış, aynı özen.",
      accent: "green" as const,
    },
    {
      title: "Ekip Kültürü",
      text: "Aynı çatı altında uzun yıllar çalışmak; birbirini tamamlayan bir ritim ve güvenilir bir günlük işleyiş.",
      accent: "coral" as const,
    },
    {
      title: "Aidiyet",
      text: "Burada kalmayı seçmek, çocuklarınızın her sabah tanıdık yüzlerle karşılanması demektir.",
      accent: "berry" as const,
    },
  ],
} as const;

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
    detailHref: "/programlar#18-27-ay",
  },
  {
    title: "28–36 Ay",
    text: "Dil, özgüven ve sosyal oyun. Tuvalet eğitimi ve birlikte yemek kültürü.",
    accent: "sun" as const,
    detailHref: "/programlar#28-36-ay",
  },
  {
    title: "36–48 Ay",
    text: "Hayal gücü, ifade ve hazırlık. Kelime dağarcığı ve akran ilişkileri güçlenir.",
    accent: "coral" as const,
    detailHref: "/programlar#36-48-ay",
  },
] as const;

/** Detailed age program — shown on /programlar only; homepage keeps short ageGroups */
export const ageProgram18to27 = {
  title: "18–27 Ay Eğitim Programı",
  intro: [
    "18–27 ay döneminde çocuklarımızın gelişimsel ihtiyaçlarını merkeze alan; güven, sevgi, oyun, hareket ve keşif temelli bir eğitim programı uyguluyoruz.",
    "Günlük akışımız çocukların yaş ve gelişim özellikleri doğrultusunda esnek olarak planlanır. Öz bakım ve beslenme süreçleri de eğitimin doğal bir parçası olarak ele alınır.",
  ],
  scheduleTitle: "Örnek Günlük Akış",
  schedule: [
    {
      time: "08.00 – 09.00",
      title: "Okula Geliş Ve Serbest Oyun",
      text: "Çocuklarımız öğretmenleri tarafından karşılanır. Güne sakin bir geçiş, serbest oyun ve bireysel ilgi ile başlanır.",
    },
    {
      time: "09.00 – 09.30",
      title: "Kahvaltı Ve Öz Bakım",
      text: "Kahvaltı, el-yüz temizliği ve yaş grubuna uygun öz bakım rutinleri.",
    },
    {
      time: "09.30 – 10.00",
      title: "Günaydın Çemberi",
      text: "Kısa şarkılar, ritim çalışmaları, parmak oyunları, taklit ve dil gelişimini destekleyen eğlenceli etkinlikler.",
    },
    {
      time: "10.00 – 10.30",
      title: "Keşfet – Dene – Öğren",
      text: "Duyusal oyunlar, renkler, dokular, su ve kum çalışmaları, basit deneyler ve günlük yaşam etkinlikleriyle yaparak ve yaşayarak öğrenme.",
    },
    {
      time: "10.30 – 11.00",
      title: "Hareket Zamanı",
      text: "Yaşa uygun jimnastik, denge, koordinasyon, dans ve büyük kas gelişimini destekleyen hareket oyunları.",
    },
    {
      time: "11.00 – 11.30",
      title: "Açık Hava Ve Bahçe Zamanı",
      text: "Hava koşullarına uygun olarak doğayla buluşma, bahçe oyunları ve çevreyi keşfetme.",
    },
    {
      time: "11.30 – 12.00",
      title: "Öğle Yemeği",
      text: "",
    },
    {
      time: "12.00 – 12.30",
      title: "Sakinleşme Ve Uykuya Hazırlık",
      text: "Hikâye, sakin müzik ve bireysel ihtiyaçlara göre uykuya geçiş.",
    },
    {
      time: "12.30 – 14.30",
      title: "Uyku / Dinlenme Zamanı",
      text: "Her çocuğun uyku ve dinlenme ihtiyacı bireysel olarak gözetilir.",
    },
    {
      time: "14.30 – 15.00",
      title: "Uyanma, Öz Bakım Ve İkindi Öğünü",
      text: "",
    },
    {
      time: "15.00 – 15.30",
      title: "Sanat Ve Yaratıcılık",
      text: "Boya, hamur, müzik, ritim ve yaş grubuna uygun yaratıcı çalışmalar.",
    },
    {
      time: "15.30 – 16.00",
      title: "Hikâye Ve Dil Zamanı",
      text: "Resimli kitaplar, kuklalar, ses ve kelime oyunlarıyla dil gelişiminin desteklenmesi.",
    },
    {
      time: "16.00 – 17.00",
      title: "Oyun, Bahçe Ve Günün Tamamlanması",
      text: "Serbest oyun, öğretmen eşliğinde küçük grup etkinlikleri ve eve dönüş hazırlıkları.",
    },
  ],
  closingTitle: "Her Çocuğun Ritmine Saygı",
  closing: [
    "18–27 ay döneminde uyku, beslenme, tuvalet/bez, hareket ve duygusal ihtiyaçların her çocukta farklı olabileceğini biliyoruz. Bu nedenle günlük programımız katı bir saat çizelgesi olarak değil, çocuğun bireysel ritmine uyum sağlayan esnek bir eğitim akışı olarak uygulanır.",
    "Öncü Minikler’de küçük adımlar, büyük keşiflere dönüşür.",
  ],
} as const;

export const ageProgram28to36 = {
  title: "28–36 Ay Eğitim Programı",
  intro: [
    "28–36 ay döneminde çocuklarımızın gelişimsel ihtiyaçlarını merkeze alan; bağımsızlık, sosyal etkileşim, dil gelişimi, keşif ve oyun temelli bir eğitim programı uyguluyoruz.",
    "Günlük akışımız çocukların yaş ve gelişim özellikleri doğrultusunda esnek olarak planlanır. Öz bakım becerileri, tuvalet eğitimi süreci ve sorumluluk alma deneyimleri de eğitimin doğal bir parçası olarak ele alınır.",
  ],
  scheduleTitle: "Örnek Günlük Akış",
  schedule: [
    {
      time: "08.00 – 09.00",
      title: "Okula Geliş Ve Serbest Oyun",
      text: "Çocuklarımız öğretmenleri tarafından karşılanır. Akran etkileşimi, serbest oyun ve güne yumuşak bir başlangıç yapılır.",
    },
    {
      time: "09.00 – 09.30",
      title: "Kahvaltı Ve Öz Bakım",
      text: "Kahvaltı, el-yüz temizliği, tuvalet rutini ve yaş grubuna uygun öz bakım becerilerinin desteklenmesi.",
    },
    {
      time: "09.30 – 10.00",
      title: "Günaydın Çemberi",
      text: "Şarkılar, ritim çalışmaları, sohbet zamanı, duygu paylaşımı ve dil gelişimini destekleyen etkileşimli etkinlikler.",
    },
    {
      time: "10.00 – 10.30",
      title: "Keşfet – Dene – Öğren",
      text: "Basit bilim etkinlikleri, sınıflama çalışmaları, renk–şekil oyunları, problem çözme ve günlük yaşam becerilerini destekleyen öğrenme deneyimleri.",
    },
    {
      time: "10.30 – 11.00",
      title: "Hareket Ve Koordinasyon Zamanı",
      text: "Daha karmaşık hareket oyunları, denge parkurları, grup oyunları, dans ve koordinasyon çalışmaları.",
    },
    {
      time: "11.00 – 11.30",
      title: "Açık Hava Ve Sosyal Oyun",
      text: "Bahçe etkinlikleri, akranla oyun kurma, paylaşma ve sıra bekleme becerilerini destekleyen serbest zaman.",
    },
    {
      time: "11.30 – 12.00",
      title: "Öğle Yemeği",
      text: "",
    },
    {
      time: "12.00 – 12.30",
      title: "Sakinleşme Ve Dinlenmeye Geçiş",
      text: "Hikâye, nefes egzersizleri, sakin müzik ve bireysel ihtiyaçlara göre uykuya/dinlenmeye hazırlık.",
    },
    {
      time: "12.30 – 14.30",
      title: "Uyku / Dinlenme Zamanı",
      text: "Çocukların bireysel uyku ve dinlenme ihtiyaçları gözetilir.",
    },
    {
      time: "14.30 – 15.00",
      title: "Uyanma, Öz Bakım Ve İkindi Öğünü",
      text: "",
    },
    {
      time: "15.00 – 15.30",
      title: "Sanat, Üretim Ve Yaratıcılık",
      text: "Kesme–yapıştırma, boyama, hamur çalışmaları, müzik ve ritimle ifade becerilerinin desteklenmesi.",
    },
    {
      time: "15.30 – 16.00",
      title: "Dil, Hikâye Ve Drama Zamanı",
      text: "Hikâye anlatımı, kukla oyunları, rol yapma etkinlikleri ve kelime dağarcığını geliştiren çalışmalar.",
    },
    {
      time: "16.00 – 17.00",
      title: "Oyun, Sosyal Etkileşim Ve Günün Tamamlanması",
      text: "Serbest oyun, grup oyunları, sorumluluk alma çalışmaları ve eve dönüş hazırlıkları.",
    },
  ],
  closingTitle: "Her Çocuğun Ritmine Saygı",
  closing: [
    "28–36 ay döneminde çocukların tuvalet eğitimi, bağımsızlık kazanımı, sosyal ilişkiler ve dil gelişimi hızla ilerler. Bu nedenle günlük programımız çocuğun bireysel gelişim hızına uyum sağlayan, esnek ve destekleyici bir eğitim akışı olarak uygulanır.",
    "Öncü Minikler’de her yeni beceri, özgüvenle atılan bir adıma dönüşür.",
  ],
} as const;

export const ageProgram36to48 = {
  title: "36–48 Ay Eğitim Programı",
  intro: [
    "36–48 ay döneminde çocuklarımızın gelişimsel ihtiyaçlarını merkeze alan; hayal gücü, ifade, akran ilişkileri, problem çözme ve keşif temelli bir eğitim programı uyguluyoruz.",
    "Günlük akışımız çocukların yaş ve gelişim özellikleri doğrultusunda esnek olarak planlanır. Bağımsız öz bakım, sorumluluk alma, grup içinde iletişim ve erken öğrenme deneyimleri eğitimin doğal bir parçası olarak ele alınır.",
  ],
  scheduleTitle: "Örnek Günlük Akış",
  schedule: [
    {
      time: "08.00 – 09.00",
      title: "Okula Geliş Ve Serbest Oyun",
      text: "Çocuklarımız öğretmenleri tarafından karşılanır. Akranlarla sohbet, serbest oyun ve güne güvenli, neşeli bir başlangıç yapılır.",
    },
    {
      time: "09.00 – 09.30",
      title: "Kahvaltı Ve Öz Bakım",
      text: "Kahvaltı, el-yüz temizliği, tuvalet rutini ve bağımsız öz bakım becerilerinin güçlendirilmesi.",
    },
    {
      time: "09.30 – 10.00",
      title: "Günaydın Çemberi",
      text: "Sohbet, duygu paylaşımı, şarkı ve ritim; günün planını birlikte konuşma ve kelime dağarcığını zenginleştiren etkileşimler.",
    },
    {
      time: "10.00 – 10.40",
      title: "Keşfet – Dene – Öğren",
      text: "Gözlem, sınıflama, sayma ve karşılaştırma; basit proje çalışmaları, merak soruları ve yaparak-yaşayarak öğrenme deneyimleri.",
    },
    {
      time: "10.40 – 11.10",
      title: "Hareket, Oyun Ve Koordinasyon",
      text: "Grup oyunları, denge ve koordinasyon parkurları, dans ve kurallı oyunlarla büyük kas gelişimi ve sosyal iş birliği.",
    },
    {
      time: "11.10 – 11.40",
      title: "Açık Hava Ve Bahçe Zamanı",
      text: "Bahçede serbest ve yönlendirilmiş oyun, doğa gözlemi, paylaşma ve birlikte kurulan oyunlar.",
    },
    {
      time: "11.40 – 12.15",
      title: "Öğle Yemeği",
      text: "Masa alışkanlığı, kendi yemeğini yönetme ve birlikte sofraya oturma kültürü.",
    },
    {
      time: "12.15 – 12.45",
      title: "Sakinleşme Ve Dinlenmeye Geçiş",
      text: "Hikâye, nefes ve sakinleşme çalışmaları; bireysel ihtiyaca göre uykuya veya sessiz dinlenmeye hazırlık.",
    },
    {
      time: "12.45 – 14.30",
      title: "Uyku / Sessiz Dinlenme",
      text: "Uyuyan çocuklar için dinlenme; uyanık kalanlar için sessiz köşe, kitap veya sakin etkinlik seçenekleri.",
    },
    {
      time: "14.30 – 15.00",
      title: "Uyanma, Öz Bakım Ve İkindi Öğünü",
      text: "",
    },
    {
      time: "15.00 – 15.40",
      title: "Sanat, Üretim Ve Yaratıcılık",
      text: "Boyama, kolaj, üç boyutlu çalışmalar, müzik ve ritimle kendini ifade etme; süreç odaklı yaratıcı üretim.",
    },
    {
      time: "15.40 – 16.15",
      title: "Dil, Hikâye Ve Drama",
      text: "Hikâye anlatımı, drama ve rol oyunları, kukla çalışmaları; dinleme, anlatma ve hayal gücünü güçlendiren etkinlikler.",
    },
    {
      time: "16.15 – 17.00",
      title: "Oyun, Sorumluluk Ve Günün Tamamlanması",
      text: "Serbest veya küçük grup oyunları, sınıf sorumlulukları, günün özeti ve eve dönüş hazırlıkları.",
    },
  ],
  closingTitle: "Her Çocuğun Ritmine Saygı",
  closing: [
    "36–48 ay döneminde hayal gücü, dil, akran ilişkileri ve bağımsızlık hızla genişler. Bu nedenle günlük programımız katı bir saat çizelgesi değil; her çocuğun temposuna, ilgisine ve hazırbulunuşluğuna uyum sağlayan esnek bir eğitim akışı olarak uygulanır.",
    "Öncü Minikler’de merak, cesaret ve ifade bir arada büyür.",
  ],
} as const;

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
    text: "Reçel, turşu, zeytin, zeytinyağı, tereyağı ve salça gibi temel ürünler organik ve kendi üretimimizle hazırlanır.",
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
    text: "Ulaşılabilir malzemeler, düzenli köşeler ve çocuğunuza uygun bir yaşam alanı.",
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
  "Şahika Öncü Minikler’de çocuklar yaparak ve yaşayarak öğrenir. Kendi temposunda keşfeder, dener ve günlük yaşamın içinde büyür.";

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
    subject: "Akıl Oyunları",
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
    title: "Aileyi Tanırız",
    text: "Randevu gününde velimizle birebir görüşerek ailemizi tanır; çocuğumuzun yaşı, gelişim özellikleri, günlük rutinleri, ilgi alanları, ihtiyaçları ve varsa daha önceki okul deneyimleri hakkında bilgi alırız.",
  },
  {
    step: "02",
    title: "Çocukla Tanışırız",
    text: "Ardından çocuğumuzla tanışır, okul ortamındaki iletişimini ve ihtiyaçlarını gözlemleyerek hangi eğitim programının ve devam süresinin onun için daha uygun olacağını değerlendiririz.",
  },
  {
    step: "03",
    title: "Yaklaşımımızı Anlatırız",
    text: "Bu ilk görüşmede ailemize eğitim yaklaşımımız, günlük işleyişimiz, sınıf düzenimiz ve programlarımız hakkında ayrıntılı bilgi verir; merak edilen tüm soruları yanıtlarız.",
  },
  {
    step: "04",
    title: "Birlikte Karar Veririz",
    text: "Karşılıklı değerlendirme sonrasında çocuğumuz için Öncü Minikler’in uygun olduğuna birlikte karar verdiğimizde kayıt işlemlerini tamamlar ve uyum sürecini planlarız.",
  },
] as const;

export const processClosing =
  "Çünkü bizim için kayıt, bir form doldurmakla değil; çocuğu tanımakla başlar.";

export const faqs = [
  {
    q: "Hangi Yaş Gruplarını Kabul Ediyorsunuz?",
    a: "Programlarımız özellikle 18–27 ay, 28–36 ay ve 36–48 ay gruplarına göre yapılandırılır.",
  },
  {
    q: "Günlük Saatleriniz Nedir?",
    a: "Çalışan ebeveynler için tam gün 07:30–18:30’dir. Standart rutin 09:00’da başlar; yarım gün 13:00’te veya tercihe göre 17:00’de sona erebilir.",
  },
  {
    q: "Bir Grupta Kaç Çocuk Olur?",
    a: "Her grupta en fazla 15 çocuk bulunur ve iki çocuk gelişimi uzmanı eşlik eder. Küçük gruplar için en fazla 10 çocuk bulunur.",
  },
  {
    q: "Hangi Program Seçenekleri Var?",
    a: "5 tam gün, 5 / 3 / 2 yarım gün, 3 veya 2 tam gün ve saatlik bakım seçenekleri sunuyoruz. Detay için bizi arayabilirsiniz.",
  },
  {
    q: "Yemekler Nasıl Hazırlanıyor?",
    a: "Okulumuzun mutfağında işlenmiş gıda kullanmıyoruz. Organik ve doğal ürünlerle, mümkün olduğunca kendi üretimimizle beslenme sunuyoruz.",
  },
  {
    q: "Kayıt İçin Ne Yapmalıyım?",
    a: "Telefon veya WhatsApp ile iletişime geçin; ardından kurum ziyareti ve program planlaması ile süreci tamamlarız.",
  },
] as const;
