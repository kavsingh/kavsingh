import js from "@eslint/js";
import filenames from "@kavsingh/eslint-plugin-filenames";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import * as tsEslint from "typescript-eslint";

export default tsEslint.config(
	{
		ignores: [".vscode/*", ".astro/*", "dist/"],
	},

	{
		linterOptions: { reportUnusedDisableDirectives: true },
		plugins: { "jsx-a11y": jsxA11y },
	},

	js.configs.recommended,
	filenames.configs.kebab,

	{
		files: ["*.astro"],
		extends: [
			...astro.configs.recommended,
			...astro.configs["jsx-a11y-strict"],
		],
	},

	{
		files: ["*.?(m|c)[tj]s?(x)", "**/*.?(m|c)[tj]s?(x)"],
		languageOptions: { parserOptions: { projectService: true } },
		extends: [
			...tsEslint.configs.strictTypeChecked,
			...tsEslint.configs.stylisticTypeChecked,
		],
	},

	{
		plugins: { "@typescript-eslint": tsEslint.plugin },
		rules: {
			"camelcase": "off",
			"no-console": "off",
			"no-restricted-syntax": [
				"warn",
				{ selector: "TSEnumDeclaration", message: "Avoid using enums" },
			],
			"no-unreachable": "error",
			"@typescript-eslint/consistent-type-definitions": ["warn", "type"],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/member-ordering": ["warn"],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true },
			],
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": [
				"error",
				{
					ignoreTypeValueShadow: false,
					ignoreFunctionTypeParameterNameValueShadow: true,
				},
			],
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
	},

	{
		files: ["**/*.c[tj]s?(x)"],
		languageOptions: {
			sourceType: "commonjs",
			parserOptions: { sourceType: "commonjs" },
		},
		rules: {
			"@typescript-eslint/no-require-imports": "off",
			"@typescript-eslint/no-var-requires": "off",
		},
	},

	{
		files: ["*.?(m|c)[tj]s?(x)"],
		rules: {
			"filenames/match-exported": "off",
		},
	},

	prettierRecommended,

	{
		rules: {
			"curly": ["warn", "multi-line", "consistent"],
			"prettier/prettier": "warn",
		},
	},
);
