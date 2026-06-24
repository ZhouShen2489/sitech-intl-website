"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent, copy, visibleItems } from "@/content/site-content";
import { telecomDirections } from "@/content/telecom-solutions-content";
import type { Locale } from "@/lib/site";
import { switchLocaleInPath, withBasePath, withLocale } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
};

type CopyValue = {
  zh: string;
  en: string;
};

type HeaderDropdownItem = {
  href: string;
  title: CopyValue;
  text?: CopyValue;
};

type HeaderDropdownGroup = {
  title: CopyValue;
  text?: CopyValue;
  items: HeaderDropdownItem[];
};

type HeaderDropdownConfig = {
  overview: HeaderDropdownItem;
  groups: HeaderDropdownGroup[];
  featured?: HeaderDropdownItem & {
    eyebrow: CopyValue;
  };
};

type NavMode = "global" | "products" | "solutions";

type NavItem = {
  href: string;
  label: CopyValue;
  exact?: boolean;
  matchHrefs?: string[];
  dropdownConfig?: HeaderDropdownConfig;
};

function stripHash(href: string) {
  return href.split("#")[0] ?? href;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function resolveHref(locale: Locale, href: string) {
  if (isExternalHref(href)) {
    return href;
  }

  return withLocale(locale, href === "/" ? "/company" : href);
}

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

function BackIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5 3 10l5 5" />
      <path d="M4 10h13" />
    </svg>
  );
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
    <div className="overflow-hidden rounded-[1.35rem] border border-[#d9e7fb] bg-white/95 shadow-[0_24px_70px_rgba(11,47,111,0.2)] backdrop-blur-xl">
      <div className="relative p-4">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-tide/35 to-transparent" />
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <Link
            href={resolveHref(locale, config.overview.href)}
            className="group flex items-center justify-between rounded-2xl border border-blue-100 bg-[#eef6ff] px-4 py-3 text-[15px] font-bold text-[#0b2f6f] transition hover:border-tide/30 hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25"
            target={isExternalHref(config.overview.href) ? "_blank" : undefined}
            rel={isExternalHref(config.overview.href) ? "noreferrer" : undefined}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-tide shadow-[0_0_0_5px_rgba(20,85,179,0.1)]" />
              <span>{copy(locale, config.overview.title)}</span>
            </span>
            <span aria-hidden="true" className="transition group-hover:translate-x-1">
              →
            </span>
          </Link>

          {config.featured ? (
            <Link
              href={resolveHref(locale, config.featured.href)}
              className="inline-flex items-center gap-3 rounded-2xl border border-[#b8d5ff] bg-gradient-to-r from-[#eaf4ff] via-white to-[#fff4df] px-4 py-3 text-sm font-bold text-ink transition hover:border-tide/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25"
              target={isExternalHref(config.featured.href) ? "_blank" : undefined}
              rel={isExternalHref(config.featured.href) ? "noreferrer" : undefined}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-tide">
                {copy(locale, config.featured.eyebrow)}
              </span>
              <span className="text-[#102039]">{copy(locale, config.featured.title)}</span>
            </Link>
          ) : null}
        </div>

        <div className={`mt-4 grid gap-3 ${compactGroups.length > 1 ? "lg:grid-cols-3" : "lg:grid-cols-1"}`}>
          {compactGroups.map((group, groupIndex) => (
            <div
              key={group.title.en}
              className="group/menu rounded-[1.1rem] border border-blue-100 bg-[#f8fbff] p-3 transition hover:border-tide/30 hover:bg-white hover:shadow-[0_18px_46px_rgba(11,47,111,0.1)]"
            >
              <div className="flex items-start gap-3 px-2">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-tide shadow-sm ring-1 ring-blue-100">
                  0{groupIndex + 1}
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#52637a]">
                    {copy(locale, group.title)}
                  </span>
                  {group.text ? (
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      {copy(locale, group.text)}
                    </span>
                  ) : null}
                </span>
              </div>
              <div className="mt-2 grid gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(locale, item.href)}
                    className="flex items-center justify-between gap-3 rounded-xl px-2.5 py-2 text-[14px] font-semibold text-[#12213a] transition hover:bg-[#eef6ff] hover:text-tide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/20"
                    target={isExternalHref(item.href) ? "_blank" : undefined}
                    rel={isExternalHref(item.href) ? "noreferrer" : undefined}
                  >
                    <span className="min-w-0">
                      <span className="block">{copy(locale, item.title)}</span>
                      {item.text ? (
                        <span className="mt-0.5 block truncate text-[11px] font-medium text-slate-500">
                          {copy(locale, item.text)}
                        </span>
                      ) : null}
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-tide">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getHeaderMode(pathname: string): NavMode {
  if (pathname.includes("/products")) {
    return "products";
  }

  if (pathname.includes("/solutions")) {
    return "solutions";
  }

  return "global";
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const localeLabel = locale === "en" ? "中文" : "EN";
  const mode = getHeaderMode(pathname);

  const ownProductItems = visibleItems(siteContent.marketplacePage.ownItems);
  const partnerProductItems = visibleItems(siteContent.marketplacePage.partnerItems);
  const helportItem = partnerProductItems.find((item) => item.title.en === "Helport");
  const telecomSolution = siteContent.solutionsCatalog.find((solution) => solution.key === "telecom");

  const productTitleMap: Record<string, HeaderDropdownItem["title"]> = {
    "/solutions/teamshub-business-os": { zh: "Teamshub", en: "Teamshub" },
    "/solutions/ai-customer-service": { zh: "智能客服", en: "AI Service" },
    "/products/teamshub-business-os": { zh: "Teamshub", en: "Teamshub" },
    "/products/ai-customer-service": { zh: "智能客服", en: "Smart Customer Service" },
    "/products/helport": { zh: "Helport", en: "Helport" },
  };

  const solutionTitleMap: Record<string, HeaderDropdownItem["title"]> = {
    "/solutions/telecom": { zh: "运营商解决方案", en: "Telecom Solutions" },
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
          eyebrow: { zh: "重点产品", en: "Featured" },
        }
      : undefined,
  };

  const solutionDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/solutions",
      title: { zh: "方案总览", en: "All Solutions" },
    },
    groups: [
      {
        title: { zh: "运营商", en: "Telecom" },
        items: [
          {
            href: "/solutions/telecom",
            title: { zh: "运营商解决方案", en: "Telecom Solutions" },
            text: { zh: "五条通信业务方案线", en: "Five telecom solution paths" },
          },
          ...telecomDirections.slice(0, 5).map((direction) => ({
            href: `/solutions/telecom/${direction.slug}`,
            title: direction.shortTitle,
            text: direction.eyebrow,
          })),
        ],
        text: { zh: "通信业务增长与运营", en: "Telecom growth and operations" },
      },
      {
        title: { zh: "产业平台", en: "Industry platforms" },
        items: [
          {
            href: "/solutions/digital-industry-platforms",
            title: solutionTitleMap["/solutions/digital-industry-platforms"],
            text: { zh: "产业中台与数据流通", en: "Middle-platform and data flows" },
          },
          {
            href: "/solutions/custom-business-systems",
            title: solutionTitleMap["/solutions/custom-business-systems"],
            text: { zh: "门户、工作流与运营后台", en: "Portals, workflows, ops backends" },
          },
        ],
        text: { zh: "交易、协同、运营", en: "Trade, coordination, operations" },
      },
      {
        title: { zh: "AI 与协同", en: "AI and collaboration" },
        items: [
          {
            href: "/solutions/ai-customer-service",
            title: solutionTitleMap["/solutions/ai-customer-service"],
            text: { zh: "服务流程里的 AI", en: "AI inside service flows" },
          },
          {
            href: "/solutions/teamshub-business-os",
            title: solutionTitleMap["/solutions/teamshub-business-os"],
            text: { zh: "项目知识与协作空间", en: "Project knowledge workspace" },
          },
        ],
        text: { zh: "智能服务与项目推进", en: "AI service and delivery work" },
      },
    ],
    featured: telecomSolution
      ? {
          href: "/solutions/telecom",
          title: solutionTitleMap["/solutions/telecom"],
          eyebrow: { zh: "重点方案", en: "Featured" },
        }
      : undefined,
  };

  const telecomDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/solutions/telecom",
      title: { zh: "运营商解决方案首页", en: "Telecom board home" },
    },
    groups: [
      {
        title: { zh: "五条业务线", en: "Five telecom paths" },
        text: { zh: "按最接近的业务动作进入", en: "Enter from the closest operating move" },
        items: telecomDirections.slice(0, 5).map((direction) => ({
          href: `/solutions/telecom/${direction.slug}`,
          title: direction.shortTitle,
          text: direction.eyebrow,
        })),
      },
    ],
  };

  const industryDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/solutions/digital-industry-platforms",
      title: { zh: "产业平台首页", en: "Industry board home" },
    },
    groups: [
      {
        title: { zh: "平台与业务系统", en: "Platform and systems" },
        text: { zh: "交易、协同、门户、运营", en: "Trade, coordination, portals, operations" },
        items: [
          {
            href: "/solutions/digital-industry-platforms",
            title: solutionTitleMap["/solutions/digital-industry-platforms"],
            text: { zh: "产业中台与数据流通", en: "Middle-platform and data flows" },
          },
          {
            href: "/solutions/custom-business-systems",
            title: solutionTitleMap["/solutions/custom-business-systems"],
            text: { zh: "门户、流程、运营后台", en: "Portals, workflows, ops backends" },
          },
        ],
      },
    ],
  };

  const aiDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/solutions/ai-customer-service",
      title: { zh: "AI 与算力首页", en: "AI board home" },
    },
    groups: [
      {
        title: { zh: "AI 与协同", en: "AI and collaboration" },
        text: { zh: "服务、知识、协作、交付", en: "Service, knowledge, collaboration, delivery" },
        items: [
          {
            href: "/solutions/ai-customer-service",
            title: solutionTitleMap["/solutions/ai-customer-service"],
            text: { zh: "服务流程里的 AI", en: "AI inside service flows" },
          },
          {
            href: "/solutions/teamshub-business-os",
            title: solutionTitleMap["/solutions/teamshub-business-os"],
            text: { zh: "项目知识与协作空间", en: "Project knowledge workspace" },
          },
        ],
      },
    ],
  };

  const ownProductsDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/products#owned-products",
      title: { zh: "我们的产品总览", en: "Our product board" },
    },
    groups: [
      {
        title: { zh: "可直接进入的产品", en: "Direct product entry points" },
        items: ownProductItems.map((item) => ({
          href: item.href,
          title: productTitleMap[item.href] ?? item.title,
          text: item.category,
        })),
      },
    ],
  };

  const partnerProductsDropdownConfig: HeaderDropdownConfig = {
    overview: {
      href: "/products#partner-products",
      title: { zh: "合作伙伴产品总览", en: "Partner product board" },
    },
    groups: [
      {
        title: { zh: "合作伙伴产品", en: "Partner products" },
        items: partnerProductItems.map((item) => ({
          href: item.href,
          title: productTitleMap[item.href] ?? item.title,
          text: item.category,
        })),
      },
    ],
    featured: helportItem
      ? {
          href: helportItem.href,
          title: productTitleMap[helportItem.href] ?? helportItem.title,
          eyebrow: { zh: "重点伙伴产品", en: "Featured partner" },
        }
      : undefined,
  };

  const contextualNav: Record<Exclude<NavMode, "global">, NavItem[]> = {
    products: [
      { href: "/products", label: { zh: "产品首页", en: "Products" }, exact: true },
      {
        href: "/products#owned-products",
        label: { zh: "我们的产品", en: "Our products" },
        matchHrefs: ownProductItems.map((item) => item.href),
        dropdownConfig: ownProductsDropdownConfig,
      },
      {
        href: "/products#partner-products",
        label: { zh: "合作伙伴的产品", en: "Partner products" },
        matchHrefs: partnerProductItems.map((item) => item.href),
        dropdownConfig: partnerProductsDropdownConfig,
      },
    ],
    solutions: [
      { href: "/solutions", label: { zh: "解决方案首页", en: "Solutions" }, exact: true },
      {
        href: "/solutions/telecom",
        label: { zh: "运营商", en: "Telecom" },
        matchHrefs: ["/solutions/telecom", ...telecomDirections.map((item) => `/solutions/telecom/${item.slug}`)],
        dropdownConfig: telecomDropdownConfig,
      },
      {
        href: "/solutions/digital-industry-platforms",
        label: { zh: "产业平台", en: "Industry" },
        matchHrefs: ["/solutions/digital-industry-platforms", "/solutions/custom-business-systems"],
        dropdownConfig: industryDropdownConfig,
      },
      {
        href: "/solutions/ai-customer-service",
        label: { zh: "AI 与算力", en: "AI and Compute" },
        matchHrefs: ["/solutions/ai-customer-service", "/solutions/teamshub-business-os"],
        dropdownConfig: aiDropdownConfig,
      },
    ],
  };

  const navItems = mode === "global" ? siteContent.navigation : contextualNav[mode];

  function isActive(item: NavItem) {
    const matchTargets = item.matchHrefs?.length ? item.matchHrefs : [item.href];

    return matchTargets.some((href) => {
      if (isExternalHref(href)) {
        return false;
      }

      const normalizedHref = stripHash(href);
      const localizedHref = withLocale(locale, normalizedHref);

      if (normalizedHref === "/") {
        return pathname === localizedHref;
      }

      if (item.exact) {
        return pathname === localizedHref;
      }

      return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
    });
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

  function renderNavItem(item: NavItem) {
    const active = isActive(item);
    const localizedHref = resolveHref(locale, item.href);
    const dropdownConfig = item.dropdownConfig ?? (mode === "global" ? getDropdownConfig(item.href) : null);
    const baseClass =
      mode === "global"
        ? `rounded-full px-3.5 py-2 text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25 ${
            active || activeDesktopDropdown === item.href
              ? "bg-tide text-white shadow-[0_10px_24px_rgba(20,85,179,0.18)]"
              : "text-[#17233c] hover:bg-mist hover:text-tide"
          }`
        : `inline-flex shrink-0 items-center rounded-full border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide/25 ${
            active || activeDesktopDropdown === item.href
              ? "border-tide bg-tide text-white shadow-[0_10px_24px_rgba(20,85,179,0.16)]"
              : "border-blue-100 bg-white text-[#17233c] hover:border-tide/30 hover:text-tide"
          }`;

    if (!dropdownConfig) {
      return (
        <Link
          key={item.href}
          href={localizedHref}
          className={baseClass}
          target={isExternalHref(item.href) ? "_blank" : undefined}
          rel={isExternalHref(item.href) ? "noreferrer" : undefined}
        >
          {copy(locale, item.label)}
        </Link>
      );
    }

    const isDropdownOpen = activeDesktopDropdown === item.href;

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
          className={`${baseClass} inline-flex items-center gap-1.5`}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          onClick={() =>
            setActiveDesktopDropdown((value) => (value === item.href ? null : item.href))
          }
          onFocus={() => setActiveDesktopDropdown(item.href)}
        >
          <span>{copy(locale, item.label)}</span>
          <span aria-hidden="true" className="text-xs opacity-70">
            ⌄
          </span>
        </button>

        <div
          className={`invisible absolute top-full z-50 w-[min(52rem,calc(100vw-2rem))] translate-y-1 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
            mode === "global"
              ? "left-1/2 -translate-x-1/2"
              : "left-0 translate-x-0"
          } ${
            isDropdownOpen ? "visible translate-y-0 opacity-100" : ""
          }`}
        >
          <HeaderDropdownPanel config={dropdownConfig} locale={locale} />
        </div>
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white text-ink shadow-[0_10px_30px_rgba(11,47,111,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <Link href={withLocale(locale, "/company")} className="flex items-center gap-3">
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

        {mode === "global" ? (
          <nav className="hidden items-center gap-2 lg:flex" onMouseLeave={() => setActiveDesktopDropdown(null)}>
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        ) : null}

        <div
          className={
            mode === "global"
              ? "hidden items-center gap-3 lg:flex"
              : "flex items-center gap-2 sm:gap-3"
          }
        >
          {mode !== "global" ? (
            <Link
              href={withLocale(locale, "/company")}
              className="hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-[#17233c] transition hover:border-tide/30 hover:text-tide sm:inline-flex sm:px-4 sm:text-sm"
            >
              <BackIcon />
              <span>{locale === "en" ? "Back to Site" : "返回官网"}</span>
            </Link>
          ) : null}
          <Link
            href={switchLocaleInPath(pathname, nextLocale)}
            className="rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-tide/30 hover:text-tide sm:px-4 sm:text-sm"
          >
            {localeLabel}
          </Link>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-glow rounded-full bg-signal px-3 py-2 text-xs font-semibold text-ink transition hover:bg-[#ffd59f] sm:px-5 sm:text-sm"
          >
            {locale === "en" ? "Talk to Us" : "开始沟通"}
          </Link>
        </div>

        {mode === "global" ? (
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
        ) : null}
      </div>

      {mode !== "global" ? (
      <div className="border-t border-blue-100 bg-[#f8fbff]">
        <div
          className="mx-auto max-w-7xl overflow-visible px-6 py-3 lg:px-8"
          onMouseLeave={() => setActiveDesktopDropdown(null)}
        >
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        </div>
      </div>
      ) : null}

      {mode === "global" && isOpen ? (
        <div className="border-t border-blue-100 bg-white px-6 py-5 shadow-card lg:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navigation.map((item) => {
              const dropdownConfig = getDropdownConfig(item.href);

              return (
                <div key={item.href}>
                  <Link
                    href={resolveHref(locale, item.href)}
                    className={`block rounded-2xl px-4 py-3 text-base ${
                      isActive({ href: item.href, label: item.label }) ? "bg-tide text-white" : "text-slate-700"
                    }`}
                    target={isExternalHref(item.href) ? "_blank" : undefined}
                    rel={isExternalHref(item.href) ? "noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {copy(locale, item.label)}
                  </Link>

                  {dropdownConfig ? (
                    <div className="mt-2 grid gap-2 pl-4">
                      {getMobileDropdownItems(dropdownConfig).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={resolveHref(locale, dropdownItem.href)}
                          className="rounded-2xl border border-blue-100 bg-[#f7fbff] px-4 py-3 text-sm text-slate-700"
                          target={isExternalHref(dropdownItem.href) ? "_blank" : undefined}
                          rel={isExternalHref(dropdownItem.href) ? "noreferrer" : undefined}
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
