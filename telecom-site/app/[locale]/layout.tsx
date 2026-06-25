import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales } from "@/lib/site";
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <div className="min-h-screen bg-white"><SiteHeader locale={locale} mode="solutions" /><main>{children}</main><SiteFooter locale={locale} variant="telecom" /></div>; }
