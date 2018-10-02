module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
  },
  extends: [
    'standard',
    "plugin:flowtype/recommended"
  ],
  // add your custom rules here
  rules: {
  },
  plugins: [
    "flowtype"
  ]
}
