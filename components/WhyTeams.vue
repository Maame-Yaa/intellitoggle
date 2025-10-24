<template>
  <section class="container py-16 md:block">
    <h2 class="text-center text-3xl md:text-4xl font-semibold text-slate-900">
      Why Teams Use IntelliToggle
    </h2>

    <div
      class="mt-12 grid gap-10 md:gap-[94px] md:grid-cols-3 items-start justify-center"
    >
      <article class="text-center">
        <div
          class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100"
        >
          <img src="/safe-rollout.svg" alt="" class="h-7 w-7" />
        </div>
        <h3 class="text-slate-900 font-semibold">Safer, faster rollouts</h3>
        <p class="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
          Control feature releases in minutes, not weeks without risking production stability.
        </p>
      </article>

      <article class="text-center">
        <div
          class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100"
        >
          <img src="/ship.svg" alt="" class="h-7 w-7" />
        </div>
        <h3 class="text-slate-900 font-semibold">Confidence to ship</h3>
        <p class="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
          Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.
        </p>
      </article>

      <article class="text-center">
        <div
          class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100"
        >
          <img src="/future-ai.svg" alt="" class="h-7 w-7" />
        </div>
        <h3 class="text-slate-900 font-semibold">Future-ready with AI delivery</h3>
        <p class="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
          Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.
        </p>
      </article>
    </div>

    <div
      class="mt-10 rounded-xl border border-slate-200 bg-white/70 shadow-sm ring-1 ring-black/5 p-3 md:p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
    >
      <p class="text-slate-700 text-sm md:text-base">
        <span class="font-semibold">Read a 2-min case note:</span>
        <span class="md:ml-1">How a sample Flutter app shipped faster with IntelliToggle</span>
      </p>
      <NuxtLink
        to="/case-note"
        class="btn btn-primary self-start md:self-auto"
      >
        Read Now
      </NuxtLink>
    </div>
  </section>
</template>
