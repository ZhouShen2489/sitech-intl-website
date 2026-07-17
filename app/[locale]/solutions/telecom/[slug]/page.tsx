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
      <section className="overflow-hidden bg-[#071a33] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
          <div className="lg:col-span-5">
            <Link
              href={withLocale(locale, "/solutions/telecom")}
              className="inline-flex rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a8e6ff] transition hover:border-white hover:bg-white hover:text-[#071a33]"
            >
              {locale === "en" ? "Telecom solutions" : "运营商解决方案"}
            </Link>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#8ad8ff]">
              {telecomCopy(locale, direction.eyebrow)}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.035em] md:text-6xl">
              {telecomCopy(locale, direction.title)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {telecomCopy(locale, direction.summary)}
            </p>
            <div className="mt-7 border-y border-white/15 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8ad8ff]">
                {locale === "en" ? "Best fit" : "适合客户"}
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-white">
                {telecomCopy(locale, direction.buyer)}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full bg-[#78ddff] px-6 py-3 text-sm font-bold text-[#071a33] transition hover:bg-white"
              >
                {locale === "en" ? "Talk about this path" : "咨询这个方向"}
              </Link>
              <Link
                href="#scope"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#071a33]"
              >
                {locale === "en" ? "See starting scope" : "查看切入场景"}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[25rem] overflow-hidden border border-white/15 bg-[#0b294c] lg:col-span-7">
            <div className="absolute inset-0">
              <Image
                src={withBasePath(direction.image)}
                alt=""
                fill
                priority
                quality={82}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.22),rgba(7,26,51,0.88))]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 sm:grid-cols-3">
                {direction.metrics.map((metric) => (
                  <div key={metric.value} className="border-l border-[#78ddff] bg-[#071a33]/55 p-4 text-white backdrop-blur">
                    <p className="font-display text-3xl font-bold">{metric.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                      {telecomCopy(locale, metric.label)}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
                {locale === "en" ? "Business pressure" : "业务压力"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                {locale === "en" ? "Where work usually breaks." : "客户通常卡在这里。"}
              </h2>
            </div>
            <div className="grid gap-0 divide-y divide-[#c9dff2] border-y border-[#c9dff2] md:grid-cols-3 md:divide-x md:divide-y-0 lg:col-span-8">
              {direction.pains.map((pain, index) => (
                <article key={pain.title.en} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
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

      <section className="border-y border-[#d8e7f5] bg-[#f4faff] py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="border-t-2 border-tide py-6 lg:pr-8">
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
          <article className="border-t-2 border-tide py-6 lg:border-l lg:border-l-[#c9dff2] lg:pl-8">
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

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
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
            <div className="border-t border-[#c9dff2] lg:col-span-8">
              {direction.modules.map((module, index) => (
                <article key={module.title.en} className="border-b border-[#c9dff2] py-6">
                  <div className="grid gap-4 md:grid-cols-12 md:items-start">
                    <span className="font-display text-3xl font-bold leading-none text-tide md:col-span-1">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink md:col-span-5">
                      {telecomCopy(locale, module.title)}
                    </h3>
                    <ul className="grid gap-2 md:col-span-6">
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

      <section id="scope" className="bg-[#eef6ff] py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {locale === "en" ? "Proof and first scope" : "参考经验与起步范围"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              {locale === "en" ? "Start from a concrete business move." : "从一个具体业务动作开始。"}
            </h2>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {telecomCopyList(locale, direction.proof).map((item) => (
              <div key={item} className="border-l-2 border-tide bg-white px-5 py-4 text-sm font-semibold leading-7 text-ink">
                {item}
              </div>
            ))}
            <div className="grid gap-3 md:grid-cols-3">
              {telecomCopyList(locale, direction.startPoints).map((item, index) => (
                <div key={item} className="border-t border-[#9fc5e2] bg-white p-5">
                  <p className="text-xs font-black text-tide">0{index + 1}</p>
                  <p className="mt-3 font-display text-xl font-bold leading-tight text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-y border-[#c9dff2] py-7">
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
            <div className="mt-6 grid gap-0 border-t border-[#c9dff2] md:grid-cols-2 lg:grid-cols-4">
              {relatedDirections.map((item) => (
                <Link
                  key={item.slug}
                  href={withLocale(locale, `/solutions/telecom/${item.slug}`)}
                  className="border-b border-[#c9dff2] py-4 text-sm font-bold text-ink transition hover:text-tide lg:border-r lg:px-4 lg:last:border-r-0"
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
