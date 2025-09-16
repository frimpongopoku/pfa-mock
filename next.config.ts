import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
