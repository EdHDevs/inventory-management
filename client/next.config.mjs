/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-inventorymanagement-edh.s3.us-east-1.amazonaws.com", // No "https://"
        port: "",
        pathname: "/**", // Matches all paths
      },
    ],
  },
};

export default nextConfig;

