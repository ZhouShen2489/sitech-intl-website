import { redirect } from "next/navigation";

import { isLocale, withLocale } from "@/lib/site";

export default async function TelecomOperationsRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  redirect(withLocale(isLocale(locale) ? locale : "en", "/solutions/telecom"));
}
