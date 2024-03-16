// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    "@vue/typescript/recommended",
    'prettier',
  ],
  globals: {
    App: 'readonly',
    GLOBAL_CONFIG: 'readonly'
  },
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  ignorePatterns: ["**/__test__/*"],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
    'vue/multi-word-component-names': 'off',
    "@typescript-eslint/no-explicit-any": "off",
  }
}
