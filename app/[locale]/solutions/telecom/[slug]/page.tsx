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

  const relatedDirections = telecomDirections.filter((item) => item.slug !== direction.slug);

  return (
    <>
      <section className="bg-[#f7fbff]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
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
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {telecomCopy(locale, direction.summary)}
            </p>
            <div className="mt-7 rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tide">
                {locale === "en" ? "Best fit" : "适合客户"}
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-ink">
                {telecomCopy(locale, direction.buyer)}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {locale === "en" ? "Talk about this path" : "咨询这个方向"}
              </Link>
              <Link
                href="#scope"
                className="rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {locale === "en" ? "See starting scope" : "查看切入场景"}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-card">
            <div className="relative overflow-hidden rounded-lg bg-ink" style={{ height: "25rem" }}>
              <Image
                src={withBasePath(direction.image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.04),rgba(7,26,51,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 sm:grid-cols-3">
                {direction.metrics.map((metric) => (
                  <div key={metric.value} className="rounded-lg border border-white/15 bg-white/14 p-4 text-white backdrop-blur">
                    <p className="font-display text-3xl font-bold">{metric.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                      {telecomCopy(locale, metric.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "Business pressure" : "业务压力"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "Where work usually breaks." : "客户通常卡在这里。"}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {direction.pains.map((pain, index) => (
                <article key={pain.title.en} className="rounded-lg border border-blue-100 bg-[#f8fbff] p-5">
                  <p className="text-xs font-black text-tide">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">
                    {telecomCopy(locale, pain.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {telecomCopy(locale, pain.text)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f7fbff] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-blue-100 bg-white p-7 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
              {locale === "en" ? "Why now" : "为什么现在值得升级"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink">
              {locale === "en" ? "This is now an operating question." : "这已经是运营问题。"}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              {telecomCopy(locale, direction.whyNow)}
            </p>
          </article>
          <article className="rounded-lg border border-blue-100 bg-white p-7 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
              {locale === "en" ? "Si-Tech connects" : "Si-Tech 连接的能力"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink">
              {locale === "en" ? "The full operating loop." : "完整业务运营闭环。"}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              {telecomCopy(locale, direction.capability)}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "Capability modules" : "能力模块"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "What gets connected." : "具体连接哪些业务。"}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                {locale === "en"
                  ? "The value is in the handoffs between modules, not in isolated features."
                  : "价值不在孤立功能，而在这些模块之间的业务交接能否跑顺。"}
              </p>
            </div>
            <div className="grid gap-4">
              {direction.modules.map((module, index) => (
                <article key={module.title.en} className="rounded-lg border border-blue-100 bg-[#f8fbff] p-5">
                  <div className="grid gap-4 md:grid-cols-[3rem_0.55fr_1fr] md:items-start">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {telecomCopy(locale, module.title)}
                    </h3>
                    <ul className="grid gap-2">
                      {telecomCopyList(locale, module.bullets).map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-7 text-slate-700">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tide" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="scope" className="bg-[#eef6ff] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {locale === "en" ? "Proof and first scope" : "参考经验与起步范围"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              {locale === "en" ? "Start from a concrete business move." : "从一个具体业务动作开始。"}
            </h2>
          </div>
          <div className="grid gap-4">
            {telecomCopyList(locale, direction.proof).map((item) => (
              <div key={item} className="rounded-lg border border-blue-100 bg-white p-5 text-sm font-semibold leading-7 text-ink shadow-sm">
                {item}
              </div>
            ))}
            <div className="grid gap-3 md:grid-cols-3">
              {telecomCopyList(locale, direction.startPoints).map((item, index) => (
                <div key={item} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black text-tide">0{index + 1}</p>
                  <p className="mt-3 font-display text-xl font-bold leading-tight text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-lg border border-blue-100 bg-[#f8fbff] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-tide">
                  {locale === "en" ? "Other telecom paths" : "其他通信业务线"}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                  {locale === "en" ? "Compare adjacent paths before sending the link." : "发给客户前，也可以对比相邻方向。"}
                </h2>
              </div>
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex w-fit rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {locale === "en" ? "Talk to Si-Tech Intl" : "联系 Si-Tech Intl"}
              </Link>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {relatedDirections.map((item) => (
                <Link
                  key={item.slug}
                  href={withLocale(locale, `/solutions/telecom/${item.slug}`)}
                  className="rounded-lg border border-blue-100 bg-white p-4 text-sm font-bold text-ink transition hover:border-tide/40 hover:text-tide"
                >
                  {telecomCopy(locale, item.shortTitle)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
