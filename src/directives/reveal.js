export const vReveal = {
  mounted(el, binding) {
    const { delay = 0, threshold = 0.12 } = binding.value || {}
    el.classList.add('reveal')
    if (delay) el.style.transitionDelay = `${delay}ms`

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    el._reveal = observer
  },
  unmounted(el) {
    el._reveal?.disconnect()
  },
}
