const withTypescript = require('@zeit/next-typescript')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),

  webpack: (config, { dev }) => {
    if (!dev) {
      /*
        Incorporate caching as per https://github.com/ooade/NextSimpleStarter
        Enable only in Production
      */
      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          filepath: './sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*', // Precache all static files by default
          ],
          forceDelete: true,
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, // cache all files
            },
          ],
        }),
      )
    }

    return config
  },
})
