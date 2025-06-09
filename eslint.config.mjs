import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Permite 'any'
      '@next/next/no-img-element': 'off' // Opcional: Si también quieres permitir <img>
    }
  }),
]

export default eslintConfig;
