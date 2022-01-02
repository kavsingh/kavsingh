// @ts-check

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  exportPathMap: () => ({ '/': { page: '/home' } }),
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: false,
  },
}

module.exports = withVanillaExtract(nextConfig)
