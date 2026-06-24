import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(process.cwd(), ".."),
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000, qualities: [74, 76, 82] },
};

export default nextConfig;
