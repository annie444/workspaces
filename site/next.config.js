/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: "Annie's HomeLab",
    description: 'My personal repository of Kasm supported workspaces.',
    icon: 'https://annie444.github.io/workspaces/1.0/image.png',
    listUrl: 'https://annie444.githib.io/workspaces/',
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
