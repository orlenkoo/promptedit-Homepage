<script setup>
const points = [
  'Cancel anytime — no awkward retention calls or forms',
  'Within 30 days of purchase, refund any unused credits',
  'Friendly humans answer support emails within 24 hours',
]
</script>

<template>
  <section id="guarantee" class="section bg-white">
    <div class="container-page">
      <div
        v-reveal
        class="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 shadow-glow-lg sm:p-12 lg:p-16"
      >
        <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>

        <div class="relative grid items-center gap-12 lg:grid-cols-[auto,1fr]">
          <div class="flex justify-center lg:justify-start">
            <div class="relative">
              <div class="conic-spin absolute -inset-3 rounded-full opacity-70 blur-md"></div>
              <div class="relative grid h-44 w-44 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-brand-600 via-purple-600 to-pink-500 text-white shadow-2xl">
                <div class="text-center">
                  <div class="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">100%</div>
                  <div class="mt-1 font-display text-3xl font-extrabold leading-none">30-Day</div>
                  <div class="mt-1 text-[11px] font-bold uppercase tracking-widest">Money Back</div>
                  <div class="mt-1 font-display text-base font-extrabold">Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span class="eyebrow">Risk-Free Trial</span>
            <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Try Prompt Edit — <span class="gradient-text">totally risk free</span>
            </h2>
            <p class="mt-4 text-lg text-slate-600">
              Prompt Edit has been built on customer satisfaction. You can cancel your membership anytime,
              and if you're within <strong class="text-slate-900">30 days of signing up</strong> we'll
              refund any unused credits — no forms, no awkward questions.
            </p>

            <ul class="mt-6 space-y-3">
              <li v-for="point in points" :key="point" class="flex items-start gap-3">
                <span class="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <span class="text-base font-medium text-slate-700">{{ point }}</span>
              </li>
            </ul>

            <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
              <div class="flex items-start gap-3">
                <span class="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V10a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="text-sm leading-relaxed text-amber-900">
                  <strong>Fair Use Note:</strong> Once you spend AI credits, they are non-refundable — think
                  of it like gas in your car. Once you reach your destination, you can't get a refund on the gas.
                </p>
              </div>
            </div>

            <div class="mt-7 flex flex-wrap items-center gap-4">
              <a href="#pricing" class="btn-primary">Get Started Risk-Free</a>
              <span class="text-sm font-semibold text-slate-500">No credit card surprises. Promise.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
