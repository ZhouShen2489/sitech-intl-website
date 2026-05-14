import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
import { isLocale } from "@/lib/site";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = siteContent.aboutPage;

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

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.stats.map((stat) => (
              <div key={stat.value} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <p className="font-serif text-4xl text-ink">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, stat.label)}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {page.pillars.map((item) => (
              <article key={item.title.en} className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-7">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.coverageTitle)} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {page.coverageItems.map((item) => (
              <div key={item.en} className="rounded-[2rem] bg-white p-6 text-base leading-8 text-slate-700 shadow-card">
                {copy(locale, item)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
