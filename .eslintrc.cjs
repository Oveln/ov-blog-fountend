/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "plugin:vue/recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier/skip-formatting",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    plugins: ["prettier"],
    rules: {}
};
