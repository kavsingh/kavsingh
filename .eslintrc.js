const srcDependencies = {
  devDependencies: false,
  optionalDependencies: false,
  peerDependencies: false,
}

const devDependencies = {
  devDependencies: true,
  optionalDependencies: false,
  peerDependencies: false,
}

const unusedVarsConfig = [
  'warn',
  { argsIgnorePattern: '^_', varsIgnorePattern: '[iI]gnored' },
]

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
  plugins: [
    '@typescript-eslint',
    'filenames',
    'import',
    'react',
    'react-hooks',
    'emotion',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
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
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'filenames/match-regex': ['error', '^[a-z-.]+$', true],
    'filenames/match-exported': ['error', 'kebab'],
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': ['error', devDependencies],
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'pathGroups': [{ pattern: '~/**', group: 'internal' }],
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-vars': unusedVarsConfig,
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': unusedVarsConfig,
      },
    },
    {
      files: ['src/**/*'],
      env: { browser: true },
      rules: {
        'no-console': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        'import/no-extraneous-dependencies': ['error', srcDependencies],
        'emotion/jsx-import': 'off', // handled by babel plugin
        'emotion/no-vanilla': 'error',
        'emotion/import-from-emotion': 'error',
        'emotion/styled-import': 'error',
        'emotion/syntax-preference': ['error', 'string'],
      },
    },
    {
      files: [
        '*.config.*',
        'src/pages/_document.tsx',
        'src/pages/_app.tsx',
        'src/pages/index.tsx',
      ],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
  ],
  globals: {
    process: 'readonly',
  },
}
