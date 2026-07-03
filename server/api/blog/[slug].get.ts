import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const dir = process.env.BLOG_DIR ?? 'content/blog'
  const raw = await readFile(join(dir, `${slug}.md`), 'utf-8').catch(() => null)

  if (!raw) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

  const { data, body } = await parseMarkdown(raw)
  return { ...data, body, path: `/blog/${slug}` }
})
