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
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'comma-dangle': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': ['error', 'never', {
            'packages': 'always' 
        }],
        'vue/html-indent': ['error', 4, {
            'alignAttributesVertically': true
        }],
        'no-console': 'off'
    }
};