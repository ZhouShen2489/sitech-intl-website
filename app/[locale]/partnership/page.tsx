import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function PartnershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, siteContent.partnershipPage.hero.title)}
        subtitle={copy(locale, siteContent.partnershipPage.hero.subtitle)}
        image={siteContent.partnershipPage.hero.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.partnershipPage.groupsTitle)} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteContent.partnershipPage.groups.map((item) => (
              <article key={item.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.partnershipPage.modelsTitle)} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteContent.partnershipPage.models.map((model, index) => (
              <article key={model.title.en} className="rounded-[2rem] bg-white p-7 shadow-card">
                <p className="text-sm uppercase tracking-[0.2em] text-tide">0{index + 1}</p>
                <h2 className="mt-6 font-serif text-2xl text-ink">{copy(locale, model.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, model.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-ink px-8 py-12 text-white shadow-card">
            <p className="font-serif text-3xl">{copy(locale, siteContent.partnershipPage.cta.title)}</p>
            <div className="mt-8">
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
              >
                {copy(locale, siteContent.partnershipPage.cta.button)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
