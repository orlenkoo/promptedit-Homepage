<script setup>
const logos = [
  'Nano Banana Pro', 'Grok', 'Seedance', 'Kling', 'Veo',
  'HeyGen', 'ElevenLabs', 'Suno', 'Ideogram', 'Flux',
  'Runway', 'Pika',
]
</script>

<template>
  <section class="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
    <div class="mesh"><span></span></div>
    <div class="absolute inset-0 bg-grid opacity-30"></div>

    <div class="container-page relative">
      <div class="grid items-center gap-14 lg:grid-cols-[1.05fr,0.95fr]">
        <div v-reveal class="text-center lg:text-left">
          <span class="eyebrow">
            <span class="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500"></span>
            Exclusive Offer for Course Students
          </span>
          <h1 class="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            The most affordable
            <span class="gradient-text">AI marketplace</span>
            featuring the best AI tools.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl lg:mx-0">
            Each tool accessible <strong class="text-slate-900">WITHOUT</strong> the need for a subscription.
            Just pay as you go — like buying gas for a car.
          </p>

          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#pricing" class="btn-primary">
              Click To Get Started Today!
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#tools" class="btn-secondary">Explore Tools</a>
          </div>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 lg:justify-start">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <div v-for="i in 4" :key="i" class="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 ring-2 ring-white"></div>
              </div>
              <span>Trusted by <strong class="text-slate-900">10,000+</strong> creators</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="flex text-amber-500">
                <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.371 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
                </svg>
              </span>
              <span><strong class="text-slate-900">4.9 / 5</strong> avg rating</span>
            </div>
          </div>
        </div>

        <div v-reveal="{ delay: 150 }" class="relative mx-auto h-[460px] w-full max-w-lg lg:h-[520px]">
          <div class="absolute inset-8 rounded-[2.5rem] border border-white/40 bg-white/60 shadow-glow-lg backdrop-blur-xl"></div>

          <div class="float-a absolute left-0 top-6 w-60 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div class="flex items-center gap-2.5">
              <div class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                <span class="text-base">🖼️</span>
              </div>
              <div>
                <div class="text-xs font-semibold text-slate-400">Image · Ideogram</div>
                <div class="text-sm font-bold text-slate-900">YouTube Thumbnail</div>
              </div>
            </div>
            <div class="mt-3 aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-rose-300 via-orange-300 to-amber-200">
              <div class="grid h-full place-items-center text-3xl">✨</div>
            </div>
            <div class="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span class="rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">Generated</span>
              <span>2 credits</span>
            </div>
          </div>

          <div class="float-b absolute right-0 top-20 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div class="flex items-center gap-2.5">
              <div class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white">
                <span class="text-base">🎬</span>
              </div>
              <div>
                <div class="text-xs font-semibold text-slate-400">Video · Veo 3</div>
                <div class="text-sm font-bold text-slate-900">Cinematic Reel</div>
              </div>
            </div>
            <div class="mt-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400">
              <div class="relative grid h-full place-items-center">
                <div class="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div class="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">75%</span>
            </div>
          </div>

          <div class="float-c absolute bottom-6 left-6 w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div class="flex items-center gap-2.5">
              <div class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                <span class="text-base">🎧</span>
              </div>
              <div>
                <div class="text-xs font-semibold text-slate-400">Voice · ElevenLabs</div>
                <div class="text-sm font-bold text-slate-900">AI Voiceover</div>
              </div>
            </div>
            <div class="mt-3 flex h-12 items-end gap-1 rounded-lg bg-slate-50 px-3 py-2">
              <span
                v-for="(h, i) in [40, 70, 30, 90, 55, 80, 35, 65, 50, 75, 45, 60]"
                :key="i"
                class="w-1 rounded-full bg-gradient-to-t from-emerald-500 to-cyan-400"
                :style="{ height: h + '%', animation: `barBounce ${0.8 + (i % 3) * 0.2}s ease-in-out ${i * 0.05}s infinite` }"
              />
            </div>
          </div>

          <div class="toast-pop absolute right-2 bottom-16 rounded-xl border border-emerald-200 bg-white p-3 shadow-lg">
            <div class="flex items-center gap-2.5">
              <div class="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="text-xs font-bold text-slate-900">$49 credits added</div>
                <div class="text-[11px] text-slate-500">Ready to create</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal="{ delay: 250 }" class="mt-20">
        <p class="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Every leading AI tool — one set of credits
        </p>
        <div class="marquee-track mt-6">
          <div class="marquee">
            <span v-for="(logo, i) in [...logos, ...logos]" :key="i" class="flex items-center gap-2 font-display text-lg font-bold text-slate-500">
              <span class="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-slate-200 to-slate-300 text-[10px] font-extrabold text-slate-700">
                {{ logo.slice(0, 1) }}
              </span>
              {{ logo }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
