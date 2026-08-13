"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 lg:pt-32">
      <p className="font-display text-sm font-semibold tracking-wide text-coral">
        Bir sorun oluştu
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Sayfa yüklenemedi
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
        Beklenmeyen bir hata oldu. Tekrar deneyin veya {siteConfig.shortName}{" "}
        ekibiyle WhatsApp üzerinden iletişime geçin.
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-2xl bg-leaf px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf-dark"
        >
          Tekrar dene
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-leaf hover:bg-leaf-soft/50"
        >
          Ana sayfa
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
