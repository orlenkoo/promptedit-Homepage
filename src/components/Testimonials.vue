<script setup>
const testimonials = [
  {
    quote:
      "Thank you so much for the Content Creator Templates Library! My daughter and I got more editing work done today in 3 hours than we normally do in 3 days!",
    name: 'Hilda Schlueter',
    role: 'Online Course Creator',
    avatar: 'https://i.pravatar.cc/160?img=47',
    highlight: '3 hours = 3 days of work',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    quote:
      "My videos wouldn't look HALF as good as they do if it wasn't for the Content Creator Templates Library. I lean into them heavily for every edit I do.",
    name: 'Matt Lilley',
    role: 'ContentCreator.com Student',
    avatar: 'https://i.pravatar.cc/160?img=12',
    highlight: 'Every edit, every day',
    accent: 'from-brand-500 to-purple-500',
  },
  {
    quote:
      "The Content Creator Templates Library is a fantastic resource! I don't need any other digital asset subscriptions.",
    name: 'Brady Hales',
    role: 'ContentCreator.com Student',
    avatar: 'https://i.pravatar.cc/160?img=33',
    highlight: 'Cancelled every other sub',
    accent: 'from-emerald-500 to-teal-500',
  },
]

const trustStats = [
  { value: '4.9 / 5', label: 'Average Rating' },
  { value: '10,000+', label: 'Active Creators' },
  { value: '1M+', label: 'Assets Generated' },
  { value: '24h', label: 'Support Response' },
]
</script>

<template>
  <section id="testimonials" class="section bg-white">
    <div class="container-page">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Loved by Creators</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Don't just take <span class="gradient-text">our word for it</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Real reviews from creators using the Content Creator Templates Library every single day.
        </p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name"
          v-reveal="{ delay: i * 100 }"
          class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow-lg"
        >
          <div :class="['pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition group-hover:opacity-40', t.accent]"></div>

          <svg xmlns="http://www.w3.org/2000/svg" class="relative h-8 w-8 text-brand-200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.13 8.31a4.31 4.31 0 00-3.43 4.22V20H1V14.4a8.74 8.74 0 018.13-8.73v2.64zm10 0a4.31 4.31 0 00-3.43 4.22V20h-4.7V14.4a8.74 8.74 0 018.13-8.73v2.64z" />
          </svg>

          <div class="relative mt-2 flex items-center gap-1 text-amber-500">
            <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.363 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.362-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.957z" />
            </svg>
          </div>

          <p :class="['relative mt-3 inline-flex w-fit rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-wider text-white', t.accent]">
            {{ t.highlight }}
          </p>

          <blockquote class="relative mt-5 flex-1 font-display text-lg font-medium leading-snug text-slate-800">
            "{{ t.quote }}"
          </blockquote>

          <figcaption class="relative mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
            <img
              :src="t.avatar"
              :alt="t.name"
              loading="lazy"
              class="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
            />
            <div>
              <div class="text-sm font-bold text-slate-900">{{ t.name }}</div>
              <div class="text-xs text-slate-500">{{ t.role }}</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div v-reveal class="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 md:grid-cols-4">
        <div
          v-for="s in trustStats"
          :key="s.label"
          class="bg-white px-6 py-8 text-center"
        >
          <div
            v-count-up="{ value: s.value, duration: 1600 }"
            class="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl"
          >
            {{ s.value }}
          </div>
          <div class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
            {{ s.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
