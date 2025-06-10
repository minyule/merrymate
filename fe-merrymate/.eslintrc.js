module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'plugin:vue/vue3-recommended',
  ],
};