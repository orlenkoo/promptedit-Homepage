<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative overflow-hidden bg-slate-950 text-slate-300">
    <div class="absolute inset-0 bg-grid opacity-[0.06]"></div>
    <div class="pointer-events-none absolute -top-40 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"></div>

    <section class="relative border-b border-white/10">
      <div class="container-page py-16 lg:py-20">
        <div v-reveal class="mx-auto max-w-3xl text-center">
          <h2 class="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Get started today — before this <span class="gradient-text">once-in-a-lifetime offer</span> expires
          </h2>
          <p class="mt-4 text-lg text-slate-400">
            Join our free trial. No long-term contracts. Cancel anytime.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#pricing" class="btn-primary">
              Click to Get Started Today!
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="mailto:support@contentcreator.com" class="text-sm font-semibold text-slate-300 hover:text-white">
              Or email support@contentcreator.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="relative">
      <div class="container-page py-12">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#" class="flex items-center gap-2 font-display text-xl font-extrabold text-white">
            <span class="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
            </span>
            Prompt<span class="text-brand-400">Edit</span>
          </a>

          <nav class="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-semibold text-slate-300">
            <a href="#tools" class="hover:text-white">Tools</a>
            <a href="#pricing" class="hover:text-white">Pricing</a>
            <a href="#templates" class="hover:text-white">Templates</a>
            <a href="#faq" class="hover:text-white">FAQ</a>
            <a href="#" class="hover:text-white">Tutorials</a>
            <a href="#" class="hover:text-white">Login</a>
          </nav>

          <div class="flex items-center gap-2 text-xs text-slate-400">
            <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            All systems operational
          </div>
        </div>

        <div class="mt-10 space-y-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            © {{ year }} Paul Xavier International LLC. By visiting this page, you agree to our
            <a href="#" class="text-slate-300 underline-offset-2 hover:text-white hover:underline">terms and conditions</a>,
            <a href="#" class="text-slate-300 underline-offset-2 hover:text-white hover:underline">privacy policy</a>, and
            <a href="#" class="text-slate-300 underline-offset-2 hover:text-white hover:underline">earnings disclaimer</a>.
          </p>
          <p>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT
            endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p class="text-[11px] text-slate-600">
            <strong class="text-slate-500">DISCLAIMER:</strong> The sales figures stated on this landing page
            and discussed in any associated programs are personal sales figures and in some cases the sales
            figures of previous or existing clients. Please understand these results are not typical. We're
            not implying you'll duplicate them. The average person who buys "how to" information gets little
            to no results. We're using these references for example purposes only. Your results will vary and
            depend on many factors including but not limited to your background, experience, and work ethic.
            All business entails risk as well as massive and consistent effort and action.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
