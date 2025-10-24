<template>
  <div
    class="flex flex-col items-center gap-[32px]
           rounded-[12px] border border-[rgba(255,255,255,0.20)]
           bg-[rgba(255,255,255,0.02)] p-6"
  >
    <div
      class="inline-flex h-10 w-10 items-center justify-center
             rounded-[10px] bg-[rgba(255,255,255,0.12)]"
    >
      <span class="text-lg leading-none">{{ icon }}</span>
    </div>

    <div class="w-full text-center">
      <h3 class="text-[18px] font-semibold leading-snug text-white">
        {{ title }}
      </h3>
      <p class="mt-2 text-[14px] leading-snug text-white/85">
        {{ copy }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  copy: string
}>()
</script>
