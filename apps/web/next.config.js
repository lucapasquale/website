/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
