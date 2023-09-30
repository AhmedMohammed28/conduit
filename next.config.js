/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "api.realworld.io",
      },
    ],
  },
};

module.exports = nextConfig;
