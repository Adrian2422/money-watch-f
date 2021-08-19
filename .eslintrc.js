module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		quotes: [
			'warn',
			'single'
		],
		semi: [
			'warn',
			'always'
		],
		'getter-return': 'error',
		'no-console': 'warn',
		'no-dupe-args': 'warn',
		'no-dupe-keys': 'warn',
		'no-duplicate-case': 'warn',
		'no-duplicate-imports': 'error',
		'no-extra-boolean-cast': 'warn',
		'no-extra-parens': 'warn',
		'no-extra-semi': 'warn',
		'no-irregular-whitespace': 'warn',
		'no-unreachable': 'warn',
		'default-case': 'warn',
		eqeqeq: 'warn',
		'no-empty-function': 'warn',
		'no-empty-pattern': 'warn',
		'no-eval': 'error',
		'no-fallthrough': 'warn',
		'no-floating-decimal': 'warn',
		'no-invalid-this': 'warn',
		'no-magic-numbers': 'warn',
		'no-multi-spaces': 'warn',
		'no-unused-expressions': 'warn',
		'init-declarations': [
			'warn',
			'never'
		],
		'no-unused-vars': 'warn',
		'array-bracket-newline': 'warn',
		'array-bracket-spacing': 'warn',
		'array-element-newline': 'warn',
		'comma-spacing': 'warn',
		'comma-style': [
			'warn',
			'last'
		],
		'comma-dangle': [
			'warn',
			'never'
		],
		'eol-last': 1,
		'@typescript-eslint/typedef': [
			'error',
			{
				arrowParameter: true,
				variableDeclaration: true
			}
		]
	}
};
