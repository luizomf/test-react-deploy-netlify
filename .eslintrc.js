// npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'global-require': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'camelcase': 0,
    'react/state-in-constructor': 0,
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
};
