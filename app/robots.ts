import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/en", "/zh", "/privacy"],
        disallow: ["/en/products", "/zh/products", "/en/solutions", "/zh/solutions"],
      },
    ],
    sitemap: "https://opera.sitech-intl.com/sitemap.xml",
  };
}
