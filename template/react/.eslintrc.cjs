// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    requireConfigFile: false
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  globals: {
    App: 'readonly',
    GLOBAL_CONFIG: 'readonly',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  ignorePatterns: ["**/__test__/*"],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-redeclare': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  }
}
