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
    role: z.enum(["professor", "postdoc", "phd", "ms", "intern", "alumni"]),
    title: z.string(),
    emailMasked: z.string().optional(),
    joined: z.string(),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
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
    type: z.enum(["Conference", "Journal", "Workshop", "Demo", "ArXiv Preprint"]),
    authors: z.string(),
    venue: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string()
      })
    )
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
    period: z.string(),
    sortOrder: z.enum(["asc", "desc"])
  })
});

const seminarSessions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    series: z.string(),
    speaker: z.string(),
    date: z.date(),
    week: z.string().optional(),
    materials: z.string()
  })
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
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
