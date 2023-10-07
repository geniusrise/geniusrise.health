module.exports = {
    parser: 'babel-eslint', // Specifies the ESLint parser for ESNext and JSX
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
        'prettier', // Makes ESLint compatible with Prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Ensure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Your custom rules
        'react/prop-types': 'off', // Disable prop-types as you might use another means for prop validation
        'no-sequences': 'warn',
        'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
        'no-undef': 'warn',
        'no-restricted-globals': ['warn', 'event', 'fdescribe'], // Add any other global you want to restrict
        'default-case': ['warn', { commentPattern: '^no default$' }],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
};
