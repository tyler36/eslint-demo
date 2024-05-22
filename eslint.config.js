import js from '@eslint/js';
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            // Set common globals (windows,document...) to prevent "no-undef"
            globals: {
                ...globals.browser,
            }
        },
        ignores: ['node_modules', 'vendor', '.gitlab-ci-local'],
        rules: {
            // Possible errors
            'no-duplicate-imports': 2,
            'no-unreachable-loop': 2,
            // Suggestions
            'arrow-body-style': 1,
            'capitalized-comments': 1,
            'default-case': 2,
            'default-case-last': 2,
            'eqeqeq': 2,
            'max-depth': 2,
            'no-alert': 2,
            'no-case-declarations': 2,
            'no-else-return': 2,
            'no-empty': 2,
            'no-lonely-if': 2,
            'no-unneeded-ternary': 2,
            'no-useless-concat': 2,
            'no-useless-constructor': 2,
            'no-var': 2,
            'prefer-arrow-callback': 1,
            'prefer-const': 1,
            'prefer-numeric-literals': 1,
            'prefer-spread': 1,
            'require-await': 2,
            'sort-imports': 1,
            'sort-vars': 1
        }
}];
