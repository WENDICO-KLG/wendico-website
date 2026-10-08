import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1350, 1440, 1920, 2048, 3840],
  },
};

export default nextConfig;
