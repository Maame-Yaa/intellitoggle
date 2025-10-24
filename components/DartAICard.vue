<template>
  <div class="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-7 shadow-xl">
    <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
      <span class="text-lg">{{ icon }}</span>
    </div>
    <h3 class="text-lg font-semibold leading-snug">
      {{ title }}
    </h3>
    <p class="mt-2 text-white/85">
      {{ copy }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  copy: string
}>()
</script>
