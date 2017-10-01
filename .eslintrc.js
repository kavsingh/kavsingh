const prettierRules = (rules = {}) => [
  'warn',
  Object.assign(
    {
      semi: false,
      singleQuote: true,
      bracketSpacing: true,
      trailingComma: 'es5',
    },
    rules
  )
]

module.exports = {
  env: {
    browser: false,
    node: true
  },

  settings: {
    'import/resolver': 'webpack'
  },

  plugins: ['prettier'],

  extends: ['mongrel-react', 'prettier', 'prettier/react'],

  rules: {
    // Server environment is Node 6.X,
    // IDEs using Node < 8 to parse webpack config
    'prettier/prettier': prettierRules({ trailingComma: 'es5' })
  },

  overrides: [
    {
      files: [
        'components',
        'content',
        'layouts',
        'pages',
        'propTypes',
        'static',
        'style',
        'util',
      ].map(dir => `${dir}/**/*.js`),

      env: {
        browser: true,
        node: false
      },

      rules: {
        'prettier/prettier': prettierRules({ trailingComma: 'all' })
      }
    }
  ]
}
