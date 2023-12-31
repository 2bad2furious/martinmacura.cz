/** @type {import('eslint').Linter.Config} */

const config = {
  ignorePatterns: ["dist/**"],
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    /**
     * Rules we don't want to apply
     */
    'import/no-anonymous-default-export': 'error',
    /**
     *  Rules override needed until we include them into ackee-eslint-config
     */
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['warn'],
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
    /**
     *  Override core rules with their typesript version
     *  https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['function', 'class', 'multiline-const'],
        next: '*',
      },
      { blankLine: 'always', prev: ['import', 'export'], next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],

    'arrow-body-style': 'off',

    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
};

module.exports = config;
