import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintConfigPrettier,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'public/**',
    ],

    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'external',
            'internal',
            'builtin',
            'sibling',
            'parent',
            'index',
          ],
          pathGroups: [
            {
              pattern: 'components',
              group: 'internal',
            },

            {
              pattern: 'models',
              group: 'internal',
            },
            {
              pattern: 'store',
              group: 'internal',
            },

            {
              pattern: 'tools',
              group: 'internal',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['**/src/hooks/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
export default eslintConfig;
