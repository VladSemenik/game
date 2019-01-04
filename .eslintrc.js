module.exports = {
    extends: 'airbnb-base',
    plugins: [
        'import',
        'prefer-class-properties',
        'jest'
    ],
    "globals": {
        "window": true,
        "navigator": true,
        "document": true,
        "ENVIRONMENT": true
    },
    rules: {
        'no-console': 'error',
        'class-methods-use-this': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-unused-vars': 'warn',
        'prefer-class-properties/prefer-class-properties': 2,
        'max-len': ['error', 150, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
    env: {
        "jest/globals": true
    }
};
