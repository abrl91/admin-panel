module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'no-trailing-spaces': 'off',
		'object-curly-spacing': 'error',
		'no-return-assign': 'off',
		'indent': 'off',
		'comma-dangle': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'vue/script-indent': ['warn', 2, { 'baseIndent': 1 }],
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			legacyDecorators: true
		}
	}
}
