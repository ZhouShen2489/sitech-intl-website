"use client";

import { useState } from "react";

import { copy } from "@/content/site-content";
import type { Locale } from "@/lib/site";
import { withBasePath } from "@/lib/site";

const demos = [
  {
    id: "voice",
    tab: { zh: "电话演示", en: "Voice demo" },
    title: {
      zh: "电话实时接待与人工接管",
      en: "Live phone intake with human takeover",
    },
    text: {
      zh: "客户拨入后，AI 实时接待、转写、判断与升级，必要时可立即人工接管。",
      en: "AI answers calls, transcribes in real time, qualifies the case, and hands off to a human when needed.",
    },
    image: "/images/demos/ai-expertcare-live-call.png",
    size: "1228 × 1085",
  },
  {
    id: "text",
    tab: { zh: "文本演示", en: "Text demo" },
    title: {
      zh: "文本客服与合规问答",
      en: "Text support with compliant guidance",
    },
    text: {
      zh: "客户在文本窗口里提问时，AI 可以持续解释规则、给出下一步，并保持专业表达。",
      en: "In chat, AI can explain policies, guide next steps, and maintain a professional tone.",
    },
    image: "/images/demos/ai-expertcare-text-chat.png",
    size: "1102 × 663",
  },
  {
    id: "roles",
    tab: { zh: "角色入口", en: "Role entry" },
    title: {
      zh: "多角色 AI 专家入口",
      en: "Multi-role AI specialist entry point",
    },
    text: {
      zh: "客户可以按场景进入不同 AI 专家，从客服到销售、收款与咨询都能分角色演示。",
      en: "Different AI specialists can be demonstrated for support, sales, collections, and advisory workflows.",
    },
    image: "/images/demos/ai-expertcare-role-gallery.png",
    size: "1079 × 805",
  },
  {
    id: "outbound",
    tab: { zh: "外呼演示", en: "Outbound demo" },
    title: {
      zh: "真实拨号式外呼演示",
      en: "Real outbound call demo flow",
    },
    text: {
      zh: "通过预约演示入口，可以直接体验 AI 发起或接听电话的真实流程。",
      en: "The demo booking flow can lead directly into a realistic AI outbound or inbound call experience.",
    },
    image: "/images/demos/ai-expertcare-call-demo.png",
    size: "750 × 558",
  },
] as const;

export function AiExpertDemoGallery({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<(typeof demos)[number]["id"]>("voice");
  const active = demos.find((demo) => demo.id === activeId) ?? demos[0];

  return (
    <section className="relative overflow-hidden bg-[#071c16] py-20 text-white lg:py-28">
      <div className="customer-hero-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-5 h-1 w-14 rounded-full bg-[#6df4b8]" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#72e9b3]">
            {locale === "en" ? "Real product · Native screenshots" : "真实产品 · 原始清晰截图"}
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
            {locale === "en" ? "See the product before the pitch." : "先看产品，再听介绍。"}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/72">
            {locale === "en"
              ? "Four real interface views are shown at their natural proportions, without aggressive image compression or decorative cropping."
              : "四个真实界面按原始比例完整展示，不做强压缩，也不为装饰而裁切。"}
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {demos.map((demo) => {
            const isActive = demo.id === active.id;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveId(demo.id)}
                className={`rounded-[1.5rem] border px-5 py-4 text-left transition ${
                  isActive
                    ? "border-[#70f1b7] bg-[#70f1b7] text-[#06241a] shadow-[0_18px_50px_rgba(76,235,164,0.2)]"
                    : "border-white/12 bg-white/5 text-white/68 hover:border-[#70f1b7]/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">{copy(locale, demo.tab)}</p>
                <p className="mt-2 text-sm font-semibold leading-6">{copy(locale, demo.title)}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/12 bg-[#dfeae5] shadow-[0_36px_110px_rgba(0,0,0,0.36)]">
          <div className="border-b border-[#174a38]/12 bg-[#eef5f1] px-5 py-4 text-[#09251d] md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#107550]">{copy(locale, active.tab)}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-[#09251d]">{copy(locale, active.title)}</h3>
            </div>
            <div className="mt-3 max-w-2xl md:mt-0 md:text-right">
              <p className="text-sm leading-6 text-[#4d6d61]">{copy(locale, active.text)}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a7b59]">
                {locale === "en" ? `Source image ${active.size}` : `原图尺寸 ${active.size}`}
              </p>
            </div>
          </div>
          <div className="flex min-h-[30rem] items-center justify-center bg-[#dfeae5] p-3 md:p-10">
            <img
              src={withBasePath(active.image)}
              alt={copy(locale, active.title)}
              className="mx-auto h-auto w-auto max-w-full rounded-[1.25rem] object-contain shadow-[0_16px_50px_rgba(7,42,30,0.16)] md:max-w-[1000px]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
