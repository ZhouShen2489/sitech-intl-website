import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { copy, copyList, siteContent } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function MarketplacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = siteContent.marketplacePage;
  const featuredItem = page.ownItems[0];

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, page.hero.title)}
        subtitle={copy(locale, page.hero.subtitle)}
        image={page.hero.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.introTitle)} text={copy(locale, page.introText)} />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.filters.map((item) => (
              <div
                key={item.title.en}
                className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6 shadow-card"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-tide">
                  {locale === "en" ? "Browse lens" : "浏览维度"}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2.5rem] border border-ink bg-ink p-8 text-white shadow-card lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent/80">
                  {copy(locale, page.featuredTitle)}
                </p>
                <h2 className="mt-4 font-serif text-4xl">{copy(locale, featuredItem.title)}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">{copy(locale, featuredItem.subtitle)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {copyList(locale, featuredItem.tags).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/82"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-[220px] rounded-[2rem] border border-white/10 bg-white/6 p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent/80">
                  {copy(locale, page.featuredText)}
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                  {featuredItem.bullets[locale].slice(0, 3).map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                </div>
                <Link
                  href={withLocale(locale, featuredItem.href)}
                  className="mt-6 inline-flex rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
                >
                  {copy(locale, featuredItem.cta)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.ownTitle)} text={copy(locale, page.ownText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {page.ownItems.map((item) => (
              <article
                key={item.title.en}
                className="group flex h-full flex-col rounded-[2.25rem] border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-ink/20"
              >
                <div className="flex items-start justify-between gap-4">
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

                <h2 className="mt-6 font-serif text-3xl text-ink">{copy(locale, item.title)}</h2>
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
                    <div key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-[#f9fbfd] px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">{copy(locale, item.note)}</p>

                <div className="mt-8 pt-2">
                  <Link
                    href={withLocale(locale, item.href)}
                    className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                  >
                    {copy(locale, item.cta)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.partnerTitle)} text={copy(locale, page.partnerText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {page.partnerItems.map((item) => (
              <article
                key={item.title.en}
                className="flex h-full flex-col rounded-[2.25rem] border border-slate-200 bg-[#f7f9fb] p-7 shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-white text-sm font-semibold uppercase tracking-[0.16em] text-ink shadow-card">
                    {item.title.en.slice(0, 2)}
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                      {copy(locale, item.category)}
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#315ea8]">
                      {copy(locale, item.status)}
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-3xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, item.subtitle)}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {copyList(locale, item.tags).map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  {item.bullets[locale].slice(0, 3).map((bullet) => (
                    <div key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">{copy(locale, item.note)}</p>

                <div className="mt-8 pt-2">
                  <Link
                    href={withLocale(locale, item.href)}
                    className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
                  >
                    {copy(locale, item.cta)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-2xl font-serif text-3xl">{copy(locale, page.cta.title)}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {copy(locale, page.cta.button)}
          </Link>
        </div>
      </section>
    </>
  );
}
