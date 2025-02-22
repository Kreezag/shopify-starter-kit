module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': ['error', { code: 80 }],
    'newline-after-var': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-use-before-define': [
      'error',
      { functions: false, variables: true, classes: true },
    ],
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ['generator/templates', 'src/scripts/domPolyfills'],
};
