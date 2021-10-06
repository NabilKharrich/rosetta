module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: [
            'error',
            4,
            {
                switchCase: 2,
            },
        ],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-infix-ops': ['error', { int32Hint: true }],
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'padded-blocks': ['error', 'never'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'object-curly-spacing': ['error', 'always'],
        'comma-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        'key-spacing': 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'max-len': [
            'error',
            {
                code: 80,
                comments: 65,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
};
