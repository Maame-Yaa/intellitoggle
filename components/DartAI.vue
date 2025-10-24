<template>
  <section
    class="relative isolate overflow-hidden text-white"
  >
    <div
      class="absolute inset-0 -z-20 bg-center bg-cover"
      :style="{ backgroundImage: `url('/dart-ai-bg1.jpg')` }"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#42389E]/80 to-[#1A1C3D]/80" />

    <div class="container py-16 md:py-24">
      <div class="mb-4 flex justify-center">
        <span class="rounded-full bg-amber-500/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
          Coming Soon
        </span>
      </div>

      <h2 class="text-center text-2xl md:text-3xl font-bold tracking-tight">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <DartAICard
          icon="▶"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          copy="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
        />
        <DartAICard
          icon="🏠"
          title="SmartRamp AI (AI-Driven Rollout Optimization)"
          copy="Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics."
        />
        <DartAICard
          icon="🎯"
          title="ExplainFlags AI (LLM Root-Cause + Insights)"
          copy="Understand issues instantly with AI-generated plain-language insights tied to your flags."
        />
        <DartAICard
          icon="📈"
          title="AutoSegment AI (Behavioral Segmentation)"
          copy="Target the right users automatically. AI builds segments from live behavior—no manual rules."
        />
      </div>

      <div class="mt-12 flex flex-col items-center gap-4">
        <p class="text-lg font-semibold text-amber-500">Enterprise Only</p>

        <div
          class="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm"
        >
          <p class="text-center sm:text-left text-white text-sm sm:text-base">
            <span class="text-amber-400 font-semibold">Be The First</span>
            To Try Out Our New AI Features.
          </p>

          <div class="flex w-full sm:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              class="w-full sm:w-64 rounded-lg bg-transparent border border-white/25 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <button
              class="rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-2"
            >
              Join AI Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

