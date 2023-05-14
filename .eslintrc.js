module.exports = {
    extends: [
      'airbnb-typescript',
      'plugin:prettier/recommended',
      'airbnb', 'airbnb/hooks', 'prettier'
    ],
    plugins:['react'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react/jsx-filename-extension': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' },{ "singleQuote": true }],
    },
  };