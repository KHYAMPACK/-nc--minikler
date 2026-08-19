import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.gizlilik.title },
  description: pageMeta.gizlilik.description,
  alternates: { canonical: "/gizlilik" },
  robots: { index: true, follow: true },
};

export default function GizlilikPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
      <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        Gizlilik Ve KVKK
      </h1>
      <p className="mt-6 leading-relaxed text-muted">
        {siteConfig.name}, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        kapsamında kişisel verilerinizin güvenliğine önem verir.
      </p>

      <div className="mt-10 space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="font-display text-2xl text-ink">Veri Sorumlusu</h2>
          <p className="mt-3">
            {siteConfig.name}
            <br />
            {siteConfig.address.full}
            <br />
            E-posta: {siteConfig.email}
            <br />
            Telefon: {siteConfig.phoneDisplay}
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">
            Hangi Verileri Topluyoruz?
          </h2>
          <p className="mt-3">
            İletişim formu veya WhatsApp üzerinden ilettiğiniz ad, telefon ve
            mesaj içeriği gibi bilgiler; talebinizi yanıtlamak amacıyla
            işlenir.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">İşleme Amacı</h2>
          <p className="mt-3">
            Bilgi taleplerini karşılamak, randevu / kayıt süreçlerini yürütmek
            ve sizinle iletişime geçmek.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">
            Çocuklara İlişkin Bilgiler
          </h2>
          <p className="mt-3">
            Bu site ebeveynlere yöneliktir; çocuklara doğrudan çevrimiçi hizmet
            sunulmaz. Form veya WhatsApp mesajında paylaştığınız çocuk yaşı,
            adı gibi bilgiler, velinin kendi iradesiyle ilettiği verilerdir ve
            yalnızca talebinizi yanıtlamak için kullanılır.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Aktarım</h2>
          <p className="mt-3">
            Form gönderimi WhatsApp uygulamasına yönlendirir; bu durumda
            mesajlaşma Meta Platforms Ireland Limited / WhatsApp altyapısı
            üzerinden gerçekleşir. Instagram profilimize yalnızca bağlantı
            verilir; sitede gömülü Instagram bileşeni bulunmaz. Yasal
            zorunluluk olmadıkça verilerinizi üçüncü taraflara satmayız.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Harita</h2>
          <p className="mt-3">
            Ana sayfa ve iletişim sayfasında Google Haritalar gömülü haritası
            kullanılır. Haritayı görüntülediğinizde IP adresiniz ve teknik
            verileriniz Google’a iletilebilir. Google’ın gizlilik politikasına{" "}
            <a
              href="https://policies.google.com/privacy?hl=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-leaf-dark underline underline-offset-2 hover:text-leaf"
            >
              bu bağlantıdan
            </a>{" "}
            ulaşabilirsiniz.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Barındırma</h2>
          <p className="mt-3">
            Site Vercel üzerinde yayınlanır. Sayfa ziyaretlerinde IP adresi ve
            teknik günlükler barındırma altyapısında işlenebilir.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Saklama</h2>
          <p className="mt-3">
            WhatsApp mesajları, talebinizin sonuçlanmasına kadar işlenir. Silme
            taleplerinizi {siteConfig.email} adresine iletebilirsiniz.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Çerezler</h2>
          <p className="mt-3">
            Pazarlama çerezi ve analitik araçları kullanılmaz. Zorunlu teknik
            barındırma dışında izleme yapılmaz.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Haklarınız</h2>
          <p className="mt-3">
            KVKK m.11 kapsamında verilerinizin işlenip işlenmediğini öğrenme,
            düzeltme, silme ve itiraz taleplerinizi {siteConfig.email} adresine
            iletebilirsiniz.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Görseller</h2>
          <p className="mt-3">
            Ana sayfadaki bahçe, oyun ve etkinlik görselleri temsili ve
            üretilmiş görsellerdir. Galeri sayfasındaki fotoğraflar
            kurumumuzun iç mekânını gösterir. Kayıtlı çocuklarımızın
            fotoğrafları yayınlanmaz.
          </p>
        </div>
      </div>
    </section>
  );
}
