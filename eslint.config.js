import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    // General linting configuration for JavaScript and JSON files
    files: ['**/*.{js,jsx,json}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    ignores: [
      'node_modules',
      '.output',
      'dist',
      'public',
      'assets/animations',
      'assets/images',
      '.git',
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': 'warn',
      'prettier/prettier': 'error',
    },
  },
  {
    // Vue-specific linting rules
    files: ['**/*.vue'],
    languageOptions: {
      parser: vuePlugin.parsers.vue,
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      'vue/no-unused-vars': 'warn',
      'vue/html-indent': ['error', 2],
    },
  },
  {
    // TypeScript-specific linting rules
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-unused-vars': 'off', // Disable base rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
    },
  },
];
