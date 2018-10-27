module.exports = {
  env: {
    browser: false,
    node: true,
  },

  settings: {
    'import/resolver': 'webpack',
  },

  plugins: ['prettier'],

  extends: ['mongrel-react', 'prettier', 'prettier/react'],

  rules: {
    'prettier/prettier': 'warn',
  },

  overrides: [
    {
      files: 'scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
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
        node: false,
      },

      rules: {
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'never',
            children: 'ignore',
          },
        ],
      },
    },
  ],
}
