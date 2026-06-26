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
      <section className="bg-[#f7fbff]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {locale === "en" ? "Telecom growth and operations" : "通信业务增长与运营支撑"}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
              {telecomCopy(locale, telecomBoard.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {telecomCopy(locale, telecomBoard.subtitle)}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {buyerScenarios[locale].map((scenario) => (
                <span
                  key={scenario}
                  className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {scenario}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#paths"
                className="rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {telecomCopy(locale, telecomBoard.secondaryCta)}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {telecomCopy(locale, telecomBoard.primaryCta)}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-card">
            <div className="relative overflow-hidden rounded-lg bg-ink" style={{ height: "25rem" }}>
              <Image
                src={withBasePath(telecomBoard.image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.06),rgba(7,26,51,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {telecomBoard.proof.slice(0, 3).map((item) => (
                    <div key={item.value} className="rounded-lg border border-white/15 bg-white/14 p-4 text-white backdrop-blur">
                      <p className="font-display text-3xl font-bold">{item.value}</p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                        {telecomCopy(locale, item.label)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-4 lg:px-8">
          {telecomBoard.proof.map((item) => (
            <div key={item.value} className="border-b border-blue-100 py-7 md:border-b-0 md:border-r md:px-6 last:md:border-r-0">
              <p className="font-display text-4xl font-bold leading-none text-ink">{item.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-tide">
                {telecomCopy(locale, item.label)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{telecomCopy(locale, item.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="paths" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "Choose the closest business pressure" : "按最接近的业务压力进入"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "Five practical telecom paths." : "五条可直接讨论的通信业务线。"}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                {locale === "en"
                  ? "Each page now follows the same buyer-friendly pattern: who it is for, what is broken, what Si-Tech connects, proof, and a starting scope."
                  : "每个子页面都按客户容易判断的方式组织：面向谁、卡在哪里、思特奇连接什么、有什么参考经验、从哪里开始。"}
              </p>
            </div>

            <div className="grid gap-4">
              {telecomDirections.map((direction, index) => (
                <Link
                  key={direction.slug}
                  href={withLocale(locale, `/solutions/telecom/${direction.slug}`)}
                  className="group grid gap-5 rounded-lg border border-blue-100 bg-[#f8fbff] p-5 transition hover:border-tide/40 hover:bg-white hover:shadow-card md:grid-cols-[3.5rem_1fr_auto]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-sm font-black text-white">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-tide">
                      {telecomCopy(locale, direction.eyebrow)}
                    </span>
                    <span className="mt-2 block font-display text-2xl font-bold leading-tight text-ink">
                      {telecomCopy(locale, direction.title)}
                    </span>
                    <span className="mt-2 block text-sm leading-7 text-slate-700">
                      {telecomCopy(locale, direction.summary)}
                    </span>
                  </span>
                  <span className="self-center text-sm font-bold text-tide transition group-hover:translate-x-1">
                    {locale === "en" ? "View path" : "进入方案线"} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {telecomBoard.boardSections.map((section, index) => (
              <article key={section.title.en} className="rounded-lg border border-blue-100 bg-white p-6 shadow-card">
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
