module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "webpack.config.js"],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
