import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import filenames from "@kavsingh/eslint-plugin-filenames";
import tailwindcss from "eslint-plugin-better-tailwindcss";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier/recommended";
import * as tsEslint from "typescript-eslint";

export default defineConfig(
	{ ignores: [".astro/*", "dist/"] },

	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: { parserOptions: { projectService: true } },
	},

	js.configs.recommended,
	filenames.configs.kebab,
	tsEslint.configs.strictTypeChecked,
	tsEslint.configs.stylisticTypeChecked,

	{
		rules: {
			camelcase: "off",
			"no-console": "off",
			"no-restricted-syntax": [
				"error",
				{ selector: "TSEnumDeclaration", message: "Avoid using enums" },
			],
			"no-unreachable": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/member-ordering": ["error"],
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
				"error",
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
		files: ["*.{ts,js}"],
		rules: { "filenames/match-exported": "off" },
	},

	astro.configs.recommended,

	// `client-side-ts` extracts <script> tags from Astro components.
	{
		files: ["**/*.astro"],
		processor: astro.processors["client-side-ts"],
	},

	// disable type-checked rules in Astro components.
	// https://github.com/ota-meshi/eslint-plugin-astro/issues/447
	// @TODO: how to enable?
	{
		files: ["**/*.astro", "**/*.astro/*.ts"],
		extends: [tsEslint.configs.disableTypeChecked],
		languageOptions: { parserOptions: { projectService: false } },
	},

	{
		files: ["src/**/*.astro", "src/**/*.tsx"],
		extends: [
			jsxA11y.flatConfigs.recommended,
			tailwindcss.configs["recommended-error"],
		],
		settings: { "better-tailwindcss": { entryPoint: "src/styles/app.css" } },
		rules: {
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
			"better-tailwindcss/no-unknown-classes": [
				"error",
				{ detectComponentClasses: true },
			],
		},
	},

	prettier,

	{
		rules: {
			curly: ["error", "multi-line", "consistent"],
			"prettier/prettier": "error",
		},
	},
);
