<template>
  <section class="relative isolate overflow-hidden text-white p-[120px]">
    <div
      class="absolute inset-0 -z-20 bg-center bg-cover"
      :style="{ backgroundImage: `url('/dart-ai-bg1.jpg')` }"
    />
    <div class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(66,56,158,.80)_0%,rgba(26,28,61,.80)_100%)]" />

    <div class="mx-auto w-full max-w-[1920px] px-[120px]">
      <div class="mb-[24px] flex justify-center">
        <span
          class="rounded-full bg-[#F9A71E] px-4 py-2 text-[16px] font-semibold text-[#1A1C3D] shadow"
        >
          Coming Soon
        </span>
      </div>

      <h2
        class="text-center font-bold text-[40px] leading-normal text-white"
      >
        DartCodeAI That Actually Changes Flagging
      </h2>

      <div
        class="mx-auto mt-[48px] grid max-w-[1680px]
               lg:grid-cols-[660px_660px] lg:justify-between lg:gap-y-[32px]
               md:grid-cols-2 md:gap-[32px]
               grid-cols-1 gap-[24px] justify-center"
      >
        <DartAICard
          icon="▶"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          copy="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
          class="w-full max-w-[660px]"
        />
        <DartAICard
          icon="🏠"
          title="SmartRamp AI (AI-Driven Rollout Optimization)"
          copy="Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics."
          class="w-full max-w-[660px]"
        />
        <DartAICard
          icon="🎯"
          title="ExplainFlags AI (LLM Root-Cause + Insights)"
          copy="Understand issues instantly with AI-generated, plain-language insights tied to your flags."
          class="w-full max-w-[660px]"
        />
        <DartAICard
          icon="📈"
          title="AutoSegment AI (Behavioral Segmentation)"
          copy="Target the right users automatically. AI builds segments from live behavior—no manual rules."
          class="w-full max-w-[660px]"
        />
      </div>

      <div class="my-[48px] flex flex-col items-center gap-[16px]">
        <p class="text-center text-[32px] font-semibold text-[#F9A71E]">
          Enterprise Only
        </p>

        <div
          class="w-full max-w-[1440px] rounded-[12px]
                 border border-[#EDECF6] bg-[rgba(255,255,255,0.02)]
                 px-[33px] py-[28px] flex items-center justify-between"
        >
          <p class="text-white text-[16px] md:text-[18px]">
            <span class="text-[#F9A71E] font-semibold">Be The First</span>
            To Try Out Our New AI Features.
          </p>

          <div class="flex items-center gap-[33px]">
            <input
              type="email"
              placeholder="Enter email address"
              class="w-[544px] max-w-[60vw] rounded-[8px]
                     bg-transparent border border-white/25
                     px-3 py-2 text-[14px] placeholder-white/70
                     focus:outline-none focus:ring-1 focus:ring-[#F9A71E]"
            />
            <button
              class="rounded-[8px] bg-[#F9A71E] px-4 py-2
                     text-[14px] font-semibold text-[#1A1C3D]
                     hover:bg-[#fbb13a]"
            >
              Join AI Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
