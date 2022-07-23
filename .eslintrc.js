const noUnusedVarsConfig = [
	"error",
	{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
];

module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	plugins: ["filenames"],
	ignorePatterns: ["*.cjs"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
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
		"no-shadow": "error",
		"no-throw-literal": "error",
		"no-unused-vars": noUnusedVarsConfig,
		"filenames/match-regex": ["error", "^[a-z0-9-.]+$", true],
		"filenames/match-exported": ["error", "kebab"],
		"prettier/prettier": "warn",
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
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				extraFileExtensions: [".mjs"],
				project: "./tsconfig.json",
			},
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:prettier/recommended",
			],
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
				"@typescript-eslint/no-unused-vars": noUnusedVarsConfig,
			},
		},
	],
};
