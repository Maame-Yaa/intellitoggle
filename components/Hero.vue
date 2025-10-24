<template>
      <section class="relative isolate overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-700 to-violet-700"></div>
    <div
      class="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-56 w-[140%] -translate-x-1/2 -rotate-6 bg-white">
    </div>
    <div class="container py-16 md:py-24 text-center text-white">
      <p class="text-base/7 opacity-90">
        The First
        <span class="mx-2 rounded-md bg-amber-400 px-3 py-1 font-semibold text-slate-900">Dart-Native</span>
        Feature Flag
      </p>
      <h1 class="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
        With <span class="rounded-md bg-amber-400 px-3 text-slate-900">DartCodeAI</span>
      </h1>
      <p class="mt-4 max-w-3xl mx-auto text-lg text-white/90">
        Feature flags built for Dart. Ship faster, roll back safely, and scale with AI-powered delivery.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink to="/sandbox" class="btn btn-primary">Start Sandbox</NuxtLink>
        <NuxtLink to="/early-access" class="btn btn-outline">Join Early Access</NuxtLink>
      </div>
      <p class="mt-4 text-white/80">Starting at just $10/month.</p>
      <div class="mt-12 mx-auto max-w-5xl rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/10">
        <img src="/group-hero.svg" alt="Product preview" class="mx-auto w-full max-w-[860px] rounded-xl" />
      </div>
    </div>
  </section>
</template>