const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: () => ({ '/': { page: '/' } }),
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: false,
  },
  experimental: { modern: true },
}

module.exports = withOffline(nextConfig)
