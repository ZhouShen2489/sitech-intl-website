export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

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
