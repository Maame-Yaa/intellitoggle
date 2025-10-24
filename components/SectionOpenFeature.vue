<template>
  <section class="bg-[#EDECF6]">
    <div class="container py-28">
      <div class="grid items-center gap-14 md:grid-cols-2">
        <div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/10">
          <img
            src="/openfeature2.png"
            alt="OpenFeature logo"
            class="mx-auto w-full max-w-[520px] rounded-lg"
          />
        </div>

        <div>
          <h3 class="text-xl font-semibold text-slate-900">
            Seamless Feature Management with <span class="whitespace-nowrap">OpenFeature</span>
          </h3>
          <p class="mt-3 max-w-prose text-slate-600">
            Aorten now integrates with OpenFeature to provide developers with a powerful,
            standardized approach to feature flagging and dynamic configuration. Ship features
            faster, test safely, and optimize user experiences effortlessly.
          </p>

          <NuxtLink
            to="/learn-more"
            class="btn btn-primary btn-sm mt-5 inline-flex items-center gap-1"
          >
            Learn More
            <span aria-hidden>→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
