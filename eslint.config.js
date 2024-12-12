import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';

/* Utils */
import { COMMON_IGNORES } from '@/utils/arrays/eslint';
import {
  COMMON_LANGUAGE_OPTIONS,
  COMMON_PLUGINS,
  COMMON_RULES,
} from '@/utils/objects/eslint';

export default [
  {
    // JavaScript-specific linting rules
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ...COMMON_LANGUAGE_OPTIONS,
    },
    ignores: COMMON_IGNORES,
    plugins: {
      ...COMMON_PLUGINS,
    },
    rules: {
      ...COMMON_RULES,
      'no-unused-vars': 'always',
      'prettier/prettier': 'error',
    },
  },
  {
    // TypeScript-specific linting rules
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...COMMON_LANGUAGE_OPTIONS,
      parser: tsParser,
    },
    plugins: {
      ...COMMON_PLUGINS,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...COMMON_RULES,
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
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Specify the path to your tsconfig
        },
      },
    },
  },
  {
    // Vue-specific linting rules
    files: ['**/*.vue'],
    languageOptions: {
      ...COMMON_LANGUAGE_OPTIONS,
      parser: vueEslintParser, // Ensure vue-eslint-parser is used
      parserOptions: {
        parser: tsParser, // For TypeScript inside <script lang="ts">
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      ...COMMON_PLUGINS,
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      'vue/no-unused-vars': 'warn',
      'vue/html-indent': ['error', 2], // Enforce 2-space indentation for templates
      'prettier/prettier': 'error', // Enforce Prettier formatting as ESLint errors
      '@typescript-eslint/no-unused-vars': [
        // Flag unused variables in TypeScript blocks
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];
