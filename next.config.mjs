/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.intract.io",
      },
      {
        protocol: "https",
        hostname: "static.highongrowth.xyz",
      },
    ],
  },
};

export default nextConfig;
