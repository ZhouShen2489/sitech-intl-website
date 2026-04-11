import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy, copyList } from "@/content/siteContent";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

export default async function TeamshubBusinessOsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const detail = siteContent.solutionDetails.teamshub;

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
          <div className="mt-12 grid gap-8">
            {detail.sections.map((section, index) => (
              <article
                key={section.title.en}
                className={`grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-ink">
                  <Image src={withBasePath(section.image)} alt={copy(locale, section.title)} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="font-serif text-3xl leading-tight text-ink">{copy(locale, section.title)}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, section.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.useCasesTitle)} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {copyList(locale, detail.useCases).map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-6 shadow-card text-base leading-8 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.roadmapTitle)} text={copy(locale, detail.roadmapText)} />
          <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-card">
            <Image
              src={withBasePath(detail.roadmapImage)}
              alt={copy(locale, detail.roadmapTitle)}
              width={2200}
              height={1378}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-[#fbfcfd] p-6 text-sm leading-7 text-slate-600">
            {locale === "en"
              ? "Placeholder area for Teamshub structure diagrams, workflow maps, or role-based collaboration visuals."
              : "这里预留 Teamshub 结构图、工作流图或角色协同示意图占位。"}
          </div>
          <div className="mt-10">
            <Link
              href={withLocale(locale, "/contact")}
              className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
            >
              {locale === "en" ? "Discuss Teamshub" : "讨论 Teamshub 方案"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
