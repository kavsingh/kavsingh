module.exports = {
  presets: ['next/babel'],
  plugins: ['markdown-in-js/babel', ['lodash', { id: ['ramda', 'recompose'] }]],
}