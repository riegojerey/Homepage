/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/Homepage', // Updated to match new repository name
  assetPrefix: '/Homepage/', // Updated to match new repository name
}

module.exports = nextConfig 