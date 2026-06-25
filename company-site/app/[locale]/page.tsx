import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OperaHomePage } from "@/components/opera-homepage";
import { operaContent, operaCopy } from "@/content/opera-content";
import { isLocale, type Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "en" ? `${operaContent.productName} | Concept Demo` : `${operaContent.productName}｜概念演示`,
    description: operaCopy(locale as Locale, operaContent.subheadline),
    alternates: { canonical: `/${locale}`, languages: { en: "/en", zh: "/zh" } },
  };
}

export default async function CompanyHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <OperaHomePage locale={locale} />;
}
