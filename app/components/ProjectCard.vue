<template>
  <a
    :href="link"
    target="_blank"
    class="block border border-zinc-800 p-4 rounded-xl hover:border-orange-400  hover:bg-orange-500/5 
       transition"
  >
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="text-zinc-400 text-sm mt-1">{{ description }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>