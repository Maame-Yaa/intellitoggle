<template>
  <header class="bg-[#42389E]">
    <div class="mx-auto max-w-[1920px] sm:px-[120px] px-[30px] py-[40px]">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 justify-self-start">
          <img
            src="/solid-icon-white.svg"
            alt="IntelliToggle"
            style="width:54.5px;height:50.8px"
          />
          <span class="text-white font-bold text-[16px] md:text-[24px] font-['Merriweather Sans'] leading-none">
            IntelliToggle
          </span>
        </NuxtLink>

        <nav class="lg:flex items-center gap-10 justify-self-center hidden">
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
          class="lg:flex hidden justify-self-end flex items-center justify-center gap-[10px] px-[24px] py-[12px]
                 rounded-[8px] bg-[#F9A71E] text-[#1A1C3D]
                 text-[24px] font-semibold font-['Inter'] leading-none
                 shadow-[0_0_10px_rgba(0,0,0,0.05)] hover:bg-[#e49516] transition"
        >
          Start Sandbox
        </NuxtLink>

        <button @click="toggleMenu" class="lg:hidden flex items-center justify-self-end text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="showMenu" class="lg:hidden flex flex-col items-center bg-[#42389E] text-white py-5">
      <NuxtLink to="/" class="py-2 text-[20px] font-['DM Sans']">Home</NuxtLink>
      <NuxtLink to="/about" class="py-2 text-[20px] font-['DM Sans']">About</NuxtLink>
      <NuxtLink to="/#pricing" class="py-2 text-[20px] font-['DM Sans']">Pricing</NuxtLink>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
