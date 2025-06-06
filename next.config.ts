import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.material-tailwind.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
