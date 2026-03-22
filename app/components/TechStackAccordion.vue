<template>
  <div class="mx-auto max-w-3xl space-y-4">
    <div
      v-for="(section, index) in sections"
      :key="section.title"
      class="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <button
        type="button"
        class="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
        @click="toggle(index)"
      >
        <div>
          <h2 class="text-lg font-semibold text-zinc-100">
            {{ section.title }}
          </h2>
          <p class="mt-1 text-sm text-zinc-400">
            {{ section.description }}
          </p>
        </div>

        <span
          class="ml-4 shrink-0 text-zinc-400 transition-transform duration-200"
          :class="openIndexes.includes(index) ? 'rotate-180' : ''"
        >
          ▼
        </span>
      </button>

      <transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
       <div
          v-if="openIndexes.includes(index)"
          class="border-t border-white/10 px-5 py-4"
        >
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
              v-for="item in section.items"
              :key="item.name"
              class="min-h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/10 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:from-cyan-500/15 hover:via-violet-500/15 hover:to-emerald-500/15"
            >
              <div class="flex h-full flex-col justify-between">
                <div class="text-sm font-medium text-zinc-100">
                  {{ item.name }}
                </div>

                <div
                  v-if="item.note"
                  class="mt-3 text-xs leading-5 text-zinc-300"
                >
                  {{ item.note }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type StackItem = {
  name: string
  note?: string
}

type StackSection = {
  title: string
  description: string
  items: StackItem[]
}

const sections: StackSection[] = [
  {
    title: 'Operating Systems',
    description: 'What I use day to day',
    items: [
      { name: 'NixOS', note: 'My daily driver on 3 clients' },
      { name: 'Windows', note: 'When required by work or for games' }
    ]
  },
  {
    title: 'Languages',
    description: 'Languages I like, use a lot, or feel confident with',
    items: [
      { name: 'Dotnet', note: 'My favorite OOP language' },
      { name: 'Go', note: 'Currently getting used to to expand my skills' },
      { name: 'Java', note: 'Required by my studies' }
    ]
  },

  {
    title: 'Tooling',
    description: 'Editors, terminals and assorted things',
    items: [
      { name: 'JetBrains Tooling', note: 'My Toolbox for programming languages I use daily' },
      { name: 'VSCodium', note: 'Main editor for anything that I dont use a specific IDE for' },
    ]
  }
]

const openIndexes = ref<number[]>([0])

function toggle(index: number) {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter(i => i !== index)
  } else {
    openIndexes.value.push(index)
  }
}
</script>