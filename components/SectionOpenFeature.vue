<template>
  <section class="bg-[#EDECF6] p-[120px]">
    <div
      class="container flex justify-between items-center h-[618px] rounded-[8px] py-[120px]"
    >
      <div
        class="flex justify-center items-center w-[830px] h-[618px] bg-white rounded-[12px]
               border border-[#42389E]/40 shadow-[0_0_10px_10px_rgba(0,0,0,0.05)]"
        style="padding: 77px 71px;"
      >
        <img
          src="/openfeature2.png"
          alt="OpenFeature Logo"
          width="362"
          height="183"
          class="object-contain"
        />
      </div>

      <div class="max-w-[575px]">
        <h3
          class="text-[32px] font-semibold leading-[1.25] text-[#0E121B]"
          style="font-family: var(--font-inter, ui-sans-serif, system-ui);"
        >
          Seamless Feature Management with
          <span class="whitespace-nowrap">OpenFeature</span>
        </h3>

        <p class="mt-3 text-[16px] leading-[1.6] text-[#4B5563]">
          Aorten now integrates with OpenFeature to provide developers with a
          powerful, standardized approach to feature flagging and dynamic
          configuration. Ship features faster, test safely, and optimize user
          experiences effortlessly.
        </p>

        <NuxtLink
          to="/learn-more"
          class="inline-flex items-center gap-2 mt-6 rounded-[8px]
                 bg-[#F9A71E] px-5 py-2 text-[#1A1C3D] font-semibold
                 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#f7b63b] transition"
        >
          Learn More
          <span aria-hidden>→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
