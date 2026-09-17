import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dj493l0jy/image/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
