import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { productsContent } from "@/content/products-content";
import { siteContent, copy, copyList, isVisible, visibleItems } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { withBasePath, withLocale } from "@/lib/site";

export function PageHero({
  locale,
  title,
  subtitle,
  image,
  badge,
  actions,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="brand-orbit relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-20" />
      <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:px-8 lg:py-28">
        <div className="reveal-up max-w-3xl">
          {badge ? (
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-accent">
              {badge}
            </p>
          ) : null}
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">{subtitle}</p>
          {actions ? <div className="mt-10 flex flex-wrap gap-4">{actions}</div> : null}
        </div>

        <div className="reveal-up-delay">
          <div className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-3">
            <div className="relative h-[24rem] overflow-hidden rounded-[2rem] bg-white/10 sm:h-[28rem] lg:h-[32rem]">
              <Image
                src={withBasePath(image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="image-lift object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.02),rgba(7,26,51,0.62))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  text,
  align = "left",
}: {
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={align === "center" ? "mx-auto mb-5 h-1 w-14 rounded-full bg-tide" : "mb-5 h-1 w-14 rounded-full bg-tide"} />
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function MarqueeBand({ locale }: { locale: Locale }) {
  const items = [...siteContent.proofRibbon, ...siteContent.proofRibbon];

  return (
    <section className="border-y border-blue-100 bg-white/90 backdrop-blur">
      <div className="marquee overflow-hidden py-4">
        <div className="marquee-track flex min-w-max gap-4">
          {items.map((item, index) => (
            <div
              key={`${item.en}-${index}`}
              className="rounded-full border border-blue-100 bg-mist px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {copy(locale, item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HelportSpotlight({ locale }: { locale: Locale }) {
  const spotlight = productsContent.homeSpotlight;

  return (
    <section className="brand-mesh py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="surface-card grid gap-8 overflow-hidden rounded-[2.75rem] p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-tide">
              {copy(locale, spotlight.eyebrow)}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-ink md:text-4xl">
              {copy(locale, spotlight.title)}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {copy(locale, spotlight.text)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {copyList(locale, spotlight.tags).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-[#f8fbfd] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, spotlight.detailHref)}
                className="button-glow inline-flex rounded-full bg-tide px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {copy(locale, spotlight.primaryCta)}
              </Link>
              <Link
                href={withLocale(locale, spotlight.contactHref)}
                className="inline-flex rounded-full border border-tide/30 bg-white px-5 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {copy(locale, spotlight.secondaryCta)}
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {spotlight.highlights.map((item) => (
              <article key={item.title.en} className="interactive-card rounded-[2rem] border border-blue-100 bg-[#f7fbff] p-6">
                <h3 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const { hero, companyIntro, problemAreas, storiesPreview, aboutPreview, cta, sections } =
    siteContent.home;
  const [featuredSolution, ...secondarySolutions] = siteContent.solutionsCatalog.filter(
    (solution) => solution.key === "telecom",
  );
  const telecomSiteHref = `${process.env.NEXT_PUBLIC_TELECOM_ORIGIN ?? "https://telecom.sitech-intl.com"}/${locale}`;
  const previewStories = visibleItems(siteContent.storiesPage.items).slice(0, 3);
  const statAccents = [
    "from-[#1357d3] via-[#20a7ff] to-[#48d6b5]",
    "from-[#0b2f6f] via-[#5f7cff] to-[#f6b85a]",
    "from-[#1267c7] via-[#27c4a4] to-[#8bd450]",
    "from-[#14345f] via-[#18a1ff] to-[#f7ba67]",
  ];

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, hero.badge)}
        title={copy(locale, hero.title)}
        subtitle={copy(locale, hero.subtitle)}
        image={hero.image}
        actions={
          <>
            <Link
              href={withLocale(locale, "/contact")}
              className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {copy(locale, hero.primaryCta)}
            </Link>
            <Link
              href={withLocale(locale, "/products/helport")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {copy(locale, hero.secondaryCta)}
            </Link>
            <Link
              href={telecomSiteHref}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-signal/60 hover:bg-white/[0.16]"
            >
              {copy(locale, hero.solutionsCta)}
            </Link>
          </>
        }
      />

      {isVisible(sections.marquee) ? <MarqueeBand locale={locale} /> : null}

      {isVisible(sections.companyIntro) ? (
        <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-tide">{copy(locale, companyIntro.eyebrow)}</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
                {copy(locale, companyIntro.title)}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">{copy(locale, companyIntro.text)}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {companyIntro.stats.map((item, index) => (
                <div
                  key={item.value}
                  className="interactive-card group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_18px_55px_rgba(11,47,111,0.08)]"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -right-10 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${statAccents[index % statAccents.length]} opacity-[0.18] blur-2xl transition duration-500 group-hover:scale-125 group-hover:opacity-[0.28]`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${statAccents[index % statAccents.length]}`}
                  />
                  <p
                    className={`relative bg-gradient-to-r ${statAccents[index % statAccents.length]} bg-clip-text font-display text-4xl text-transparent transition duration-300 group-hover:translate-x-1`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, item.label)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {companyIntro.pillars.map((item) => (
              <article key={item.title.en} className="interactive-card surface-card rounded-[2rem] p-7">
                <h3 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
        </section>
      ) : null}

      {isVisible(sections.productSpotlight) ? (
        <HelportSpotlight locale={locale} />
      ) : null}

      {isVisible(sections.featuredSolutions) ? (
        <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, problemAreas.title)} text={copy(locale, problemAreas.text)} />
          <div className="mt-12 grid gap-6">
            <article className="brand-orbit grid gap-8 overflow-hidden rounded-[2.5rem] p-8 text-white shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent">{copy(locale, featuredSolution.eyebrow)}</p>
                <h3 className="mt-4 max-w-3xl font-display text-3xl leading-tight lg:text-4xl">
                  {copy(locale, featuredSolution.title)}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">{copy(locale, featuredSolution.text)}</p>
                <ul className="mt-6 space-y-3">
                  {featuredSolution.bullets[locale].map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/80">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 lg:p-7">
                <div className="relative mb-6 h-48 overflow-hidden rounded-[1.5rem] bg-white/10">
                  <Image
                    src={withBasePath(featuredSolution.image)}
                    alt={copy(locale, featuredSolution.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="image-lift object-cover opacity-95"
                  />
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent">
                  {locale === "en" ? "Operator-grade foundation" : "运营商级能力底座"}
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-white/74">
                  <p>
                    {locale === "en"
                      ? "This is the kind of work where service, billing, partner, portal, and customer flows have to stay stable for years."
                      : "这类业务不是只求上线，而是要求服务、计费、伙伴、门户和客户流程多年稳定协同。"}
                  </p>
                  <p>
                    {locale === "en"
                      ? "That same foundation helps enterprise buyers move AI service, workflow integration, and cross-system operations with more confidence."
                      : "同样的底座，也能支撑企业客户把 AI 服务、流程集成和跨系统运营真正推进下去。"}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={telecomSiteHref}
                    className="inline-flex rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
                  >
                    {copy(locale, featuredSolution.linkLabel)}
                  </Link>
                  <Link
                    href={telecomSiteHref}
                    className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {locale === "en" ? "View Cases" : "看案例"}
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
              {secondarySolutions.map((solution) => (
                <article key={solution.key} className="interactive-card surface-card group rounded-[2rem] p-7">
                  <div className="relative mb-6 h-44 overflow-hidden rounded-[1.5rem] bg-mist">
                    <Image
                      src={withBasePath(solution.image)}
                      alt={copy(locale, solution.title)}
                      fill
                      quality={74}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="image-lift object-cover"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-[0.22em] text-tide">{copy(locale, solution.eyebrow)}</p>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{copy(locale, solution.title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, solution.text)}</p>
                  <div className="mt-6">
                    <Link
                      href={withLocale(locale, solution.href)}
                      className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                    >
                      {copy(locale, solution.linkLabel)}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        </section>
      ) : null}

      {isVisible(sections.storiesPreview) ? (
        <section className="bg-[#f5f9ff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, storiesPreview.title)} text={copy(locale, storiesPreview.text)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {previewStories.map((story) => (
              <article key={story.title.en} className="interactive-card group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card">
                <div className="relative h-56">
                  <Image
                    src={withBasePath(story.image)}
                    alt={copy(locale, story.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="image-lift object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-tide">{copy(locale, story.solution)}</p>
                  <h3 className="mt-4 font-display text-2xl text-ink">{copy(locale, story.title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, story.summary)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={withLocale(locale, "/stories")}
              className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              {locale === "en" ? "Open All Stories" : "查看全部故事"}
            </Link>
          </div>
        </div>
        </section>
      ) : null}

      {isVisible(sections.aboutPreview) ? (
        <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-[#f7f9fb] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <SectionHeading title={copy(locale, aboutPreview.title)} text={copy(locale, aboutPreview.text)} />
            </div>
            <div className="grid gap-4">
              {copyList(locale, aboutPreview.bullets).map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link
              href={withLocale(locale, "/about")}
              className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              {locale === "en" ? "Read About Si-Tech Intl" : "查看关于我们"}
            </Link>
          </div>
        </div>
        </section>
      ) : null}

      {isVisible(sections.cta) ? (
        <section className="brand-orbit py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-panel overflow-hidden rounded-[2.5rem] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl leading-tight lg:text-4xl">{copy(locale, cta.title)}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{copy(locale, cta.text)}</p>
                <div className="mt-8">
                  <Link
                    href={withLocale(locale, "/contact")}
                    className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
                  >
                    {copy(locale, cta.button)}
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                {copyList(locale, cta.highlights).map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>
      ) : null}
    </>
  );
}
