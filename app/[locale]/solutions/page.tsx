import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = siteContent.solutionsPage;

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
          <SectionHeading title={copy(locale, page.directionsTitle)} />
          <div className="mt-12 grid gap-8">
            {siteContent.solutionsCatalog.map((solution, index) => (
              <article
                key={solution.key}
                className={`grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-ink">
                  <Image src={withBasePath(solution.image)} alt={copy(locale, solution.title)} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-[0.22em] text-tide">{copy(locale, solution.eyebrow)}</p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">{copy(locale, solution.title)}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, solution.text)}</p>
                  <ul className="mt-6 space-y-3">
                    {solution.bullets[locale].map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-700">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={withLocale(locale, solution.href)}
                      className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                    >
                      {copy(locale, solution.linkLabel)}
                    </Link>
                    <Link
                      href={withLocale(locale, solution.storyHref)}
                      className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-ink hover:text-ink"
                    >
                      {locale === "en" ? "Open Related Stories" : "查看相关故事"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.categoryTitle)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteContent.solutionCategories.map((category) => (
              <article key={category.key} className="rounded-[2rem] bg-white p-7 shadow-card">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, category.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, category.text)}</p>
                <div className="mt-6 space-y-3">
                  {siteContent.solutionsCatalog
                    .filter((solution) => solution.category === category.key)
                    .map((solution) => (
                      <div key={solution.key} className="rounded-[1.5rem] bg-[#f7f9fb] px-4 py-4 text-sm leading-6 text-slate-700">
                        <span className="font-semibold text-ink">{copy(locale, solution.title)}</span>
                      </div>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.startPoints.title)} />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {page.startPoints.items.map((item) => (
              <div key={item.en} className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6 text-base leading-8 text-slate-700">
                {copy(locale, item)}
              </div>
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
