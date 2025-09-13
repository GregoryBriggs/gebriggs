import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    series: z.string().optional(),
    numberInSeries: z.number().optional(),
    pubDate: z.string(), // ISO date
    cover: z.string().optional(), // /images/...
    buyLinks: z.array(z.object({
      label: z.string(),
      url: z.string().url()
    })).optional(),
    blurb: z.string().min(40),
    tags: z.array(z.string()).default([]),
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = { books, posts };
