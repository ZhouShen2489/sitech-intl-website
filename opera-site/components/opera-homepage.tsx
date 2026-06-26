"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { operaContent, operaCopy } from "@/content/opera-content";
import type { Locale } from "@/lib/site";

const AUTOPLAY_MS = 5600;

const sceneNodes = [
  { left: "12.5%", top: "75.4%" },
  { left: "37.5%", top: "77.2%" },
  { left: "62.5%", top: "75.1%" },
  { left: "87.5%", top: "73.8%" },
] as const;

const sceneObjectBadges = [
  { left: "12.5%", top: "61.5%", labelEn: "Detect", labelZh: "发现" },
  { left: "37.5%", top: "51.5%", labelEn: "Understand", labelZh: "理解" },
  { left: "62.5%", top: "54.5%", labelEn: "Act", labelZh: "行动" },
  { left: "87.5%", top: "48.5%", labelEn: "Resolve", labelZh: "解决" },
] as const;

const panelAccents = {
  detect: {
    glow: "rgba(242,185,109,0.35)",
    border: "border-[#f2b96d]/35",
    text: "text-[#ffd79f]",
    fill: "#f2b96d",
  },
  understand: {
    glow: "rgba(102,163,255,0.34)",
    border: "border-[#66a3ff]/35",
    text: "text-[#b6d7ff]",
    fill: "#66a3ff",
  },
  act: {
    glow: "rgba(89,178,255,0.34)",
    border: "border-[#59b2ff]/35",
    text: "text-[#c7ebff]",
    fill: "#59b2ff",
  },
  resolve: {
    glow: "rgba(124,230,186,0.34)",
    border: "border-[#7ce6ba]/35",
    text: "text-[#cffff0]",
    fill: "#7ce6ba",
  },
} as const;

function StageRail({
  locale,
  currentStage,
  onSelect,
}: {
  locale: Locale;
  currentStage: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="grid gap-2 lg:grid-cols-4">
      {operaContent.stages.map((stage, index) => {
        const active = index === currentStage;
        return (
          <button
            key={stage.key}
            type="button"
            onClick={() => onSelect(index)}
            className={`group rounded-[1.2rem] border px-3 py-2.5 text-left transition duration-500 ${
              active
                ? "border-white/24 bg-white/[0.09] shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
                : "border-white/8 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold ${
                  active ? "border-white/30 bg-white/12 text-white" : "border-white/12 text-white/56"
                }`}
              >
                {index + 1}
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                {operaCopy(locale, stage.label)}
              </span>
            </div>
            <h3 className="mt-2 text-[15px] font-semibold tracking-[-0.03em] text-white">
              {operaCopy(locale, stage.title)}
            </h3>
          </button>
        );
      })}
    </div>
  );
}

function StageKpis({
  locale,
  stage,
}: {
  locale: Locale;
  stage: (typeof operaContent.stages)[number];
}) {
  const kpis = [
    {
      label: locale === "en" ? "Inventory" : "库存",
      value: stage.key === "detect" ? "480 units" : stage.key === "understand" ? "320 gap" : stage.key === "act" ? "68% ready" : "100% covered",
      tone: "text-white",
    },
    {
      label: locale === "en" ? "Shipment ETA" : "海运 ETA",
      value: stage.key === "resolve" ? "May 31" : "4 days late",
      tone: stage.key === "resolve" ? "text-[#cffff0]" : "text-[#ffd79f]",
    },
    {
      label: locale === "en" ? "Customer ETA" : "客户 ETA",
      value: stage.key === "resolve" ? "Jun 2" : "4 days late",
      tone: stage.key === "resolve" ? "text-[#cffff0]" : "text-[#ffd79f]",
    },
    {
      label: locale === "en" ? "Receivable" : "应收",
      value: stage.key === "resolve" ? "$128k secured" : "$128k at risk",
      tone: stage.key === "resolve" ? "text-[#cffff0]" : "text-[#ffd79f]",
    },
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="rounded-[1.15rem] border border-white/10 bg-[rgba(7,14,25,0.76)] px-3 py-2.5 backdrop-blur-md"
        >
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">{kpi.label}</div>
          <div className={`mt-1.5 text-sm font-semibold ${kpi.tone}`}>{kpi.value}</div>
        </div>
      ))}
    </div>
  );
}

