import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { StoryAccordion } from "@/components/story-accordion";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale } from "@/lib/site";

export default async function StoriesPage({
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
        title={copy(locale, siteContent.storiesPage.hero.title)}
        subtitle={copy(locale, siteContent.storiesPage.hero.subtitle)}
        image={siteContent.storiesPage.hero.image}
      />

      <section className="bg-[#f7f4ed] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.storiesPage.introTitle)} />
          <div className="mt-12">
            <StoryAccordion locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
