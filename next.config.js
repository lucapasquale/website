/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}
