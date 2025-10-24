<template>
  <section class="container py-16 md:py-24">
    <h2 class="text-center text-2xl md:text-3xl font-semibold text-slate-900">
      Control & Power-focused
    </h2>

    <div
      class="mt-10 grid gap-10 md:gap-16 lg:gap-24 md:grid-cols-3 items-start"
    >
      <ControlCard
        img="/control-img-1.png"
        imgAlt="Connect SDK UI"
        title="Connect"
        description="Install SDK in your Dart project in 2 mins."
        href="/docs/connect"
      />

      <ControlCard
        img="/control-img-2.png"
        imgAlt="Create feature flags UI"
        title="Create Flags"
        description="Define features in IntelliToggle dashboard."
        href="/docs/create-flags"
      />

      <ControlCard
        img="/control-img-3.png"
        imgAlt="Ship & control UI"
        title="Ship & Control"
        description="Flip switches anytime, see instant results."
        href="/docs/ship-control"
      />
    </div>
  </section>
</template>

<script setup>
</script>
