module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		"semi": ["error", "always", { "omitLastInOneLineBlock": false, }], //добавление ; где пропустил
		"comma-dangle": ["error", "never"], // чтобы не было , висячих после блоков []
		quotes: ['error', 'single'], //автозамена "" → ''
		'react/prop-types': [0], // чтобы у props не было подсветки из-за ts
		'indent': ['error', 'tab'],
	}
}