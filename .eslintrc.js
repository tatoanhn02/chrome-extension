module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "sort-keys-fix"],
  extends: ["plugin:prettier/recommended", "react-app"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "simple-import-sort/imports": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: true,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
  },
  globals: {
    chrome: "readonly",
  },
};
