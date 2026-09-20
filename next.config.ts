import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domains: ['fastly.picsum.photos', 'randomimageurl.com'], //Deprecated in Next.js 16. Use remotePatterns instead
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'fastly.picsum.photos',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'randomimageurl.com',
      // },
      {
        protocol: 'https',
        hostname: '**', //wildcard to allow any hostname
      },
    ]
  },
};

export default nextConfig;
