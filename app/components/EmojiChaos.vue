<template>
  <div
    ref="container"
    class="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80"
  >
    <button
      type="button"
      class="absolute inset-0 flex items-center justify-center text-center"
      @click="spawnEmoji"
    >
      <div class="pointer-events-none space-y-3 px-6">
        <h2 class="text-2xl font-semibold text-zinc-100">
          Click to cause chaos
        </h2>
      </div>
    </button>

    <span
      v-for="item in emojis"
      :key="item.id"
      class="pointer-events-none absolute select-none text-3xl will-change-transform animate-fall"
      :style="{
        left: item.x + 'px',
        top: '-20px',
        animationDuration: item.duration + 'ms',
        transform: `rotate(${item.rotation}deg)`,
      }"
    >
      {{ item.emoji }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type FallingEmoji = {
  id: number
  emoji: string
  x: number
  duration: number
  rotation: number
}

const container = ref<HTMLElement | null>(null)
const emojis = ref<FallingEmoji[]>([])

const emojiPool = ['🍕', '🦷', '🐟', '✨', '🔥', '🍄', '🫠', '👾', '🌭', '💥']

let idCounter = 0

function spawnEmoji() {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const emoji = emojiPool[Math.floor(Math.random() * emojiPool.length)]
  const x = Math.random() * Math.max(rect.width - 40, 0)
  const duration = 2200 + Math.random() * 1800
  const rotation = Math.random() * 80 - 40
  const id = idCounter++

  if(emoji == undefined){
    return
  }
  emojis.value.push({
    id,
    emoji,
    x,
    duration,
    rotation
  })

  window.setTimeout(() => {
    emojis.value = emojis.value.filter(item => item.id !== id)
  }, duration)
}
</script>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  100% {
    transform: translateY(460px) rotate(180deg);
    opacity: 0;
  }
}

.animate-fall {
  animation-name: fall;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
</style>