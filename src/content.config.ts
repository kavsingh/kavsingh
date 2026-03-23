import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";
import { z } from "astro/zod";

const baseSchema = z.object({
	period: z.string(),
	location: z.string(),
	web: z.boolean(),
	print: z.boolean(),
});

const experienceCollection = defineCollection({
	loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({ employer: z.string(), position: z.string() }),
});

const educationCollection = defineCollection({
	loader: glob({ base: "./src/content/education", pattern: "**/*.{md,mdx}" }),
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
