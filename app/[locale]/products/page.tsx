import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, withBasePath, withLocale } from "@/lib/site";

const bookingPath = "/booking?product_interest=ai_expertcare&lead_source=sitech_website&partner_related=true&registration_required=true";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const productLabels = locale === "en"
    ? ["Live guidance", "AI customer care", "Digital experts"]
    : ["实时指导", "AI 智能客服", "数字专家"];

  return (
    <div className="bg-[#edf4f0] text-[#08271d]">
      <section className="relative isolate overflow-hidden bg-[#092b21] text-white">
        <div className="customer-hero-grid absolute inset-0 opacity-25" />
        <div className="absolute right-[-8rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#62f1b2]/12 blur-[110px]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#78edba]">{locale === "en" ? "Product catalogue" : "产品目录"}</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.4rem,6vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              {locale === "en" ? "Products with a clear place in the story." : "每一款产品，都有清晰的位置。"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b8d0c6]">
              {locale === "en" ? "Our own product roadmap and selected partner products are shown separately—so buyers always know what they are evaluating." : "自有产品与精选合作伙伴产品分别呈现，让客户始终清楚自己正在评估什么。"}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 sm:grid-cols-2">
            <a href="#our-products" className="group bg-[#0d362a] p-5 transition hover:bg-[#124834]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8ccdb0]">01 / {locale === "en" ? "Our products" : "我们的产品"}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{locale === "en" ? "0 public listings" : "当前 0 款公开产品"}</p>
              <span className="mt-5 inline-block text-sm text-[#b5d1c4] group-hover:text-white">{locale === "en" ? "View status ↓" : "查看状态 ↓"}</span>
            </a>
            <a href="#partner-products" className="group bg-[#103d2f] p-5 transition hover:bg-[#15523b]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79f1ba]">02 / {locale === "en" ? "Partner products" : "合作伙伴产品"}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">AI Expert Customer Service</p>
              <span className="mt-5 inline-block text-sm text-[#b5d1c4] group-hover:text-white">{locale === "en" ? "Explore product ↓" : "查看产品 ↓"}</span>
            </a>
          </div>
        </div>
      </section>

      <section id="partner-products" className="mx-auto max-w-[92rem] px-6 py-10 lg:px-12 lg:py-14">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.21em] text-[#187a55]">02 / {locale === "en" ? "Partner products" : "合作伙伴产品"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{locale === "en" ? "Ready for a real buyer conversation." : "已经可以进入真实客户沟通。"}</h2>
          </div>
          <span className="hidden rounded-full border border-[#177552]/18 bg-white px-4 py-2 text-xs font-bold text-[#427165] sm:block">{locale === "en" ? "1 featured product" : "1 款重点产品"}</span>
        </div>

        <article className="relative overflow-hidden rounded-[2.5rem] bg-[#06241b] p-3 text-white shadow-[0_34px_100px_rgba(7,55,38,0.2)] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_4%,rgba(93,246,178,0.22),transparent_27rem)]" />
          <div className="relative grid gap-8 rounded-[2rem] border border-white/10 p-6 md:p-9 lg:grid-cols-[0.83fr_1.17fr] lg:p-12">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#78efbb]/25 bg-[#78efbb]/8 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#85f7c5]">
                <span className="h-2 w-2 rounded-full bg-[#78efbb] shadow-[0_0_14px_#78efbb]" />
                {locale === "en" ? "Featured partner product" : "重点合作伙伴产品"}
              </div>
              <h3 className="mt-7 text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">AI Expert<br />Customer Service</h3>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#b7d2c6]">
                {locale === "en" ? "A practical system for stronger customer conversations: real-time guidance for teams, AI service for customers, and digital experts for always-on knowledge." : "一套可实际运行的客户沟通系统：为团队提供实时指导，为客户提供 AI 服务，并将专家知识沉淀为全天候数字专家。"}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {productLabels.map((label, index) => (
                  <span key={label} className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold text-[#c5ddd3]"><span className="mr-2 text-[#78efbb]">0{index + 1}</span>{label}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={withLocale(locale, "/products/ai-expert-customer-service")} className="rounded-full bg-[#73f5bb] px-6 py-3.5 text-base font-bold text-[#06251b] transition hover:-translate-y-0.5 hover:bg-white">
                  {locale === "en" ? "Explore product" : "进入产品页"} ↗
                </Link>
                <Link href={withLocale(locale, bookingPath)} className="rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold transition hover:border-[#73f5bb]/65 hover:bg-white/8">
                  {locale === "en" ? "Request a Free Demo" : "预约免费演示"}
                </Link>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="absolute -inset-7 rounded-[3rem] bg-[#4bf0a5]/10 blur-3xl" />
              <div className="relative w-full overflow-hidden rounded-[1.65rem] border border-white/15 bg-[#dcebe4] p-2 shadow-[0_25px_75px_rgba(0,0,0,0.34)] md:p-3">
                <div className="flex items-center justify-between px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#51776a]"><span>{locale === "en" ? "Live product view" : "真实产品界面"}</span><span>01 / 01</span></div>
                <img src={withBasePath("/images/demos/ai-expertcare-live-call.png")} alt="AI Expert Customer Service interface" className="block h-auto w-full rounded-[1.1rem] object-contain" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="our-products" className="border-t border-[#0b5139]/10 bg-white">
        <div className="mx-auto grid max-w-[92rem] gap-8 px-6 py-12 md:grid-cols-[0.62fr_1.38fr] md:items-center lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.21em] text-[#53766a]">01 / {locale === "en" ? "Our products" : "我们的产品"}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-4xl">{locale === "en" ? "Nothing public until it is ready." : "没有准备好，就不公开展示。"}</h2>
          </div>
          <div className="rounded-[1.6rem] border border-[#0d533b]/10 bg-[#f4f8f5] p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-lg font-semibold text-[#153d2f]">{locale === "en" ? "No own products are currently listed." : "当前暂无对外公开的自有产品。"}</p>
                <p className="mt-2 max-w-2xl text-base leading-7 text-[#5d7a6e]">{locale === "en" ? "New offerings will be added here only after they are ready for external evaluation, demonstration, and delivery planning." : "后续产品只有在具备对外评估、演示与交付规划条件后，才会进入此目录。"}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#54776a] shadow-sm">{locale === "en" ? "Catalog status · Clear" : "目录状态 · 清晰"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
