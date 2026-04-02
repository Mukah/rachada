import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { getCollection } from 'astro:content'

export const server = {
  search: defineAction({
    input: z.object({
      query: z.string(),
    }),
    handler: async (input) => {
      try {
        const routes = await getCollection('routes')
        const results = routes.filter((route) => {
          return route.data.name.includes(input.query)
        })
        return results
      } catch (error) {
        console.error('Search error:', error)
        return []
      }
    },
  }),
}