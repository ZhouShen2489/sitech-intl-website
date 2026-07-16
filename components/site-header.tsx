"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent, copy } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withBasePath, withLocale, withSiteLocale } from "@/lib/site";

type NavMode = "global" | "products" | "solutions";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

function modeForPath(pathname: string): NavMode {
  if (pathname.includes("/products")) return "products";
  if (pathname.includes("/solutions")) return "solutions";
  return "global";
}

export function SiteHeader({ locale, mode: modeOverride }: { locale: Locale; mode?: NavMode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"products" | "solutions" | null>(null);
  const mode = modeOverride ?? modeForPath(pathname);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const productHref = withLocale(locale, "/products/ai-expert-customer-service");
  const telecomHref = withSiteLocale("telecom", locale);

  const isActive = (href: string) => {
    const localized = withLocale(locale, href);
    return href === "/" ? pathname === localized : pathname === localized || pathname.startsWith(`${localized}/`);
  };

  const globalItems = siteContent.navigation;

  return (
    <header className="sticky top-0 z-50 border-b border-[#0f5137]/10 bg-white/95 text-[#08251c] shadow-[0_10px_34px_rgba(8,48,34,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-5 px-5 py-3 lg:px-10">
        <Link href={withLocale(locale, "/")} className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#12583e]/10 bg-white p-1.5 shadow-[0_10px_26px_rgba(11,80,55,0.12)]">
            <Image src={withBasePath("/brand/logo-symbol.png")} alt="Si-Tech logo" width={32} height={32} />
          </span>
          <span>
            <span className="block text-xl font-bold leading-none tracking-[-0.025em]">{siteContent.brand.name}</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#287356]">Telecom · Enterprise · AI</span>
          </span>
        </Link>

        {mode === "global" ? (
          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
            {globalItems.map((item) => {
              const products = item.href === "/products";
              const solutions = item.href === "/solutions";
              const hasMenu = products || solutions;
              const menuKey = products ? "products" : solutions ? "solutions" : null;

              return (
                <div key={item.href} className="relative" onMouseEnter={() => menuKey && setOpenMenu(menuKey)}>
                  <Link
                    href={withLocale(locale, item.href)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold transition ${
                      products
                        ? "bg-[#092a20] text-white shadow-[0_10px_28px_rgba(7,53,37,0.2)] hover:bg-[#114c39]"
                        : isActive(item.href)
                          ? "bg-[#e5f6ee] text-[#0d744e]"
                          : "text-[#243f35] hover:bg-[#edf6f1] hover:text-[#0d744e]"
                    }`}
                  >
                    {copy(locale, item.label)}
                    {products ? (
                      <span className="rounded-full bg-[#6cf0b4] px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#06241a]">
                        {locale === "en" ? "Featured" : "主推"}
                      </span>
                    ) : null}
                    {hasMenu ? <span className="text-xs opacity-60">⌄</span> : null}
                  </Link>

                  {hasMenu ? (
                    <div className={`absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-3 transition ${openMenu === menuKey ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                      <div className="rounded-[1.5rem] border border-[#13593f]/10 bg-white p-3 shadow-[0_28px_80px_rgba(6,52,36,0.16)]">
                        {products ? (
                          <>
                            <Link href={withLocale(locale, "/products")} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#315447] hover:bg-[#eef7f2]">
                              {locale === "en" ? "Products overview" : "产品首页"}
                            </Link>
                            <Link href={productHref} className="mt-2 block rounded-[1.15rem] bg-[#08261d] p-5 text-white transition hover:bg-[#104634]">
                              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#70edb5]">
                                {locale === "en" ? "Current featured product" : "当前主推产品"}
                              </span>
                              <span className="mt-2 flex items-center justify-between text-xl font-bold tracking-[-0.025em]">
                                AI Expert Customer Service <span className="text-[#70edb5]">↗</span>
                              </span>
                              <span className="mt-2 block text-sm leading-6 text-[#b9cec6]">
                                {locale === "en" ? "Partner product · Private demo available" : "合作伙伴产品 · 可预约专属演示"}
                              </span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link href={withLocale(locale, "/solutions")} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#315447] hover:bg-[#eef7f2]">
                              {locale === "en" ? "Solutions overview" : "解决方案首页"}
                            </Link>
                            <Link href={telecomHref} className="mt-2 block rounded-[1.15rem] border border-[#13593f]/10 bg-[#eef7f2] p-5 transition hover:border-[#27bc82]/35">
                              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#18825a]">Telecom</span>
                              <span className="mt-2 flex items-center justify-between text-xl font-bold">{locale === "en" ? "Telecom solutions" : "运营商解决方案"}<span>↗</span></span>
                              <span className="mt-2 block text-sm leading-6 text-[#547166]">BSS/OSS · MVNO · Broadband · AI Care</span>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        ) : (
          <nav className="hidden items-center gap-2 lg:flex">
            <Link href={withLocale(locale, "/")} className="rounded-full border border-[#14583f]/12 px-4 py-2 text-sm font-semibold text-[#385b4d] hover:bg-[#eef7f2]">
              ← {locale === "en" ? "Company site" : "返回官网"}
            </Link>
            {mode === "products" ? (
              <>
                <Link href={withLocale(locale, "/products")} className="rounded-full px-4 py-2 text-sm font-semibold text-[#385b4d] hover:bg-[#eef7f2]">{locale === "en" ? "Products" : "产品"}</Link>
                <Link href={productHref} className="rounded-full bg-[#082a20] px-4 py-2 text-sm font-bold text-white">AI Expert Customer Service</Link>
              </>
            ) : (
              <Link href={telecomHref} className="rounded-full bg-[#082a20] px-4 py-2 text-sm font-bold text-white">{locale === "en" ? "Telecom Solutions" : "运营商解决方案"}</Link>
            )}
          </nav>
        )}

        <div className="hidden items-center gap-2 lg:flex">
          <Link href={switchLocaleInPath(pathname, nextLocale)} className="rounded-full border border-[#14583f]/12 px-4 py-2 text-sm font-semibold text-[#385b4d] hover:bg-[#eef7f2]">
            {locale === "en" ? "中文" : "EN"}
          </Link>
          <Link href={withLocale(locale, bookingPath)} className="rounded-full bg-[#70efb5] px-5 py-2.5 text-sm font-bold text-[#06251b] transition hover:bg-[#082a20] hover:text-white">
            {locale === "en" ? "Request a Free Demo" : "预约免费演示"}
          </Link>
        </div>

        <button type="button" className="rounded-full border border-[#14583f]/14 p-3 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#14583f]/10 bg-white px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {globalItems.map((item) => (
              <Link key={item.href} href={withLocale(locale, item.href)} onClick={() => setIsOpen(false)} className={`rounded-2xl px-4 py-3 text-base font-semibold ${item.href === "/products" ? "bg-[#082a20] text-white" : "text-[#2a493d] hover:bg-[#eef7f2]"}`}>
                {copy(locale, item.label)}{item.href === "/products" ? ` · ${locale === "en" ? "Featured" : "主推"}` : ""}
              </Link>
            ))}
            <Link href={productHref} onClick={() => setIsOpen(false)} className="rounded-2xl border border-[#3be39b]/30 bg-[#e7faf1] px-4 py-4 text-base font-bold text-[#0b593d]">AI Expert Customer Service ↗</Link>
            <Link href={switchLocaleInPath(pathname, nextLocale)} onClick={() => setIsOpen(false)} className="mt-2 rounded-full border border-[#14583f]/12 px-4 py-3 text-center text-sm font-semibold">{locale === "en" ? "中文" : "EN"}</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
