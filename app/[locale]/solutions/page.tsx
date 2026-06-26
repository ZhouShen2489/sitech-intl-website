import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/page-sections";
import { copy, siteContent } from "@/content/site-content";
import { telecomBoard, telecomCopy } from "@/content/telecom-solutions-content";
import { isLocale, withBasePath, withLocale, withSiteLocale } from "@/lib/site";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const entries = [
    {
      key: "telecom",
      href: withSiteLocale("telecom", locale),
      image: "/images/curated/telecom-network-switch.jpg",
      title: { zh: "Telecom", en: "Telecom" },
      label: { zh: "运营商 / MVNO 独立方案页", en: "Operator / MVNO standalone site" },
      text: {
        zh: "面向运营商、MVNO、宽带、智能客服和营销门户业务，进入更完整的通信业务方案页。",
        en: "For operators, MVNOs, broadband, AI care, and marketing portal work, open the dedicated telecom solution site.",
      },
      cta: telecomBoard.primaryCta,
    },
    {
      key: "opera",
      href: withSiteLocale("opera", locale),
      image: "/images/opera/living-enterprise-corridor-v2.png",
      title: { zh: "Enterprise Opera OS", en: "Enterprise Opera OS" },
      label: { zh: "企业协同与运营语义层产品页", en: "Enterprise coordination product site" },
      text: {
        zh: "使用新版 Opera 产品页，玻璃导航中会突出 Helport AI 和 Telecom 两个关键入口。",
        en: "Open the new Opera product page with the glass navigation highlighting Helport AI and Telecom.",
      },
      cta: { zh: "进入 Opera 产品页", en: "Open Opera product site" },
    },
  ] as const;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_62%,#eef6ff_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {copy(locale, siteContent.solutionsPage.hero.title)}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
              {locale === "en"
                ? "Choose the right standalone product or solution site."
                : "选择正确的独立产品或方案页"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {locale === "en"
                ? "The company site stays as the company entry point. Telecom and Opera open as dedicated product or solution experiences."
                : "公司官网保持公司入口定位；Telecom 和 Opera 分别进入独立的产品/解决方案页面。"}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={entries[0].href}
                className="standalone-link rounded-full border px-6 py-3 text-sm font-semibold text-[#0b2f6f] transition hover:border-[#7ce6ba]/70"
              >
                {telecomCopy(locale, telecomBoard.primaryCta)}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {locale === "en" ? "Ask which page fits" : "帮我判断入口"}
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-[0_24px_70px_rgba(11,47,111,0.12)]">
            <div className="relative bg-ink" style={{ height: "28rem" }}>
              <Image
                src={withBasePath("/images/curated/modern-office-tablet-discussion.jpg")}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.06),rgba(7,26,51,0.72))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-lg border border-white/15 bg-white/12 p-5 text-white backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {locale === "en" ? "01 Entry board" : "01 入口板块"}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold">
                    {locale === "en" ? "Telecom and Opera are independent pages." : "Telecom 与 Opera 都是独立页面。"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={locale === "en" ? "01 Standalone entry points" : "01 独立入口"}
            text={
              locale === "en"
                ? "Use these two routes when a buyer needs a product or solution page rather than the company homepage."
                : "当客户要看具体产品或方案，而不是公司首页时，直接进入下面两个独立页面。"
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {entries.map((entry) => (
              <article
                key={entry.key}
                className="standalone-link group overflow-hidden rounded-lg border bg-white shadow-card"
              >
                <div className="relative bg-slate-100" style={{ height: "16rem" }}>
                  <Image
                    src={withBasePath(entry.image)}
                    alt={copy(locale, entry.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-signal px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                      {locale === "en" ? "New" : "新内容"}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
                      {copy(locale, entry.label)}
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                    {copy(locale, entry.title)}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {copy(locale, entry.text)}
                  </p>
                  <Link
                    href={entry.href}
                    className="standalone-link mt-7 inline-flex rounded-full border px-5 py-3 text-sm font-semibold text-[#0b2f6f] transition hover:border-[#7ce6ba]/70"
                  >
                    {copy(locale, entry.cta)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              {locale === "en" ? "Not sure which route to send a buyer?" : "不确定该把客户发到哪个页面？"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
              {locale === "en"
                ? "Start with the company contact form and describe the buyer's use case. We can route it to Telecom, Opera, Helport AI, or a broader company conversation."
                : "先用公司联系表单说明客户场景，我们可以再判断进入 Telecom、Opera、Helport AI，还是公司整体能力沟通。"}
            </p>
          </div>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Start with company contact" : "从公司联系开始"}
          </Link>
        </div>
      </section>
    </>
  );
}
