const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: () => ({ '/': { page: '/' } }),
}

module.exports = withOffline(nextConfig)
