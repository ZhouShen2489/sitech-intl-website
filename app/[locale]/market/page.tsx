import { StaticRedirect } from "@/components/static-redirect";
import { isLocale, withLocale } from "@/lib/site";

export default async function MarketRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const href = isLocale(locale) ? withLocale(locale, "/marketplace") : "/zh/marketplace";

  return (
    <StaticRedirect
      href={href}
      message="Redirecting to marketplace..."
      linkLabel="Open marketplace"
    />
  );
}
