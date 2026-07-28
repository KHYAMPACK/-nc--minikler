"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-meadow/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logosu`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            priority
          />
          <span className="font-display text-base font-semibold leading-tight text-ink sm:text-lg">
            Öncü Minikler
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-leaf/12 text-leaf-dark"
                    : "text-muted hover:bg-leaf-soft/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-xl bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-meadow px-4 py-3 lg:hidden"
          aria-label="Mobil menü"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-base ${
                  pathname === link.href
                    ? "bg-leaf/12 text-leaf-dark"
                    : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-2 rounded-xl bg-coral px-3 py-3 text-center font-semibold text-white"
            >
              Ara: {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
