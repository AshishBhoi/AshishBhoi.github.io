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
        source: '/api/gReCaptcha',
        destination: 'https://www.google.com/recaptcha/api/siteverify',
      }
    ]
  },
}

module.exports = nextConfig
