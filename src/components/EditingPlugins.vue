<script setup>
const platforms = [
  { name: 'Premiere Pro', icon: 'Pr', accent: 'from-purple-500 to-violet-700' },
  { name: 'After Effects', icon: 'Ae', accent: 'from-indigo-500 to-purple-700' },
  { name: 'DaVinci Resolve', icon: 'Dv', accent: 'from-slate-500 to-slate-700' },
  { name: 'Final Cut Pro', icon: 'Fc', accent: 'from-slate-700 to-black' },
  { name: 'CapCut', icon: 'Cc', accent: 'from-cyan-500 to-blue-600' },
  { name: 'Photoshop', icon: 'Ps', accent: 'from-blue-600 to-blue-900' },
]

const previews = [
  { gradient: 'from-rose-500 to-orange-400', emoji: '🌅' },
  { gradient: 'from-violet-500 to-fuchsia-500', emoji: '🌃' },
  { gradient: 'from-emerald-500 to-teal-500', emoji: '🌿' },
  { gradient: 'from-amber-500 to-rose-500', emoji: '🔥' },
  { gradient: 'from-cyan-500 to-blue-500', emoji: '🌊' },
  { gradient: 'from-purple-500 to-pink-500', emoji: '💜' },
  { gradient: 'from-yellow-400 to-orange-500', emoji: '☀️' },
  { gradient: 'from-slate-700 to-slate-900', emoji: '🌑' },
  { gradient: 'from-pink-500 to-rose-500', emoji: '🌸' },
]
</script>

<template>
  <section class="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div class="absolute inset-0 bg-grid opacity-[0.06]"></div>
    <div class="pointer-events-none absolute -top-32 left-1/3 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-[42rem] rounded-full bg-purple-600/30 blur-3xl"></div>

    <div class="container-page relative">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div v-reveal>
          <span class="eyebrow-dark">AI Editing Plugins</span>
          <h2 class="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Access AI tools <span class="text-brand-400">inside</span> your editing software
          </h2>
          <p class="mt-5 text-lg text-slate-300">
            No need to open a browser window. The plugins open inside of your favorite editing software,
            allowing you to generate AI creations and instantly add them to any project.
          </p>

          <div class="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3">
            <div
              v-for="p in platforms"
              :key="p.name"
              class="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/10"
            >
              <span :class="['grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg font-display text-sm font-extrabold text-white shadow-md bg-gradient-to-br', p.accent]">
                {{ p.icon }}
              </span>
              <span class="text-sm font-semibold">{{ p.name }}</span>
            </div>
          </div>

          <a href="#pricing" class="btn-primary mt-10">
            Try the Plugins Now
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div v-reveal="{ delay: 150 }" class="relative">
          <div class="absolute -inset-10 rounded-3xl bg-gradient-to-br from-brand-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

          <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl tilt">
            <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div class="flex gap-1.5">
                <span class="h-3 w-3 rounded-full bg-red-500"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span class="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <div class="ml-3 flex items-center gap-2 text-xs text-slate-400">
                <span class="grid h-5 w-5 place-items-center rounded bg-purple-600 font-bold text-white">Pr</span>
                Prompt Edit Plugin — Premiere Pro
              </div>
              <div class="ml-auto flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                <span class="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                Connected
              </div>
            </div>

            <div class="flex items-center justify-between border-b border-white/5 px-4 py-3 text-xs text-slate-400">
              <div class="flex gap-1">
                <span class="rounded-md bg-white/10 px-2 py-1 font-semibold text-white">All</span>
                <span class="rounded-md px-2 py-1">Image</span>
                <span class="rounded-md px-2 py-1">Video</span>
                <span class="rounded-md px-2 py-1">Audio</span>
              </div>
              <span>9 of 1,240</span>
            </div>

            <div class="grid grid-cols-3 gap-2 p-4">
              <div
                v-for="(p, i) in previews"
                :key="i"
                :class="['group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br transition hover:scale-[1.03]', p.gradient]"
              >
                <div class="grid h-full place-items-center text-2xl opacity-90">{{ p.emoji }}</div>
                <div class="absolute inset-x-0 bottom-0 translate-y-full bg-black/50 px-2 py-1 text-[10px] font-semibold opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  + Drop to Timeline
                </div>
              </div>
            </div>

            <div class="border-t border-white/10 p-4">
              <div class="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span class="uppercase tracking-wider">Generating</span>
                <span class="font-mono">1 credit</span>
              </div>
              <div class="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <div class="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-brand-500 to-purple-500">
                  <span class="text-base">✨</span>
                </div>
                <div class="flex-1">
                  <div class="text-xs font-semibold text-white">cinematic sunset desert shot, 35mm</div>
                  <div class="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div class="h-full w-3/4 animate-pulse-slow rounded-full bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400"></div>
                  </div>
                </div>
                <span class="text-xs text-slate-400">76%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
