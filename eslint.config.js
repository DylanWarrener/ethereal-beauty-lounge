export default [
  {
    // General linting configuration for JavaScript, TypeScript, and Vue files
    files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.vue"], // Match specific file types
    languageOptions: {
      ecmaVersion: 2021, // Use ECMAScript 2021 features
      sourceType: "module", // Support ES Modules
      parser: require("@typescript-eslint/parser"), // Parse TypeScript files
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax for React or Vue
        },
      },
      globals: {
        browser: true, // Allow browser global variables
        node: true, // Allow Node.js global variables
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"), // Add TypeScript-specific linting
      vue: require("eslint-plugin-vue"), // Add Vue-specific linting
      prettier: require("eslint-plugin-prettier"), // Integrate Prettier with ESLint
    },
    rules: {
      // Common ESLint rules
      "no-console": "warn", // Warn when using console.log
      "no-unused-vars": "warn", // Warn for unused variables
      eqeqeq: "error", // Enforce strict equality checks
      "prettier/prettier": "error", // Report Prettier formatting issues as ESLint errors
    },
  },
  {
    // TypeScript-specific linting rules
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Warn for unused variables in TypeScript files
    },
  },
  {
    // Vue-specific linting rules
    files: ["*.vue"],
    plugins: {
      vue: require("eslint-plugin-vue"), // Activate Vue plugin for ESLint
    },
    rules: {
      "vue/no-unused-vars": "warn", // Warn for unused variables in Vue templates
      "vue/html-indent": ["error", 2], // Enforce 2-space indentation in Vue templates
    },
  },
];
