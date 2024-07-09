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
      {
        protocol: "https",
        hostname: "intract-dashboard-files.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
