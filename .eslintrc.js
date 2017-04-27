module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: 'eslint-config-mongrel-react',
  rules: {
    'max-len': ['warn', {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  }
}
