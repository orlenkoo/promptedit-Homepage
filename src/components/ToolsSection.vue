<script setup>
import { ref, computed } from 'vue'

const categories = [
  {
    key: 'image',
    title: 'AI Image Tools',
    description: 'What can you do with these image tools?',
    short: 'Image',
    icon: '🖼️',
    accent: 'from-rose-500 to-orange-400',
    soft: 'from-rose-50 to-orange-50',
    items: [
      { name: 'AI Clones', emoji: '🧬' },
      { name: 'Social Media Posts', emoji: '📱' },
      { name: 'Graphic Design', emoji: '🎨' },
      { name: 'Image Editing', emoji: '✏️' },
      { name: 'YouTube Thumbnails', emoji: '▶️' },
      { name: 'Online Ads', emoji: '📣' },
    ],
    spotlight: {
      label: 'Featured Output',
      title: 'A click-worthy YouTube thumbnail',
      gradient: 'from-rose-400 via-orange-300 to-amber-300',
      emoji: '⚡',
    },
  },
  {
    key: 'video',
    title: 'AI Video Tools',
    description: 'What can you do with these video tools?',
    short: 'Video',
    icon: '🎬',
    accent: 'from-violet-600 to-fuchsia-500',
    soft: 'from-violet-50 to-fuchsia-50',
    items: [
      { name: 'Clone Videos', emoji: '👯' },
      { name: 'Visual Effects', emoji: '✨' },
      { name: 'Cinematic Films', emoji: '🎞️' },
      { name: 'Video Ads', emoji: '📺' },
      { name: 'Reels & TikToks', emoji: '🎵' },
      { name: 'YouTube Videos', emoji: '🔴' },
    ],
    spotlight: {
      label: 'Featured Output',
      title: 'A cinematic 4K reel — generated',
      gradient: 'from-violet-500 via-indigo-500 to-cyan-400',
      emoji: '🎬',
    },
  },
  {
    key: 'audio',
    title: 'AI Audio Tools',
    description: 'What can you do with these audio tools?',
    short: 'Audio',
    icon: '🎧',
    accent: 'from-emerald-500 to-cyan-500',
    soft: 'from-emerald-50 to-cyan-50',
    items: [
      { name: 'AI Voiceovers', emoji: '🎙️' },
      { name: 'AI Voice Clones', emoji: '🗣️' },
      { name: 'Voice Swaps', emoji: '🔁' },
      { name: 'AI Sound Effects', emoji: '💥' },
      { name: 'AI Music Generation', emoji: '🎼' },
      { name: 'Audio Mastering', emoji: '🎛️' },
    ],
    spotlight: {
      label: 'Featured Output',
      title: 'Studio-grade voiceover',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
      emoji: '🎧',
    },
  },
]

const activeKey = ref('image')
const active = computed(() => categories.find((c) => c.key === activeKey.value))
</script>

<template>
  <section id="tools" class="section relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">All-in-one AI Suite</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Let's break down exactly what you can access
          <span class="gradient-text">with Prompt Edit</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Image, video, and audio tools — all on a pay-per-use basis. New tools added the moment they release.
        </p>
      </div>

      <div v-reveal class="mx-auto mt-12 inline-flex w-full max-w-md items-center justify-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm sm:mx-auto sm:flex">
        <button
          v-for="cat in categories"
          :key="cat.key"
          type="button"
          @click="activeKey = cat.key"
          :class="[
            'relative flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition',
            activeKey === cat.key
              ? `bg-gradient-to-r text-white shadow-md ${cat.accent}`
              : 'text-slate-600 hover:text-slate-900',
          ]"
        >
          <span class="text-base">{{ cat.icon }}</span>
          <span>{{ cat.short }}</span>
        </button>
      </div>

      <div v-reveal class="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div :class="['relative px-8 py-10 text-white sm:px-12 sm:py-12 bg-gradient-to-br transition-all duration-700', active.accent]">
          <div class="absolute inset-0 bg-grid opacity-10"></div>
          <div class="relative grid items-center gap-8 md:grid-cols-[1fr,1fr]">
            <div>
              <div class="flex flex-wrap items-center gap-5">
                <div class="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
                  {{ active.icon }}
                </div>
                <div>
                  <h3 class="font-display text-2xl font-extrabold sm:text-3xl">{{ active.title }}</h3>
                  <p class="mt-1 text-white/85">{{ active.description }}</p>
                </div>
              </div>
              <a href="#pricing" class="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur transition hover:bg-white/25">
                Try {{ active.short.toLowerCase() }} tools
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div :key="active.key" class="relative">
              <div class="absolute -inset-4 rounded-3xl bg-white/10 blur-xl"></div>
              <div class="relative rounded-2xl bg-white/15 p-5 backdrop-blur">
                <div class="flex items-center justify-between text-xs font-semibold text-white/80">
                  <span class="uppercase tracking-wider">{{ active.spotlight.label }}</span>
                  <span>Just now</span>
                </div>
                <div :class="['mt-3 grid aspect-video place-items-center overflow-hidden rounded-xl bg-gradient-to-br text-6xl', active.spotlight.gradient]">
                  {{ active.spotlight.emoji }}
                </div>
                <p class="mt-3 font-display text-base font-bold">{{ active.spotlight.title }}</p>
                <div class="mt-2 flex items-center gap-2 text-xs text-white/80">
                  <span class="inline-block h-2 w-2 rounded-full bg-emerald-300"></span>
                  Delivered in under 30 seconds
                </div>
              </div>
            </div>
          </div>
        </div>

        <div :class="['grid grid-cols-2 gap-px bg-slate-100 sm:grid-cols-3 lg:grid-cols-6 bg-gradient-to-br', active.soft]">
          <div
            v-for="(item, i) in active.items"
            :key="active.key + item.name"
            v-reveal="{ delay: i * 40 }"
            class="group flex flex-col items-center gap-3 bg-white p-6 text-center transition hover:bg-slate-50"
          >
            <div class="text-4xl transition group-hover:scale-110">{{ item.emoji }}</div>
            <div class="text-sm font-semibold text-slate-700">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
