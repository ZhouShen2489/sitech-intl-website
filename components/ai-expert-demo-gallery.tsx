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
  },
] as const;

export function AiExpertDemoGallery({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<(typeof demos)[number]["id"]>("voice");
  const active = demos.find((demo) => demo.id === activeId) ?? demos[0];

  return (
    <section className="bg-[#071427] py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 h-1 w-14 rounded-full bg-accent" />
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            {locale === "en" ? "See AI handle both phone and text professionally" : "直接看到 AI 如何专业处理电话与文字沟通"}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/72">
            {locale === "en"
              ? "Switch between four real demo views: live calls, text chat, specialist roles, and outbound calling."
              : "上方切换四个真实演示视图：电话、文本、多角色专家入口和外呼流程。"}
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
                    ? "border-accent bg-accent text-ink shadow-[0_18px_50px_rgba(242,185,109,0.24)]"
                    : "border-white/12 bg-white/6 text-white/72 hover:border-white/32 hover:bg-white/10 hover:text-white"
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">{copy(locale, demo.tab)}</p>
                <p className="mt-2 text-sm font-semibold leading-6">{copy(locale, demo.title)}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/12 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <div className="border-b border-slate-200 bg-[#edf4f8] px-5 py-4 text-ink md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">{copy(locale, active.tab)}</p>
              <h3 className="mt-1 font-display text-2xl text-ink">{copy(locale, active.title)}</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:mt-0">{copy(locale, active.text)}</p>
          </div>
          <div className="bg-[#eef4f8] p-2 md:p-4">
            <img
              src={withBasePath(active.image)}
              alt={copy(locale, active.title)}
              className="mx-auto h-auto w-full rounded-[1.25rem] object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
