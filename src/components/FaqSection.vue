<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'What is PromptEdit.com?',
    a: "Think of PromptEdit like a \"grocery store for AI tools.\" PromptEdit allows you to access all of your favorite AI tools in one place, WITHOUT having to subscribe to each tool individually. You \"pay\" for the AI tools by simply purchasing and using credits. No subscription required — just pay for what you use. Any time new, revolutionary AI tools come out, we make sure to add them to our site so you can use them.",
  },
  {
    q: 'Can I use what I create for social media or commercial videos?',
    a: "Absolutely! Everything you create or download during your active membership is cleared for use in all commercial projects. You pay one fee for everything — we do not charge extra for commercial licensing.",
  },
  {
    q: 'Is there a difference in quality between AI tools on PromptEdit.com and the same tool on the companies\' main websites?',
    a: "There is no quality difference whatsoever. By using PromptEdit.com you are simply accessing the same tool on a \"pay-per-use\" basis compared to paying through a subscription on the tool's main site.",
  },
  {
    q: 'What is Content Creator Templates?',
    a: "Content Creator Templates is the world's most affordable library of 100,000+ royalty-free video editing templates you actually want to use. With a subscription to PromptEdit.com you get full, unlimited access to the Content Creator Templates Library! The library includes color grading presets, title & text templates, visual effects, presets, project templates, animations, sound effects, motion backgrounds, and much more.",
  },
  {
    q: 'Do any limits apply to downloads?',
    a: "No limits apply to downloads! With your one login you get unlimited downloads of all the templates on the site. However, per our User Terms and Privacy Policy, please remember: 1) the subscription is for an individual; 2) no robots allowed — that means no sharing of accounts or use of automated tools to scrape and download items.",
  },
  {
    q: 'Will the templates work in my editing platform?',
    a: "Yes — the templates on Content Creator Templates are compatible with all video editing platforms. You can download them and use them in whatever program you already have. That being said, there are some custom templates made for specific video editing platforms as well.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Absolutely. There are no long-term contracts here. Whenever you feel like this isn't the right deal for you, email us at support@contentcreator.com and we'll cancel your membership immediately. You can also cancel directly through the site.",
  },
  {
    q: "What happens to the templates I've downloaded if I cancel?",
    a: "Any videos you created during your membership will be cleared for life! After you cancel your membership, you can no longer use the video templates for future projects.",
  },
]

const open = ref(0)
const toggle = (i) => {
  open.value = open.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="section relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-dots opacity-40"></div>

    <div class="container-page relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">FAQ</span>
        <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Commonly asked questions
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Everything you need to know before you get started. Still curious?
          <a href="mailto:support@contentcreator.com" class="font-semibold text-brand-600 hover:text-brand-700">Email our team</a>.
        </p>
      </div>

      <div class="mx-auto mt-12 max-w-3xl space-y-3">
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          v-reveal="{ delay: i * 50 }"
          :class="[
            'overflow-hidden rounded-2xl border bg-white transition',
            open === i ? 'border-brand-300 shadow-glow' : 'border-slate-200 shadow-sm hover:border-slate-300',
          ]"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            :aria-expanded="open === i"
            @click="toggle(i)"
          >
            <span class="font-display text-base font-bold text-slate-900 sm:text-lg">{{ item.q }}</span>
            <span
              :class="[
                'grid h-9 w-9 flex-shrink-0 place-items-center rounded-full transition',
                open === i
                  ? 'bg-gradient-to-br from-brand-600 to-purple-600 text-white rotate-45 shadow-md'
                  : 'bg-slate-100 text-slate-600',
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="open === i"
              class="border-t border-slate-100 px-6 pb-5 pt-4 text-base leading-relaxed text-slate-600"
            >
              {{ item.a }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
