function parseTarget(text) {
  const cleaned = String(text).replace(/[,\s]/g, '')
  const match = cleaned.match(/([\d.]+)(.*)/)
  if (!match) return null
  const value = parseFloat(match[1])
  return { value, suffix: match[2] || '' }
}

function format(value, originalText) {
  const hasComma = /,/.test(originalText)
  const fixed = Math.round(value)
  return hasComma ? fixed.toLocaleString('en-US') : String(fixed)
}

export const vCountUp = {
  mounted(el, binding) {
    const original = (binding.value?.value ?? el.textContent ?? '').trim()
    const parsed = parseTarget(original)
    if (!parsed) return

    const duration = binding.value?.duration ?? 1600
    const suffix = parsed.suffix
    const target = parsed.value

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      el.textContent = format(target, original) + suffix
      return
    }

    el.textContent = '0' + suffix

    let started = false
    const start = () => {
      if (started) return
      started = true
      const startTime = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        el.textContent = format(target * eased, original) + suffix
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          start()
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    el._countUp = observer
  },
  unmounted(el) {
    el._countUp?.disconnect()
  },
}
