import { notFound } from "next/navigation";

import { HomePage } from "@/components/page-sections";
import { isLocale } from "@/lib/site";

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
