import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  compiler: {
    removeConsole: process.env.ENVIRONMENT === "PRODUCTION",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
