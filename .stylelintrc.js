const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'order/properties-order': [sortOrderSmacss()],
        indentation: 4,
        'block-opening-brace-newline-after': ['always'],
        'block-closing-brace-newline-before': ['always'],
        'block-closing-brace-empty-line-before': 'never',
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'first-nested',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                ],
                ignore: ['after-comment'],
            },
        ],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'first-nested'],
            },
        ],
        'declaration-empty-line-before': [
            'always',
            {
                except: ['after-declaration', 'first-nested'],
            },
        ],
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
            },
        ],
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'comment-empty-line-before': 'always',
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'function-name-case': 'lower',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        'length-zero-no-unit': true,
        'max-nesting-depth': [
            3,
            {
                ignoreAtRules: ['include', 'media'],
            },
        ],
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-first-line': true,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-max-specificity': '0,3,2',
        'selector-max-type': 2,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute', 'class', 'id'],
            },
        ],
        'string-quotes': 'single',
    },
};
