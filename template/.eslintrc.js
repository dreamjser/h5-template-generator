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
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-redeclare': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  }
}
