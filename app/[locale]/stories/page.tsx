import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { StoryAccordion } from "@/components/story-accordion";
import { siteContent, copy, visibleItems } from "@/content/site-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

const groupImages = [
  "/images/curated/business-partners-discussion.jpg",
  "/images/curated/diverse-executive-meeting.jpg",
  "/images/curated/modern-office-tablet-discussion.jpg",
  "/images/curated/smiling-partnership-handshake.jpg",
];

const opportunityImages = [
  "/images/curated/call-center-team-meeting.jpg",
  "/images/curated/warehouse-logistics-team.jpg",
  "/images/curated/project-team-laptop.jpg",
];

export default async function StoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const groups = visibleItems(siteContent.partnershipPage.groups);
  const models = visibleItems(siteContent.partnershipPage.models);
  const opportunities = visibleItems(siteContent.partnershipPage.opportunities);

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, siteContent.storiesPage.hero.title)}
        subtitle={copy(locale, siteContent.storiesPage.hero.subtitle)}
        image={siteContent.storiesPage.hero.image}
      />

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.storiesPage.introTitle)} />
          <div className="mt-12">
            <StoryAccordion locale={locale} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={copy(locale, siteContent.partnershipPage.groupsTitle)}
            text={copy(locale, siteContent.partnershipPage.hero.subtitle)}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {groups.map((item, index) => (
              <article key={item.title.en} className="interactive-card group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card">
                <div className="relative h-52 bg-mist">
                  <Image
                    src={withBasePath(groupImages[index % groupImages.length])}
                    alt={copy(locale, item.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="image-lift object-cover"
                  />
                </div>
                <div className="p-7">
                <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.partnershipPage.modelsTitle)} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {models.map((model, index) => (
              <article key={model.title.en} className="interactive-card surface-card rounded-[2rem] p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-tide">0{index + 1}</p>
                <h2 className="mt-6 font-display text-2xl text-ink">{copy(locale, model.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, model.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={copy(locale, siteContent.partnershipPage.opportunityTitle)}
            text={copy(locale, siteContent.partnershipPage.opportunityText)}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {opportunities.map((item, index) => (
              <article key={item.title.en} className="interactive-card group overflow-hidden rounded-[2rem] border border-blue-100 bg-[#f7fbff] shadow-card">
                <div className="relative h-44 bg-white">
                  <Image
                    src={withBasePath(opportunityImages[index % opportunityImages.length])}
                    alt={copy(locale, item.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="image-lift object-cover"
                  />
                </div>
                <div className="p-7">
                <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="brand-orbit mt-12 rounded-[2.5rem] px-8 py-12 text-white shadow-card">
            <p className="font-display text-3xl">{copy(locale, siteContent.partnershipPage.cta.title)}</p>
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
