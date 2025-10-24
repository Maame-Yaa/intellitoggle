<template>
  <section id="what-is" class="container py-24">
    <h2 class="text-center text-2xl md:text-3xl font-semibold text-slate-800">
      What Is IntelliToggle
    </h2>
    <div class="mt-12 grid gap-12 md:grid-cols-2 items-center">
      <div class="max-w-xl">
        <h3 class="text-xl md:text-2xl font-semibold text-slate-900">
          Your AI Dart App’s Control Panel For<br class="hidden md:block" />
          Feature Releases
        </h3>

        <p class="mt-4 text-slate-600">
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn
          features on/off instantly in your application without redeploying
          code. It allows you control roll-outs, run experiments, and fix bugs
          faster.
        </p>

        <h4 class="mt-6 font-semibold text-slate-900">Benefits</h4>
        <ul class="mt-2 space-y-2 text-slate-700 list-disc pl-5">
          <li>Toggle new features without app updates</li>
          <li>Roll out to specific users or regions</li>
          <li>Instantly rollback when needed</li>
        </ul>
      </div>

      <div class="relative">
        <div
          class="rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/10"
        >
          <img
            src="/what-is-intellitoggle-frame.png"
            alt="IntelliToggle dashboard"
            class="w-full rounded-xl"
          />
        </div>
        <div
          class="pointer-events-none absolute inset-x-8 -bottom-6 h-12 rounded-full bg-slate-900/10 blur-2xl"
        />
      </div>
    </div>
  </section>
</template>
