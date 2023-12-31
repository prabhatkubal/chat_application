/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

module.exports = {
  env: {
    BASE_URL: "http://localhost:4000",
    WEB_SOCKET: "http://localhost:5000",
  },
  generateEtags: false,
  headers: () => [
    {
      source: "/chat/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};