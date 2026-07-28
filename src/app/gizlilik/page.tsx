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
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
        Yasal
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
        Gizlilik ve KVKK
      </h1>
      <p className="mt-6 leading-relaxed text-muted">
        {siteConfig.name}, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        kapsamında kişisel verilerinizin güvenliğine önem verir.
      </p>

      <div className="mt-10 space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="font-display text-2xl text-ink">Veri sorumlusu</h2>
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
            Hangi verileri topluyoruz?
          </h2>
          <p className="mt-3">
            İletişim formu veya WhatsApp üzerinden ilettiğiniz ad, telefon ve
            mesaj içeriği gibi bilgiler; talebinizi yanıtlamak amacıyla
            işlenir.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">İşleme amacı</h2>
          <p className="mt-3">
            Bilgi taleplerini karşılamak, randevu / kayıt süreçlerini yürütmek
            ve sizinle iletişime geçmek.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">Aktarım</h2>
          <p className="mt-3">
            Form gönderimi WhatsApp uygulamasına yönlendirir; bu durumda
            mesajlaşma Meta Platforms Ireland Limited / WhatsApp altyapısı
            üzerinden gerçekleşir. Yasal zorunluluk olmadıkça verilerinizi üçüncü
            taraflara satmayız.
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
      </div>
    </section>
  );
}
