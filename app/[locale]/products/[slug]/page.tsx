import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { copy, copyList, siteContent, visibleItems } from "@/content/site-content";
import { isLocale, withLocale } from "@/lib/site";

export function generateStaticParams() {
  return visibleItems(siteContent.marketplacePage.ownItems)
    .filter((item) => item.href.startsWith("/products/"))
    .map((item) => ({
      slug: item.href.replace("/products/", ""),
    }))
    .filter((entry) => entry.slug !== "helport");
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const safeLocale: "en" | "zh" = locale;
  const product = visibleItems(siteContent.marketplacePage.ownItems).find(
    (item) => item.href === `/products/${slug}`,
  );

  if (!product) {
    notFound();
  }

  const productHighlights = product.bullets[safeLocale].slice(0, 4);
  const buyingMoments = [
    {
      title: {
        zh: "第一眼就能看懂价值",
        en: "Value is clear on first glance",
      },
      text: {
        zh: "客户一看标题、场景和动作，就知道这条产品是解决什么问题的。",
        en: "The title, scenario, and action make the use case obvious fast.",
      },
    },
    {
      title: {
        zh: "可以直接进入业务试点",
        en: "Easy to start with a real pilot",
      },
      text: {
        zh: "适合从一个流程、一个团队或一个客户触点先跑起来。",
        en: "Start with one workflow, one team, or one customer touchpoint.",
      },
    },
    {
      title: {
        zh: "不会把产品说得太空",
        en: "Concrete enough to trust",
      },
      text: {
        zh: "页面会直接说明能力、使用方式和适用团队，而不是只讲抽象愿景。",
        en: "The page shows the capability, use pattern, and fit instead of broad vision.",
      },
    },
  ];

  return (
    <>
      <PageHero
        locale={safeLocale}
        badge={copy(safeLocale, product.category)}
        title={copy(safeLocale, product.title)}
        subtitle={copy(safeLocale, product.subtitle)}
        image={product.image}
        actions={
          <>
            <Link
              href={withLocale(safeLocale, "/products")}
              className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {safeLocale === "en" ? "Back to products" : "返回产品首页"}
            </Link>
            <Link
              href={withLocale(safeLocale, "/contact")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {safeLocale === "en" ? "Talk about this product" : "聊这款产品"}
            </Link>
          </>
        }
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={safeLocale === "en" ? "What this product covers" : "这款产品覆盖什么"}
            text={copy(safeLocale, product.note)}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productHighlights.map((bullet, index) => (
              <article
                key={bullet}
                className="rounded-[1.8rem] border border-blue-100 bg-[#f8fbff] p-6 shadow-card"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tide">
                  {safeLocale === "en"
                    ? index === 0
                      ? "Scenario"
                      : index === 1
                        ? "Workflow"
                        : index === 2
                          ? "Team fit"
                          : "Outcome"
                    : index === 0
                      ? "场景"
                      : index === 1
                        ? "流程"
                        : index === 2
                          ? "适合团队"
                          : "结果"}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{bullet}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={safeLocale === "en" ? "Why buyers care" : "为什么客户会有感觉"}
            text={
              safeLocale === "en"
                ? "A buyer should understand the value before the first meeting ends."
                : "客户在第一次沟通结束前，就应该大致知道这款产品值不值得继续聊。"
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {buyingMoments.map((item) => (
              <article
                key={item.title.en}
                className="interactive-card rounded-[2rem] border border-blue-100 bg-white p-7 shadow-card"
              >
                <h2 className="font-display text-2xl text-ink">{copy(safeLocale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(safeLocale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-blue-100 bg-[#f7fbff] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-tide">
                  {safeLocale === "en" ? "Next step" : "下一步"}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
                  {safeLocale === "en"
                    ? "Want to see this in your own workflow?"
                    : "想看它放进你的业务流程里会是什么样？"}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {safeLocale === "en"
                    ? "We can walk through the product, the target users, and the first useful starting point."
                    : "我们可以直接看产品、目标用户和第一个最值得切入的使用点。"}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={withLocale(safeLocale, "/contact")}
                  className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
                >
                  {safeLocale === "en" ? "Talk to us" : "开始沟通"}
                </Link>
                <Link
                  href={withLocale(safeLocale, "/products")}
                  className="inline-flex rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  {safeLocale === "en" ? "Browse products" : "继续看产品"}
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {copyList(safeLocale, product.tags).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
