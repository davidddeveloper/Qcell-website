import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MAP_BOX_ACCESS_TOKEN: process.env.MAP_BOX_ACCESS_TOKEN,
  },
  images: {
    domains: ["source.unsplash.com", "unsplash.com", "images.unsplash.com"], // Add the domain here
  },
};

export default nextConfig;
