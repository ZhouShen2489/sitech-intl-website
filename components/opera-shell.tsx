"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { operaContent, operaCopy } from "@/content/opera-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withLocale } from "@/lib/site";

const companyOrigin = process.env.NEXT_PUBLIC_COMPANY_ORIGIN ?? "";

function companyHref(locale: Locale, path = "") {
  if (!companyOrigin) {
    return withLocale(locale, path || "/company");
  }

  const companyPath = path === "/company" ? "" : path;
  return `${companyOrigin}/${locale}${companyPath}`;
}

export function OperaHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "zh" : "en";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-[1680px] items-center justify-between gap-4 px-6 py-5 lg:px-14">
        <Link href={withLocale(locale)} className="flex min-w-0 items-center gap-3">
          <span className="overflow-hidden rounded-lg border border-white/12 bg-white shadow-[0_0_24px_rgba(70,135,255,0.2)]">
            <Image src="/brand/logo-symbol.png" alt="" width={28} height={28} className="h-7 w-7" />
          </span>
          <div className="truncate text-sm font-semibold tracking-[-0.02em] text-white/92 sm:text-base">
            Enterprise Opera <span className="text-[#4b92ff]">OS</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-[rgba(5,11,22,0.42)] px-6 py-3 backdrop-blur-xl md:flex">
          <div className="group relative">
            <Link href="#demo" className="inline-flex items-center text-xs text-white/64 transition hover:text-white">
              {locale === "en" ? "Product" : "产品"}
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[rgba(5,11,22,0.94)] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <Link
                  href={companyHref(locale, "/products/helport")}
                  className="block rounded-xl px-4 py-3 transition hover:bg-white/8"
                >
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-[#76aaff]">
                    {locale === "en" ? "Partner" : "合作伙伴"}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">Helport</span>
                </Link>
              </div>
            </div>
          </div>
          <Link href={companyHref(locale, "/about")} className="text-xs text-white/64 transition hover:text-white">
            {locale === "en" ? "About Us" : "关于我们"}
          </Link>
          <Link href="#contact" className="text-xs text-white/64 transition hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[rgba(5,11,22,0.42)] px-2 py-2 backdrop-blur-xl">
          <Link
            href={switchLocaleInPath(pathname, nextLocale)}
            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76 transition hover:bg-white/10 hover:text-white"
          >
            {nextLocale}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function OperaFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#040b13] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-white/8 pb-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/34">{siteContent.brand.name}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{operaContent.footer.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58">
              {operaCopy(locale, operaContent.footer.summary)}
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3 lg:justify-end">
            {operaContent.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href.startsWith("/") ? companyHref(locale, link.href) : link.href}
                className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
              >
                {operaCopy(locale, link.label)}
              </Link>
            ))}
            <Link
              href={withLocale(locale, "/privacy")}
              className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
            >
              {locale === "en" ? "Privacy Policy" : "隐私政策"}
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-sm text-white/34 md:flex-row md:items-center md:justify-between">
          <p>{year} Si-Tech Intl. All rights reserved.</p>
          <p>{locale === "en" ? "Concept demo website" : "概念验证官网"}</p>
        </div>
      </div>
    </footer>
  );
}
