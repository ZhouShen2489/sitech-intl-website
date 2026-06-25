import Link from "next/link";
import { notFound } from "next/navigation";

import { AiExpertDemoGallery } from "@/components/ai-expert-demo-gallery";
import { PageHero, SectionHeading } from "@/components/page-sections";
import { productsContent } from "@/content/products-content";
import { copy, copyList } from "@/content/site-content";
import { isLocale, withLocale } from "@/lib/site";

export default async function HelportProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const safeLocale: "en" | "zh" = locale;
  const page = productsContent.helport;

  function resolveHref(href: string) {
    return href.startsWith("http") ? href : withLocale(safeLocale, href);
  }

  function isExternal(href: string) {
    return href.startsWith("http");
  }

  function hasLabel(value: { zh: string; en: string }) {
    return copy(safeLocale, value).trim().length > 0;
  }

  return (
    <>
      <PageHero
        locale={safeLocale}
        badge={copy(safeLocale, page.hero.badge)}
        title={copy(safeLocale, page.hero.title)}
        subtitle={copy(safeLocale, page.hero.subtitle)}
        image={page.hero.image}
        actions={
          <>
            <Link
              href={resolveHref(page.heroActions.primaryHref)}
              target={isExternal(page.heroActions.primaryHref) ? "_blank" : undefined}
              rel={isExternal(page.heroActions.primaryHref) ? "noreferrer" : undefined}
              className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {copy(safeLocale, page.heroActions.primary)}
            </Link>
            {hasLabel(page.heroActions.secondary) && page.heroActions.secondaryHref ? (
              <Link
                href={resolveHref(page.heroActions.secondaryHref)}
                target={isExternal(page.heroActions.secondaryHref) ? "_blank" : undefined}
                rel={isExternal(page.heroActions.secondaryHref) ? "noreferrer" : undefined}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                {copy(safeLocale, page.heroActions.secondary)}
              </Link>
            ) : null}
          </>
        }
      />

      <section className="border-y border-blue-100 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-blue-100 px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
          {page.proofBar.map((item) => (
            <div key={item.label.en} className="py-8 md:px-6">
              <p className="font-display text-4xl font-bold leading-none text-ink">
                {typeof item.value === "string" ? item.value : item.value[safeLocale]}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-tide">
                {copy(safeLocale, item.label)}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{copy(safeLocale, item.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.overviewTitle)} text={copy(locale, page.overviewText)} />
        </div>
      </section>

      <AiExpertDemoGallery locale={safeLocale} />

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.problemTitle)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {page.problemItems.map((item) => (
              <article key={item.title.en} className="interactive-card rounded-[2rem] border border-blue-100 bg-white p-6 shadow-card">
                <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.familyTitle)} text={copy(locale, page.familyText)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {page.familyItems.map((item) => (
              <article key={item.title.en} className="interactive-card flex h-full flex-col rounded-[2rem] border border-blue-100 bg-[#f7fbff] p-7 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">{copy(locale, item.label)}</p>
                <h2 className="mt-4 font-display text-3xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.summary)}</p>
                <div className="mt-6 grid gap-3">
                  {copyList(locale, item.bullets).map((bullet) => (
                    <div key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  <Link
                    href={resolveHref(item.primaryHref)}
                    target={isExternal(item.primaryHref) ? "_blank" : undefined}
                    rel={isExternal(item.primaryHref) ? "noreferrer" : undefined}
                    className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
                  >
                    {copy(locale, item.primaryLabel)}
                  </Link>
                  {hasLabel(item.secondaryLabel) && item.secondaryHref ? (
                    <Link
                      href={resolveHref(item.secondaryHref)}
                      target={isExternal(item.secondaryHref) ? "_blank" : undefined}
                      rel={isExternal(item.secondaryHref) ? "noreferrer" : undefined}
                      className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                    >
                      {copy(locale, item.secondaryLabel)}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.proofTitle)} text={copy(locale, page.proofText)} />
          <div className="mt-12 space-y-6">
            {page.caseStudies.map((item) => (
              <article
                key={item.title.en}
                className="interactive-card rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">{copy(locale, item.eyebrow)}</p>
                  <h2 className="mt-4 font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 lg:mt-0">
                  {item.metrics.map((metric) => (
                    <div key={metric.label.en} className="rounded-[1.25rem] bg-[#f7fbff] px-4 py-4">
                      <p className="font-display text-2xl text-ink">
                        {typeof metric.value === "string" ? metric.value : metric.value[safeLocale]}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-tide">
                        {copy(locale, metric.label)}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/8 p-8 shadow-card lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl leading-tight lg:text-4xl">{copy(locale, page.cta.title)}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76">{copy(locale, page.cta.partnerNote)}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={resolveHref(page.cta.primaryHref)}
                target={isExternal(page.cta.primaryHref) ? "_blank" : undefined}
                rel={isExternal(page.cta.primaryHref) ? "noreferrer" : undefined}
                className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
              >
                {copy(locale, page.cta.primary)}
              </Link>
              {hasLabel(page.cta.secondary) && page.cta.secondaryHref ? (
                <Link
                  href={resolveHref(page.cta.secondaryHref)}
                  target={isExternal(page.cta.secondaryHref) ? "_blank" : undefined}
                  rel={isExternal(page.cta.secondaryHref) ? "noreferrer" : undefined}
                  className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy(locale, page.cta.secondary)}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
