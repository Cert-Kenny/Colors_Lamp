export default [
  {
    ignores: ["js/md5.js"]
  },
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        XMLHttpRequest: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-redeclare": "error",
      "no-unreachable": "error"
    }
  }
];
