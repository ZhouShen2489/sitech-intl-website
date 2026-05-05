import { StaticRedirect } from "@/components/static-redirect";
import { isLocale, withLocale } from "@/lib/site";

export default async function MarketRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const href = isLocale(locale) ? withLocale(locale, "/products") : "/zh/products";

  return (
    <StaticRedirect
      href={href}
      message="Redirecting to products..."
      linkLabel="Open products"
    />
  );
}
