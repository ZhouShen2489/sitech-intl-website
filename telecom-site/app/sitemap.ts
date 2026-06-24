import type { MetadataRoute } from "next";
import { telecomDirections } from "@/content/telecom-solutions-content";
export default function sitemap(): MetadataRoute.Sitemap { return ["en", "zh"].flatMap((locale) => ["", "/contact", "/privacy", "/solutions/telecom", ...telecomDirections.map((item) => `/solutions/telecom/${item.slug}`)].map((path) => ({ url: `https://telecom.sitech-intl.com/${locale}${path}`, changeFrequency: path ? "monthly" as const : "weekly" as const, priority: path ? 0.7 : 1 }))); }
