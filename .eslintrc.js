module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this line
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  // other configurations...
};
