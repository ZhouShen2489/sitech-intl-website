import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/page-sections";
import { productsContent } from "@/content/productsContent";
import { copy } from "@/content/siteContent";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

function ActionLink({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "button-glow inline-flex rounded-full bg-tide px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
      : "inline-flex rounded-full border border-tide/30 bg-white px-5 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default async function HelportProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const detail = productsContent.helport;
  const heroPills =
    locale === "en"
      ? ["Live agent guidance", "AI + BPO execution", "24/7 digital workers"]
      : ["实时坐席辅助", "AI + BPO 执行", "24/7 数字员工"];
  const productPreview =
    locale === "en"
      ? {
          label: "Live conversation copilot",
          transcriptLabel: "Transcript",
          actionLabel: "AI next best action",
          transcript: "Customer asks about eligibility, pricing, and next steps.",
          suggestion: "Recommend next question, compliant wording, and follow-up task.",
          score: "QA risk: low",
        }
      : {
          label: "实时沟通副驾",
          transcriptLabel: "通话理解",
          actionLabel: "AI 下一步建议",
          transcript: "客户正在询问资格、价格和下一步。",
          suggestion: "推荐追问、合规话术和跟进任务。",
          score: "质检风险：低",
        };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f6faff]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tide/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-tide shadow-sm">
              {copy(locale, detail.hero.badge)}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-5xl lg:text-6xl">
              {copy(locale, detail.hero.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {copy(locale, detail.hero.subtitle)}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroPills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <ActionLink
                href={withLocale(locale, detail.heroActions.primaryHref)}
                label={copy(locale, detail.heroActions.primary)}
              />
              <ActionLink
                href={detail.heroActions.secondaryHref}
                label={copy(locale, detail.heroActions.secondary)}
                variant="secondary"
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-[0_30px_90px_rgba(11,47,111,0.16)]">
              <div className="relative h-[24rem] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src={withBasePath(detail.hero.image)}
                  alt=""
                  fill
                  priority
                  quality={82}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,250,255,0.9),rgba(246,250,255,0.18)_48%,rgba(7,26,51,0.22))]" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.4rem] border border-blue-100 bg-white/95 p-5 shadow-[0_22px_60px_rgba(11,47,111,0.18)] backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
                    {productPreview.label}
                  </p>
                  <span className="rounded-full bg-[#eaf4ff] px-3 py-1 text-xs font-bold text-tide">
                    {productPreview.score}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7fbff] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {productPreview.transcriptLabel}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{productPreview.transcript}</p>
                  </div>
                  <div className="rounded-2xl bg-[#fff5e5] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {productPreview.actionLabel}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{productPreview.suggestion}</p>
                  </div>
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
              <div key={`${item.value}-${item.label.en}`} className="rounded-lg border border-blue-100 bg-[#f8fbff] p-5">
                <div className="flex items-end gap-2">
                  <p className="font-serif text-4xl leading-none text-ink">{item.value}</p>
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
          <SectionHeading title={copy(locale, detail.visualTitle)} text={copy(locale, detail.visualText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.visualSlots.map((slot) => (
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
                  <h2 className="text-xl font-bold tracking-[-0.02em] text-ink">{copy(locale, slot.title)}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, slot.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading title={copy(locale, detail.overviewTitle)} text={copy(locale, detail.overviewText)} />
            <div className="grid gap-4 md:grid-cols-2">
              {detail.problemItems.map((item) => (
                <article key={item.title.en} className="interactive-card rounded-lg border border-blue-100 bg-white p-6 shadow-card">
                  <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.familyTitle)} text={copy(locale, detail.familyText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.familyItems.map((item) => (
              <article key={item.title.en} className="interactive-card flex flex-col rounded-lg border border-blue-100 bg-[#f8fbff] p-7 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tide">
                  {copy(locale, item.label)}
                </p>
                <h2 className="mt-4 font-serif text-3xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.summary)}</p>

                <div className="mt-6 space-y-3">
                  {item.bullets[locale].map((bullet) => (
                    <div key={bullet} className="border-l-2 border-tide bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ActionLink href={withLocale(locale, item.primaryHref)} label={copy(locale, item.primaryLabel)} />
                  <ActionLink
                    href={item.secondaryHref.startsWith("http") ? item.secondaryHref : withLocale(locale, item.secondaryHref)}
                    label={copy(locale, item.secondaryLabel)}
                    variant="secondary"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-[#f5f9ff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.proofTitle)} text={copy(locale, detail.proofText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.caseStudies.map((item) => (
              <article key={item.title.en} className="rounded-lg border border-blue-100 bg-white p-7 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tide">
                  {copy(locale, item.eyebrow)}
                </p>
                <h2 className="mt-4 font-serif text-2xl leading-tight text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                <div className="mt-7 grid gap-3">
                  {item.metrics.map((metric) => (
                    <div key={`${item.title.en}-${metric.value}`} className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
                      <p className="font-serif text-3xl text-ink">{metric.value}</p>
                      <p className="max-w-[11rem] text-right text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {copy(locale, metric.label)}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.advantageTitle)} text={copy(locale, detail.advantageText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.advantages.map((item) => (
              <article key={item.title.en} className="interactive-card surface-card rounded-lg p-7">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.fitTitle)} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {detail.fitItems.map((item) => (
              <article key={item.title.en} className="rounded-lg border border-slate-200 bg-[#f7f9fb] p-6 shadow-card">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.motionTitle)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.motionItems.map((item) => (
              <article key={item.title.en} className="interactive-card surface-card rounded-lg p-7">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="max-w-3xl font-serif text-3xl">{copy(locale, detail.cta.title)}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={withLocale(locale, detail.cta.primaryHref)}
              className="button-glow inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {copy(locale, detail.cta.primary)}
            </Link>
            <a
              href={detail.cta.secondaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy(locale, detail.cta.secondary)}
            </a>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-white/62">
            {copy(locale, detail.cta.partnerNote)}
          </p>
        </div>
      </section>
    </>
  );
}
