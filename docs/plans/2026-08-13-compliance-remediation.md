# Compliance remediation — 13 Aug 2026

## HIGH — H1 Expand `/gizlilik`

Add sections in `src/app/gizlilik/page.tsx` (Turkish, same tone):

- **Saklama:** WhatsApp mesajları, talebin sonuçlanmasına kadar işlenir; silme talebi `siteConfig.email`.
- **Harita:** Google Haritalar gömülü haritası; Google’a IP/teknik veri gidebilir. Link to Google’s privacy policy.
- **Barındırma:** Site Vercel üzerinde yayınlanır.
- **Çocuklara ilişkin bilgiler:** Form/WhatsApp’ta yazılan yaş vb. velinin ilettiği veridir; çocuklara yönelik hizmet sunulmaz.
- **Görseller:** Temsili / üretilmiş görsellerdir; kayıtlı çocuk fotoğrafı yoktur.
- **Çerezler:** Pazarlama çerezi ve analitik kullanılmaz.

Do not add a cookie banner.

## MEDIUM — M1 unvan

`manual — user action required`. Only change `legalName` if the client provides it.

## LOW — L2 Instagram

One sentence under Aktarım: Instagram profil linki; gömülü widget yok.
