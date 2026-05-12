import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "sitech-intl-website";
const basePath = isGitHubPages ? `/${repoName}` : "";
const imageConfig: NonNullable<NextConfig["images"]> = {
  formats: ["image/avif", "image/webp"],
  minimumCacheTTL: 60 * 60 * 24 * 365,
  qualities: [74, 76, 82],
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        skipTrailingSlashRedirect: true,
        basePath,
        assetPrefix: basePath,
        images: {
          ...imageConfig,
          unoptimized: true,
        },
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
          NEXT_PUBLIC_IS_STATIC_EXPORT: "true",
        },
      }
    : {
        images: imageConfig,
        env: {
          NEXT_PUBLIC_BASE_PATH: "",
          NEXT_PUBLIC_IS_STATIC_EXPORT: "false",
        },
      }),
};

export default nextConfig;
