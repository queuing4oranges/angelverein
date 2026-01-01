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

// const veranstaltungen = defineCollection({
//     type: "content",
//     schema: z.object({
//         title: z.string(),
//         date: z.date(),
//         location: z.string(),
//     }),
// });

export const collections = {
    aktuelles,
    berichte
};
