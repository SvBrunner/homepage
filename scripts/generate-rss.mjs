import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const siteUrl = 'https://svbrunner.ch'
const outFile = path.resolve('public/rss')
const getAuthors = (author) => {
    if (!author) return [{ name: 'Unknown' }]

    if (Array.isArray(author)) {
        return author.map(a => typeof a === 'string' ? { name: a } : a)
    }

    if (typeof author === 'string') {
        return [{ name: author }]
    }

    return [author]
}
const getCategories = (tags) => {
    if (!tags) return []

    if (Array.isArray(tags)) {
        return tags.map((tag) => ({ name: String(tag) }))
    }

    if (typeof tags === 'string') {
        return [{ name: tags }]
    }

    return []
}
const feed = new Feed({
    title: 'Svens Blogposts',
    description: 'Latest posts from my blog',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
    generator: 'feed',
    feedLinks: {
        rss2: `${siteUrl}/rss`,
    },
    author: {
        name: 'Sven',
        email: 'blog@svbrunner.ch',
        link: siteUrl,
    },
})

const files = await fg('content/blog/*.md')
const posts = []

for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8')
    const { data, content } = matter(raw)

    if (data.draft) continue

    const slug = data.slug || path.basename(file, '.md')
    const url = `${siteUrl}/blog/${slug}`

    posts.push({
        title: data.title,
        url,
        tags: data.tags,
        description: data.description || '',
        content,
        date: new Date(data.date),
        author: data.author,
    })
}
const latest = posts.sort((a, b) => b.date - a.date).slice(0, 5)

for (const post of latest) {
    feed.addItem({
        title: post.title,
        id: post.url,
        link: post.url,
        description: post.description,
        content: md.render(post.content),
        date: post.date,
        author: getAuthors(post.author),
        category: getCategories(post.tags),
    })
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, feed.rss2(), 'utf8')

console.log(`RSS written to ${outFile}`)