<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all"
    :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="container-page flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-2 font-display text-xl font-extrabold text-slate-900">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-purple-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
          </svg>
        </span>
        Prompt<span class="text-brand-600">Edit</span>
      </a>
      <nav class="hidden items-center gap-8 md:flex">
        <a href="#tools" class="text-sm font-semibold text-slate-700 hover:text-brand-600">Tools</a>
        <a href="#pricing" class="text-sm font-semibold text-slate-700 hover:text-brand-600">Pricing</a>
        <a href="#templates" class="text-sm font-semibold text-slate-700 hover:text-brand-600">Templates</a>
        <a href="#faq" class="text-sm font-semibold text-slate-700 hover:text-brand-600">FAQ</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="#" class="hidden text-sm font-semibold text-slate-700 hover:text-brand-600 sm:block">Login</a>
        <a href="#pricing" class="btn-primary !px-5 !py-2.5 !text-sm">Get Started</a>
      </div>
    </div>
  </header>
</template>
