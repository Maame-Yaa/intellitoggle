<template>
  <section id="what-is" class="container pt-[240px] pb-[120px]">
    <h2
      class="text-center text-[40px] font-bold leading-[1.2] text-[#0E121B]"
      style="font-family: var(--font-satoshi, ui-sans-serif, system-ui);"
    >
      What Is IntelliToggle
    </h2>

    <div class="mt-[48px] grid items-center gap-12 xl:grid-cols-[1fr_830px]">
      <div class="max-w-[560px]">
        <h3
          class="text-[32px] font-semibold leading-[1.25] text-[#0E121B]"
          style="font-family: var(--font-inter, ui-sans-serif, system-ui);"
        >
          Your AI Dart App’s Control Panel For<br class="hidden md:block" />
          Feature Releases
        </h3>

        <p class="mt-4 text-[16px] leading-[1.7] text-slate-600">
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn
          features on/off instantly in your application without redeploying
          code. It allows you control roll-outs, run experiments, and fix bugs
          faster.
        </p>

        <h4 class="mt-6 text-[16px] font-semibold text-[#0E121B]">Benefits</h4>
        <ul class="mt-2 space-y-2 list-disc pl-5 text-[15px] text-slate-700">
          <li>Toggle new features without app updates</li>
          <li>Roll out to specific users or regions</li>
          <li>Instantly rollback when needed</li>
        </ul>
      </div>

      <div class="mx-auto">
        <div
          class="rounded-2xl bg-white p-0 ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        >
          <img
            src="/what-is-intellitoggle-frame.png"
            alt="IntelliToggle dashboard"
            class="h-full w-full rounded-[14px] object-contain"
            width="830"
            height="618"
          />
        </div>
      </div>
    </div>
  </section>
</template>
