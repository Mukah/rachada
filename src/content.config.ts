import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const sectors = defineCollection({
  loader: glob({ base: './data/sectors', pattern: '**/sector.json' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
})

const routes = defineCollection({
  loader: glob({ base: './data/sectors', pattern: '**/routes/*.json' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    sectorSlug: z.string(),
    suggestedGrade: z.object({
      vScale: z.string(),
      fontScale: z.string(),
    }).optional(),
    communityGrade: z.object({
      vScale: z.string(),
      fontScale: z.string(),
    }).optional(),
  }),
})

export const collections = {
  sectors,
  routes,
}