module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
    tsconfigRootDir: __dirname,
    project: ['./jsconfig.json'],
    extraFileExtensions: ['.html'],
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-html',
    'eslint-plugin-optional-comma-spacing',
    'eslint-plugin-one-variable-per-var',
    'eslint-plugin-require-trailing-comma',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    ...
  },
};   
