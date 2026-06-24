import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://telecom.sitech-intl.com/sitemap.xml" }; }
