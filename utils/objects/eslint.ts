import prettierPlugin from 'eslint-plugin-prettier';

export const COMMON_LANGUAGE_OPTIONS = {
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

export const COMMON_RULES = {
  'no-console': 'warn', // Warn on console usage across all files
  eqeqeq: 'error', // Enforce strict equality checks across all files
};

export const COMMON_PLUGINS = {
  prettier: prettierPlugin,
};