export function OperaHomePage({ locale }: { locale: Locale }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const stage = operaContent.stages[currentStage];
  const accent = panelAccents[stage.key];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCurrentStage((value) => (value + 1) % operaContent.stages.length);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [currentStage, isPlaying, prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentStage((value) => (value + 1) % operaContent.stages.length);
        setIsPlaying(false);
      }

      if (event.key === "ArrowLeft") {
        setCurrentStage((value) => (value - 1 + operaContent.stages.length) % operaContent.stages.length);
        setIsPlaying(false);
      }

      if (event.key === " ") {
        event.preventDefault();
        setIsPlaying((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function selectStage(index: number) {
    setCurrentStage(index);
    setIsPlaying(false);
  }

  function moveStage(direction: -1 | 1) {
    setCurrentStage((value) => (value + direction + operaContent.stages.length) % operaContent.stages.length);
    setIsPlaying(false);
  }

  function advanceStage() {
    if (currentStage === operaContent.stages.length - 1) {
      setCurrentStage(0);
      setIsPlaying(!prefersReducedMotion);
      return;
    }

    setCurrentStage((value) => value + 1);
    setIsPlaying(false);
  }

  return (
    <div className="bg-[#040c17] text-white">
      <section id="demo" className="relative isolate overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(41,88,171,0.24),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(115,164,255,0.18),transparent_24rem),radial-gradient(circle_at_70%_72%,rgba(242,185,109,0.13),transparent_22rem)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,23,0.2)_0%,rgba(4,12,23,0.78)_88%,#040c17_100%)]" />

        <div className="relative mx-auto max-w-[1680px] px-4 pb-5 pt-6 sm:px-6 lg:px-10 lg:pb-6 lg:pt-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07111f] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_20rem),linear-gradient(180deg,rgba(3,9,18,0.08)_0%,rgba(3,9,18,0.36)_100%)]" />

            <div className="relative h-[88svh] min-h-[820px] lg:h-[90svh]">
              <div className="pointer-events-none absolute inset-x-[5%] bottom-[18%] top-[34%] z-10 hidden overflow-hidden lg:block">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/opera/living-enterprise-corridor-v2.png"
                    alt=""
                    width={1672}
                    height={941}
                    priority
                    sizes="90vw"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,20,0.16)_0%,rgba(4,11,20,0.28)_24%,rgba(4,11,20,0)_48%,rgba(4,11,20,0.38)_70%,rgba(4,11,20,0.78)_100%)]" />
              <div className="opera-noise absolute inset-0 opacity-35" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(4,11,20,0.9)_0%,rgba(4,11,20,0)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(4,11,20,0)_0%,rgba(4,11,20,0.92)_100%)]" />

              <div className="absolute left-[4.5%] top-[15%] z-20 hidden w-[34%] max-w-[460px] lg:block">
                <p className="text-[10px] uppercase tracking-[0.36em] text-[#76aaff]">
                  Living Enterprise · Product Site
                </p>
                <h1 className="mt-5 max-w-[8ch] font-serif text-[clamp(3.1rem,4.3vw,5.3rem)] leading-[0.96] tracking-[-0.05em] text-[#f5f7ff] [text-shadow:0_12px_42px_rgba(0,0,0,0.35)]">
                  {locale === "en" ? "Make every business object work as one." : "让企业的每一个对象，共同运行。"}
                </h1>
                <p className="mt-4 max-w-[24rem] text-sm leading-6 text-white/56 xl:text-[15px] xl:leading-7">
                  {locale === "en"
                    ? "Ontology turns facts into meaning, then meaning into action."
                    : "企业本体把事实变成意义，再把意义变成行动。"}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[11px] text-white/42">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/18 bg-white/5 text-[9px] text-white/72">AI</span>
                  <span>{locale === "en" ? "AI recommends. People approve." : "AI 提出建议，由人审批执行。"}</span>
                </div>
              </div>

              <div className="absolute right-[4.5%] top-[11.5%] z-20 w-[min(32vw,500px)] min-w-[320px] max-w-[500px]">
                <div
                  className={`rounded-[2rem] border bg-[rgba(6,15,28,0.76)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-700 ${accent.border}`}
                  style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.34), 0 0 60px ${accent.glow}` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/42">AI Operator</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {operaCopy(locale, stage.title)}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPlaying((value) => !value)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/72 transition hover:border-white/24 hover:text-white"
                    >
                      {isPlaying ? (locale === "en" ? "Pause" : "暂停") : locale === "en" ? "Play" : "播放"}
                    </button>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] px-4 py-3">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                        {operaCopy(locale, stage.metricLabel)}
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">{stage.metricValue}</div>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] px-4 py-3">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                        {locale === "en" ? "Confidence" : "交付概率"}
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">{stage.probability}%</div>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] px-4 py-3">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                        {locale === "en" ? "Delta" : "变化"}
                      </div>
                      <div className={`mt-2 text-2xl font-semibold ${accent.text}`}>{stage.delta}</div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                        {locale === "en" ? "System reading" : "系统判断"}
                      </div>
                      <div className={`text-[11px] uppercase tracking-[0.24em] ${accent.text}`}>
                        {operaCopy(locale, stage.label)}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/72">{operaCopy(locale, stage.summary)}</p>
                    <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${stage.probability}%`, backgroundColor: accent.fill }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {stage.evidence.map((item) => (
                      <div
                        key={item.en}
                        className="rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] px-4 py-3 text-sm text-white/72"
                      >
                        {operaCopy(locale, item)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {stage.actions.map((item) => (
                      <span
                        key={item.en}
                        className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.18em] ${accent.border} ${accent.text}`}
                      >
                        {operaCopy(locale, item)}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => moveStage(-1)}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/76 transition hover:border-white/24 hover:text-white"
                      aria-label={locale === "en" ? "Previous stage" : "上一阶段"}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={advanceStage}
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#06101c] transition hover:bg-[#f2b96d]"
                    >
                      {operaCopy(locale, stage.trigger)}
                    </button>
                    <button
                      type="button"
                      onClick={() => moveStage(1)}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/76 transition hover:border-white/24 hover:text-white"
                      aria-label={locale === "en" ? "Next stage" : "下一阶段"}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-[5%] bottom-[18%] top-[34%] z-10 hidden overflow-hidden lg:block">
                <svg viewBox="0 0 1672 941" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
                  <defs>
                    <linearGradient id="opera-route-main" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#f6c06f" />
                      <stop offset="55%" stopColor="#ffb14b" />
                      <stop offset="100%" stopColor="#ffe39a" />
                    </linearGradient>
                    <linearGradient id="opera-route-alt" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#6daeff" />
                      <stop offset="100%" stopColor="#78e1ff" />
                    </linearGradient>
                    <filter id="opera-soft-glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path
                    d="M208 710 C 384 710, 512 715, 661 716 C 838 717, 1020 713, 1464 710"
                    stroke="url(#opera-route-main)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#opera-soft-glow)"
                    opacity={currentStage === 1 ? 0.55 : 0.95}
                  />
                  <path
                    d="M208 744 C 412 774, 646 774, 878 765 C 1114 755, 1298 744, 1464 738"
                    stroke="url(#opera-route-alt)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    fill="none"
                    filter="url(#opera-soft-glow)"
                    opacity={currentStage >= 2 ? 0.95 : 0.3}
                  />
                  <circle
                    cx={[209, 627, 1045, 1463][currentStage]}
                    cy={[710, 716, 713, 710][currentStage]}
                    r="7"
                    fill="#ffffff"
                  >
                    <animate attributeName="r" values="7;11;7" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;1;0.75" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="pointer-events-none absolute inset-x-[5%] bottom-[18%] top-[34%] z-20 hidden overflow-hidden lg:block">
                {sceneObjectBadges.map((badge, index) => (
                  <div
                    key={badge.left}
                    className="absolute flex -translate-x-1/2 flex-col items-center gap-2"
                    style={{ left: badge.left, top: badge.top }}
                  >
                    <span className="rounded-full border border-white/14 bg-[rgba(5,12,22,0.7)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/56 backdrop-blur-md">
                      {locale === "en" ? badge.labelEn : badge.labelZh}
                    </span>
                    <span className="h-12 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0))]" />
                  </div>
                ))}
              </div>

              {sceneNodes.map((stop, index) => (
                <div
                  key={`${stop.left}-${stop.top}`}
                  className="absolute z-30 hidden lg:block"
                  style={{ left: stop.left, top: stop.top }}
                >
                  <div
                    className={`opera-ping-ring absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      index <= currentStage ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ borderColor: index <= currentStage ? accent.fill : "transparent" }}
                  />
                  <div
                    className={`h-4 w-4 rounded-full border-2 bg-[#06101c] shadow-[0_0_18px_rgba(255,255,255,0.14)] transition duration-500 ${
                      index <= currentStage ? "scale-110" : "scale-100"
                    }`}
                    style={{ borderColor: index <= currentStage ? accent.fill : "rgba(255,255,255,0.28)" }}
                  />
                </div>
              ))}

              <div className="absolute inset-x-[5%] bottom-[9.5rem] z-20 hidden lg:block">
                <div className="space-y-2">
                  <StageKpis locale={locale} stage={stage} />
                </div>
              </div>

              <div className="absolute inset-x-[5%] bottom-5 z-20 hidden lg:block">
                <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(4,10,20,0.72)] p-3 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <StageRail locale={locale} currentStage={currentStage} onSelect={selectStage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative border-b border-white/8 bg-[#050d18] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(72,111,196,0.17),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/42">
              {operaCopy(locale, operaContent.storyLabel)}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-white md:text-5xl">
              {operaCopy(locale, operaContent.storyTitle)}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
              {operaCopy(locale, operaContent.storyIntro)}
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {operaContent.stages.map((item, index) => {
              const itemAccent = panelAccents[item.key];
              return (
                <article
                  key={item.key}
                  className="grid gap-6 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] lg:grid-cols-[140px_1fr_1fr] lg:p-8"
                >
                  <div className="text-[4.5rem] font-semibold leading-none tracking-[-0.08em] text-white/12">
                    0{index + 1}
                  </div>

                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.3em] ${itemAccent.text}`}>
                      {operaCopy(locale, item.label)}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                      {operaCopy(locale, item.title)}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{operaCopy(locale, item.summary)}</p>
                  </div>

                  <div className="grid gap-3">
                    {item.evidence.map((evidence) => (
                      <div
                        key={evidence.en}
                        className="rounded-[1.35rem] border border-white/8 bg-[#08101d] px-4 py-3 text-sm leading-6 text-white/72"
                      >
                        {operaCopy(locale, evidence)}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative border-b border-white/8 bg-[#06101c] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(242,185,109,0.08),transparent_18rem)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/42">
                {operaCopy(locale, operaContent.howItWorks.eyebrow)}
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-white md:text-5xl">
                {operaCopy(locale, operaContent.howItWorks.title)}
              </h2>
            </div>

            <div className="grid gap-4">
              {operaContent.howItWorks.items.map((item, index) => (
                <article
                  key={item.title.en}
                  className="grid gap-4 rounded-[1.8rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-5 md:grid-cols-[88px_1fr]"
                >
                  <div className="text-4xl font-semibold tracking-[-0.08em] text-white/18">0{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      {operaCopy(locale, item.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{operaCopy(locale, item.text)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
