import { StaticRedirect } from "@/components/static-redirect";
import { isLocale, withLocale } from "@/lib/site";

export default async function MarketplaceRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const href = isLocale(locale) ? withLocale(locale, "/products") : "/zh/products";

  return (
    <StaticRedirect
      href={href}
      message={isLocale(locale) && locale === "zh" ? "正在跳转到产品页..." : "Redirecting to products..."}
      linkLabel={isLocale(locale) && locale === "zh" ? "打开产品页" : "Open products"}
    />
  );
}
