module.exports = {
	useTabs: true,
	quoteProps: "consistent",
	// pnpm workaround for prettier astro support
	// https://github.com/withastro/prettier-plugin-astro#pnpm-support-1
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [{ files: '*.astro', options: { parser: 'astro' }}],
};
