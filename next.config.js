/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/e-commerce',
  assetPrefix: '/e-commerce/',
  images: {
    loader: 'akamai',
    path: ''
  },
  reactStrictMode: true
};

module.exports = nextConfig;
