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

module.exports = {
  root: true,
  env: { es6: true, node: true, browser: false },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      'eslint-import-resolver-typescript': { project: './tsconfig.json' },
      'eslint-import-resolver-custom-alias': {
        alias: { '~': './src' },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  plugins: ['filenames'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'curly': ['warn', 'multi-line', 'consistent'],
    'no-console': 'off',
    'no-throw-literal': 'error',
    'filenames/match-regex': ['error', '^[a-z0-9-.]+$', true],
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
          'type',
        ],
        'pathGroups': [{ pattern: '~/**', group: 'internal' }],
        'pathGroupsExcludedImportTypes': ['type'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'camelcase': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/member-ordering': ['warn'],
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreTypeValueShadow: false,
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
      },
    },
    {
      files: ['./*', 'src/pages/_app.tsx', 'src/pages/_document.tsx'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
    {
      files: ['src/**/*'],
      env: { node: false, browser: true },
      settings: { react: { version: 'detect' } },
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: {
        'no-console': 'error',
        'import/no-extraneous-dependencies': ['error', srcDependencies],
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.tsx', '.jsx'] },
        ],
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}
