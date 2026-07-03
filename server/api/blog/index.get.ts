import { readdir, readFile } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default defineEventHandler(async () => {
  const dir = process.env.BLOG_DIR ?? 'content/blog'
  const files = (await readdir(dir).catch(() => [])).filter(f => extname(f) === '.md')

  const posts = await Promise.all(files.map(async (file) => {
    const raw = await readFile(join(dir, file), 'utf-8')
    const { data } = await parseMarkdown(raw)
    const slug = basename(file, '.md')
    return { ...data, path: `/blog/${slug}` }
  }))

  return posts
    .filter(p => p.published !== false)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
})
