import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  telecomBoard,
  telecomCopy,
  telecomDirections,
} from "@/content/telecom-solutions-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

const buyerScenarios = {
  zh: ["新通信业务上线", "BSS/OSS 流程断点", "MVNO 与分销结算", "宽带开通与工单", "客服 AI 与门户转化"],
  en: ["New telecom launch", "BSS/OSS handoff gaps", "MVNO and distribution settlement", "Broadband activation and tickets", "AI care and portal conversion"],
} as const;

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
      <section className="overflow-hidden bg-[#071a33] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-12 lg:items-stretch lg:px-8 lg:py-16">
          <div className="relative z-10 flex flex-col justify-center py-4 lg:col-span-5 lg:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ad8ff]">
              {locale === "en" ? "Telecom growth and operations" : "通信业务增长与运营支撑"}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.035em] md:text-6xl">
              {telecomCopy(locale, telecomBoard.title)}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {telecomCopy(locale, telecomBoard.subtitle)}
            </p>

            <div className="mt-7 grid gap-x-4 gap-y-2 border-y border-white/15 py-4 sm:grid-cols-2">
              {buyerScenarios[locale].map((scenario) => (
                <span
                  key={scenario}
                  className="border-l border-[#78ddff]/70 pl-3 text-xs font-semibold text-slate-200"
                >
                  {scenario}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#paths"
                className="rounded-full bg-[#78ddff] px-6 py-3 text-sm font-bold text-[#071a33] transition hover:bg-white"
              >
                {telecomCopy(locale, telecomBoard.secondaryCta)}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#071a33]"
              >
                {telecomCopy(locale, telecomBoard.primaryCta)}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[32rem] overflow-hidden border border-white/15 bg-[#0b294c] lg:col-span-7 lg:min-h-0">
            <div className="absolute inset-0">
              <Image
                src={withBasePath(telecomBoard.image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(7,26,51,0.9),rgba(7,26,51,0.38)_65%,rgba(7,26,51,0.72))]" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
              <p className="max-w-xs text-xs font-bold uppercase tracking-[0.2em] text-[#b3e9ff]">
                {locale === "en" ? "A connected operating loop" : "一条连贯的运营闭环"}
              </p>
              <div className="border-l border-[#78ddff] pl-5">
                {telecomDirections.map((direction, index) => (
                  <Link key={direction.slug} href={withLocale(locale, `/solutions/telecom/${direction.slug}`)} className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 border-b border-white/15 py-3.5 last:border-b-0">
                    <span className="font-display text-xl font-bold text-[#78ddff]">0{index + 1}</span>
                    <span className="text-sm font-semibold text-white">{telecomCopy(locale, direction.shortTitle)}</span>
                    <span className="text-sm text-white/60 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8e7f5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-4 lg:px-8">
          {telecomBoard.proof.map((item) => (
            <div key={item.value} className="border-b border-[#d8e7f5] py-6 md:border-b-0 md:border-r md:px-6 last:md:border-r-0">
              <p className="font-display text-4xl font-bold leading-none text-ink">{item.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-tide">
                {telecomCopy(locale, item.label)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{telecomCopy(locale, item.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="paths" className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "Choose the closest business pressure" : "按最接近的业务压力进入"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl">
                {locale === "en" ? "Start with the pressure you need to solve." : "从最需要解决的业务压力开始。"}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-8 text-slate-700">
                {locale === "en"
                  ? "Five routes, one operating chain. Each route opens into a focused conversation: buyer, bottleneck, connected capability, reference experience, and a sensible first scope."
                  : "五条路径组成一条运营链。每条都直接说明：适合谁、卡在哪里、连接什么能力、有什么经验，以及可从哪里切入。"}
              </p>
            </div>

            <div className="border-t border-[#c9dff2] lg:col-span-8">
              {telecomDirections.map((direction, index) => (
                <Link
                  key={direction.slug}
                  href={withLocale(locale, `/solutions/telecom/${direction.slug}`)}
                  className="group grid gap-3 border-b border-[#c9dff2] py-6 transition hover:bg-[#f4faff] md:grid-cols-12 md:items-start md:gap-5 md:px-4"
                >
                  <span className="font-display text-3xl font-bold leading-none text-tide md:col-span-1">
                    0{index + 1}
                  </span>
                  <span className="md:col-span-4">
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-tide">
                      {telecomCopy(locale, direction.eyebrow)}
                    </span>
                    <span className="mt-2 block font-display text-2xl font-bold leading-tight text-ink transition group-hover:text-tide">
                      {telecomCopy(locale, direction.title)}
                    </span>
                  </span>
                  <span className="text-sm leading-7 text-slate-700 md:col-span-6">
                    {telecomCopy(locale, direction.summary)}
                  </span>
                  <span className="self-center text-sm font-bold text-tide transition group-hover:translate-x-1 md:col-span-1">
                    {locale === "en" ? "Explore" : "进入"} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 border-b border-[#c9dff2] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-3xl font-bold tracking-[-0.025em] text-ink md:text-4xl">
              {locale === "en" ? "One platform. Three operating conversations." : "一套能力，三个运营对话。"}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-700">
              {locale === "en" ? "The five routes can be combined when the business issue crosses core operations, growth, and customer service." : "当问题跨越核心运营、增长和客户服务时，五条路径可以组合进入。"}
            </p>
          </div>
          <div className="grid gap-0 divide-y divide-[#c9dff2] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {telecomBoard.boardSections.map((section, index) => (
              <article key={section.title.en} className="py-6 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <p className="text-xs font-black text-tide">0{index + 1}</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                  {telecomCopy(locale, section.title)}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {telecomCopy(locale, section.text)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              {locale === "en"
                ? "Make the next telecom service easier to launch and easier to operate."
                : "让下一条通信业务更快上线，也更容易运营。"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76">
              {locale === "en"
                ? "Start from the path closest to your current business: production support, MVNO launch, broadband activation, AI care, or portal conversion."
                : "可以直接从最贴近当前业务的方向进入：生产支撑、MVNO 上线、宽带开通、智能客服或门户转化。"}
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
