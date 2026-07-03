<script setup lang="ts">
const { data: posts } = await useFetch('/api/blog')
</script>

<template>
  <section class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold text-zinc-100">Posts</h1>
      <p class="mt-2 text-zinc-400">
        Here are my posts on anything that I feel like I have something to say about.
      </p>
    </div>

    <div class="grid gap-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20"
      >
        <p class="text-sm text-zinc-500">{{ post.date }}</p>
        <h2 class="mt-1 text-xl font-semibold text-zinc-100">
          {{ post.title }}
        </h2>
        <p v-if="post.description" class="mt-2 text-zinc-300">
          {{ post.description }}
        </p>
      </NuxtLink>
    </div>
  </section>
</template>