import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CtaBanner({
  title = "Minikleriniz için butik bir başlangıç",
  subtitle = "WhatsApp’tan yazın veya arayın; program ve ziyaret için hemen dönüş yapalım.",
}: Props) {
  return (
    <section className="border-y border-leaf/20 bg-gradient-to-br from-leaf to-leaf-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-white/90">{subtitle}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-xl border border-white/50 bg-white px-5 py-3 text-center text-sm font-semibold text-leaf-dark transition hover:bg-sun-soft"
          >
            Ara: {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-whatsapp px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            WhatsApp ile yazın
          </a>
          <Link
            href="/iletisim"
            className="rounded-xl border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
