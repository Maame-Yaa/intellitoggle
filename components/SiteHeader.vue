<template>
  <header class="bg-[#42389E]">
    <div class="mx-auto max-w-[1920px] px-[120px] py-[40px]">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/solid-icon-white.svg"
            alt="IntelliToggle"
            class="w-[54.5px] h-[50.8px]"
          />
          <span class="text-white font-semibold text-xl">IntelliToggle</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-10 text-white">
          <NuxtLink to="/" class="hover:text-white/90 transition">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-white/90 transition">About</NuxtLink>
          <NuxtLink to="/#pricing" class="hover:text-white/90 transition">Pricing</NuxtLink>
        </nav>

        <div>
          <NuxtLink
            to="/sandbox"
            class="inline-flex items-center rounded-lg bg-[#FDBA00] px-5 py-2.5 font-semibold text-[#1A1C3D] shadow-sm hover:bg-[#e0a800] transition"
          >
            Start Sandbox
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>