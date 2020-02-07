module.exports = {
  presets: ['next/babel'],
  plugins: [
    'markdown-in-js/babel',
    'emotion',
    [
      'babel-plugin-module-resolver',
      {
        alias: { '~': './src' },
        extensions: ['.ts', '.tsx', '.js'],
      },
    ],
  ],
}
