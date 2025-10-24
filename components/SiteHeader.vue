<template>
  <header class="bg-white shadow-sm">
    <div class="container h-16 grid grid-cols-3 items-center">
      <NuxtLink to="/" class="justify-self-start font-semibold text-xl tracking-tight">
        IntelliToggle
      </NuxtLink>
      <nav class="hidden md:flex justify-self-center items-center gap-8 text-slate-600 bg-transparent">
        <NuxtLink to="/#features" class="hover:text-slate-900 transition">Features</NuxtLink>
        <NuxtLink to="/#pricing"  class="hover:text-slate-900 transition">Pricing</NuxtLink>
      </nav>
      <div class="justify-self-end">
        <NuxtLink to="/sandbox"
          class="inline-flex items-center rounded-lg bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600 transition">
          Start Sandbox
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
