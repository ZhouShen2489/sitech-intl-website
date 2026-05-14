import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
import { isLocale } from "@/lib/site";

export default async function PrivacyPage({
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
        title={copy(locale, siteContent.privacyPage.title)}
        subtitle={copy(locale, siteContent.privacyPage.intro)}
        image="/images/curated/business-dashboard-laptop.jpg"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-6 px-6 lg:px-8">
          {siteContent.privacyPage.sections.map((section) => (
            <article key={section.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="font-serif text-2xl text-ink">{copy(locale, section.title)}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, section.text)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
