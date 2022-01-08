const education: EducationContent[] = [
	{
		slug: "rmit-university",
		institution: "RMIT University",
		program: "BA (Animation and Interactive Media)",
		period: "2006 - 2008",
		status: "Graduated",
		location: "Melbourne, Australia",
		active: true,
		print: true,
		description: `
Graduated with distinction. Final project was awarded Best Interactive for the graduating year.
    `,
	},
	{
		slug: "university-of-melbourne",
		institution: "University of Melbourne",
		program: "BEng. (Software) / BComm.",
		period: "2000 - 2002",
		status: "Attended",
		location: "Melbourne, Australia",
		active: true,
		print: true,
		description: `
Completed modules in functional programming, object oriented programming and basic marketing.
    `,
	},
];

export default education;

export interface EducationContent {
	slug: string;
	institution: string;
	program: string;
	period: string;
	status: "Graduated" | "Attended";
	location: string;
	active: boolean;
	print: boolean;
	description: string;
}
