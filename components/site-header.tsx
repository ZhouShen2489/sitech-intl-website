"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent, copy, visibleItems } from "@/content/site-content";
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
};

type HeaderDropdownGroup = {
  title: {
    zh: string;
    en: string;
  };
  items: HeaderDropdownItem[];
};

type HeaderDropdownConfig = {
  overview: HeaderDropdownItem;
  groups: HeaderDropdownGroup[];
  featured?: HeaderDropdownItem & {
    eyebrow: {
      zh: string;
      en: string;
    };
  };
};

function getCompactDropdownGroups(config: HeaderDropdownConfig) {
  return config.groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.href !== config.featured?.href),
    }))
    .filter((group) => group.items.length > 0);
}

function getMobileDropdownItems(config: HeaderDropdownConfig) {
  const items = [
    config.overview,
    ...getCompactDropdownGroups(config).flatMap((group) => group.items),
    config.featured,
  ].filter((item): item is HeaderDropdownItem => Boolean(item));

  return Array.from(new Map(items.map((item) => [item.href, item])).values());
}

function HeaderDropdownPanel({
  config,
  locale,
}: {
  config: HeaderDropdownConfig;
  locale: Locale;
}) {
  const compactGroups = getCompactDropdownGroups(config);

  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-[#d9e7fb] bg-white shadow-[0_24px_70px_rgba(11,47,111,0.2)]">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-4">
          <Link
            href={withLocale(locale, config.overview.href)}
            className="flex items-center justify-between rounded-2xl border border-blue-100 bg-[#eef6ff] px-4 py-3 text-[15px] font-bold text-[#0b2f6f] transition hover:border-tide/30 hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25"
          >
            <span>{copy(locale, config.overview.title)}</span>
            <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-4 grid gap-4">
            {compactGroups.map((group) => (
              <div key={group.title.en}>
                <p className="px-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#52637a]">
                  {copy(locale, group.title)}
                </p>
                <div className="mt-2 grid gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={withLocale(locale, item.href)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold text-[#12213a] transition hover:bg-[#f2f7ff] hover:text-tide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/20"
                    >
                      <span>{copy(locale, item.title)}</span>
                      <span aria-hidden="true" className="text-tide">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {config.featured ? (
          <Link
            href={withLocale(locale, config.featured.href)}
            className="m-3 flex min-h-44 flex-col justify-between rounded-[1.15rem] border border-[#b8d5ff] bg-gradient-to-br from-[#eaf4ff] via-white to-[#fff4df] p-5 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:border-tide/40 hover:shadow-[0_16px_36px_rgba(20,85,179,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-tide">
              {copy(locale, config.featured.eyebrow)}
            </span>
            <span className="mt-8 block font-display text-3xl font-bold leading-tight text-[#102039]">
              {copy(locale, config.featured.title)}
            </span>
            <span className="mt-6 inline-flex w-fit rounded-full bg-tide px-4 py-2 text-xs font-bold text-white">
              {locale === "en" ? "Open" : "进入"}
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const localeLabel = locale === "en" ? "中文" : "EN";
  const ownProductItems = visibleItems(siteContent.marketplacePage.ownItems);
  const partnerProductItems = visibleItems(siteContent.marketplacePage.partnerItems);
  const helportItem = partnerProductItems.find((item) => item.title.en === "Helport");
  const telecomSolution = siteContent.solutionsCatalog.find(
    (solution) => solution.key === "telecom",
  );
  const productTitleMap: Record<string, HeaderDropdownItem["title"]> = {
    "/solutions/teamshub-business-os": { zh: "Teamshub", en: "Teamshub" },
    "/solutions/ai-customer-service": { zh: "智能客服", en: "AI Service" },
    "/products/helport": { zh: "Helport", en: "Helport" },
  };
  const solutionTitleMap: Record<string, HeaderDropdownItem["title"]> = {
    "/solutions/telecom-operations": { zh: "运营商支撑", en: "Telecom" },
    "/solutions/digital-industry-platforms": { zh: "产业平台", en: "Industry" },
    "/solutions/ai-customer-service": { zh: "AI 客服", en: "AI Service" },
    "/solutions/teamshub-business-os": { zh: "Teamshub", en: "Teamshub" },
    "/solutions/custom-business-systems": { zh: "定制系统", en: "Custom Systems" },
  };
  const productDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/products",
      title: { zh: "产品总览", en: "All Products" },
    },
    groups: [
      {
        title: { zh: "我们的产品", en: "Our products" },
        items: ownProductItems.map((item) => ({
          href: item.href,
          title: productTitleMap[item.href] ?? item.title,
        })),
      },
      ...(partnerProductItems.some((item) => item.title.en !== "Helport")
        ? [
            {
              title: { zh: "伙伴产品", en: "Partner products" },
              items: partnerProductItems
                .filter((item) => item.title.en !== "Helport")
                .map((item) => ({
                  href: item.href,
                  title: productTitleMap[item.href] ?? item.title,
                })),
            },
          ]
        : []),
    ],
    featured: helportItem
      ? {
          href: helportItem.href,
          title: productTitleMap[helportItem.href] ?? helportItem.title,
          eyebrow: { zh: "突出产品", en: "Featured" },
        }
      : undefined,
  };
  const solutionDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/solutions",
      title: { zh: "方案总览", en: "All Solutions" },
    },
    groups: siteContent.solutionCategories.map((category) => ({
      title: category.title,
      items: siteContent.solutionsCatalog
        .filter((solution) => solution.category === category.key)
        .map((solution) => ({
          href: solution.href,
          title: solutionTitleMap[solution.href] ?? solution.title,
        })),
    })),
    featured: telecomSolution
      ? {
          href: telecomSolution.href,
          title: solutionTitleMap[telecomSolution.href] ?? telecomSolution.title,
          eyebrow: { zh: "重点方案", en: "Featured" },
        }
      : undefined,
  };

  function isActive(href: string) {
    const localizedHref = withLocale(locale, href);

    if (href === "/") {
      return pathname === localizedHref;
    }

    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
  }

  function getDropdownConfig(href: string) {
    if (href === "/products") {
      return productDropdownConfig;
    }

    if (href === "/solutions") {
      return solutionDropdownConfig;
    }

    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white text-ink shadow-[0_10px_30px_rgba(11,47,111,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href={withLocale(locale)} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white p-1.5 shadow-[0_12px_28px_rgba(20,85,179,0.16)]">
            <Image
              src={withBasePath("/brand/logo-symbol.png")}
              alt="Si-Tech logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-[22px] leading-tight text-ink">{siteContent.brand.name}</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-tide">
              {copy(locale, siteContent.brand.headerTagline)}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-2 lg:flex"
          onMouseLeave={() => setActiveDesktopDropdown(null)}
        >
          {siteContent.navigation.map((item) => {
            const dropdownConfig = getDropdownConfig(item.href);
            const isDropdownOpen = activeDesktopDropdown === item.href;
            const isCurrent = isActive(item.href) || isDropdownOpen;
            const linkClassName = `rounded-full px-3.5 py-2 text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25 ${
              isCurrent
                ? "bg-tide text-white shadow-[0_10px_24px_rgba(20,85,179,0.18)]"
                : "text-[#17233c] hover:bg-mist hover:text-tide"
            }`;

            if (!dropdownConfig) {
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
              <div
                key={item.href}
                className="group relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setActiveDesktopDropdown(null);
                  }
                }}
                onMouseEnter={() => setActiveDesktopDropdown(item.href)}
              >
                <button
                  type="button"
                  className={`${linkClassName} inline-flex items-center gap-1.5`}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onClick={() =>
                    setActiveDesktopDropdown((value) =>
                      value === item.href ? null : item.href,
                    )
                  }
                  onFocus={() => setActiveDesktopDropdown(item.href)}
                >
                  <span>{copy(locale, item.label)}</span>
                  <span aria-hidden="true" className="text-xs opacity-70">
                    ⌄
                  </span>
                </button>

                <div
                  className={`invisible absolute left-1/2 top-full z-50 w-[min(40rem,calc(100vw-3rem))] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                    isDropdownOpen
                      ? "visible translate-y-0 opacity-100"
                      : ""
                  }`}
                >
                  <HeaderDropdownPanel config={dropdownConfig} locale={locale} />
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
        <div className="border-t border-blue-100 bg-white px-6 py-5 shadow-card lg:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navigation.map((item) => {
              const dropdownConfig = getDropdownConfig(item.href);

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

                  {dropdownConfig ? (
                    <div className="mt-2 grid gap-2 pl-4">
                      {getMobileDropdownItems(dropdownConfig).map((dropdownItem) => (
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
