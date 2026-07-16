import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, withBasePath, withLocale, withSiteLocale } from "@/lib/site";

const paths = [
  { en: "BSS / OSS", zh: "BSS / OSS 运营支撑" },
  { en: "MVNO Enablement", zh: "MVNO 快速启动" },
  { en: "Broadband Operations", zh: "宽带业务运营" },
  { en: "AI Customer Care", zh: "运营商智能客服" },
] as const;

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const telecomHref = withSiteLocale("telecom", locale);

  return (
    <div className="bg-white text-[#0a2848]">
      <section className="relative isolate overflow-hidden bg-[#071a33] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(50,132,255,0.3),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-[90rem] gap-12 px-6 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#83b8ff]">Telecom Solutions</p>
            <h1 className="mt-6 text-[clamp(3.4rem,7vw,7.2rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {locale === "en" ? "Telecom systems built to keep operating." : "为持续运营而生的通信系统。"}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c1d2e8] md:text-xl">
              {locale === "en"
                ? "Long-running delivery experience across operators, MVNOs, broadband, service, billing, and customer care."
                : "覆盖运营商、MVNO、宽带、客服、计费与业务运营的长期交付经验。"}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={telecomHref} className="rounded-full bg-[#8bbcff] px-6 py-3.5 text-base font-bold text-[#071a33] transition hover:bg-white">
                {locale === "en" ? "Open Telecom Solutions" : "进入运营商解决方案"} ↗
              </Link>
              <Link href={withLocale(locale, "/contact?solution=telecom")} className="rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold hover:bg-white/10">
                {locale === "en" ? "Discuss a telecom opportunity" : "沟通通信业务合作"}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-2 shadow-[0_36px_100px_rgba(0,0,0,0.35)]">
            <div className="relative h-[30rem] overflow-hidden rounded-[1.5rem]">
              <img src={withBasePath("/images/curated/telecom-network-switch.jpg")} alt="Telecom network infrastructure" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_32%,rgba(3,16,34,0.88)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-2 p-5">
                {paths.map((item, index) => (
                  <div key={item.en} className="rounded-xl border border-white/12 bg-[#071a33]/80 px-4 py-3 text-sm font-semibold backdrop-blur">
                    <span className="mr-2 text-[#8bbcff]">0{index + 1}</span>{item[locale]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12 lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2164a8]">
          {locale === "en" ? "One clear solution entry" : "一个清晰的方案入口"}
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
            {locale === "en" ? "From launch to daily operations." : "从业务上线，到日常运营。"}
          </h2>
          <div>
            <p className="text-lg leading-8 text-[#4b6680]">
              {locale === "en"
                ? "The dedicated Telecom site organizes our operator capabilities by real operating move, so partners and buyers can enter from the problem they already have."
                : "独立 Telecom 方案站按真实业务动作组织运营商能力，合作伙伴与客户可以从当前问题直接进入。"}
            </p>
            <Link href={telecomHref} className="mt-7 inline-flex rounded-full border border-[#0a2848] px-6 py-3.5 text-base font-bold transition hover:bg-[#0a2848] hover:text-white">
              {locale === "en" ? "View the full solution map" : "查看完整方案地图"} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
