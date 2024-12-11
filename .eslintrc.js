module.exports = {
    env: {
      browser: true, // Enables browser globals like `window` and `document`
      node: true,    // Enables Node.js globals
      es2021: true,  // Enables ES2021 syntax
    },
    parser: '@babel/eslint-parser', // Specify a parser if needed
    parserOptions: {
      ecmaVersion: 2021, // Specify the ECMAScript version
      sourceType: 'module', // Support ES modules
      ecmaFeatures: {
        jsx: true, // Enable JSX syntax
      },
    },
    extends: [
      'eslint:recommended', // Base ESLint rules
      'plugin:vue/vue3-recommended', // Vue.js 3 rules (if using Vue)
      'plugin:@typescript-eslint/recommended', // TypeScript rules (if using TypeScript)
      'plugin:prettier/recommended', // Integrate with Prettier (if using Prettier)
    ],
    rules: {
      'no-console': 'warn', // Warn for console.log()
      'eqeqeq': 'error', // Require strict equality (`===`)
      'no-unused-vars': 'warn', // Warn for unused variables
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'indent': ['error', 2], // Enforce 2-space indentation
      'prettier/prettier': 'error', // Integrate with Prettier
    },
    plugins: [
      '@typescript-eslint', // Add TypeScript-specific linting
      'vue', // Add Vue.js linting (if using Vue)
    ],
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Apply specific rules for TypeScript files
        rules: {
          '@typescript-eslint/no-unused-vars': 'warn',
        },
      },
    ],
  };
  