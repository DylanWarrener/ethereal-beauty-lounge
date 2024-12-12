import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    // General linting configuration for JavaScript, TypeScript, and Vue files
    files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue'], // Match specific file types
    languageOptions: {
      ecmaVersion: 2021, // Use ECMAScript 2021 features
      sourceType: 'module', // Support ES Modules
      parser: tsParser, // Parse TypeScript files
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
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error', // Explicitly add this rule
      'no-console': 'warn', // Warn when using console.log
      'prettier/prettier': 'error', // Report Prettier formatting issues as ESLint errors
    },
  },
  {
    // Vue-specific linting rules
    files: ['*.vue'],
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules, // Use Vue 3 recommended rules
      'vue/no-unused-vars': 'warn', // Warn for unused variables in Vue templates
      'vue/html-indent': ['error', 2], // Enforce 2-space indentation in Vue templates
    },
  },
  {
    // TypeScript-specific linting rules
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error', // Mark unused variables as an error
        {
          argsIgnorePattern: '^_', // Ignore arguments prefixed with _
          varsIgnorePattern: '^_', // Ignore variables prefixed with _
        },
      ],
    },
  },
];
