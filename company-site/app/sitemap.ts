import type { MetadataRoute } from "next";

const paths = ["", "/about", "/contact", "/stories", "/products", "/products/helport", "/solutions", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "zh"].flatMap((locale) => paths.map((path) => ({
    url: `https://www.sitech-intl.com/${locale}${path}`,
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  })));
}
