<template>
  <article class="flex flex-col">
    <div class="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-900/10">
      <img
        :src="img"
        :alt="imgAlt"
        class="w-full rounded-xl ring-1 ring-slate-200"
        loading="lazy"
      />
    </div>

    <h3 class="mt-4 text-base font-semibold text-slate-900">
      {{ title }}
    </h3>
    <p class="mt-1 text-sm text-slate-600">
      {{ description }}
    </p>

    <div class="mt-3">
      <NuxtLink :to="href" class="btn-doc">
        View Documentation
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  imgAlt?: string
  title: string
  description: string
  href: string
}>()
</script>
