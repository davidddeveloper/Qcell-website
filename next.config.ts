import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MAP_BOX_ACCESS_TOKEN: process.env.MAP_BOX_ACCESS_TOKEN,
  },
};

export default nextConfig;
