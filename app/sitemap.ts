import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/about", "/contact", "/stories", "/products", "/products/helport", "/solutions", "/privacy"];

  return ["en", "zh"].flatMap((locale) =>
    paths.map((path) => ({
      url: `https://www.sitech-intl.com/${locale}${path}`,
      lastModified: now,
      changeFrequency: path ? ("monthly" as const) : ("weekly" as const),
      priority: path ? 0.7 : 1,
    })),
  );
}
