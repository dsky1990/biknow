// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    },
    "html/html-extensions": [".vue"]  // consider .html and .we files as HTML
  },
  // add your custom rules here
  'rules': {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": true
    }],
    "prefer-arrow-callback": ["error", {
      "allowNamedFunctions": true
    }],
    "comma-dangle": ["error", "never"],
    "new-cap": ["error", {
      "properties": false
    }],
    "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": false }],
    "no-underscore-dangle": ["error", { "allow": ["_this"] }],
    "no-unused-vars": ["error", { "varsIgnorePattern": "cb" }],
    "max-len": 0,
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "linebreak-style": 0,
    "consistent-return": 0,
    "guard-for-in": 0,
    "func-names": 0,
    "no-console": 0,
    "one-var": ["error", { "var": "always", "let": "always", "const": "always" }],
    "prefer-const": ["error", { "destructuring": "all" }],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "no-eval": ["error", { "allowIndirect": true }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
  }
}
