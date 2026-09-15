import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placedog.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
