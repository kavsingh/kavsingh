module.exports = {
  presets: ['next/babel'],
  plugins: [
    'markdown-in-js/babel',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '~/components': './components',
          '~/content': './content',
          '~/layouts': './layouts',
          '~/pages': './pages',
          '~/style': './style',
          '~/util': './util',
          'extensions': ['.ts', '.tsx', '.js'],
        },
      },
    ],
  ],
}
