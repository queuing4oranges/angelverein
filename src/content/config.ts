import { defineCollection, z } from "astro:content";

const aktuelles = defineCollection({
    type: "content",
    schema: z.object({
        titel: z.string(),
        datum: z.date(),
        kurztext: z.string().optional(),
    }),
});

const berichte = defineCollection({
    type: "content",
    schema: z.object({
        titel: z.string(),
        datum: z.date(),
        kurztext: z.string().optional(),
    }),
});

const termine = defineCollection({
    type: "content",
    schema: z.object({
        titel: z.string(),
        datum: z.date(),
        zeit: z.string(),
        location: z.string(),
    }),
});

export const collections = {
    aktuelles,
    berichte,
    termine
};
