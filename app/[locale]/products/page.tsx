import Link from "next/link";
import { notFound } from "next/navigation";

import { AiRecruitingWorkflowVisual } from "@/components/ai-recruiting-workflow-visual";
import { isLocale, withLocale } from "@/lib/site";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const productLabels = locale === "en"
    ? ["Expert knowledge", "Business execution", "Human control"]
    : ["专家知识", "业务执行", "人工协同"];

  return (
    <div className="bg-[#edf4f0] text-[#08271d]">
      <section className="relative isolate overflow-hidden bg-[#0a2945] text-white">
        <div className="customer-hero-grid absolute inset-0 opacity-25" />
        <div className="absolute right-[-8rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#78aef9]/18 blur-[110px]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9caff]">{locale === "en" ? "Product catalogue" : "产品目录"}</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,4.8vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              {locale === "en" ? "Products with a clear place in the story." : "每一款产品，都有清晰的位置。"}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c1d4ed]">
              {locale === "en" ? "Our own product roadmap and selected partner products are shown separately—so buyers always know what they are evaluating." : "自有产品与精选合作伙伴产品分别呈现，让客户始终清楚自己正在评估什么。"}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 sm:grid-cols-2">
            <a href="#our-products" className="group bg-[#102f50] p-5 transition hover:bg-[#154267]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a9caff]">01 / {locale === "en" ? "Our products" : "我们的产品"}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{locale === "en" ? "In development" : "正在建设中"}</p>
              <span className="mt-5 inline-block text-sm text-[#c1d4ed] group-hover:text-white">{locale === "en" ? "Coming soon ↓" : "敬请期待 ↓"}</span>
            </a>
            <a href="#partner-products" className="group bg-[#14385b] p-5 transition hover:bg-[#1a4d79]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9fc8ff]">02 / {locale === "en" ? "Partner products" : "合作伙伴产品"}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">AI Expert Customer Service</p>
              <span className="mt-5 inline-block text-sm text-[#c1d4ed] group-hover:text-white">{locale === "en" ? "Explore product ↓" : "查看产品 ↓"}</span>
            </a>
          </div>
        </div>
      </section>

      <section id="partner-products" className="mx-auto max-w-[92rem] px-6 py-10 lg:px-12 lg:py-14">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.21em] text-[#187a55]">02 / {locale === "en" ? "Partner products" : "合作伙伴产品"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{locale === "en" ? "AI Labor. Paid by Performance." : "AI 劳动力，按结果付费。"}</h2>
          </div>
          <span className="hidden rounded-full border border-[#177552]/18 bg-white px-4 py-2 text-xs font-bold text-[#427165] sm:block">{locale === "en" ? "1 featured product" : "1 款重点产品"}</span>
        </div>

        <article className="relative overflow-hidden rounded-[2.5rem] bg-[#06241b] p-3 text-white shadow-[0_34px_100px_rgba(7,55,38,0.2)] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_4%,rgba(93,246,178,0.22),transparent_27rem)]" />
          <div className="relative grid gap-8 rounded-[2rem] border border-white/10 p-6 md:p-9 lg:grid-cols-[0.83fr_1.17fr] lg:p-12">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#78efbb]/25 bg-[#78efbb]/8 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#85f7c5]">
                <span className="h-2 w-2 rounded-full bg-[#78efbb] shadow-[0_0_14px_#78efbb]" />
                {locale === "en" ? "AI workforce · Scenario demos" : "AI 劳动力 · 场景演示"}
              </div>
              <h3 className="mt-7 text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">AI Expert<br />Customer Service</h3>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#b7d2c6]">
                {locale === "en" ? "AI employees that make calls, answer customers, qualify needs, send follow-ups, and book next steps. Train them on your rules; your people handle approvals and exceptions." : "能外呼、接咨询、做初筛、发跟进、约下一步的 AI 员工。按你的规则训练；审批和例外问题由你的团队处理。"}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {productLabels.map((label, index) => (
                  <span key={label} className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold text-[#c5ddd3]"><span className="mr-2 text-[#78efbb]">0{index + 1}</span>{label}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={withLocale(locale, "/products/ai-expert-customer-service")} className="rounded-full bg-[#ff9a4f] px-6 py-3.5 text-base font-bold text-[#2e1607] transition hover:-translate-y-0.5 hover:bg-[#ffbf7d]">
                  {locale === "en" ? "Explore product" : "进入产品页"} ↗
                </Link>
                <Link href={withLocale(locale, bookingPath)} className="rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold transition hover:border-[#73f5bb]/65 hover:bg-white/8">
                  {locale === "en" ? "Book an AI Expert Customer Service Product Demo" : "预约AI专家客服产品演示"}
                </Link>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="absolute -inset-7 rounded-[3rem] bg-[#4bf0a5]/10 blur-3xl" />
              <AiRecruitingWorkflowVisual locale={locale} initialScenario="recruiting" className="lg:scale-[1.04] lg:origin-right" />
            </div>
          </div>
        </article>
      </section>

      <section id="our-products" className="border-t border-[#0b5139]/10 bg-white">
        <div className="mx-auto grid max-w-[92rem] gap-8 px-6 py-12 md:grid-cols-[0.62fr_1.38fr] md:items-center lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.21em] text-[#53766a]">01 / {locale === "en" ? "Our products" : "我们的产品"}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-4xl">{locale === "en" ? "In development. Coming soon." : "正在建设中，敬请期待。"}</h2>
          </div>
          <div className="rounded-[1.6rem] border border-[#0d533b]/10 bg-[#f4f8f5] p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-lg font-semibold text-[#153d2f]">{locale === "en" ? "Good products take time to refine." : "好产品需要时间打磨。"}</p>
                <p className="mt-2 max-w-2xl text-base leading-7 text-[#5d7a6e]">{locale === "en" ? "New Si-Tech products are in active development. This catalogue will be updated as they are ready to share." : "Si-Tech 自有产品正在持续研发与打磨，准备好后将在这里与您见面。"}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#54776a] shadow-sm">{locale === "en" ? "In progress" : "持续打磨中"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
