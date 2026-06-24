import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getTelecomDirection,
  telecomCopy,
  telecomCopyList,
  telecomDirections,
} from "@/content/telecom-solutions-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

export function generateStaticParams() {
  return telecomDirections.flatMap((direction) => [
    { locale: "en", slug: direction.slug },
    { locale: "zh", slug: direction.slug },
  ]);
}

export default async function TelecomDirectionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const direction = getTelecomDirection(slug);

  if (!direction) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#eef6ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(20,85,179,0.14),transparent_26rem),radial-gradient(circle_at_86%_20%,rgba(242,185,109,0.22),transparent_22rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <Link
              href={withLocale(locale, "/solutions/telecom")}
              className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-tide shadow-sm transition hover:border-tide/30"
            >
              {locale === "en" ? "Telecom solutions" : "运营商解决方案"}
            </Link>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {telecomCopy(locale, direction.eyebrow)}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
              {telecomCopy(locale, direction.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {telecomCopy(locale, direction.summary)}
            </p>
            <div className="mt-8 inline-flex max-w-2xl rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm">
              <span className="mr-3 text-tide">{locale === "en" ? "For" : "面向"}</span>
              {telecomCopy(locale, direction.buyer)}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, "/contact")}
                className="button-glow rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {locale === "en" ? "Talk about this path" : "咨询这个方向"}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[30rem]">
            <div className="absolute inset-0 rotate-1 rounded-[2.2rem] bg-tide/10" />
            <div className="absolute inset-0 -rotate-1 rounded-[2.2rem] bg-signal/18" />
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-[0_30px_90px_rgba(11,47,111,0.14)]">
              <div className="relative h-[29rem] overflow-hidden rounded-[1.5rem] bg-ink">
                <Image
                  src={withBasePath(direction.image)}
                  alt=""
                  fill
                  priority
                  quality={82}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.05),rgba(7,26,51,0.74))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {direction.metrics.map((metric) => (
                      <div key={metric.value} className="rounded-2xl border border-white/15 bg-white/14 p-4 text-white backdrop-blur">
                        <p className="font-display text-3xl font-bold">{metric.value}</p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                          {telecomCopy(locale, metric.label)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <div className="h-1 w-14 rounded-full bg-tide" />
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "Where the business starts to slow down" : "常见业务挑战"}
              </h2>
            </div>
            <div className="divide-y divide-blue-100 border-y border-blue-100">
              {direction.pains.map((pain, index) => (
                <div key={pain.title.en} className="grid gap-5 py-7 md:grid-cols-[4rem_0.45fr_1fr] md:items-start">
                  <p className="font-display text-4xl font-bold leading-none text-tide">0{index + 1}</p>
                  <h3 className="font-display text-2xl font-bold text-ink">{telecomCopy(locale, pain.title)}</h3>
                  <p className="text-base leading-8 text-slate-600">{telecomCopy(locale, pain.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06172d] py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-grid bg-[size:56px_56px] opacity-16" />
        <div className="absolute right-[-10rem] top-[-8rem] h-96 w-96 rounded-full border border-signal/20" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-8 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {locale === "en" ? "Why now" : "为什么现在值得升级"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
              {locale === "en" ? "This is becoming an operations question." : "增长、服务与成本，正在落到同一张运营答卷上。"}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              {telecomCopy(locale, direction.whyNow)}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white p-8 text-ink shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-tide">
              {locale === "en" ? "Si-Tech Intl brings" : "Si-Tech Intl 可以带来的能力"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
              {locale === "en" ? "Systems that connect the full operating loop." : "把业务、服务与结算接成一条完整闭环。"}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {telecomCopy(locale, direction.capability)}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="h-1 w-14 rounded-full bg-tide" />
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "How the solution plugs into the business" : "能力如何落到业务里"}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {locale === "en"
                  ? "The modules are shown as a connected chain because the value appears when they work together."
                  : "当这些能力连起来，客户、订单、服务和结算才能真正顺畅运转。"}
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-6 bottom-6 hidden w-px bg-gradient-to-b from-tide via-signal to-tide md:block" />
              <div className="space-y-5">
                {direction.modules.map((module, index) => (
                  <div key={module.title.en} className="relative grid gap-4 rounded-[1.6rem] border border-blue-100 bg-[#f8fbff] p-5 md:grid-cols-[3.5rem_0.6fr_1fr]">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-black text-white">
                      {index + 1}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">{telecomCopy(locale, module.title)}</h3>
                    <ul className="grid gap-2">
                      {telecomCopyList(locale, module.bullets).map((bullet) => (
                        <li key={bullet} className="text-sm leading-7 text-slate-600">
                          <span className="mr-2 text-tide">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {locale === "en" ? "Experience buyers can recognize" : "可参考的项目经验"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              {locale === "en" ? "Compare it with real operating scenes." : "看相似业务场景，判断这条线是否适合你。"}
            </h2>
          </div>
          <div className="space-y-4">
            {telecomCopyList(locale, direction.proof).map((item) => (
              <div key={item} className="rounded-full border border-blue-100 bg-white px-5 py-4 text-sm font-semibold leading-7 text-ink shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card">
            <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="bg-ink p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {locale === "en" ? "Conversation starters" : "常见进入场景"}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
                  {locale === "en" ? "Pick the line closest to your current pressure." : "从最贴近当前业务目标的场景开始。"}
                </h2>
              </div>
              <div className="grid divide-y divide-blue-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {telecomCopyList(locale, direction.startPoints).map((item, index) => (
                  <div key={item} className="p-6">
                    <p className="text-xs font-bold text-tide">0{index + 1}</p>
                    <p className="mt-3 font-display text-xl font-bold leading-tight text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              {locale === "en" ? "If this is the pressure point, the conversation can be specific." : "如果这正是你当前要解决的问题，我们可以继续往下聊。"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
              {locale === "en"
                ? "Share the current system, operating bottleneck, or business launch target. We will map it to the closest telecom solution path."
                : "告诉我们你当前的业务目标、现有系统或服务瓶颈，我们会给出更贴近业务的方案路径。"}
            </p>
          </div>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Talk to Si-Tech Intl" : "联系 Si-Tech Intl"}
          </Link>
        </div>
      </section>
    </>
  );
}
