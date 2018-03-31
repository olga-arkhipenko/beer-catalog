module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "standard",
        "plugin:vue/recommended"
    ],
    plugins: [
        "html"
    ],
    rules: {
        "no-new": 0
    }
};