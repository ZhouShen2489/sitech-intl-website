import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/page-sections";
import { copy, siteContent } from "@/content/site-content";
import { isLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: `${siteContent.brand.name} | ${copy(locale, siteContent.brand.eyebrow)}`,
    description: copy(locale, siteContent.brand.summary),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.sitech-intl.com/${locale}`,
      languages: {
        en: "https://www.sitech-intl.com/en",
        zh: "https://www.sitech-intl.com/zh",
      },
    },
  };
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
