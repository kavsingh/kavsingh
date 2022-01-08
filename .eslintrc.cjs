module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
	],
	plugins: ["filenames"],
	ignorePatterns: ["*.cjs"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: "./tsconfig.json",
		extraFileExtensions: [".mjs"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		"camelcase": "off",
		"curly": ["warn", "multi-line", "consistent"],
		"no-shadow": "off",
		"no-throw-literal": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ disallowTypeAnnotations: false },
		],
		"@typescript-eslint/member-ordering": ["warn"],
		"@typescript-eslint/no-shadow": [
			"error",
			{
				ignoreTypeValueShadow: false,
				ignoreFunctionTypeParameterNameValueShadow: true,
			},
		],
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
		],
		"filenames/match-regex": ["error", "^[a-z0-9-.]+$", true],
		"filenames/match-exported": ["error", "kebab"],
		"prettier/prettier": "warn",
	},
};
