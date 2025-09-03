import { defineCollection, z } from "astro:content";

// const blogCollection = defineCollection({
//   type: "content",
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     author: z.string(),
//     category: z.string(),
//     tags: z.array(z.string()),
//     keywords: z.string().optional(),
//     readingTime: z.number(),
//     // Transform string to Date object
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//   }),
// });

const locationCollection = defineCollection({
  type: "content",
  schema: z.object({
    city: z.string(),
    stateShort: z.string(),
    stateLong: z.string(),
    description: z.string(),
    baseLocation: z.string(),
    keyPlace1: z.string(),
    keyPlace2: z.string(),
    headerImages: z.array(z.string()),
    headlines: z.array(z.string()),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({

    title: z.string().min(2),
    description: z.string().min(10),
    overview: z.string().min(10),


    included: z.array(z.string()).min(1),
    benefits: z.array(z.string()).min(1),
    additional_options: z.array(z.string()).default([]),
    process: z.array(z.string()).min(1),

    recommended: z.string().optional(),
    heroImage: z.string().optional(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    priceRange: z.string().optional(),
    leadTime: z.string().optional(),
  }),
});

export const collections = {
  // blog: blogCollection,
  "aircraft-maintenance": locationCollection,
  "services": services,
};
