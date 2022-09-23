/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/api/cloudflare_recaptcha',
        destination: 'https://recaptcha.ashishbhoi.com/',
      },
      {
        source: '/api/cloudflare_sendgrid',
        destination: 'https://sendgrid.ashishbhoi.com/',
      },
    ]
  },
}

module.exports = nextConfig
