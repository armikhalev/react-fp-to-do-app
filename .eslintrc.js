module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended"
	],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [ "error", "tab" ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "never" ],
		// Possible Errors
		'no-unsafe-finally': ['error'],
		'no-console': ['warn'],

		// Best Practices
		'accessor-pairs': ['warn'],
		'array-callback-return': ['error'],
		'block-scoped-var': ['error'],
		'complexity': ['warn', 10],
		'curly': ['error'],
		'dot-location': ['error', 'property'],
		'dot-notation': ['error'],
		'eqeqeq': ['error'],
		'guard-for-in': ['error'],
		'no-alert': ['error'],
		'no-caller': ['error'],

		// 'no-else-return': ['warn'],
		'no-empty-function': ['warn'],
		'no-eq-null': ['error'],
		'no-eval': ['error'],
		'no-extend-native': ['error'],
		'no-extra-bind': ['error'],
		'no-floating-decimal': ['error'],
		'no-implicit-coercion': ['error'],
		'no-implicit-globals': ['error'],
		'no-implied-eval': ['error'],
		// 'no-invalid-this': ['error'],
		'no-iterator': ['error'],
		'no-labels': ['error'],
		'no-lone-blocks': ['error'],
		'no-loop-func': ['error'],
		// 'no-magic-numbers': ['error', { 'ignore': [-1,0,1,2,100], 'detectObjects': false }], // allow some basic numbers // disable since it fails on nice initializations like 'var a = 100 * 100;'
		'no-multi-spaces': ['error'],
		'no-multi-str': ['error'],
		'no-native-reassign': ['error'],
		'no-new': ['error'],
		'no-new-func': ['error'],
		'no-new-wrappers': ['error'],
		// 'no-param-reassign': ['error', {'props': false}],
		'no-redeclare': ['error'],
		// 'no-return-assign': ['error'],
		'no-script-url': ['error'],
		'no-self-compare': ['error'],
		'no-sequences': ['error'],
		// 'no-throw-literal': ['error'],
		// 'no-unmodified-loop-condition': ['error'],
		'no-unused-expressions': ['error', { allowTernary: true }],
		'no-useless-call': ['error'],
		'no-useless-concat': ['warn'],
		'no-useless-escape': ['off'], // false positives inside regexes
		// 'no-warning-comments': ['warn', { 'terms': ['todo'], 'location': 'start' }],
		'no-with': ['error'],
		// 'vars-on-top': ['error'],
		'wrap-iife': ['error', 'inside'],
		'yoda': ['error', 'never', { 'exceptRange': true }],

		// Variables
		'no-shadow': ['error'],
		'no-shadow-restricted-names': ['error'],
		'no-undef-init': ['error'],
		// 'no-undefined': ['error'],
		// todo: { args: 'all' }
		'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'none', argsIgnorePattern: '(apiReq|apiRes|e|index|jqXHR|obj|options|req|res|next)' }],
		"no-use-before-define": ["error", { "functions": false, "classes": false }],

		// Node.js and CommonJS
		// TODO

		// Stylistic Issues
		'array-bracket-spacing': ['error', 'always', { 'arraysInArrays': false, 'objectsInArrays': false }],
		'block-spacing': ['error'],
		'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
		'camelcase': ['error', { 'properties': 'never' }],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['error', '_this', '_This'],
		// 'func-style': ['error', 'declaration'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'linebreak-style': ['error', 'unix'],
		'max-depth': ['error', {'max': 4}],
		'max-nested-callbacks': ['error', 5],
		// 'max-statements': ['warn', { 'max': 15 }, { 'ignoreTopLevelFunctions': true }],
		'max-statements-per-line': ['error', {'max': 3}],
		'new-cap': ['error', { 'newIsCapExceptions' : ['require','moment'], 'capIsNewExceptions' : ['Deferred', 'restify.CORS', 'express.Router'] }],
		'no-array-constructor': ['error'],
		'no-continue': ['error'],
		'no-lonely-if': ['error'],
		'no-spaced-func': ['error'],
		'no-trailing-spaces': ['error'],
		'no-unneeded-ternary': ['error'],
		'no-whitespace-before-property': ['error'],
		'object-curly-spacing': ['error', 'always'],
		// 'object-property-newline': ['error'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'sort-vars': ['error'],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', 'never']

		// ECMAScript 6
		// TODO
	}
};
