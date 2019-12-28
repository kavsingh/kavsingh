const unusedVarsConfig = [
  'warn',
  { ignoreRestSiblings: true, varsIgnorePattern: '^_' },
]

const camelcaseConfig = ['error', { properties: 'never' }]

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    jsx: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  env: { node: true, browser: false, es6: true },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'curly': ['error', 'multi-line', 'consistent'],
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'camelcase': camelcaseConfig,
        'no-unused-vars': unusedVarsConfig,
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'camelcase': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/camelcase': camelcaseConfig,
        '@typescript-eslint/no-unused-vars': unusedVarsConfig,
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      env: { browser: true },
      rules: {
        'no-console': 'error',
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
  ],
  globals: {
    process: 'readonly',
  },
}
