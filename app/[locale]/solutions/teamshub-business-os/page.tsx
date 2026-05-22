import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
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
  const preview =
    locale === "en"
      ? {
          project: "ABC Client Compliance Review",
          stage: "Stage: Evidence review",
          circles: ["Internal Team", "Client Communication", "Evidence & Docs"],
          posts: ["Client requirements summary", "Risk register", "Weekly review"],
          aiTitle: "AI project brief",
          aiText: "Client asked for a revised checklist. Two evidence tasks are open. Next follow-up is due Friday.",
          task: "5 open tasks",
        }
      : {
          project: "ABC 客户合规审查项目",
          stage: "阶段：材料审查",
          circles: ["团队讨论圈", "客户沟通圈", "证据材料圈"],
          posts: ["客户需求总结", "风险问题清单", "本周复盘"],
          aiTitle: "AI 项目摘要",
          aiText: "客户要求更新检查清单。仍有 2 个材料任务待完成，周五需要跟进。",
          task: "5 个待办",
        };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f6faff]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tide/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-tide shadow-sm">
              {locale === "en" ? "Product / Project knowledge workspace" : "产品 / 项目级知识沉淀"}
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
              {copy(locale, detail.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {copy(locale, detail.subtitle)}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, "/contact")}
                className="button-glow inline-flex rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {copy(locale, detail.cta.primary)}
              </Link>
              <Link
                href="#loop"
                className="inline-flex rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {copy(locale, detail.cta.secondary)}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-4 shadow-[0_30px_90px_rgba(11,47,111,0.16)]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">Project View</p>
                  <h2 className="mt-2 font-display text-xl font-bold text-ink">{preview.project}</h2>
                </div>
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-tide shadow-sm">
                  {preview.stage}
                </span>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[0.72fr_1fr_0.9fr]">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Circles</p>
                  <div className="mt-3 space-y-2">
                    {preview.circles.map((item) => (
                      <div key={item} className="rounded-xl bg-[#eef6ff] px-3 py-2 text-sm font-semibold text-ink">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Post Catalog</p>
                  <div className="mt-3 space-y-2">
                    {preview.posts.map((item) => (
                      <div key={item} className="border-l-2 border-tide bg-[#f8fbff] px-3 py-2 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#fff5e5] p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{preview.aiTitle}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{preview.aiText}</p>
                  <div className="mt-4 rounded-xl bg-white px-3 py-2 text-sm font-bold text-ink">{preview.task}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {detail.proofBar.map((item) => (
              <div key={item.value} className="rounded-lg border border-blue-100 bg-[#f8fbff] p-5">
                <div className="flex items-end gap-2">
                  <p className="font-display text-3xl leading-none text-ink">{item.value}</p>
                  <p className="pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-tide">
                    {copy(locale, item.label)}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{copy(locale, item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading title={copy(locale, detail.problemTitle)} text={copy(locale, detail.intro)} />
            <div className="grid gap-4 md:grid-cols-2">
              {detail.problemItems.map((item) => (
                <article key={item.title.en} className="interactive-card rounded-lg border border-blue-100 bg-[#f8fbff] p-6 shadow-card">
                  <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="loop" className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.mechanismTitle)} text={copy(locale, detail.mechanismText)} />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {detail.mechanismItems.map((item) => (
              <article key={item.title.en} className="rounded-lg border border-blue-100 bg-white p-5 shadow-card">
                <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.loopTitle)} text={copy(locale, detail.loopText)} />
          <div className="mt-10 grid gap-3 md:grid-cols-6">
            {detail.loopSteps[locale].map((step, index) => (
              <div key={step} className="relative rounded-lg border border-blue-100 bg-[#f8fbff] p-5">
                <p className="text-xs font-bold text-tide">0{index + 1}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-ink">{step}</p>
                {index < detail.loopSteps[locale].length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-blue-200 bg-[#f8fbff] md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9ff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.productScreensTitle)} text={copy(locale, detail.productScreensText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.productScreens.map((slot) => (
              <article key={slot.title.en} className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card">
                <div className="relative h-56 bg-slate-100">
                  <Image
                    src={withBasePath(slot.image)}
                    alt=""
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.04),rgba(7,26,51,0.54))]" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-tide">
                    {copy(locale, slot.label)}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-ink">{copy(locale, slot.title)}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, slot.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.useCasesTitle)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.useCases.map((item) => (
              <article key={item.title.en} className="interactive-card rounded-lg border border-slate-200 bg-[#f7f9fb] p-6 shadow-card">
                <h2 className="font-display text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.mvpTitle)} text={copy(locale, detail.mvpText)} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {detail.mvpStages.map((stage) => (
              <article key={stage.title.en} className="rounded-lg border border-blue-100 bg-white p-6 shadow-card">
                <h2 className="font-display text-2xl text-ink">{copy(locale, stage.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, stage.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading title={copy(locale, detail.exampleTitle)} text={copy(locale, detail.exampleText)} />
            <div className="mt-8">
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {copy(locale, detail.cta.primary)}
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-card">
            <div className="relative h-[24rem] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src={withBasePath(detail.roadmapImage)}
                alt=""
                fill
                quality={76}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-3xl font-display text-3xl">{copy(locale, detail.cta.title)}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-glow inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {copy(locale, detail.cta.primary)}
          </Link>
        </div>
      </section>
    </>
  );
}
