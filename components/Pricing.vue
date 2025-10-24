<template>
  <section class="bg-[#EDECF6]">
    <div class="container flex flex-col items-center gap-[48px] py-[120px]">
      <h2
        class="text-center font-bold leading-normal text-[40px]
               bg-[linear-gradient(180deg,#42389E_0%,#1A1C3D_100%)]
               bg-clip-text text-transparent"
      >
        Plans Built For Every Stage Of Growth
      </h2>

      <div class="w-full max-w-[756px] flex flex-col items-center gap-4">
        <div
          class="w-[330px] rounded-2xl
                 bg-[linear-gradient(180deg,#42389E_0%,#1A1C3D_100%)]
                 px-6 py-5 text-center text-white shadow-lg"
        >
          <p class="text-[12px]/4 opacity-80">Prices starts at</p>
          <div class="mt-1 flex items-end justify-center gap-1">
            <span class="font-bold tracking-tight text-[40px]">$10</span>
            <span class="pb-1 text-[14px] opacity-90">/month</span>
          </div>
        </div>

        <NuxtLink
          to="/pricing"
          class="rounded-md bg-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#1A1C3D] shadow-sm hover:bg-[#f8b23a] w-[330px] text-center"
        >
          View Subscription Details
        </NuxtLink>
      </div>

      <div class="mt-[32px] w-full rounded-[12px] border-[0.5px] border-[#EDECF6] bg-white px-8 py-16 shadow-[0_10px_10px_rgba(0,0,0,0.05)]">
        <div class="grid items-center gap-5 md:grid-cols-[1fr_auto_auto]">
          <div>
            <h3 class="font-semibold text-[#1A1C3D] text-[18px] md:text-[32px]">
              Start Your 7-Day Free Sandbox Plan
            </h3>
            <p class="mt-1 text-[12px] md:text-[14px] text-slate-500">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>

          <div class="flex items-center gap-3 md:justify-end">
            <NuxtLink
              to="/sandbox"
              class="rounded-[8px] bg-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#1A1C3D] hover:bg-[#f8b23a]"
            >
              Get Started
            </NuxtLink>
            <NuxtLink
              to="/learn-more"
              class="rounded-[8px] border border-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#F9A71E] hover:bg-[#F9A71E]/10"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
