import { redirect } from "next/navigation";

import { isLocale, withLocale } from "@/lib/site";

export default async function LegacyProductRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(withLocale(isLocale(locale) ? locale : "en", "/products/ai-expert-customer-service"));
}
