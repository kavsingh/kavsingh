module.exports = {
	root: true,
	plugins: ["filenames"],
	env: { browser: true, es2022: true, node: true },
	rules: {
		"filenames/match-regex": ["error", "^[a-z0-9-.]+$", true],
		"filenames/match-exported": ["error", "kebab"],
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				extraFileExtensions: [".astro"],
				parser: "@typescript-eslint/parser",
				project: "./tsconfig.json",
			},
			extends: ["plugin:astro/recommended"],
		},
		{
			files: ["*.?(c)[jt]s?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: { project: "./tsconfig.json" },
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
				"plugin:prettier/recommended",
			],
			plugins: ["deprecation"],
			rules: {
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
				"deprecation/deprecation": "warn",
				"prettier/prettier": "warn",
			},
		},
		{
			files: ["*.c[jt]s?(x)"],
			parserOptions: { sourceType: "script" },
			rules: { "@typescript-eslint/no-var-requires": "off" },
		},
		{
			files: ["*.?(c)js?(x)"],
			extends: ["plugin:@typescript-eslint/disable-type-checked"],
			rules: {
				"deprecation/deprecation": "off",
			},
		},
	],
};
