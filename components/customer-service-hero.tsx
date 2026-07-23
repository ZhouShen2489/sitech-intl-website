"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/site";
import { withBasePath, withLocale, withSiteLocale } from "@/lib/site";
import { AiRecruitingWorkflowVisual } from "@/components/ai-recruiting-workflow-visual";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

const slides = [
  {
    kind: "company",
    eyebrow: { en: "Mission & vision", zh: "使命与愿景" },
    title: {
      en: "Make complex systems grow.",
      zh: "让复杂系统持续增长。",
    },
    text: {
      en: "Si-Tech Intl brings telecom-grade delivery, enterprise platforms, and applied AI together for work that can launch, operate, and scale.",
      zh: "Si-Tech Intl 将运营商级交付、企业平台与 AI 应用结合起来，推动真正能够上线、运营和扩展的业务。",
    },
    primary: { en: "How we work", zh: "了解我们" },
    primaryPath: "/about",
    secondary: { en: "Explore solutions", zh: "查看解决方案" },
    secondaryPath: "/solutions",
    image: "/images/curated/diverse-laptop-collaboration.jpg",
  },
  {
    kind: "ai",
    eyebrow: { en: "AI Labor. Paid by Performance.", zh: "AI 劳动力，按结果付费。" },
    title: {
      en: "AI that handles customer work.",
      zh: "让 AI 处理客户沟通。",
    },
    text: {
      en: "AI Labor is trained on your playbooks and runs real work: outbound calls, inbound support, qualification, follow-up messages, and scheduling. Your team takes over approvals and exceptions.",
      zh: "AI 劳动力按你的业务话术和规则工作：外呼、接听咨询、初步筛选、发送跟进、安排预约；审批和例外问题交给你的团队。",
    },
    primary: { en: "Explore AI Expert", zh: "了解 AI专家客户服务" },
    primaryPath: "/products/ai-expert-customer-service",
    secondary: { en: "Book an AI Expert Customer Service Product Demo", zh: "预约AI专家客服产品演示" },
    secondaryPath: bookingPath,
    image: "/images/demos/ai-expertcare-live-call.png",
  },
  {
    kind: "telecom",
    eyebrow: { en: "Telecom solutions", zh: "运营商解决方案" },
    title: {
      en: "Make the next telecom service easier to launch and run.",
      zh: "让下一项通信业务，更快上线、更稳运营。",
    },
    text: {
      en: "From BSS/OSS and MVNO to broadband, billing, and AI customer care—build the operating loop around the business move that matters.",
      zh: "从 BSS/OSS、MVNO 到宽带、计费与 AI 客服，围绕真正重要的业务动作建立完整运营闭环。",
    },
    primary: { en: "Open Telecom Solutions", zh: "进入运营商解决方案" },
    primaryPath: "telecom",
    secondary: { en: "Discuss an opportunity", zh: "沟通合作机会" },
    secondaryPath: "/contact?solution=telecom",
    image: "/images/curated/telecom-network-switch.jpg",
  },
] as const;

