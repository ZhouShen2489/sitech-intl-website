import { notFound } from "next/navigation";

import { isLocale } from "@/lib/site";

export default async function HelportProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  notFound();
}
