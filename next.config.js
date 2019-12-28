const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: () => ({ '/': { page: '/' } }),
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: false,
  },
}

module.exports = withOffline(nextConfig)
