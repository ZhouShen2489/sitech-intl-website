import Image from "next/image";
import Link from "next/link";

import { siteContent, copy, copyList } from "@/content/siteContent";
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
          <div className="text-sm text-slate-700">{siteContent.contact.linkedin}</div>
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
