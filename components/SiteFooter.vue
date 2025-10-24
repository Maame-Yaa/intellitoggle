<template>
  <footer class="bg-[#ECEBF5]">
    <div class="container py-16 md:py-20">
      <div class="grid gap-10 md:gap-8 md:grid-cols-12 items-start">
        <div class="md:col-span-4">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/solid-icon-purple.svg" alt="IntelliToggle" class="h-8 w-auto" />
            <span class="sr-only">IntelliToggle</span>
          </NuxtLink>

          <p class="mt-4 max-w-xs text-slate-600">
            IntelliToggle is built by AORTEM, a company focused on powering scalable,
            multi-platform developer tools.
          </p>
          <NuxtLink to="#" class="flex items-center gap-3">
            <img src="/github.svg" alt="Github" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <div class="md:col-span-3 order-2 md:order-none">
          <h3 class="mb-4 text-sm font-semibold text-slate-700">Resources</h3>
          <ul class="space-y-3 text-slate-600">
            <li><NuxtLink to="/why-intellitoggle" class="hover:text-slate-900">Why IntelliToggle Is Different</NuxtLink></li>
            <li><NuxtLink to="/support" class="hover:text-slate-900">Customer Support</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-slate-900">Terms &amp; Conditions</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-slate-900">Privacy Policy</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-3 order-3 md:order-none">
          <h3 class="mb-4 text-sm font-semibold text-slate-700">Company</h3>
          <ul class="space-y-3 text-slate-600">
            <li><NuxtLink to="/#pricing" class="hover:text-slate-900">Pricing</NuxtLink></li>
            <li><NuxtLink to="/docs" class="hover:text-slate-900">Documentation</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-slate-900">About Us</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-2 order-1 md:order-none">
          <h3 class="mb-4 text-sm font-semibold text-slate-700">Subscribe to Newsletter</h3>

          <form class="flex gap-2 md:w-full w-[min(100%,28rem)]" @submit.prevent>
            <input
              type="email"
              class="input"
              placeholder="Enter email address"
              aria-label="Enter email address"
              required
            />
            <button
              type="submit"
              class="btn-gradient bg-gradient-to-b from-[#42389E] to-[#0F1026]"
            >
              <span class="px-2">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
