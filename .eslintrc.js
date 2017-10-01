module.exports = {
  env: {
    browser: false,
    node: true,
  },

  settings: {
    'import/resolver': 'webpack',
  },

  plugins: ['prettier'],

  extends: ['mongrel-react', 'prettier', 'prettier/react',],

  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
      },
    ],
  },

  overrides: [
    {
      files: [
        'components',
        'content',
        'layouts',
        'pages',
        'proptypes',
        'static',
        'style',
        'util',
      ].map(dir => `${dir}/**/*.js`),

      env: {
        browser: true,
        node: false,
      },

      rules: {
        'prettier/prettier': [
          'warn',
          {
            semi: false,
            singleQuote: true,
            trailingComma: 'all',
            bracketSpacing: true,
          },
        ],
      },
    },
  ],
}
