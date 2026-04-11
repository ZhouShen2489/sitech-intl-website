"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent, copy } from "@/content/siteContent";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withLocale } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const localeLabel = locale === "en" ? "中文" : "EN";

  function isActive(href: string) {
    const localizedHref = withLocale(locale, href);

    if (href === "/") {
      return pathname === localizedHref;
    }

    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href={withLocale(locale)} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            <Image
              src="/brand/logo-symbol.png"
              alt="Si-Tech logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-xl text-white">{siteContent.brand.name}</p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent/90">
              {copy(locale, siteContent.brand.headerTagline)}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={withLocale(locale, item.href)}
              className={`rounded-full px-3 py-2 text-sm transition ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/72 hover:bg-white/6 hover:text-white"
              }`}
            >
              {copy(locale, item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchLocaleInPath(pathname, nextLocale)}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            {localeLabel}
          </Link>
          <Link
            href={withLocale(locale, "/contact")}
            className="rounded-full bg-signal px-5 py-2 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Talk to Us" : "开始沟通"}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-white/15 p-3 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className={`rounded-2xl px-4 py-3 text-base ${
                  isActive(item.href) ? "bg-white/10 text-white" : "text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {copy(locale, item.label)}
              </Link>
            ))}
            <Link
              href={switchLocaleInPath(pathname, nextLocale)}
              className="mt-3 rounded-full border border-white/15 px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              {localeLabel}
            </Link>
            <Link
              href={withLocale(locale, "/contact")}
              className="rounded-full bg-signal px-4 py-3 text-center text-sm font-semibold text-ink"
              onClick={() => setIsOpen(false)}
            >
              {locale === "en" ? "Talk to Us" : "开始沟通"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
