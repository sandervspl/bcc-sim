module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "comma-dangle": ["error", "always-multiline"],
    "no-trailing-spaces": ["error"],
    "object-curly-spacing": ["error", "always"],
    "prefer-const": ["error"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": 2,
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "block-spacing": ["error", "always"],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "return": { "after": true },
        "throw": { "after": true },
        "case": { "after": true }
      }
    }],
    "eol-last": ["error", "always"],

    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "off",
  }
}
