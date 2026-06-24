import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://opera.sitech-intl.com/zh",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://opera.sitech-intl.com/en",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://opera.sitech-intl.com/en/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://opera.sitech-intl.com/zh/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
