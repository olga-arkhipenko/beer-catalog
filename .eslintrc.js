module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    plugins: [
        "html"
    ],
    extends: 'standard',
    rules: {
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}