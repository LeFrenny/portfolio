import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep a running dev server from overwriting production preview artifacts.
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next-production",
  images: {
    domains: [],
  },
};

export default nextConfig;
