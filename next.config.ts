// Remove "use client" since this is a Next.js config file that runs on the server
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
};

export default nextConfig;
