import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

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
  const heroPreview =
    locale === "en"
      ? {
          label: "Telecom operating loop",
          order: "Customer order",
          activation: "Activation",
          billing: "Billing",
          partner: "Partner settlement",
        }
      : {
          label: "运营商业务闭环",
          order: "客户受理",
          activation: "开通激活",
          billing: "计费账务",
          partner: "伙伴结算",
        };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f6faff]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tide/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-tide shadow-sm">
              {copy(locale, detail.badge)}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-5xl">
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
                {locale === "en" ? "Discuss a telecom scope" : "讨论运营商方案"}
              </Link>
              <Link
                href="#tracks"
                className="inline-flex rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {locale === "en" ? "See BSS / MVNO tracks" : "查看 BSS / MVNO 主线"}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-[0_30px_90px_rgba(11,47,111,0.16)]">
              <div className="relative h-[24rem] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src={withBasePath(detail.image)}
                  alt=""
                  fill
                  priority
                  quality={82}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,250,255,0.92),rgba(246,250,255,0.2)_52%,rgba(7,26,51,0.2))]" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.4rem] border border-blue-100 bg-white/95 p-5 shadow-[0_22px_60px_rgba(11,47,111,0.18)] backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
                  {heroPreview.label}
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {[heroPreview.order, heroPreview.activation, heroPreview.billing, heroPreview.partner].map(
                    (item, index) => (
                      <div key={item} className="rounded-2xl bg-[#f7fbff] p-4">
                        <p className="text-xs font-bold text-tide">0{index + 1}</p>
                        <p className="mt-2 text-sm font-bold leading-6 text-ink">{item}</p>
                      </div>
                    ),
                  )}
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
                  <p className="font-serif text-3xl leading-none text-ink">{item.value}</p>
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.03),rgba(7,26,51,0.56))]" />
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

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading title={copy(locale, detail.problemTitle)} text={copy(locale, detail.intro)} />
            <div className="grid gap-4 md:grid-cols-2">
              {detail.problemItems.map((item) => (
                <article key={item.title.en} className="interactive-card rounded-lg border border-blue-100 bg-[#f8fbff] p-6 shadow-card">
                  <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tracks" className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.tracksTitle)} text={copy(locale, detail.tracksText)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {detail.tracks.map((track) => (
              <article key={track.title.en} className="interactive-card flex flex-col rounded-[2rem] border border-blue-100 bg-white p-7 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tide">
                  {copy(locale, track.label)}
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-ink">
                  {copy(locale, track.title)}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, track.text)}</p>
                <div className="mt-7 grid gap-3">
                  {track.bullets[locale].map((bullet) => (
                    <div key={bullet} className="border-l-2 border-tide bg-[#f8fbff] px-4 py-3 text-sm leading-7 text-slate-700">
                      {bullet}
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
          <SectionHeading
            title={locale === "en" ? "Capability modules behind the solution" : "支撑方案落地的能力模块"}
            text={
              locale === "en"
                ? "Select the modules that match the launch, order, billing, partner, and portal scope."
                : "按上线、订单、计费、伙伴和门户范围选择需要的能力模块。"
            }
          />
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
              <div key={item.en} className="rounded-[2rem] bg-white p-6 text-base leading-8 text-slate-700 shadow-card">
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

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {locale === "en" ? "Best-fit scenarios" : "适合场景"}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">{copy(locale, detail.principleTitle)}</h2>
          </div>
          <div className="grid gap-3">
            {detail.principleItems[locale].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-sm leading-7 text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
