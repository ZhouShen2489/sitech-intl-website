import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function TelecomOperationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const detail = siteContent.solutionDetails.telecom;

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, detail.title)}
        subtitle={copy(locale, detail.subtitle)}
        image={detail.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.title)} text={copy(locale, detail.intro)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {detail.capabilityBlocks.map((block) => (
              <article key={block.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, block.title)}</h2>
                <ul className="mt-5 space-y-3">
                  {block.bullets[locale].map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.proofTitle)} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {detail.proofItems.map((item) => (
              <div key={item.en} className="rounded-[2rem] bg-white p-6 shadow-card text-base leading-8 text-slate-700">
                {copy(locale, item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.startTitle)} />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {detail.startItems[locale].map((item) => (
              <div key={item} className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6 text-base leading-8 text-slate-700">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-[#fbfcfd] p-6 text-sm leading-7 text-slate-600">
            {locale === "en"
              ? "Placeholder area for operator support architecture, process diagrams, or product-structure visuals."
              : "这里预留运营商支撑架构图、流程图或产品结构图占位。"}
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6">
            <h3 className="font-serif text-2xl text-ink">{copy(locale, detail.storyTitle)}</h3>
            <ul className="mt-5 space-y-3">
              {detail.storyItems[locale].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Link
              href={withLocale(locale, "/contact")}
              className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
            >
              {locale === "en" ? "Discuss This Scope" : "讨论这个方向"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
