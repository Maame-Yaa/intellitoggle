<template >
  <section class="bg-[#EDECF6]  ">
    <div class=" container w-full max-w-[380px]  rounded-lg bg-[linear-gradient(180deg,#42389E_0%,#1A1C3D_100%)] text-white shadow-lg p-6 sm:hidden">
    <div class="flex items-center justify-between mb-4">
      <span class="flex items-center text-[14px] font-semibold bg-[#F9A71E] px-3 py-1 rounded-lg">
        <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7 7 7-7-7-7-7 7z" />
        </svg>
        Popular
      </span>
      <span class="text-sm text-gray-300">Billed annually</span>
    </div>

    <h3 class="text-xl font-bold mb-2">Enhance Plan</h3>

    <div class="mb-6">
      <p class="text-[32px] font-semibold">$149 <span class="text-sm">/month</span></p>
    </div>

    <ul class="space-y-2 mb-6">
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Multi-environment support (Dev / Staging / Prod)
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Unlimited feature flags and projects
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Advanced targeting rules with custom attributes
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Environment-specific flags
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Real-time streaming updates (WebSocket / gRPC)
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Analytics hooks (flag usage tracking)
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Built-in A/B testing / experimentation dashboard
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        Audit logs (90-day retention + export in CSV/JSON)
      </li>
      <li class="flex items-center text-sm">
        <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7" />
        </svg>
        API access with multiple keys & custom roles
      </li>
    </ul>

    <button
      class="w-full rounded-[8px] bg-[#F9A71E] px-4 py-2 text-[14px] font-semibold text-[#1A1C3D] hover:bg-[#fbb13a]"
    >
      Subscribe
    </button>
  </div>

    <div class="container flex flex-col items-center gap-[48px] py-[120px]">
      <h2
        class="hidden sm:block text-center font-bold leading-normal text-[40px]
               bg-[linear-gradient(180deg,#42389E_0%,#1A1C3D_100%)]
               bg-clip-text text-transparent"
      >
        Plans Built For Every Stage Of Growth
      </h2>

      <div class="w-full max-w-[756px] flex flex-col items-center gap-4">
        <div
          class="hidden sm:block w-[330px] rounded-2xl
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
          to="#"
          class=" hidden sm:block rounded-md bg-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#1A1C3D] shadow-sm hover:bg-[#f8b23a] w-[330px] text-center"
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

          <div class="flex flex flex-col md:flex-row items-center gap-3 md:justify-end">
            <NuxtLink
              to="#"
              class="w-full md:w-auto rounded-[8px] bg-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#1A1C3D] hover:bg-[#f8b23a]"
            >
              Get Started
            </NuxtLink>
            <NuxtLink
              to="#"
              class="w-full md:w-auto rounded-[8px] border border-[#F9A71E] px-5 py-2 text-[14px] font-semibold text-[#F9A71E] hover:bg-[#F9A71E]/10"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
