const { merge } = require('ramda')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),

  webpack: (config, { dev }) => {
    if (!dev) {
      // eslint-disable-next-line no-param-reassign
      config.resolve = merge(config.resolve || {}, {
        alias: {
          react: 'inferno-compat',
          'react-dom': 'inferno-compat',
        },
      })

      /*
        Incorporate caching as per https://github.com/ooade/NextSimpleStarter
        Enable only in Production
      */
      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*', // Precache all static files by default
          ],
          forceDelete: true,
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, // cache all files
            },
          ],
        })
      )
    }

    return config
  },
}
