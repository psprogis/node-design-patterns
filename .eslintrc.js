module.exports = {
    'extends': ['airbnb-base'],

    globals: {
    },

    env: {
        es6: true,
        node: true,
    },

    parserOptions: {
        'ecmaVersion': 2017,
    },

    rules: {
        'indent': ['error', 4],
        'max-len': ['error', { 'code': 120 }],
        'padded-blocks': 'off',
        'class-methods-use-this': 'off',
        'arrow-parens': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'warn',
        'no-console': 'off'
    },
};
