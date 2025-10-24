<template>
  <div class="min-h-dvh flex flex-col bg-white text-slate-900">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
