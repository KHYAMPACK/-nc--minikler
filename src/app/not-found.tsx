import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 lg:pt-32">
      <Logo size={88} className="rounded-full shadow-sm" />
      <p className="mt-8 font-display text-sm font-semibold tracking-wide text-leaf">
        404
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Sayfa bulunamadı
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
        Aradığınız sayfa taşınmış veya hiç olmamış olabilir. Ana sayfaya
        dönebilir ya da {siteConfig.shortName} ekibine WhatsApp’tan yazabilirsiniz.
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl bg-leaf px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf-dark"
        >
          Ana sayfaya dön
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
        >
          WhatsApp ile yazın
        </a>
      </div>
    </section>
  );
}
