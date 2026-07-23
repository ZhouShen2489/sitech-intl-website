import Image from "next/image";
import Link from "next/link";

import { siteContent, copy } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { withBasePath, withLocale, withSiteLocale } from "@/lib/site";

const siteHomePath = process.env.NEXT_PUBLIC_SITE_HOME_PATH || "/";

type SiteFooterProps = {
  locale: Locale;
  variant?: "company" | "telecom";
};

export function SiteFooter({ locale, variant = "company" }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const productHref =
    variant === "telecom"
      ? withSiteLocale("company", locale, "/products/ai-expert-customer-service")
      : withLocale(locale, "/products/ai-expert-customer-service");
  const focusLinks = [
    {
      label: locale === "en" ? "AI Expert Customer Service" : "AI专家客户服务",
      href: productHref,
    },
    {
      label: locale === "en" ? "Telecom Solutions" : "运营商解决方案",
      href: withSiteLocale("telecom", locale),
    },
  ];
  const pageLinks =
    variant === "telecom"
      ? [
          { href: withLocale(locale, "/"), label: locale === "en" ? "Telecom Home" : "运营商首页" },
          { href: withLocale(locale, "/solutions/telecom"), label: locale === "en" ? "Telecom Solutions" : "运营商解决方案" },
          { href: withLocale(locale, "/contact"), label: locale === "en" ? "Contact" : "联系" },
        ]
      : siteContent.navigation.map((item) => ({
          href:
            item.href === "/solutions"
              ? withSiteLocale("telecom", locale)
              : item.href.startsWith("http://") || item.href.startsWith("https://")
                ? item.href.endsWith("sitech-intl.com")
                  ? `${item.href}/${locale}`
                  : item.href
                : withLocale(locale, item.href === "/" ? siteHomePath : item.href),
          label: copy(locale, item.label),
        }));

  return (
    <footer className="border-t border-slate-200 bg-[#f7f8fa]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-card">
              <Image
                src={withBasePath("/brand/logo-symbol.png")}
                alt="Si-Tech logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="font-display text-2xl text-ink">{siteContent.brand.name}</p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-700">
            {copy(locale, siteContent.brand.summary)}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-tide">
            {copy(locale, siteContent.footer.navTitle)}
          </p>
          <div className="space-y-3">
            {pageLinks.map((item) => (
              <div key={`${item.href}-${item.label}`}>
                <Link href={item.href} className="text-sm text-slate-700 transition hover:text-ink">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-tide">
            {copy(locale, siteContent.footer.focusTitle)}
          </p>
          <div className="space-y-3">
            {focusLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="standalone-link inline-flex rounded-full border px-3.5 py-2 text-sm font-semibold leading-5 text-[#0b2f6f] transition hover:border-[#7ce6ba]/70 hover:text-ink"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tide">
            {copy(locale, siteContent.footer.contactTitle)}
          </p>
          <div className="text-sm text-slate-700">{siteContent.contact.email}</div>
          <div className="text-sm text-slate-700">{siteContent.contact.phone}</div>
          <div className="text-sm leading-6 text-slate-700">{siteContent.contact.address}</div>
          <div className="flex items-center gap-2">
            <Link
              href={siteContent.contact.linkedinUrl}
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.02h4.43V23H.28V8.02Zm7.34 0h4.25v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.77V23h-4.43v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.95-2.87 3.96V23H7.62V8.02Z" />
              </svg>
            </Link>
            {locale === "zh" ? (
              <details className="group relative inline-flex">
                <summary aria-label="WeChat" className="inline-flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-ink hover:bg-ink hover:text-white [&::-webkit-details-marker]:hidden">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 scale-[1.12] fill-none stroke-current" strokeWidth="2.1">
                    <path d="M7.2 5.2c-3.1 0-5.6 2-5.6 4.5 0 1.5.9 2.8 2.3 3.6l-.7 2.2 2.5-1.2c.5.1 1 .2 1.5.2 3.1 0 5.6-2 5.6-4.5s-2.5-4.8-5.6-4.8Z" />
                    <path d="M15.4 8.5c3.1 0 5.6 1.9 5.6 4.4 0 1.4-.8 2.6-2.2 3.4l.6 2-2.4-1.1c-.5.1-1 .2-1.6.2-2.5 0-4.7-1.4-5.4-3.3" />
                    <circle cx="5.5" cy="9.7" r=".55" fill="currentColor" stroke="none" />
                    <circle cx="8.8" cy="9.7" r=".55" fill="currentColor" stroke="none" />
                  </svg>
                </summary>
                <div className="absolute bottom-12 left-1/2 z-20 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-[0_18px_50px_rgba(15,38,67,0.18)]">
                  <Image
                    src={withBasePath("/images/contact/wechat-qr.jpg")}
                    alt="WeChat QR code"
                    width={560}
                    height={711}
                    className="h-auto w-full rounded-xl"
                  />
                  <p className="mt-2 text-[11px] font-semibold text-slate-500">WeChat</p>
                </div>
              </details>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            {year} {siteContent.brand.name}. {copy(locale, siteContent.footer.copyright)}
          </p>
          <div className="flex gap-5">
            <Link href={withLocale(locale, "/privacy")} className="transition hover:text-ink">
              {locale === "en" ? "Privacy" : "隐私说明"}
            </Link>
            <Link href={withLocale(locale, "/contact")} className="transition hover:text-ink">
              {locale === "en" ? "Contact" : "联系"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
