<template>
  <section class="bg-[#EDECF6]">
    <div class="container flex flex-col items-center justify-center gap-12 py-16 md:py-24">
      <!-- Heading -->
      <h2 class="text-center text-2xl md:text-3xl font-semibold text-slate-900">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Price pill + sub button -->
      <div class="flex flex-col items-center gap-4">
        <div
          class="w-[300px] md:w-[330px] rounded-2xl bg-gradient-to-b from-[#42389E] to-[#1A1C3D] px-6 py-5 text-center text-white shadow-lg"
        >
          <p class="text-xs/4 opacity-80">Prices starts at</p>
          <div class="mt-1 flex items-end justify-center gap-1">
            <span class="text-4xl font-bold tracking-tight">$10</span>
            <span class="pb-1 text-sm opacity-90">/month</span>
          </div>
        </div>

        <NuxtLink
          to="/pricing"
          class="btn bg-amber-500 text-white hover:bg-amber-600 rounded-md px-5 py-2 shadow-sm"
        >
          View Subscription Details
        </NuxtLink>
      </div>

      <!-- White promo bar -->
      <div
        class="w-full rounded-xl border border-black/5 bg-white px-6 py-6 shadow-[0_10px_30px_rgba(0,0,0,.08)] md:px-10"
      >
        <div class="grid items-center gap-5 md:grid-cols-[1fr_auto_auto]">
          <!-- Left copy -->
          <div>
            <h3 class="text-base md:text-lg font-semibold text-slate-900">
              Start Your 7-Day Free Sandbox Plan
            </h3>
            <p class="mt-1 text-xs md:text-sm text-slate-500">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>

          <!-- CTA buttons -->
          <div class="flex items-center gap-3 md:justify-end">
            <NuxtLink to="/sandbox" class="btn btn-primary md:px-5 md:py-2">
              Get Started
            </NuxtLink>
            <NuxtLink to="/learn-more" class="btn btn-outline md:px-5 md:py-2">
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
