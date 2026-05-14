import Image from "next/image";
import Link from "next/link";

import { siteContent, copy, copyList } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { withBasePath, withLocale } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const year = new Date().getFullYear();

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
                className="h-8 w-8 object-contain"
              />
            </div>
            <p className="font-serif text-2xl text-ink">{siteContent.brand.name}</p>
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
            {siteContent.navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={withLocale(locale, item.href)}
                  className="text-sm text-slate-700 transition hover:text-ink"
                >
                  {copy(locale, item.label)}
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
            {copyList(locale, siteContent.footer.focusItems).map((item) => (
              <div key={item} className="text-sm leading-7 text-slate-700">
                {item}
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
          <Link
            href={siteContent.contact.linkedinUrl}
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-ink hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.02h4.43V23H.28V8.02Zm7.34 0h4.25v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.77V23h-4.43v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.95-2.87 3.96V23H7.62V8.02Z" />
            </svg>
          </Link>
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
