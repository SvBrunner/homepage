<script setup lang="ts">
const route = useRoute()
const slug = route.path.split('/').at(-1)

const { data: post } = await useFetch(`/api/blog/${slug}`)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
</script>

<template>
  <article v-if="post" class="prose prose-invert max-w-none">
    <div class="not-prose mb-8">
      <p class="text-sm text-zinc-500">{{ post.date }}</p>
      <h1 class="text-4xl font-bold text-zinc-100">{{ post.title }}</h1>
      <p v-if="post.description" class="mt-3 text-zinc-400">
        {{ post.description }}
      </p>
    </div>

    <ContentRenderer :value="post" />
  </article>
</template>

