import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TelecomSolutionsPage from "@/app/[locale]/solutions/telecom/page";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "en" ? "Si-Tech Telecom | Operator Growth and Operations" : "Si-Tech Telecom｜运营商增长与运营", alternates: { canonical: `/${locale}`, languages: { en: "/en", zh: "/zh" } } };
}

export default async function TelecomHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <TelecomSolutionsPage params={Promise.resolve({ locale })} />;
}
