<script setup>
import { ref } from 'vue'

const categories = [
  {
    title: 'LUTs',
    count: '4,000+',
    emoji: '🎨',
    tagline: 'The cheat code to cinematic content',
    description:
      "If you've ever watched a video and thought \"Those colors look INCREDIBLE!\" — odds are it was a LUT. Drag-and-drop color presets that give you cinematic looking content, no matter what camera you used.",
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    title: 'Sound Effects',
    count: '60,000+',
    emoji: '🎧',
    tagline: 'Hear the difference sound makes',
    description:
      'Professionally made sound effects across every category — explosions, whooshes, transitions, foley, UI clicks, ambient beds. Drag-and-drop into any editing software.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    accent: 'from-emerald-500 to-cyan-400',
  },
  {
    title: 'Text Animations',
    count: '3,000+',
    emoji: '💬',
    tagline: 'Scroll-stopping titles in seconds',
    description:
      'Pick a layout, type your message, watch your ideas come to life — like having a pro designer on your team, without the hefty price tag.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Overlays',
    count: '2,000+',
    emoji: '🪄',
    tagline: 'Viral & vintage vibes in one click',
    description:
      'Drag the overlay onto your video, change the blend mode, and your video has a whole new style in seconds. Light leaks, film grain, dust, smoke — you name it.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    accent: 'from-amber-400 to-rose-500',
  },
  {
    title: 'Animated Backgrounds',
    count: '5,000+',
    emoji: '✨',
    tagline: 'A pro-grade base layer for any project',
    description:
      'Modern, high-quality, easy-to-use animated backgrounds — the base layer of your video where you can add images, text, or anything else on top.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
    accent: 'from-brand-500 to-purple-500',
  },
  {
    title: 'Project Templates',
    count: '5,000+',
    emoji: '📁',
    tagline: 'Edits that look pre-finished',
    description:
      'Pre-built project templates compatible with all major editing platforms. Customize, swap your media, and export — your project looks professional out of the box.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    accent: 'from-cyan-500 to-blue-500',
  },
]

const playing = ref(false)
const togglePlay = () => {
  playing.value = !playing.value
}
</script>

<template>
  <section class="section relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-grid opacity-30"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Most Popular Categories</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Let's go through some <span class="gradient-text">popular asset categories</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          A peek inside the Content Creator Templates Library — included with every monthly subscription.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(cat, i) in categories"
          :key="cat.title"
          v-reveal="{ delay: i * 60 }"
          class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-glow-lg hover:ring-brand-200"
        >
          <div class="relative aspect-[16/9] overflow-hidden">
            <img
              :src="cat.image"
              :alt="cat.title"
              loading="lazy"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div :class="['absolute inset-0 bg-gradient-to-br opacity-65 mix-blend-multiply', cat.accent]"></div>
            <div class="absolute inset-0 grid place-items-center text-6xl drop-shadow-lg transition group-hover:scale-110">
              {{ cat.emoji }}
            </div>
            <div class="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm backdrop-blur">
              {{ cat.count }}
            </div>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="font-display text-xl font-bold text-slate-900">{{ cat.title }}</h3>
            <p class="mt-1 text-sm font-bold text-brand-600">{{ cat.tagline }}</p>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{{ cat.description }}</p>
          </div>
        </article>
      </div>

      <div v-reveal class="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div class="grid items-stretch lg:grid-cols-[1fr,1.1fr]">
          <div class="flex flex-col justify-center p-8 sm:p-12">
            <span class="eyebrow">Try It Now</span>
            <h3 class="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Hear the difference <span class="gradient-text">sound makes</span>
            </h3>
            <p class="mt-4 text-base text-slate-600">
              Most viewers don't realize it, but sound is what separates a forgettable video from a viral one.
              Click play and feel the difference our 60,000+ sound effects can make.
            </p>
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                @click="togglePlay"
                :class="[
                  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition',
                  playing
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg',
                ]"
              >
                <svg v-if="!playing" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                {{ playing ? 'Pause Demo' : 'Play Demo' }}
              </button>
              <span class="text-xs font-semibold text-slate-500">
                {{ playing ? '🔊 Sound: ON — feel the impact' : '🔇 Sound: OFF — flat & lifeless' }}
              </span>
            </div>
          </div>

          <div class="relative grid grid-cols-2 border-t border-slate-200 lg:border-l lg:border-t-0">
            <div
              :class="[
                'relative flex flex-col items-center justify-center gap-4 p-8 transition',
                playing ? 'bg-slate-100 opacity-50' : 'bg-slate-900 text-white',
              ]"
            >
              <div class="text-5xl">🔇</div>
              <div class="text-center">
                <div class="text-xs font-bold uppercase tracking-wider opacity-80">Without SFX</div>
                <div class="mt-1 font-display text-lg font-extrabold">Forgettable</div>
              </div>
              <div class="flex h-12 items-end gap-1">
                <span
                  v-for="i in 14"
                  :key="i"
                  class="w-1 rounded-full bg-current"
                  :style="{ height: '15%', opacity: 0.4 }"
                />
              </div>
            </div>

            <div
              :class="[
                'waveform relative flex flex-col items-center justify-center gap-4 overflow-hidden p-8 transition bg-gradient-to-br from-brand-600 via-purple-600 to-pink-500 text-white',
                { 'is-playing': playing },
              ]"
            >
              <div class="absolute inset-0 bg-grid opacity-10"></div>
              <div class="relative text-5xl drop-shadow-lg">🔊</div>
              <div class="relative text-center">
                <div class="text-xs font-bold uppercase tracking-wider opacity-90">With SFX</div>
                <div class="mt-1 font-display text-lg font-extrabold">Cinematic</div>
              </div>
              <div class="relative flex h-12 items-end gap-1">
                <span v-for="i in 16" :key="i" class="bar h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-purple-600 to-pink-500 p-10 text-center text-white shadow-glow-lg">
        <div class="mx-auto max-w-2xl">
          <h3 class="font-display text-2xl font-extrabold sm:text-3xl">
            UNLIMITED Downloads &amp; UNLIMITED Usage
          </h3>
          <p class="mt-3 text-white/90">
            Cleared for use in all commercial projects. One fee for everything — we don't charge extra
            for commercial licensing.
          </p>
          <a
            href="#pricing"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-brand-700 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Click to Get Started Today!
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
