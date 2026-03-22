<template>
  <div   ref="container"
    class="relative flex justify-center items-center">

  <button
    type="button"
    class="block flex justify-center w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-left transition hover:border-zinc-600"
    @click="nextArt"
  >
    <pre class="overflow-x-auto text-sm leading-tight text-red-600 ">{{ currentArt }}</pre>
  </button>
      <span
      v-for="chomp in chomps"
      :key="chomp.id"
      class="absolute text-lg font-bold text-red-400 pointer-events-none animate-chomp"
      :style="{
        left: chomp.x + 'px',
        top: chomp.y + 'px',
    '--rot': chomp.rot + 'deg'    
      }"
    >
      CHOMP
    </span>
  </div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const chomps = ref<
  { id: number; x: number; y: number, rot: number }[]
>([])
const container = ref<HTMLElement | null>(null)
const asciiArts = [
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   ;          ;
  :            :
  :            :
  :            :
   :          ;
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   ;          ;
   '-.         :
     }         :
   .-'         :
   :          ;
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.        ;
     }         :
     }         :
     }         :
   .-'        ;
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.        ;
     }      .-'
     }      {
     }      '-.
   .-'        ;
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.      .-'
     }      {
     }      {
     }      {
   .-'      '.
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.      .-'
     }".    {
     } }    {
     } '    {
   .-'"     '.
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.      .-'
     }"~".  {
     } } }  {
     } ' }  {
   .-'"~"   '.
   '.        :
     '-_.._-'
`,
String.raw`
         //
     .-.:|.-.
   .'   ''   '.
   '-.      .-'
     }"~"."~{
     } } } '{
     } ' } :{
   .-'"~"~"~'.
   '.        :
     '-_.._-'
`,

]

const currentIndex = ref(0)

const currentArt = computed(() => asciiArts[currentIndex.value])

function nextArt() {
  currentIndex.value = (currentIndex.value + 1) % asciiArts.length

   spawnChomp()
}
let idCounter = 0
function spawnChomp() {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()

  const x = Math.random() * rect.width
  const y = Math.random() * rect.height
const rot = Math.random() * 60 - 30
  const id = idCounter++

  chomps.value.push({ id, x, y, rot})

  setTimeout(() => {
    chomps.value = chomps.value.filter(c => c.id !== id)
  }, 600)
}
</script>

<style>
@keyframes chomp {
  0% {
    transform: rotate(var(--rot)) scale(0.5) translateY(10px);
    opacity: 0;
  }
  50% {
    transform: rotate(var(--rot)) scale(1.2) translateY(-10px);
    opacity: 1;
  }
  100% {
    transform:  rotate(var(--rot)) scale(1) translateY(-20px);
    opacity: 0;
  }
}

.animate-chomp {
  animation: chomp 0.6s ease-out forwards;
}
</style>