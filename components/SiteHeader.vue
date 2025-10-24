<template>
  <header class="bg-[#42389E]">
    <div class="mx-auto max-w-[1920px] px-[120px] py-[40px]">
      <div class="grid grid-cols-[1fr_auto_1fr] items-center">
        <NuxtLink to="/" class="flex items-center gap-3 justify-self-start">
          <img
            src="/solid-icon-white.svg"
            alt="IntelliToggle"
            style="width:54.5px;height:50.8px"
          />
          <span class="text-white font-bold text-[24px] font-['Merriweather Sans'] leading-none">
            IntelliToggle
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-10 justify-self-center">
          <NuxtLink to="/" class="text-white font-['DM Sans'] font-bold text-[20px] leading-none hover:text-white/80">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="text-white font-['DM Sans'] text-[20px] leading-none hover:text-white/80">
            About
          </NuxtLink>
          <NuxtLink to="/#pricing" class="text-white font-['DM Sans'] text-[20px] leading-none hover:text-white/80">
            Pricing
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/sandbox"
          class="justify-self-end flex items-center justify-center gap-[10px] px-[24px] py-[12px]
                 rounded-[8px] bg-[#F9A71E] text-[#1A1C3D]
                 text-[24px] font-semibold font-['Inter'] leading-none
                 shadow-[0_0_10px_rgba(0,0,0,0.05)] hover:bg-[#e49516] transition"
        >
          Start Sandbox
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
