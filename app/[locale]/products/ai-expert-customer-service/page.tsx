import Link from "next/link";
import { notFound } from "next/navigation";

import { AiExpertDemoGallery } from "@/components/ai-expert-demo-gallery";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

const capabilities = [
  {
    number: "01",
    title: { en: "Guide live conversations", zh: "实时指导每次沟通" },
    text: {
      en: "Surface approved answers, next steps, and risk prompts while the conversation is happening.",
      zh: "在沟通进行时提供可信答案、下一步建议与风险提示。",
    },
  },
  {
    number: "02",
    title: { en: "Scale execution", zh: "扩展服务与触达能力" },
    text: {
      en: "Standardize customer care and outreach without losing the human handoff that complex cases need.",
      zh: "标准化客服与客户触达，同时保留复杂场景所需的人工接管。",
    },
  },
  {
    number: "03",
    title: { en: "Deploy digital experts", zh: "部署数字专家" },
    text: {
      en: "Turn expert knowledge into role-specific, always-on customer experiences.",
      zh: "把专家知识转化为分角色、全天候的客户服务体验。",
    },
  },
] as const;

const outcomes = [
  { value: "50%", en: "faster ramp-up in a sales case", zh: "销售案例中的上手周期缩短" },
  { value: "76%", en: "AI resolution in a support case", zh: "客服案例中的 AI 独立解决率" },
  { value: "24/7", en: "expert knowledge availability", zh: "专家知识持续在线" },
] as const;

export default async function AiExpertCustomerServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="bg-[#061914] text-white">
      <section className="product-stage relative isolate overflow-hidden">
        <div className="customer-hero-grid absolute inset-0 opacity-60" />
        <div className="absolute left-[8%] top-20 h-80 w-80 rounded-full bg-[#45f2a7]/12 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#1ba370]/16 blur-[130px]" />

        <div className="relative mx-auto max-w-[94rem] px-6 pb-16 pt-14 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9fc7b8]">
              <span className="h-2 w-2 rounded-full bg-[#69f5b7] shadow-[0_0_16px_#69f5b7]" />
              {locale === "en" ? "AI Expert Customer Service" : "AI 专家客服"}
            </div>
            <div className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-[#a9c9bd]">
              {locale === "en" ? "Strategic partner product · Private demo available" : "战略合作伙伴产品 · 可预约专属演示"}
            </div>
          </div>

          <div className="grid gap-14 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#69eeb2]">
                {locale === "en" ? "Your best agent, in every conversation" : "让最佳坐席能力进入每次沟通"}
              </p>
              <h1 className="mt-6 text-[clamp(3.6rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                {locale === "en" ? "Customer service, with expert instinct." : "客服，也可以拥有专家直觉。"}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#b7cec5] md:text-xl">
                {locale === "en"
                  ? "Bring live guidance, customer-facing AI, and digital experts into one practical operating system."
                  : "把实时辅助、面向客户的 AI 与数字专家，放进一个可实际运行的服务系统。"}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={withLocale(locale, bookingPath)}
                  className="rounded-full bg-[#72f5bb] px-7 py-4 text-base font-bold text-[#06251b] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {locale === "en" ? "Request a Free Demo" : "预约免费演示"}
                </Link>
                <a
                  href="#product-views"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold transition hover:border-[#72f5bb]/55 hover:bg-white/10"
                >
                  {locale === "en" ? "See the product" : "查看真实产品"}
                </a>
              </div>

              <p className="mt-6 text-sm leading-6 text-[#78998d]">
                {locale === "en"
                  ? "Choose a time directly in our Google Calendar. We tailor the demo to your workflow."
                  : "直接在我们的 Google Calendar 选择时间，演示将围绕您的业务场景展开。"}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-[4rem] bg-[#45efa6]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#102b23] p-2 shadow-[0_50px_140px_rgba(0,0,0,0.52)] md:p-3">
                <div className="flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#91b7a9]">
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#65f2b3]" /> Live product environment</span>
                  <span>AI EXPERT / 01</span>
                </div>
                <div className="overflow-hidden rounded-[1.4rem] bg-[#e7efeb]">
                  <img
                    src={withBasePath("/images/demos/ai-expertcare-live-call.png")}
                    alt={locale === "en" ? "Live AI customer service interface" : "AI 客服实时通话界面"}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 right-5 w-[min(18rem,76%)] rounded-2xl border border-[#6af0b4]/20 bg-[#0b2d23]/95 p-4 shadow-2xl backdrop-blur-xl md:-right-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#70edb4]">Live intelligence</p>
                <p className="mt-2 text-sm leading-6 text-[#c8ddd5]">
                  {locale === "en" ? "Guidance arrives while the customer is still speaking." : "客户还在表达，实时指导已经到位。"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item.value} className="bg-[#0a201a] px-6 py-6">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-[#78f5bd]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#a9c2b8]">{item[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-20 text-[#09251d] lg:py-28">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-36 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#16815a]">
                {locale === "en" ? "One product · Three operating moves" : "一款产品 · 三个业务动作"}
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                {locale === "en" ? "Start where the pressure is highest." : "从压力最大的地方开始。"}
              </h2>
            </div>

            <div className="grid gap-5">
              {capabilities.map((item) => (
                <article key={item.number} className="group grid gap-6 rounded-[2rem] border border-[#104d39]/10 bg-white p-7 shadow-[0_22px_60px_rgba(15,67,49,0.08)] transition hover:-translate-y-1 hover:border-[#2fd591]/35 md:grid-cols-[auto_1fr] md:p-9">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dbf8eb] text-sm font-black text-[#08704b] transition group-hover:bg-[#0a3327] group-hover:text-[#77f4ba]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em]">{item.title[locale]}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4d6c60]">{item.text[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="product-views">
        <AiExpertDemoGallery locale={locale} />
      </div>

      <section className="relative overflow-hidden bg-[#6cf1b5] py-20 text-[#06251b] lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.55),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-[88rem] gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0d6849]">
              {locale === "en" ? "A demo built around your workflow" : "围绕真实业务流程的演示"}
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {locale === "en" ? "Bring one real customer scenario." : "带来一个真实客户场景。"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#235d48]">
              {locale === "en"
                ? "We will show the relevant product flow, discuss fit, and define a practical pilot—without sending your team through a generic public trial."
                : "我们将展示对应产品流程、判断适配度，并共同定义可落地的试点，而不是让团队进入通用公开试用。"}
            </p>
          </div>
          <Link
            href={withLocale(locale, bookingPath)}
            className="inline-flex shrink-0 rounded-full bg-[#06251b] px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#124b39]"
          >
            {locale === "en" ? "Request a Free Demo" : "预约免费演示"} ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
