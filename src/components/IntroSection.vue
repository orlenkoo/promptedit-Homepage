<script setup>
const subscriptions = [
  { name: 'Midjourney', price: '$30/mo', accent: 'from-rose-500 to-pink-500' },
  { name: 'Runway', price: '$35/mo', accent: 'from-violet-500 to-fuchsia-500' },
  { name: 'ElevenLabs', price: '$22/mo', accent: 'from-emerald-500 to-teal-500' },
  { name: 'HeyGen', price: '$48/mo', accent: 'from-amber-500 to-orange-500' },
  { name: 'Suno', price: '$24/mo', accent: 'from-blue-500 to-cyan-500' },
  { name: 'Ideogram', price: '$20/mo', accent: 'from-purple-500 to-indigo-500' },
]

const benefits = [
  {
    icon: '🛒',
    title: 'Grocery Store for AI',
    text: 'One place to access all the major AI tools you need — Nano Banana Pro, Grok, Seedance, Kling, Veo, HeyGen, ElevenLabs, Suno, Ideogram & more.',
  },
  {
    icon: '⛽',
    title: 'No Subscriptions Required',
    text: 'Pay only for what you actually use by purchasing AI credits — like buying gas for a car. Top up anytime.',
  },
  {
    icon: '🎁',
    title: 'Exclusive Student Discount',
    text: 'As a thank you for joining the AI Creator Course, we put together a special discounted credit offer to help you get started right away.',
  },
]
</script>

<template>
  <section class="section relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-dots opacity-50"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Introducing Prompt Edit</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Stop juggling expensive subscriptions.
          <span class="gradient-text">One place for every AI tool.</span>
        </h2>
        <p class="mt-5 text-lg text-slate-600">
          Instead of signing up for a bunch of different websites, learning a bunch of different interfaces,
          and stacking expensive subscriptions on top of each other — Prompt Edit gives you
          <strong class="text-slate-900">one place</strong> to access them all. No subscription required.
        </p>
      </div>

      <div class="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
        <div v-reveal class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div class="flex items-center justify-between">
            <span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600">
              The Old Way
            </span>
            <span class="text-sm font-bold text-rose-600">$179 / month</span>
          </div>
          <h3 class="mt-4 font-display text-2xl font-extrabold text-slate-900">
            Six logins. Six bills. Six dashboards.
          </h3>
          <p class="mt-2 text-sm text-slate-600">
            Stacking monthly subscriptions just to keep up with the latest AI tools.
          </p>

          <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div
              v-for="s in subscriptions"
              :key="s.name"
              class="group rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-rose-200 hover:bg-rose-50/40"
            >
              <div :class="['mb-2 h-1 w-8 rounded-full bg-gradient-to-r', s.accent]"></div>
              <div class="text-xs font-bold text-slate-900">{{ s.name }}</div>
              <div class="mt-1 flex items-center gap-1.5">
                <span class="text-[11px] font-semibold text-slate-500 line-through">{{ s.price }}</span>
                <span class="text-[10px] font-bold text-rose-600">monthly</span>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-start gap-2 rounded-xl bg-rose-50 p-4 text-sm text-rose-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>Unused subscriptions waste money. Cancelling means losing access.</span>
          </div>
        </div>

        <div v-reveal="{ delay: 100 }" class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-purple-600 p-8 text-white shadow-glow-lg">
          <div class="absolute inset-0 bg-grid opacity-10"></div>
          <div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl"></div>

          <div class="relative">
            <div class="flex items-center justify-between">
              <span class="eyebrow-dark">The Prompt Edit Way</span>
              <span class="text-sm font-bold">Pay as you go</span>
            </div>
            <h3 class="mt-4 font-display text-2xl font-extrabold">
              One login. One bill. Every tool.
            </h3>
            <p class="mt-2 text-sm text-white/85">
              Buy AI credits once and spend them on any tool across the platform.
            </p>

            <div class="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div class="flex items-center justify-between text-xs text-white/70">
                <span class="font-bold uppercase tracking-wider">Credit Balance</span>
                <span>Updated just now</span>
              </div>
              <div class="mt-3 flex items-baseline gap-2">
                <span class="font-display text-4xl font-extrabold">$110.00</span>
                <span class="text-sm text-white/70">in credits</span>
              </div>
              <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
                <div class="h-full w-[85%] rounded-full bg-gradient-to-r from-white to-brand-200"></div>
              </div>
              <div class="mt-4 grid grid-cols-3 gap-2">
                <div v-for="t in ['🖼️ Image', '🎬 Video', '🎧 Audio']" :key="t" class="rounded-lg bg-white/10 px-2 py-1.5 text-center text-[11px] font-semibold">
                  {{ t }}
                </div>
              </div>
            </div>

            <div class="mt-5 flex items-start gap-2 rounded-xl bg-white/10 p-4 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
              </svg>
              <span>No subscription locks you in. Credits never expire on top-ups.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 grid gap-6 md:grid-cols-3">
        <div
          v-for="(b, i) in benefits"
          :key="b.title"
          v-reveal="{ delay: i * 80 }"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
        >
          <div class="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-100/60 transition group-hover:bg-brand-200/70"></div>
          <div class="relative">
            <div class="mb-4 text-5xl transition group-hover:scale-110">{{ b.icon }}</div>
            <h3 class="text-xl font-bold text-slate-900">{{ b.title }}</h3>
            <p class="mt-2 text-slate-600">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
