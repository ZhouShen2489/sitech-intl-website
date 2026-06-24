import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/page-sections";
import { siteContent, copy } from "@/content/site-content";
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
    alternates: {
      canonical: `/${locale}/company`,
      languages: {
        en: "/en/company",
        zh: "/zh/company",
      },
    },
  };
}

export default async function CompanyHomePage({
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
