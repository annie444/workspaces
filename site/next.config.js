/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://annie444.github.io/workspaces/',
    contactUrl: 'https://github.com/annie444/workspaces/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
