<template>
  <section class="relative isolate overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#42389E_0%,#332FA0_45%,#2D2FA1_60%,#1F1F7A_100%)]"></div>
    <div class="container pt-[154px] pb-[120px] text-center text-white">
      <h1 class="mx-auto max-w-[1040px] font-bold leading-tight text-[44px] md:text-[64px]">
        <span class="block">The First
          <span
            class="align-[0.12em] rounded-[12px] bg-[#F9A71E] p-2 text-[#1A1C3D]"
          >
            Dart-Native
           </span>
          Feature Flag
        </span>
        <span class="block mt-2">With DartCodeAI</span>
      </h1>
      <p class="mx-auto mt-4 max-w-[920px] text-white/90 text-[20px] md:text-[24px] font-semibold">
        Feature flags built for Dart, ship faster, roll back
        safely, and scale with AI-powered delivery
      <br></br>
      <span class="mx-auto mt-8 max-w-[920px] text-[#F9A71E] text-[28px] md:text-[32px] font-bold">
        Starting at just $1/month
      </span>
      </p>
      <div class="mt-8">
        <p class="text-white/80 text-sm md:text-base">
          Valid till 15th September,2025
        </p>

        <div class="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/get-access"
            class="rounded-[12px] bg-[#F9A71E] text-[#1A1C3D] font-semibold px-6 py-3 shadow-[0_10px_10px_rgba(0,0,0,0.05)]"
          >
            Get Access
          </NuxtLink>

          <NuxtLink
            to="/early-access"
            class="rounded-[12px] border border-[#F9A71E] px-6 py-3 font-semibold
                   text-[#F9A71E] hover:bg-[#F9A71E]/10"
          >
            Join AI Early Access
          </NuxtLink>
        </div>
      </div>
      <div
        class="mx-auto mt-[141px] w-full max-w-[1440px] h-[1024px]
               rounded-2xl bg-white shadow-2xl ring-1 ring-black/10
               flex items-center justify-center"
      >
        <img
          src="/group-hero.svg"
          alt="Demo player"
          class="w-[156px] h-[135px] object-contain"
          loading="eager"
        />
      </div>
    </div>
  </section>
</template>