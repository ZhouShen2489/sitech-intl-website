import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
import {
  telecomBoard,
  telecomDirections,
  telecomCopy,
} from "@/content/telecom-solutions-content";
import { isLocale, withBasePath, withLocale } from "@/lib/site";

const solutionBoards = [
  {
    key: "telecom",
    href: "/solutions/telecom",
    image: "/images/curated/telecom-network-switch.jpg",
    title: { zh: "运营商", en: "Telecom" },
    label: { zh: "当前重点板块", en: "Current priority" },
    text: {
      zh: "适合运营商、MVNO、客服中心、海外通信业务和计费运营团队，直接进入最贴近的业务线。",
      en: "For operators, MVNOs, contact centers, global telecom services, and billing teams. Enter through the closest operating line.",
    },
      points: {
        zh: ["BOSS / BSS-OSS", "全球化 MVNO", "智能客服、营销门户、计费控制"],
        en: [
          "BOSS / BSS-OSS",
          "Global MVNO",
          "AI care, marketing portal, and billing control",
        ],
      },
  },
  {
    key: "industry",
    href: "/solutions/digital-industry-platforms",
    image: "/images/curated/warehouse-logistics-team.jpg",
    title: { zh: "产业平台", en: "Industry Platforms" },
    label: { zh: "平台化业务", en: "Platform business" },
    text: {
      zh: "适合需要交易协同、产业中台、数据流通和多参与方运营的客户。",
      en: "For buyers that need transaction coordination, middle-platforms, data flows, and multi-party operations.",
    },
    points: {
      zh: ["产业中台", "交易、支付、物流协同", "数据要素与运营视图"],
      en: [
        "Industry middle-platforms",
        "Transaction, payment, and logistics",
        "Data elements and operations view",
      ],
    },
  },
  {
    key: "ai",
    href: "/solutions/ai-customer-service",
    image: "/images/curated/call-center-team-meeting.jpg",
    title: { zh: "AI 与算力", en: "AI and Compute" },
    label: { zh: "应用优先", en: "Application first" },
    text: {
      zh: "适合希望把 AI 放进客服、运营、知识支持和数字员工场景的团队。",
      en: "For teams putting AI into service, operations, knowledge support, and digital-worker workflows.",
    },
    points: {
      zh: ["智能客服与数字员工", "AI 应用、开发、运营", "算力与 AI 底座预留"],
      en: [
        "AI service and digital workers",
        "AI applications, development, and operations",
        "Future compute and AI infrastructure",
      ],
    },
  },
] as const;

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_58%,#eef6ff_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tide">
              {copy(locale, siteContent.solutionsPage.hero.title)}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
              {locale === "en"
                ? "Enter through the board closest to the business."
                : "先进入最贴近你业务的那条方案线"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {locale === "en"
                ? "Telecom, industry platforms, and AI are separated into boards so buyers can move straight into the right conversation."
                : "我们把运营商、产业平台和 AI 拆成三个大板块，让你直接进入最相关的业务场景。"}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={withLocale(locale, telecomBoard.href)}
                className="button-glow rounded-full bg-tide px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {telecomCopy(locale, telecomBoard.primaryCta)}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full border border-tide/30 bg-white px-6 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white"
              >
                {locale === "en" ? "Help me choose" : "一起判断方向"}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_30px_90px_rgba(11,47,111,0.14)]">
              <div className="relative h-[28rem] bg-ink">
                <Image
                  src={withBasePath(
                    "/images/curated/modern-office-tablet-discussion.jpg",
                  )}
                  alt=""
                  fill
                  priority
                  quality={82}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.06),rgba(7,26,51,0.72))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {solutionBoards.map((board, index) => (
                      <Link
                        key={board.key}
                        href={withLocale(locale, board.href)}
                        className="rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur transition hover:bg-white/20"
                      >
                        <p className="text-xs font-bold text-accent">
                          0{index + 1}
                        </p>
                        <p className="mt-2 font-display text-xl font-bold">
                          {copy(locale, board.title)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={
              locale === "en"
                ? "Three boards, three ways in"
                : "三大板块，三种增长入口"
            }
            text={
              locale === "en"
                ? "Each board has its own rhythm and proof style. Start with the one that matches the pressure you feel now."
                : "按你当前最想推进的业务进入，不用先读完整套能力。"
            }
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutionBoards.map((board) => (
              <article
                key={board.key}
                className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-card"
              >
                <div className="relative h-52 bg-slate-100">
                  <Image
                    src={withBasePath(board.image)}
                    alt=""
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-tide">
                    {copy(locale, board.label)}
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-3xl font-bold text-ink">
                    {copy(locale, board.title)}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {copy(locale, board.text)}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {board.points[locale].map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-slate-700"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={withLocale(locale, board.href)}
                    className="mt-7 inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                  >
                    {locale === "en" ? "Enter board" : "进入板块"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={
              locale === "en"
                ? "The telecom board already opens into five concrete lines"
                : "运营商板块，已经展开成五条业务线"
            }
            text={
              locale === "en"
                ? "From production support to conversion, buyers can jump straight to the line that looks most familiar."
                : "从生产支撑到营销转化，先看最接近你的那一条。"
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {telecomDirections.map((direction) => (
              <Link
                key={direction.slug}
                href={withLocale(
                  locale,
                  `/solutions/telecom/${direction.slug}`,
                )}
                className="interactive-card rounded-[1.4rem] border border-blue-100 bg-white p-5 shadow-card"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-tide">
                  {telecomCopy(locale, direction.eyebrow)}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink">
                  {telecomCopy(locale, direction.shortTitle)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {telecomCopy(locale, direction.summary)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              {locale === "en"
                ? "Have one concrete operator scenario?"
                : "如果你已经有一个具体运营商场景"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
              {locale === "en"
                ? "Start with one scope: launch, activation, billing, partner operations, service AI, or portal conversion."
                : "无论是新业务上线、计费结算、伙伴运营、智能客服还是门户转化，都可以直接进入对应方案线。"}
            </p>
          </div>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {locale === "en" ? "Start the conversation" : "开始沟通"}
          </Link>
        </div>
      </section>
    </>
  );
}
