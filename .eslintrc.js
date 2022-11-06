module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        indent: ['error', 2],
        tabWidth: 2,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-return-assign': ['error', 'always'],
        'no-multiple-empty-lines': { 'max': 2, 'maxEOF': 0 },
        'object-curly-spacing': ['warn', 'never'],
        'prettier/prettier': [
          'error',
          { endOfLine: 'auto', singleQuote: true, parser: 'flow' },
        ],
      },
    },
  ],
};
