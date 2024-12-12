import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';

const commonLanguageOptions = {
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
};
const commonRules = {
  'no-console': 'warn', // Warn on console usage across all files
  eqeqeq: 'error', // Enforce strict equality checks across all files
};
const commonPlugins = {
  prettier: prettierPlugin,
};
const commonIgnores = [
  'node_modules',
  '.output',
  'dist',
  'public',
  'assets/animations',
  'assets/images',
  '.git',
];

export default [
  {
    // JavaScript-specific linting rules
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ...commonLanguageOptions,
    },
    ignores: commonIgnores,
    plugins: {
      ...commonPlugins,
    },
    rules: {
      ...commonRules,
      'no-unused-vars': 'always',
      'prettier/prettier': 'error',
    },
  },
  {
    // TypeScript-specific linting rules
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...commonLanguageOptions,
      parser: tsParser,
    },
    plugins: {
      ...commonPlugins,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...commonRules,
      'no-unused-vars': 'off', // Play around with this by turning it off and on.
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
  {
    // Vue-specific linting rules
    files: ['**/*.vue'],
    languageOptions: {
      ...commonLanguageOptions,
      parser: 'vue-eslint-parser',
    },
    plugins: {
      ...commonPlugins,
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      'vue/no-unused-vars': 'warn',
      'vue/html-indent': ['error', 2],
    },
  },
];
