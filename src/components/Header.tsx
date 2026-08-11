"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandName, Logo } from "@/components/Logo";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  function linkHref(link: (typeof navLinks)[number]) {
    if (isHome && link.homeHash) return link.homeHash;
    return link.href;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-line/70 bg-meadow/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo size={44} className="shrink-0 drop-shadow-sm sm:hidden" />
          <Logo size={52} className="hidden shrink-0 drop-shadow-sm sm:block" />
          <BrandName
            size="sm"
            className="hidden text-left text-ink min-[380px]:block"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => {
            const href = linkHref(link);
            const showActive =
              isHome ? link.href === "/" : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  showActive
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
          className="inline-flex items-center justify-center rounded-xl border border-line bg-surface/90 px-3 py-2 text-sm font-medium text-ink lg:hidden"
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
            {navLinks.map((link) => {
              const href = linkHref(link);
              const showActive =
                isHome ? link.href === "/" : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-base ${
                    showActive ? "bg-leaf/12 text-leaf-dark" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
