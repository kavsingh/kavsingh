module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    'markdown-in-js/babel',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~/components': './components',
          '~/content': './content',
          '~/layouts': './layouts',
          '~/pages': './pages',
          '~/style': './style',
          '~/util': './util',
        },
      },
    ],
  ],
}
