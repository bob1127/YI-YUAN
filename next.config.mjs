/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 允許任何圖片來源
      },
    ],
  },
  // 若使用 App Router，可加這項確保 sitemap 抓到路徑
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
