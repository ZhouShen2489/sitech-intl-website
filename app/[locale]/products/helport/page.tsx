import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { productsContent } from "@/content/productsContent";
import { copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

function ActionLink({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "button-glow inline-flex rounded-full bg-tide px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
      : "inline-flex rounded-full border border-tide/30 bg-white px-5 py-3 text-sm font-semibold text-tide transition hover:bg-tide hover:text-white";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default async function HelportProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const detail = productsContent.helport;

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, detail.hero.badge)}
        title={copy(locale, detail.hero.title)}
        subtitle={copy(locale, detail.hero.subtitle)}
        image={detail.hero.image}
      />

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.overviewTitle)} text={copy(locale, detail.overviewText)} />

          <div className="surface-card mt-10 rounded-[2.5rem] p-8 lg:p-10">
            <h2 className="font-serif text-3xl text-ink">{copy(locale, detail.companyTitle)}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {detail.companyBullets[locale].map((bullet) => (
                <div key={bullet} className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9ff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.familyTitle)} text={copy(locale, detail.familyText)} />
          <div className="mt-10 grid gap-6">
            {detail.familyItems.map((item) => (
              <article
                key={item.title.en}
                className="interactive-card grid gap-8 rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-card lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-tide">{copy(locale, item.label)}</p>
                  <h2 className="mt-4 font-serif text-4xl text-ink">{copy(locale, item.title)}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{copy(locale, item.summary)}</p>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-[#f9fbfd] p-6">
                  <div className="space-y-3">
                    {item.bullets[locale].map((bullet) => (
                      <div key={bullet} className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionLink
                      href={withLocale(locale, item.primaryHref)}
                      label={copy(locale, item.primaryLabel)}
                    />
                    <ActionLink
                      href={item.secondaryHref.startsWith("http") ? item.secondaryHref : withLocale(locale, item.secondaryHref)}
                      label={copy(locale, item.secondaryLabel)}
                      variant="secondary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.fitTitle)} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {detail.fitItems[locale].map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-[#f7f9fb] px-5 py-4 text-sm leading-7 text-slate-700 shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-mesh py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, detail.motionTitle)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detail.motionItems.map((item) => (
              <article key={item.title.en} className="interactive-card surface-card rounded-[2rem] p-7">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-orbit py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="max-w-3xl font-serif text-3xl">{copy(locale, detail.cta.title)}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={withLocale(locale, detail.cta.primaryHref)}
              className="button-glow inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {copy(locale, detail.cta.primary)}
            </Link>
            <a
              href={detail.cta.secondaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy(locale, detail.cta.secondary)}
            </a>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-white/62">
            {copy(locale, detail.cta.partnerNote)}
          </p>
        </div>
      </section>
    </>
  );
}
