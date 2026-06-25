import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    summary: z.string().optional()
  })
});

const members = defineCollection({
  type: "content",
  schema: z.object({
    nameKo: z.string(),
    nameEn: z.string(),
    role: z.enum(["professor", "postdoc", "phd", "ms", "intern"]),
    title: z.string().optional(),
    emailMasked: z.string().optional(),
    joined: z.date(),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    alumni: z
      .object({
        ended: z.date(),
        destination: z.string().optional()
      })
      .optional(),
    links: z
      .object({
        homepage: z.string().url().optional(),
        linkedin: z.string().url().optional()
      })
      .optional()
  })
});

const researchTopics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    highlights: z.array(z.string())
  })
});

const featuredWork = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    linkLabel: z.string(),
    link: z.string()
  })
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    yearLabel: z.string().optional(),
    sortId: z.number().optional(),
    type: z.enum(["Conference", "Journal", "Workshop", "Demo", "ArXiv Preprint", "Book Chapter", "Submitted"]),
    authors: z.string(),
    venue: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string()
        })
      )
      .default([])
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    pinned: z.boolean().optional().default(false)
  })
});

const seminarSeries = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["Journal Club", "Seasonal Seminar"]),
    date: z.date(),
    sortOrder: z.enum(["asc", "desc"]),
    externalLink: z.string().url().optional()
  })
});

const seminarSessions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    series: z.string(),
    speaker: z.string(),
    date: z.date(),
    week: z.number().int().positive().optional(),
    materials: z.string().optional()
  })
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    highlight: z.boolean().optional().default(false)
  })
});

export const collections = {
  pages,
  members,
  researchTopics,
  featuredWork,
  publications,
  news,
  seminarSeries,
  seminarSessions,
  gallery
};
