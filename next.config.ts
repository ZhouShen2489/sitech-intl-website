import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "sitech-intl-website";
const basePath = isGitHubPages ? `/${repoName}` : "";

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
          unoptimized: true,
        },
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
          NEXT_PUBLIC_IS_STATIC_EXPORT: "true",
        },
      }
    : {
        env: {
          NEXT_PUBLIC_BASE_PATH: "",
          NEXT_PUBLIC_IS_STATIC_EXPORT: "false",
        },
      }),
};

export default nextConfig;
