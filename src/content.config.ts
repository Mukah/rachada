import { defineCollection, reference } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

// const home = defineCollection({
//   loader: file('./data/home.md'),
//   schema: z.object({
//       title: z.string(),
//       description: z.string(),
//   }),
// })

const sectors = defineCollection({
  loader: glob({
    base: './data/sectors',
    pattern: '**/sector.json',
    generateId: ({ entry }) => {
      // rolling-stones/sector.json -> rolling-stones
      return entry.split('/')[0]
    }
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
})

const routes = defineCollection({
  loader: glob({
    base: './data/sectors',
    pattern: '**/routes/*.json',
    generateId: ({ entry }) => {
      // rolling-stones/routes/cuidado-ai.json -> rolling-stones/cuidado-ai
      const parts = entry.split('/')
      const sectorId = parts[0]
      const routeFileName = parts[2].replace('.json', '')
      return `${sectorId}/${routeFileName}`
    },
  }),
  schema: z.object({
    name: z.string(),
    suggestedGrade: z.object({
      vScale: z.string(),
      fontScale: z.string(),
    }).optional(),
    communityGrade: z.object({
      vScale: z.string(),
      fontScale: z.string(),
    }).optional(),
    videos: z.array(reference('videos')).optional(),
  }),
})

const videos = defineCollection({
  loader: glob({
    base: './data/videos',
    pattern: '**/*.json',
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  sectors,
  routes,
  videos,
}