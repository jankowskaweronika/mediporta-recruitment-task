module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended",
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "indent": ['warn', 2],
    "react/jsx-key": "error",
    "react/jsx-curly-spacing": [
      "warn",
      "never",
      {
        "allowMultiline": true
      }
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        "props": "always",
        "children": "never"
      }
    ],
    "react/jsx-max-props-per-line": [
      "warn"
    ],
    "react/jsx-indent": [
      "warn",
      2
    ],
    "react/jsx-indent-props": [
      "warn",
      2
    ],
    "react/jsx-closing-tag-location": [
      "warn"
    ],
    "react/jsx-closing-bracket-location": [
      "warn"
    ],
    "react/jsx-first-prop-new-line": [
      "warn",
      "multiline"
    ],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/semi': ["error", "never"],
    '@typescript-eslint/member-delimiter-style': [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "multilineDetection": "brackets"
      }
    ]
  },
}
