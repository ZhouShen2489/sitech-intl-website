"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { operaContent, operaCopy } from "@/content/opera-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withLocale, withSiteLocale } from "@/lib/site";

function companyHref(locale: Locale, path = "") {
  const companyPath = path === "/company" ? "" : path;
  return withSiteLocale("company", locale, companyPath);
}

export function OperaHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "zh" : "en";
  const aboutHref = companyHref(locale, "/about");
  const contactHref = companyHref(locale, "/contact");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="px-4 py-4 sm:px-6 lg:px-10 lg:py-5">
        <div className="pointer-events-auto mx-auto flex max-w-[1680px] items-center justify-between gap-4 rounded-[1.9rem] border border-white/18 bg-[linear-gradient(180deg,rgba(18,29,49,0.74),rgba(18,29,49,0.48))] px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl sm:px-6 lg:px-8">
        <Link href={withLocale(locale)} className="flex min-w-0 items-center gap-3">
          <span className="overflow-hidden rounded-[0.9rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(223,234,255,0.84))] p-1 shadow-[0_8px_28px_rgba(12,28,66,0.28)] ring-1 ring-white/12 backdrop-blur-xl">
            <Image src="/brand/logo-symbol.png" alt="" width={28} height={28} className="h-7 w-7 rounded-[0.55rem]" />
          </span>
          <div className="truncate text-sm font-semibold tracking-[-0.02em] text-white sm:text-base [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
            Enterprise Opera <span className="text-[#4b92ff]">OS</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl md:flex">
          <Link
            href={aboutHref}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/12 hover:text-white"
          >
            {locale === "en" ? "About Us" : "关于我们"}
          </Link>
          <Link
            href={contactHref}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/12 hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
          <Link
            href={switchLocaleInPath(pathname, nextLocale)}
            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/12 hover:text-white"
          >
            {nextLocale}
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}

export function OperaFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const telecomHref = withSiteLocale("telecom", locale);
  const helportHref = companyHref(locale, "/products/helport");
  const featuredLinks = [
    {
      href: telecomHref,
      eyebrow: locale === "en" ? "Featured" : "重点",
      label: locale === "en" ? "Telecom / MVNO" : "运营商 / MVNO",
    },
    {
      href: helportHref,
      eyebrow: locale === "en" ? "New" : "新产品",
      label: locale === "en" ? "Helport AI" : "AI 专家客服",
    },
  ];

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
            {featuredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-full border border-[#7ce6ba]/45 bg-[linear-gradient(135deg,rgba(76,123,255,0.24),rgba(124,230,186,0.13),rgba(242,185,109,0.13))] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_28px_rgba(86,151,255,0.16)] transition hover:border-[#9df1cf]/75 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_42px_rgba(124,230,186,0.24)]"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.2),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-70 transition group-hover:translate-x-4" />
                <span className="relative inline-flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/72">{link.eyebrow}</span>
                  <span>{link.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7ce6ba] shadow-[0_0_12px_#7ce6ba]" />
                </span>
              </Link>
            ))}
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
          <p>{locale === "en" ? "Standalone product site" : "独立产品页"}</p>
        </div>
      </div>
    </footer>
  );
}