export function CustomerServiceHero({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  function hrefFor(path: string) {
    return path === "telecom" ? withSiteLocale("telecom", locale) : withLocale(locale, path);
  }

  const isAi = slide.kind === "ai";
  const isTelecom = slide.kind === "telecom";

  return (
    <section className={`customer-hero relative isolate min-h-[760px] overflow-hidden text-white ${isTelecom ? "bg-[#071a33]" : isAi ? "bg-[#061a17]" : "bg-[#0a223f]"}`}>
      <div className="customer-hero-grid absolute inset-0 opacity-55" />
      <div className={`absolute -left-32 top-20 h-96 w-96 rounded-full blur-[110px] ${isTelecom ? "bg-[#4a94ff]/18" : isAi ? "bg-[#34f5a4]/10" : "bg-[#78aef9]/18"}`} />
      <div className={`absolute -right-20 bottom-0 h-[34rem] w-[34rem] rounded-full blur-[130px] ${isTelecom ? "bg-[#38b9ff]/15" : isAi ? "bg-[#0f8f68]/20" : "bg-[#2f77c8]/20"}`} />

      <div className="relative mx-auto grid min-h-[760px] max-w-[90rem] gap-14 px-6 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-10 xl:px-14">
        <div className="max-w-2xl pb-4 pt-6">
          <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${isTelecom ? "border-[#8abfff]/25 bg-[#8abfff]/8 text-[#a9caff]" : isAi ? "border-[#6fffc1]/25 bg-[#6fffc1]/8 text-[#8dffd0]" : "border-[#b7d4ff]/25 bg-[#b7d4ff]/8 text-[#c4dcff]"}`}>
            <span className={`h-2 w-2 rounded-full ${isTelecom ? "bg-[#8dbdff] shadow-[0_0_18px_#8dbdff]" : isAi ? "bg-[#66f7ba] shadow-[0_0_18px_#66f7ba]" : "bg-[#b6d5ff] shadow-[0_0_18px_#b6d5ff]"}`} />
            {slide.eyebrow[locale]}
          </div>

          <h1 key={`${active}-title`} className="product-reveal mt-10 max-w-3xl text-[clamp(2.75rem,4.8vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
            {slide.title[locale]}
          </h1>
          <p key={`${active}-text`} className="product-reveal mt-7 max-w-xl text-lg leading-8 text-white/76 md:text-xl">
            {slide.text[locale]}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={hrefFor(slide.primaryPath)} className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-base font-bold transition hover:-translate-y-0.5 hover:bg-white ${isTelecom ? "bg-[#8ebeff] text-[#071a33]" : isAi ? "bg-[#ff9a4f] text-[#2e1607] hover:bg-[#ffbf7d]" : "bg-white text-[#092441]"}`}>
              {slide.primary[locale]} <span aria-hidden="true">↗</span>
            </Link>
            <Link href={hrefFor(slide.secondaryPath)} className="inline-flex items-center rounded-full border border-white/22 bg-white/6 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/55 hover:bg-white/10">
              {slide.secondary[locale]}
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3" aria-label="Homepage slides">
            {slides.map((item, index) => (
              <button key={item.kind} type="button" onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === active ? "w-14 bg-white" : "w-6 bg-white/20 hover:bg-white/45"}`} aria-label={`${locale === "en" ? "Show slide" : "显示横幅"} ${index + 1}`} aria-current={index === active} />
            ))}
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className={`absolute -inset-8 rounded-[3.5rem] blur-3xl ${isTelecom ? "bg-[#3e92ff]/12" : isAi ? "bg-[#3ff0a4]/10" : "bg-[#7aaefa]/14"}`} />
          {isAi ? (
            <div key={`${active}-workflow`} className="product-visual-enter relative lg:scale-[1.08] lg:origin-center">
              <AiRecruitingWorkflowVisual locale={locale} initialScenario="recruiting" />
            </div>
          ) : (
            <>
              <div key={`${active}-visual`} className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#10263f] p-2 shadow-[0_42px_120px_rgba(0,0,0,0.46)] backdrop-blur-xl md:p-3">
                <div className="product-visual-enter relative overflow-hidden rounded-[1.35rem]">
                  <img src={withBasePath(slide.image)} alt={slide.eyebrow[locale]} className="block h-auto max-h-[620px] w-full object-cover" loading={active === 0 ? "eager" : "lazy"} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,19,36,0.7)_100%)]" />
                </div>
              </div>
              <div className="absolute -bottom-7 left-8 rounded-2xl border border-white/16 bg-[#0b2430]/90 px-4 py-3 text-xs text-white/72 shadow-2xl backdrop-blur-xl md:left-[-1rem]">
                <span className="font-bold text-white">0{active + 1}</span><span className="mx-2 text-white/25">/</span>{slide.eyebrow[locale]}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
