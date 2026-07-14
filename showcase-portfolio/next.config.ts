import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Showcase/showcase-portfolio",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
