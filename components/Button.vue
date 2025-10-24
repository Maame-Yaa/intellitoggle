<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium shadow-sm ring-1 ring-black/5 transition
           focus:outline-none focus:ring-2 focus:ring-amber-500
           text-white bg-amber-500 hover:bg-amber-600"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>()
</script>
