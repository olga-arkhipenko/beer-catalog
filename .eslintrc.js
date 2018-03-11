module.exports = {
    root: true,
    parserOptions: {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    env: {
        browser: true,
    },
    plugins: [
        "vue"
    ],
    extends: [
        'plugin:vue/base',
    ],
    rules: {
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}