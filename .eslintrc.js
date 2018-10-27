module.exports = {
  env: { browser: false, node: true, es6: true },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  rules: { 'prettier/prettier': 'warn' },
}
