<script setup>
const plans = [
  {
    name: 'Save on Credits',
    badge: 'One-Time',
    price: '$98',
    period: 'one payment',
    headline: 'Get $110 Worth of AI Credits Today',
    save: 'Save 10% when you claim offer',
    description:
      'Use your credits on any AI tool across the entire site! Nano Banana Pro, Grok, Seedance, Kling, Veo, HeyGen, ElevenLabs, Suno, Ideogram, and so many more!',
    features: [
      '$110 worth of AI credits',
      'No subscription required',
      'Use credits on any AI tool',
      'Top up anytime — credits never expire',
    ],
    cta: 'Claim Deal',
    featured: false,
  },
  {
    name: 'Save on Everything',
    badge: 'Most Popular',
    price: '$39',
    period: '/month',
    headline: 'Get $49 Worth of AI Credits every month + 10% off any extra credits',
    save: 'Lifetime 20% boost on monthly credits',
    description:
      'Get a lifetime 20% boost on monthly credits and save 10% anytime you purchase additional credits. You also get access to some huge bonuses.',
    features: [
      '$49 in AI credits monthly',
      '10% off all credit top-ups',
      'Content Creator Templates Library (100,000+ assets)',
      'Faster generation speeds',
      'Run multiple generations at once',
      'Cancel anytime',
    ],
    cta: 'Claim Deal',
    featured: true,
  },
]
</script>

<template>
  <section id="pricing" class="section relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-grid opacity-30"></div>
    <div class="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Existing Student Discount</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Prompt Edit Pricing
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Choose the option that fits how you create. Cancel anytime.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl items-stretch gap-8 lg:grid-cols-2">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          v-reveal="{ delay: i * 120 }"
          :class="[
            'relative flex flex-col rounded-3xl border bg-white p-8 transition',
            plan.featured
              ? 'border-brand-500 shadow-glow-lg scale-[1.02] lg:scale-105 glow-ring'
              : 'border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1',
          ]"
        >
          <span
            v-if="plan.featured"
            class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
          >
            {{ plan.badge }}
          </span>
          <span
            v-else
            class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            {{ plan.badge }}
          </span>

          <div class="text-center">
            <h3 class="font-display text-2xl font-extrabold text-slate-900">{{ plan.name }}</h3>
            <div class="mt-6 flex items-baseline justify-center gap-1">
              <span class="font-display text-6xl font-extrabold text-slate-900">{{ plan.price }}</span>
              <span class="text-lg font-medium text-slate-500">{{ plan.period }}</span>
            </div>
            <p class="mt-3 text-base font-semibold text-slate-700">{{ plan.headline }}</p>
            <p class="mt-1 text-sm font-bold text-brand-600">{{ plan.save }}</p>
          </div>

          <p class="mt-6 text-sm text-slate-600">{{ plan.description }}</p>

          <ul class="mt-6 space-y-3">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-3">
              <span
                :class="[
                  'mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full',
                  plan.featured ? 'bg-gradient-to-br from-brand-600 to-purple-600 text-white' : 'bg-slate-200 text-slate-700',
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </span>
              <span class="text-sm text-slate-700">{{ f }}</span>
            </li>
          </ul>

          <a
            href="#"
            :class="[
              'mt-8 block rounded-full px-7 py-4 text-center text-base font-bold transition',
              plan.featured
                ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg'
                : 'border-2 border-slate-200 bg-white text-slate-800 hover:border-brand-500 hover:text-brand-600',
            ]"
          >
            {{ plan.cta }}
          </a>
        </div>
      </div>

      <div v-reveal class="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
        <div class="flex items-center gap-2">
          <span class="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          30-day money-back guarantee
        </div>
        <div>Easily cancel at any time</div>
        <div>If you run out of credits, simply purchase more — no subscriptions required</div>
      </div>
    </div>
  </section>
</template>
