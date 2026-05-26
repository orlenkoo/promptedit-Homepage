<script setup>
const stats = [
  { number: '100000', display: '100,000+', label: 'Total Assets', accent: 'from-brand-500 to-cyan-400' },
  { number: '4000', display: '4,000+', label: 'LUTs', accent: 'from-purple-500 to-pink-500' },
  { number: '60000', display: '60,000+', label: 'Sound Effects', accent: 'from-amber-400 to-rose-500' },
  { number: '3000', display: '3,000+', label: 'Text Animations', accent: 'from-emerald-500 to-teal-400' },
]
</script>

<template>
  <section id="templates" class="section relative overflow-hidden">
    <div class="absolute inset-0 bg-dots opacity-40"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Included with Monthly</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Thinking about going all in <span class="gradient-text">with a subscription?</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Not only will you save more on AI credits — you also get unlimited access to our
          <strong class="text-slate-900">Content Creator Templates Library</strong>.
        </p>
      </div>

      <div v-reveal class="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-purple-600 to-pink-500 p-1">
        <div class="relative overflow-hidden rounded-[22px] bg-slate-950 p-8 text-white sm:p-12">
          <div class="absolute inset-0 bg-grid opacity-[0.07]"></div>
          <div class="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"></div>

          <div class="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span class="eyebrow-dark">Bonus included</span>
              <h3 class="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                Over 100,000+ professionally designed editing templates & packs
              </h3>
              <p class="mt-4 text-slate-300">
                Drastically improve the look and feel of your videos while saving countless hours.
                Used by Hollywood editors and indie creators alike.
              </p>

              <ul class="mt-6 grid grid-cols-2 gap-3 text-sm">
                <li v-for="t in ['LUTs', 'Sound FX', 'Text & Titles', 'Overlays', 'Backgrounds', 'Project Files']" :key="t" class="flex items-center gap-2 text-slate-200">
                  <span class="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  {{ t }}
                </li>
              </ul>

              <a href="#pricing" class="btn-primary mt-8">Click to Get Started Today!</a>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(s, i) in stats"
                :key="s.label"
                v-reveal="{ delay: i * 80 }"
                :class="[
                  'rounded-2xl p-6 text-center shadow-xl transition hover:scale-105',
                  'bg-gradient-to-br',
                  s.accent,
                ]"
              >
                <div
                  v-count-up="{ value: s.display, duration: 1800 }"
                  class="font-display text-3xl font-extrabold sm:text-4xl"
                >
                  {{ s.display }}
                </div>
                <div class="mt-1 text-sm font-medium text-white/90">{{ s.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
