import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["en", "zh"].flatMap((locale) => ["", "/privacy"].map((path) => ({ url: `https://opera.sitech-intl.com/${locale}${path}`, changeFrequency: path ? "yearly" as const : "weekly" as const, priority: path ? 0.2 : 1 }))); }
