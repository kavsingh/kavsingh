import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
	period: z.string(),
	location: z.string(),
	web: z.boolean(),
	print: z.boolean(),
});

const experienceCollection = defineCollection({
	type: "content",
	schema: baseSchema.extend({
		employer: z.string(),
		position: z.string(),
	}),
});

const educationCollection = defineCollection({
	type: "content",
	schema: baseSchema.extend({
		institution: z.string(),
		program: z.string(),
		status: z.union([z.literal("Graduated"), z.literal("Attended")]),
	}),
});

export const collections = {
	experience: experienceCollection,
	education: educationCollection,
};
