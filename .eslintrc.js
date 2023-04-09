module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
    },
    ignorePatterns: ['**/*.test.js'],
};
