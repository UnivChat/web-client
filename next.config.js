/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  swcMinify: true,
  compiler: {
    emotion: true
  },
  images: {
    domains: [],
    formats: ["image/webp"]
  },
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`
      }
    ];
  },
  redirects: async () => {
    return [{ source: "/", destination: "/home", permanent: false }];
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;
