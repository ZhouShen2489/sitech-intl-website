import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OperaHomePage } from "@/components/opera-homepage";
import { operaContent, operaCopy } from "@/content/opera-content";
import { isLocale, type Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: locale === "en" ? `${operaContent.productName} | Product Site` : `${operaContent.productName}｜产品页`,
    description: operaCopy(locale as Locale, operaContent.subheadline),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://opera.sitech-intl.com/${locale}`,
      languages: {
        en: "https://opera.sitech-intl.com/en",
        zh: "https://opera.sitech-intl.com/zh",
      },
    },
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <OperaHomePage locale={locale} />;
}
