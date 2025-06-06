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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.yiyuan-arch.com.tw' }],
        destination: 'https://yiyuan-arch.com.tw/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yi-yuan.vercel.app' }],
        destination: 'https://yiyuan-arch.com.tw/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
