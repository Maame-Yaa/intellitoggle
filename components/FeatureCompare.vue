<template>
  <section class="py-[120px]">
    <div class="container flex flex-col items-center gap-8">
      <h2 class="text-center text-[34px] md:text-[40px] font-bold text-[#1A1C3D]">
        Dart-Powered Feature Flag
      </h2>
      <div class="text-center space-y-2 max-w-3xl">
        <h3 class="text-xl md:text-2xl font-semibold text-[#1A1C3D]">
          Not Another Generic Feature Flag Tool
        </h3>
        <p class="text-slate-600">
          Most tools are built for every language, which means extra layers and
          slower toggles. IntelliToggle is built in Dart, for Dart — so it’s
          faster, safer, and built for your stack.
        </p>
      </div>
      <div class="w-full overflow-x-auto">
        <table
          class="w-[880px] md:w-full min-w-[880px] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
        >
          <thead>
            <tr
              class="text-white text-left text-sm md:text-base"
              :class="gradientHead"
            >
              <th class="px-6 py-4 rounded-tl-2xl">Features</th>
              <th class="px-6 py-4 text-center">IntelliToggle</th>
              <th class="px-6 py-4 text-center rounded-tr-2xl">
                Other Feature Flag
              </th>
            </tr>
          </thead>
          <tbody class="bg-[#EEF0F7]">
            <tr
              v-for="(row, i) in rows"
              :key="i"
              class="border-t border-black/5 text-[#1A1C3D] text-sm md:text-base"
            >
              <td class="px-6 py-4">{{ row.feature }}</td>
              <td class="px-6 py-4 text-center">
                <span v-if="row.our" class="text-[#1A1C3D]">✓</span>
                <span v-else class="opacity-50">—</span>
              </td>
              <td class="px-6 py-4 text-center">
                <span v-if="row.other" class="text-[#1A1C3D]">✓</span>
                <span v-else class="text-[#1A1C3D]">✕</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 flex items-center gap-2">
        <span class="h-2 w-8 rounded-full bg-[#1A1C3D]/80"></span>
        <span class="h-2 w-2 rounded-full bg-[#1A1C3D]/30"></span>
        <span class="h-2 w-2 rounded-full bg-[#1A1C3D]/30"></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const gradientHead =
  "bg-[linear-gradient(180deg,_#42389E_0%,_#1A1C3D_100%)]";

const rows = [
  { feature: "Dart-native SDK & server", our: true, other: false },
  { feature: "End-to-end type safety", our: true, other: false },
  { feature: "AI-assisted roll-outs & cleanup", our: true, other: false },
  { feature: "A/B testing built-in", our: true, other: false },
  { feature: "Dart-Powered SDKs", our: true, other: false },
];
</script>
