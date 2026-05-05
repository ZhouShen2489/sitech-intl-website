"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent, copy, visibleItems } from "@/content/siteContent";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withBasePath, withLocale } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
};

type HeaderDropdownItem = {
  href: string;
  title: {
    zh: string;
    en: string;
  };
  text: {
    zh: string;
    en: string;
  };
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const localeLabel = locale === "en" ? "中文" : "EN";
  const productDropdownItems: HeaderDropdownItem[] = [
    {
      href: "/products",
      title: { zh: "产品总览", en: "Products overview" },
      text: {
        zh: "从产品、伙伴产品和项目场景快速判断适合的切入口。",
        en: "Compare products, partner products, and practical project-fit entry points.",
      },
    },
    ...visibleItems([...siteContent.marketplacePage.ownItems, ...siteContent.marketplacePage.partnerItems]).map(
      (item) => ({
        href: item.href,
        title: item.title,
        text: item.subtitle,
      }),
    ),
  ];
  const solutionDropdownItems: HeaderDropdownItem[] = [
    {
      href: "/solutions",
      title: { zh: "解决方案总览", en: "Solutions overview" },
      text: {
        zh: "按运营商、产业平台、AI 服务、协同和定制系统理解我们能解决的问题。",
        en: "Explore how we solve problems across telecom, platforms, AI service, collaboration, and custom systems.",
      },
    },
    ...siteContent.solutionsCatalog.map((solution) => ({
      href: solution.href,
      title: solution.title,
      text: solution.text,
    })),
  ];

  function isActive(href: string) {
    const localizedHref = withLocale(locale, href);

    if (href === "/") {
      return pathname === localizedHref;
    }

    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
  }

  function getDropdownItems(href: string) {
    if (href === "/products") {
      return productDropdownItems;
    }

    if (href === "/solutions") {
      return solutionDropdownItems;
    }

    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/86 text-ink shadow-[0_10px_30px_rgba(11,47,111,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href={withLocale(locale)} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white p-1.5 shadow-[0_12px_28px_rgba(20,85,179,0.16)]">
            <Image
              src={withBasePath("/brand/logo-symbol.png")}
              alt="Si-Tech logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-xl text-ink">{siteContent.brand.name}</p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-tide">
              {copy(locale, siteContent.brand.headerTagline)}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {siteContent.navigation.map((item) => {
            const dropdownItems = getDropdownItems(item.href);
            const linkClassName = `rounded-full px-3 py-2 text-sm transition ${
              isActive(item.href)
                ? "bg-tide text-white shadow-[0_10px_24px_rgba(20,85,179,0.18)]"
                : "text-slate-600 hover:bg-mist hover:text-tide"
            }`;

            if (!dropdownItems) {
              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className={linkClassName}
                >
                  {copy(locale, item.label)}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={withLocale(locale, item.href)}
                  className={`${linkClassName} inline-flex items-center gap-1.5`}
                >
                  <span>{copy(locale, item.label)}</span>
                  <span className="text-xs opacity-70">v</span>
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-[min(36rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white/96 p-3 shadow-[0_28px_90px_rgba(11,47,111,0.18)] backdrop-blur-xl">
                    <div className="grid gap-2">
                      {dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={dropdownItem.href}
                          href={withLocale(locale, dropdownItem.href)}
                          className={`rounded-[1.25rem] p-4 transition hover:bg-mist ${
                            index === 0 ? "border border-blue-100 bg-[#f7fbff]" : ""
                          }`}
                        >
                          <span className="flex items-center justify-between gap-4">
                            <span className="font-serif text-lg leading-tight text-ink">
                              {copy(locale, dropdownItem.title)}
                            </span>
                            <span className="text-sm text-tide">-&gt;</span>
                          </span>
                          <span className="mt-2 line-clamp-2 block text-sm leading-6 text-slate-600">
                            {copy(locale, dropdownItem.text)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchLocaleInPath(pathname, nextLocale)}
            className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-tide/30 hover:text-tide"
          >
            {localeLabel}
          </Link>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-glow rounded-full bg-signal px-5 py-2 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Talk to Us" : "开始沟通"}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-blue-100 p-3 text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-blue-100 bg-white/95 px-6 py-5 shadow-card backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navigation.map((item) => {
              const dropdownItems = getDropdownItems(item.href);

              return (
                <div key={item.href}>
                  <Link
                    href={withLocale(locale, item.href)}
                    className={`block rounded-2xl px-4 py-3 text-base ${
                      isActive(item.href) ? "bg-tide text-white" : "text-slate-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {copy(locale, item.label)}
                  </Link>

                  {dropdownItems ? (
                    <div className="mt-2 grid gap-2 pl-4">
                      {dropdownItems.slice(1).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={withLocale(locale, dropdownItem.href)}
                          className="rounded-2xl border border-blue-100 bg-[#f7fbff] px-4 py-3 text-sm text-slate-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {copy(locale, dropdownItem.title)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href={switchLocaleInPath(pathname, nextLocale)}
              className="mt-3 rounded-full border border-blue-100 px-4 py-3 text-center text-sm font-medium text-slate-700"
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
