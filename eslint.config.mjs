import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                sap: "readonly"
            },
            ecmaVersion: 2023,
            sourceType: "script"
        },
        rules: {
            "brace-style": [2, "1tbs", { "allowSingleLine": true }],
            "consistent-this": 2,
            "no-div-regex": 2,
            "no-floating-decimal": 2,
            "no-self-compare": 2,
            "no-mixed-spaces-and-tabs": [2, true],
            "no-nested-ternary": 2,
            "radix": 2,
            "keyword-spacing": 2,
            "space-unary-ops": 2,
            "wrap-iife": [2, "any"],
            "camelcase": 1,
            "consistent-return": 1,
            "max-nested-callbacks": [1, 3],
            "new-cap": 1,
            "no-extra-boolean-cast": 1,
            "no-lonely-if": 1,
            "no-new": 1,
            "no-new-wrappers": 1,
            "no-redeclare": 1,
            "no-unused-expressions": 1,
            "no-use-before-define": [1, "nofunc"],
            "no-warning-comments": 1,
            "strict": 1,
            "default-case": 1,
            "dot-notation": 0,
            "eol-last": 0,
            "eqeqeq": 0,
            "no-trailing-spaces": 0,
            "no-underscore-dangle": 0,
            "quotes": 0,
            "key-spacing": 0,
            "comma-spacing": 0,
            "no-multi-spaces": 0,
            "no-shadow": 0,
            "no-irregular-whitespace": 0,
            "no-var": 2,
            "no-const-assign": 2,
            "prefer-const": 2
        }
    }
]
