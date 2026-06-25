import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  telecomBoard,
  telecomCopy,
  telecomDirections,
} from "@/content/telecom-solutions-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

export default async function TelecomSolutionsPage({
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
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#eef5ff_100%)] text-ink">
        <div className="absolute inset-0 bg-grid bg-[size:54px_54px] opacity-[0.08]" />
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-tide/10" />
        <div className="absolute left-1/2 top-20 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-signal/20" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_48%_26%,rgba(82,155,255,0.16),transparent_25rem)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {locale === "en"
                ? "Telecom growth and operations"
                : "通信业务增长与运营支撑"}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              {telecomCopy(locale, telecomBoard.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {telecomCopy(locale, telecomBoard.subtitle)}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#signal-map"
                className="button-glow rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {telecomCopy(locale, telecomBoard.secondaryCta)}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-tide/30 hover:bg-[#f8fbff]"
              >
                {telecomCopy(locale, telecomBoard.primaryCta)}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[32rem]">
            <div className="absolute inset-0 rounded-[2rem] border border-blue-100 bg-white/80 shadow-[0_30px_90px_rgba(11,47,111,0.14)] backdrop-blur" />
            <div className="absolute -right-5 -top-5 z-10 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-tide shadow-sm md:block">
              {locale === "en" ? "Live capability map" : "能力地图"}
            </div>
            <div className="absolute -left-5 bottom-12 z-10 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 text-xs font-bold text-tide shadow-[0_18px_46px_rgba(11,47,111,0.14)] md:block">
              {locale === "en"
                ? "BSS / MVNO / Broadband / AI / Portal"
                : "BOSS / MVNO / 宽带 / AI / 门户"}
            </div>
            <div className="absolute inset-4 overflow-hidden rounded-[1.5rem]">
              <Image
                src={withBasePath(telecomBoard.image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,0.78),rgba(7,26,51,0.18)_52%,rgba(7,26,51,0.74))]" />
            </div>

            <div className="relative p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-tide">
                {telecomCopy(locale, telecomBoard.lifecycle.title)}
              </p>
              <div className="mt-8 space-y-4">
                {telecomBoard.lifecycle.steps.map((step, index) => (
                  <Link
                    key={step.en}
                    href={withLocale(
                      locale,
                      `/solutions/telecom/${telecomDirections[index]?.slug ?? "boss"}`,
                    )}
                    className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-4 rounded-full border border-blue-100 bg-white/92 px-3 py-3 shadow-sm transition hover:border-tide/40 hover:bg-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal text-sm font-black text-ink">
                      0{index + 1}
                    </span>
                    <span className="font-display text-xl font-bold text-ink">
                      {telecomCopy(locale, step)}
                    </span>
                    <span className="pr-2 text-tide transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 rounded-[1.4rem] border border-blue-100 bg-white/92 p-5 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">
                  {locale === "en"
                    ? "Enter from the pressure you feel most: production systems, global launch, broadband delivery, service experience, or marketing conversion."
                    : "无论你当前最急的是生产支撑、全球上线、宽带开通、服务体验还是营销转化，这里都能直接进入对应业务线。"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-blue-100 px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
          {telecomBoard.proof.map((item) => (
            <div key={item.value} className="py-8 md:px-6">
              <p className="font-display text-4xl font-bold leading-none text-ink">
                {item.value}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-tide">
                {telecomCopy(locale, item.label)}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {telecomCopy(locale, item.text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card">
            <div className="grid lg:grid-cols-[0.76fr_1.24fr]">
              <div className="bg-ink p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  {locale === "en" ? "Telecom console" : "运营商/MVNO业务"}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
                  {locale === "en"
                    ? "Five paths, one operating surface."
                    : "五条业务线，落在同一个运营面。"}
                </h2>
              </div>
              <div className="grid gap-0 md:grid-cols-5">
                {telecomDirections.map((direction, index) => (
                  <Link
                    key={direction.slug}
                    href={withLocale(
                      locale,
                      `/solutions/telecom/${direction.slug}`,
                    )}
                    className="group relative min-h-48 border-b border-blue-100 p-5 transition hover:bg-[#eef6ff] md:border-b-0 md:border-l"
                  >
                    <div className="absolute left-5 right-5 top-5 h-1 rounded-full bg-blue-100">
                      <div
                        className="h-full rounded-full bg-tide"
                        style={{ width: `${46 + index * 10}%` }}
                      />
                    </div>
                    <p className="mt-8 text-xs font-black text-tide">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink">
                      {telecomCopy(locale, direction.shortTitle)}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {telecomCopy(locale, direction.eyebrow)}
                    </p>
                    <span className="absolute bottom-5 right-5 text-tide transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="signal-map" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="h-1 w-14 rounded-full bg-tide" />
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en"
                  ? "Five lines, one telecom operating story."
                  : "五条业务线，一套通信业务故事。"}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {locale === "en"
                  ? "Each line is a market-facing entry point: what it improves, where it connects, and what result a buyer can recognize."
                  : "每条线都对应一个客户能马上理解的业务入口：改善什么、接在哪里、能带来什么结果。"}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gradient-to-b from-tide via-signal to-tide md:block" />
              <div className="space-y-5">
                {telecomDirections.map((direction, index) => (
                  <Link
                    key={direction.slug}
                    href={withLocale(
                      locale,
                      `/solutions/telecom/${direction.slug}`,
                    )}
                    className={`group relative grid gap-5 rounded-[1.6rem] border border-blue-100 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:border-tide/40 hover:bg-white hover:shadow-[0_28px_90px_rgba(11,47,111,0.13)] md:grid-cols-[4rem_1fr_13rem] ${
                      index % 2 === 1 ? "md:ml-8" : ""
                    }`}
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink font-display text-xl font-bold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tide">
                        {telecomCopy(locale, direction.eyebrow)}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink">
                        {telecomCopy(locale, direction.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {telecomCopy(locale, direction.summary)}
                      </p>
                    </div>
                    <div className="flex items-end justify-between border-t border-blue-100 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                      <span className="text-sm font-bold text-tide">
                        {locale === "en" ? "View path" : "进入方案线"}
                      </span>
                      <span className="text-xl text-tide transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef6ff] py-20 lg:py-24">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full border border-tide/15" />
        <div className="absolute right-[-6rem] bottom-[-6rem] h-64 w-64 rounded-full border border-signal/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "What this board helps unlock" : "这套方案，最终能带来什么"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en"
                  ? "Clearer launches, cleaner operations, smarter service."
                  : "上线更快，运营更清楚，服务更智能。"}
              </h2>
            </div>
            <div className="grid gap-3">
              {telecomBoard.boardSections.map((section, index) => (
                <div
                  key={section.title.en}
                  className="grid gap-4 rounded-full border border-blue-100 bg-white/82 px-5 py-4 shadow-sm backdrop-blur md:grid-cols-[3rem_0.55fr_1fr] md:items-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tide text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {telecomCopy(locale, section.title)}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {telecomCopy(locale, section.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              {locale === "en"
                ? "Make the next telecom service easier to launch and easier to operate."
                : "让下一条通信业务更快上线，也更容易运营。"}
            </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                {locale === "en"
                  ? "Start from the path closest to your current business: production support, MVNO launch, AI care, portal conversion, or billing control."
                  : "可以直接从最贴近当前业务的方向进入：生产支撑、MVNO 上线、智能客服、门户转化或计费控制。"}
              </p>
          </div>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex w-fit rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Talk to Si-Tech Intl" : "联系 Si-Tech Intl"}
          </Link>
        </div>
      </section>
    </>
  );
}
