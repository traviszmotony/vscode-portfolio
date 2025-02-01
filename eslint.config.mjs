import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
export default eslintConfig;

# touched on 2025-05-27T16:49:18.221294Z
# touched on 2025-05-27T16:49:34.292227Z
# touched on 2025-05-27T16:49:48.216148Z
# touched on 2025-05-27T16:49:59.491862Z