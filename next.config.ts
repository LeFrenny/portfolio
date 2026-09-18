import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel expects .next; keep local production previews separate from development.
  distDir:
    process.env.VERCEL === "1" || process.env.NODE_ENV === "development"
      ? ".next"
      : ".next-production",
  images: {
    domains: [],
  },
};

export default nextConfig;
