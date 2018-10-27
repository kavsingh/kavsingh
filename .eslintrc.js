module.exports = {
  parser: 'babel-eslint',
  env: { browser: false, node: true, es6: true },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'warn',
  },
}
