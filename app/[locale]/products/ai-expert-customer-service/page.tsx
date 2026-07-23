import Link from "next/link";
import { notFound } from "next/navigation";

import { AiExpertDemoGallery } from "@/components/ai-expert-demo-gallery";
import { AiRecruitingWorkflowVisual } from "@/components/ai-recruiting-workflow-visual";
import { isLocale, withLocale } from "@/lib/site";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

const capabilities = [
  {
    number: "01",
    title: { en: "Train fast. Put it to work.", zh: "快速训练，直接上岗" },
    text: {
      en: "Use your approved scripts, FAQs, recordings, product rules, and escalation paths to train an AI specialist quickly, then put it into a live workflow.",
      zh: "把已批准的话术、FAQ、通话录音、产品规则和升级路径交给 AI，快速训练成 AI 专家后，直接进入真实业务流程工作。",
    },
  },
  {
    number: "02",
    title: { en: "Let the AI handle the first line", zh: "让 AI 先把一线工作做起来" },
    text: {
      en: "It makes outbound calls, answers inbound calls and messages, qualifies needs, sends follow-ups, and books the next action.",
      zh: "它可以外呼、接听来电和消息、初步了解需求、发送跟进，并直接安排下一步。",
    },
  },
  {
    number: "03",
    title: { en: "Bring in people when needed", zh: "需要判断时立刻交给人" },
    text: {
      en: "For approvals, exceptions, complaints, or sensitive cases, it sends the full conversation and next-step recommendation to the right person.",
      zh: "遇到审批、例外、投诉或敏感问题，它会带着完整沟通记录和下一步建议交给对应人员。",
    },
  },
] as const;

const outcomes = [
  { value: "Expert Knowledge", en: "business expertise made executable", zh: "企业专家知识可被执行" },
  { value: "Voice + text", en: "calls, messages, and follow-ups in one flow", zh: "电话、信息与跟进在一个流程里完成" },
  { value: "Human-ready", en: "escalate decisions when judgment matters", zh: "需要判断时随时由人工接管" },
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
              {locale === "en" ? "AI Expert Customer Service" : "AI专家客户服务"}
            </div>
            <div className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-[#a9c9bd]">
              {locale === "en" ? "Strategic partner product" : "合作伙伴产品"}
            </div>
          </div>

          <div className="grid gap-14 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffb16e]">
                {locale === "en" ? "AI Labor. Paid by Performance." : "AI 劳动力，为业务结果而生。"}
              </p>
              <h1 className={`mt-6 font-semibold tracking-[-0.06em] ${locale === "en" ? "text-[clamp(3rem,5.2vw,6rem)] leading-[0.92]" : "text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[0.98]"}`}>
                {locale === "en" ? "AI that handles customer work." : "让 AI 处理客户沟通。"}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#b7cec5] md:text-xl">
                {locale === "en"
                  ? "AI Labor is trained on your playbooks and runs real work: outbound calls, inbound support, qualification, follow-up messages, and scheduling. Your team takes over approvals and exceptions."
                  : "AI 劳动力按你的业务话术和规则工作：外呼、接听咨询、初步筛选、发送跟进、安排预约；审批和例外问题交给你的团队。"}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={withLocale(locale, bookingPath)}
                  className="rounded-full bg-[#ff9a4f] px-7 py-4 text-base font-bold text-[#2e1607] transition hover:-translate-y-0.5 hover:bg-[#ffbf7d]"
                >
                  {locale === "en" ? "Book an AI Expert Customer Service Product Demo" : "预约AI专家客服产品演示"}
                </Link>
                <a
                  href="#product-views"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold transition hover:border-[#72f5bb]/55 hover:bg-white/10"
                >
                  {locale === "en" ? "See the product overview" : "查看产品介绍"}
                </a>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-[4rem] bg-[#45efa6]/10 blur-3xl" />
              <div className="relative"><AiRecruitingWorkflowVisual locale={locale} initialScenario="recruiting" className="lg:scale-[1.06] lg:origin-right" /></div>

              <div className="absolute -bottom-8 right-5 w-[min(18rem,76%)] rounded-2xl border border-[#6af0b4]/20 bg-[#0b2d23]/95 p-4 shadow-2xl backdrop-blur-xl md:-right-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#70edb4]">Live intelligence</p>
                <p className="mt-2 text-sm leading-6 text-[#c8ddd5]">
                  {locale === "en" ? "Choose cash loan, insurance, or HR to see what the AI actually does in each workflow." : "选择现金贷、保险或 HR，直接看 AI 在不同业务流程里具体做什么。"}
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
              {locale === "en" ? "What the AI actually does" : "AI 专家具体做什么"}
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
              {locale === "en" ? "Train it. Let it work. Escalate when needed." : "先训练，再干活；需要判断时，再交给人。"}
              </h2>
            </div>

            <div className="grid gap-5">
              {capabilities.map((item) => (
                <article key={item.number} className="group grid gap-6 rounded-[2rem] border border-[#104d39]/10 bg-white p-7 shadow-[0_22px_60px_rgba(15,67,49,0.08)] transition hover:-translate-y-1 hover:border-[#2fd591]/35 md:grid-cols-[auto_1fr] md:p-9">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0df] text-sm font-black text-[#a14a0a] transition group-hover:bg-[#0a3327] group-hover:text-[#ffb16e]">
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
              {locale === "en" ? "Face-to-face demo" : "面对面演示"}
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {locale === "en" ? "AI Labor. Paid by Performance." : "AI 劳动力，按结果付费。"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#235d48]">
              {locale === "en"
                ? "Bring a call flow, service script, or follow-up process. We will show how AI Labor handles it and where your team stays in control."
                : "带来一段电话流程、服务话术或跟进流程。我们会直接演示 AI 劳动力如何处理，以及你的团队在哪些环节接手。"}
            </p>
          </div>
          <Link
            href={withLocale(locale, bookingPath)}
            className="inline-flex shrink-0 rounded-full bg-[#ff9a4f] px-7 py-4 text-base font-bold text-[#2e1607] transition hover:-translate-y-0.5 hover:bg-[#ffbf7d]"
          >
            {locale === "en" ? "Book an AI Expert Customer Service Product Demo" : "预约AI专家客服产品演示"} ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
