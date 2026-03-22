<template>
  <section class="space-y-10">
    <div class="space-y-3">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-100">
        Hi, I'm Sven
      </h1>
      <p class="max-w-2xl text-zinc-400">
        This is my personal homepage with stuff I do or I like
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      <NuxtLink
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :class="[
          'group rounded-2xl border p-6 min-h-[180px] transition duration-300',
          'border-white/10 hover:border-white/20',
          'hover:-translate-y-1 hover:scale-[1.02]',
          item.bg
        ]"
      >
     
        <div class="flex h-full flex-col justify-between">
          <div class="space-y-3">
            <p class="text-sm text-zinc-400">
              {{ item.kicker }}
            </p>

            <h2 class="text-2xl font-semibold text-zinc-100">
              {{ item.title }}
            </h2>

            <p class="text-sm leading-6 text-zinc-300">
              {{ item.description }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Apple/>
  </section>

</template>

<script setup lang="ts">
const items = [
  {
    title: 'Projects',
    kicker: 'Working',
    description: "A collection of stuff I've built or am currently working on",
    to: '/projects',
    bg: 'bg-cyan-900'
  },
  {
    title: 'Posts',
    kicker: 'Writing',
    description: 'A place where I share my thoughts',
    to: '/blog',
    bg: 'bg-violet-900'
  },
  {
    title: 'Tech Stack',
    kicker: 'Tools',
    description: 'Technologies I either like, feel confident using, or maybe even both',
    to: '/techstack',
    bg: 'bg-emerald-900'
  },
  {
    title: 'Other',
    kicker: 'Fun',
    description: 'A various collection of stuff that interests me',
    to: '/fun',
    bg: 'bg-pink-900'
  }
]
</script>