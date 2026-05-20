import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        destination: "/fr-ca",
        permanent: true,
        source: "/fr",
      },
      {
        destination: "/fr-ca/:path*",
        permanent: true,
        source: "/fr/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
