/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    eqeqeq: 'error', // off关闭校验，用来做强制三等于
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
