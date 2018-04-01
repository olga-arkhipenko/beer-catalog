module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/recommended',
        'airbnb-base'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'no-new': 'off',
        'indent': ['error', 4],
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': 'off',
        'import/extensions': ['error', 'never', {
            'packages': 'always' 
        }],
        'vue/html-indent': ['error', 4, {
            'alignAttributesVertically': true
        }],
        'vue/require-default-prop': ['error', {
            'required': false,
            'non-required': false
        }]
    }
};