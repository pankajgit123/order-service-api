import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      // Your custom rules here
      "no-unused-vars": "warn",  // Warn about unused variables
      "no-console": "error",       // Turn off the rule that warns about console logs
      "semi": ["error", "always"],  // Enforce semicolons at the end of statements
      "quotes": ["error", "single"], // Enforce single quotes for strings
      "indent": ["error", 2], // Enforce 2-space indentation
      "react/prop-types": "off" 
    }
  }
];