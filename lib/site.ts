export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type SiteKey = "company" | "opera" | "telecom";

const productionOrigins: Record<SiteKey, string> = {
  company: "https://www.sitech-intl.com",
  opera: "https://opera.sitech-intl.com",
  telecom: "https://telecom.sitech-intl.com",
};

const localOrigins: Record<SiteKey, string> = {
  company: "http://localhost:3003",
  opera: "http://localhost:3006",
  telecom: "http://localhost:3005",
};

function defaultOrigin(site: SiteKey) {
  return process.env.NODE_ENV === "production" ? productionOrigins[site] : localOrigins[site];
}

function configuredOrigin(site: SiteKey) {
  if (site === "company") {
    return process.env.NEXT_PUBLIC_COMPANY_ORIGIN?.trim();
  }

  if (site === "opera") {
    return process.env.NEXT_PUBLIC_OPERA_ORIGIN?.trim();
  }

  return process.env.NEXT_PUBLIC_TELECOM_ORIGIN?.trim();
}

export function getSiteOrigin(site: SiteKey) {
  const configured = configuredOrigin(site);
  return (configured || defaultOrigin(site)).replace(/\/$/, "");
}

export function withSiteLocale(site: SiteKey, locale: Locale, path = "") {
  const normalizedPath = path && path !== "/" ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${getSiteOrigin(site)}/${locale}${normalizedPath}`;
}

export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getBasePath()}${normalizedPath}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path = "/") {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function switchLocaleInPath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");

  if (segments.length > 1 && isLocale(segments[1] ?? "")) {
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return withLocale(targetLocale);
}
