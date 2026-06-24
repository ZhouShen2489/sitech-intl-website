import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { OperaFooter, OperaHeader } from "@/components/opera-shell";
import { isLocale, locales } from "@/lib/site";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <div className="min-h-screen bg-[#06101c]"><OperaHeader locale={locale} /><main>{children}</main><OperaFooter locale={locale} /></div>;
}
