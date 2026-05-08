import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function ThankYouPage({
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
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, siteContent.thankYouPage.title)}
        subtitle={copy(locale, siteContent.thankYouPage.text)}
        image="/images/curated/smiling-partnership-handshake.jpg"
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={withLocale(locale, "/")}
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
          >
            {copy(locale, siteContent.thankYouPage.button)}
          </Link>
        </div>
      </section>
    </>
  );
}
