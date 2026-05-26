<script setup>
const checklist = [
  {
    title: 'You want all the best AI tools in one place',
    body: 'With an easy-to-use interface and one shared credit balance — no more 6 dashboards and 6 monthly bills.',
    icon: '🛒',
    accent: 'from-brand-500 to-purple-500',
  },
  {
    title: 'You want the best deal on AI credits',
    body: 'Letting you CREATE more and SAVE more money. Lifetime 20% credit boost + 10% off all top-ups.',
    icon: '💸',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'You want to produce cinematic videos',
    body: 'Using the same time-saving templates the professional editors in Hollywood use, drag-and-drop into any project.',
    icon: '🎬',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: "You're just starting out with editing",
    body: 'But still want that professional look — without spending months figuring out how to build everything yourself.',
    icon: '🚀',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    title: "You're tired of searching the internet endlessly",
    body: 'Only to find you need to "buy a pack" that costs $130, even though you only want that one thing!',
    icon: '🔎',
    accent: 'from-rose-500 to-pink-500',
  },
  {
    title: 'You care about UNLIMITED downloads & usage',
    body: 'Cleared for use in all commercial projects with one flat fee — no extra commercial licensing charges.',
    icon: '♾️',
    accent: 'from-cyan-500 to-blue-500',
  },
]
</script>

<template>
  <section id="who-is-it-for" class="section relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-dots opacity-40"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Is Prompt Edit For You?</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          A subscription to Prompt Edit
          <span class="gradient-text">is for you if…</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Including the Content Creator Templates Library — built for creators who care about
          shipping more, faster, without the bloat.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
        <div
          v-for="(item, i) in checklist"
          :key="item.title"
          v-reveal="{ delay: i * 70 }"
          class="group relative flex gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
        >
          <div :class="['pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition group-hover:opacity-25', item.accent]"></div>

          <div :class="['relative grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl text-2xl text-white shadow-md bg-gradient-to-br', item.accent]">
            {{ item.icon }}
          </div>

          <div class="relative flex-1">
            <div class="flex items-start gap-2">
              <span class="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
                </svg>
              </span>
              <h3 class="font-display text-base font-extrabold text-slate-900 sm:text-lg">
                {{ item.title }}
              </h3>
            </div>
            <p class="mt-2 pl-7 text-sm leading-relaxed text-slate-600">{{ item.body }}</p>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-14 text-center">
        <a href="#pricing" class="btn-primary">
          Find Your Plan
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p class="mt-4 text-sm font-semibold text-slate-500">
          Backed by our 100% Money-Back Satisfaction Guarantee
        </p>
      </div>
    </div>
  </section>
</template>
