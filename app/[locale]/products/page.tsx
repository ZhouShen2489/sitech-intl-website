import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { copy, copyList, siteContent, visibleItems } from "@/content/site-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const safeLocale: "en" | "zh" = locale;
  const page = siteContent.marketplacePage;
  const ownItems = visibleItems(page.ownItems);
  const partnerItems = visibleItems(page.partnerItems);

  function resolveHref(href: string) {
    return href.startsWith("http") ? href : withLocale(safeLocale, href);
  }

  function isExternal(href: string) {
    return href.startsWith("http");
  }

  const helportFlow = [
    {
      step: "01",
      title:
        locale === "en"
          ? "Make every live conversation stronger"
          : "让每次实时沟通更像顶尖员工",
      text:
        locale === "en"
          ? "Live guidance, knowledge, and prompts help frontline teams sound sharper in the moment."
          : "实时指导、知识调取和话术提示，让一线团队在通话当下就更稳。",
    },
    {
      step: "02",
      title:
        locale === "en" ? "Keep outreach moving at scale" : "让线索触达稳定跑起来",
      text:
        locale === "en"
          ? "Standardized execution helps teams follow up, qualify, and transfer leads without losing rhythm."
          : "用标准化执行承接跟进、筛选和转接，不让节奏断在中途。",
    },
    {
      step: "03",
      title:
        locale === "en" ? "Put expert knowledge online 24/7" : "把专家知识放到 24/7 在线",
      text:
        locale === "en"
          ? "Digital workers keep high-value knowledge available even when experts are not online."
          : "把高价值知识沉淀成数字员工，不再只靠少数专家在线支撑。",
    },
  ];
  const filterCards: { item: (typeof page.filters)[number]; href: string }[] = [
    { item: page.filters[0], href: "#owned-products" },
  ];

  if (partnerItems.length > 0) {
    filterCards.push({ item: page.filters[1], href: "#partner-products" });
  }

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, page.hero.title)}
        subtitle={copy(locale, page.hero.subtitle)}
        image={page.hero.image}
      />

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.introTitle)} text={copy(locale, page.introText)} />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {filterCards.map(({ item, href }) => (
              <Link
                key={item.title.en}
                href={href}
                className="interactive-card surface-card rounded-[2rem] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-tide">
                  {locale === "en" ? "Choose a path" : "选择进入方式"}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {partnerItems.length > 0 ? (
        <section id="partner-products" className="bg-[#031329] py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
                  {copy(locale, page.partnerTitle)}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-4xl">
                  {locale === "en"
                    ? "Helport turns great conversations into a repeatable system."
                    : "Helport 把优秀沟通，做成可复制的系统。"}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                  {copy(locale, page.partnerText)}
                </p>

                <div className="relative mt-10 space-y-4 pl-8">
                  <div className="absolute bottom-6 left-3 top-6 w-px bg-gradient-to-b from-white/20 via-accent to-white/10" />
                  {helportFlow.map((item) => (
                    <div
                      key={item.title}
                      className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/8 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <span className="absolute left-[-2.15rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-signal text-xs font-black text-ink shadow-[0_12px_30px_rgba(242,185,109,0.3)]">
                        {item.step}
                      </span>
                      <h3 className="font-display text-xl leading-tight text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {partnerItems.map((item) => (
                  <article
                    key={item.title.en}
                    className="overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.06))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
                  >
                    <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                      <div className="relative h-52 overflow-hidden rounded-[1.5rem] bg-white/10">
                        <Image
                          src={withBasePath(item.image)}
                          alt={copy(locale, item.title)}
                          fill
                          quality={74}
                          sizes="(min-width: 1024px) 36vw, 100vw"
                          className="image-lift object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/76">
                            {copy(locale, item.category)}
                          </span>
                          <span className="rounded-full bg-signal px-3 py-1 text-xs uppercase tracking-[0.16em] text-ink">
                            {copy(locale, item.status)}
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-3xl text-white">{copy(locale, item.title)}</h3>
                        <p className="mt-4 text-base leading-8 text-white/76">{copy(locale, item.subtitle)}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {copyList(locale, item.tags).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs text-white/72"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                          {item.bullets[locale].slice(0, 4).map((bullet, index) => (
                            <div
                              key={bullet}
                              className="rounded-[1.2rem] border border-white/12 bg-white/6 px-4 py-4 text-sm leading-7 text-white/82"
                            >
                              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                                {index === 0
                                  ? locale === "en"
                                    ? "Live assist"
                                    : "实时辅助"
                                  : index === 1
                                    ? locale === "en"
                                      ? "Execution"
                                      : "执行能力"
                                    : index === 2
                                      ? locale === "en"
                                        ? "Digital worker"
                                        : "数字员工"
                                      : locale === "en"
                                        ? "Best fit"
                                        : "适用团队"}
                              </p>
                              <p className="mt-2">{bullet}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 rounded-[1.5rem] border border-white/12 bg-[#071a33]/60 p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                            {locale === "en" ? "Why buyers react fast" : "为什么客户会很快有感觉"}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-white/72">
                            {locale === "en"
                              ? "It does not ask teams to imagine the value. They can hear it in calls, see it in follow-up speed, and measure it in QA and conversion."
                              : "它不是让团队去想象价值，而是能直接听到通话变化、看到跟进速度变化，也能量化到质检和转化结果。"}
                          </p>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-white/58">{copy(locale, item.note)}</p>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <Link
                            href={resolveHref(item.href)}
                            className="inline-flex rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
                            target={isExternal(item.href) ? "_blank" : undefined}
                            rel={isExternal(item.href) ? "noreferrer" : undefined}
                          >
                            {copy(locale, item.cta)}
                          </Link>
                          <Link
                            href={withLocale(locale, "/contact")}
                            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/8"
                          >
                            {locale === "en" ? "Talk about this fit" : "讨论适配场景"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="owned-products" className="bg-[#f5f9ff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.ownTitle)} text={copy(locale, page.ownText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {ownItems.map((item) => (
              <article
                key={item.title.en}
                className="interactive-card group flex h-full flex-col rounded-[2.25rem] border border-blue-100 bg-white p-7 shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-28 w-full overflow-hidden rounded-[1.5rem] bg-mist md:h-36">
                    <Image
                      src={withBasePath(item.image)}
                      alt={copy(locale, item.title)}
                      fill
                      quality={74}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="image-lift object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-ink text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {item.title.en.slice(0, 2)}
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                      {copy(locale, item.category)}
                    </span>
                    <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#315ea8]">
                      {copy(locale, item.status)}
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 font-display text-3xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, item.subtitle)}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {copyList(locale, item.tags).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f4f7fb] px-3 py-1.5 text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  {item.bullets[locale].slice(0, 3).map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[1.25rem] border border-slate-200 bg-[#f9fbfd] px-4 py-3 text-sm leading-7 text-slate-700"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">{copy(locale, item.note)}</p>

                <div className="mt-8 pt-2">
                  <Link
                    href={resolveHref(item.href)}
                    className="inline-flex rounded-full border border-tide/30 px-5 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
                    target={isExternal(item.href) ? "_blank" : undefined}
                    rel={isExternal(item.href) ? "noreferrer" : undefined}
                  >
                    {copy(locale, item.cta)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-2xl font-display text-3xl">{copy(locale, page.cta.title)}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-glow inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {copy(locale, page.cta.button)}
          </Link>
        </div>
      </section>
    </>
  );
}
