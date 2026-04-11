import { ClientRedirect } from "@/components/client-redirect";
import { isLocale, withLocale } from "@/lib/site";

export default async function PartnersRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const href = isLocale(locale) ? withLocale(locale, "/marketplace") : "/en/marketplace";

  return (
    <ClientRedirect
      href={href}
      message="Redirecting to marketplace..."
      linkLabel="Open marketplace"
    />
  );
}
