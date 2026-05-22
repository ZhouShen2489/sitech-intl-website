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

  const page = siteContent.marketplacePage;
  const ownItems = visibleItems(page.ownItems);
  const partnerItems = visibleItems(page.partnerItems);
  const filterCards: { item: (typeof page.filters)[number]; href: string }[] = [
    { item: page.filters[0], href: "#owned-products" },
  ];

  if (partnerItems.length > 0) {
    filterCards.push({ item: page.filters[1], href: "#partner-products" });
  }

  filterCards.push({ item: page.filters[2], href: "#owned-products" });

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

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {filterCards.map(({ item, href }) => (
              <Link
                key={item.title.en}
                href={href}
                className="interactive-card surface-card rounded-[2rem] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-tide">
                  {locale === "en" ? "Find by need" : "按需求定位"}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                    <div key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-[#f9fbfd] px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">{copy(locale, item.note)}</p>

                <div className="mt-8 pt-2">
                  <Link
                    href={withLocale(locale, item.href)}
                    className="inline-flex rounded-full border border-tide/30 px-5 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
                  >
                    {copy(locale, item.cta)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {partnerItems.length > 0 ? (
        <section id="partner-products" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading title={copy(locale, page.partnerTitle)} text={copy(locale, page.partnerText)} />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {partnerItems.map((item) => (
                <article
                  key={item.title.en}
                  className="interactive-card group flex h-full flex-col rounded-[2.25rem] border border-blue-100 bg-[#f7fbff] p-7 shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-28 w-full overflow-hidden rounded-[1.5rem] bg-white md:h-36">
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

                  <h2 className="mt-6 font-display text-3xl text-ink">{copy(locale, item.title)}</h2>
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
      ) : null}

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
