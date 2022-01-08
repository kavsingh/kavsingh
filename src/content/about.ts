const about: AboutContent = {
	name: "Kanwaljeet Singh",
	profession: "Software Developer",
	links: [
		{
			type: "email",
			label: "Email",
			url: "mailto://flakisms@gmail.com",
			web: true,
			print: true,
		},
		{
			type: "github",
			label: "Github",
			url: "https://github.com/kavsingh",
			web: true,
			print: true,
		},
		{
			type: "linkedin",
			label: "LinkedIn",
			url: "https://linkedin.com/in/kav-singh",
			web: true,
			print: true,
		},
		{
			type: "website",
			label: "Website",
			url: "//kavsingh.com",
			web: false,
			print: true,
		},
	],
	profile: `
Developer building for web and mobile in Berlin. I'm enthusiastic about learning new web technologies and using them to build rich user experiences.

Over the years I have developed skills in:

- JavaScript | TypeScript: Vanilla and frameworks, especially React (Native), Redux, MobX, Backbone
- CSS: CSS in JS, PostCss, pre-processors
- Some server side (non Production): Node.js, PHP
  `,
};

export default about;

export interface AboutContent {
	name: string;
	profession: string;
	links: AboutLink[];
	profile: string;
}

interface AboutLink {
	type: string;
	label: string;
	url: string;
	print: boolean;
	web: boolean;
}
