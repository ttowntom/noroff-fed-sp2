import globals from "globals";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        es2021: true,
      },
    },
    plugins: {
      import: pluginImport,
      tailwindcss: pluginTailwindCSS,
    },
    rules: {
      // Enforce proper import/export order
      "import/order": ["error", { "newlines-between": "always" }],

      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      // Custom JS rules
      "no-console": "warn", // Warn if console.log is left in code
      "no-unused-vars": "error", // Error on unused variables to keep code clean
    },
  },
];
