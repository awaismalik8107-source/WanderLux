import { useState, useEffect, useRef } from 'react'

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

export function useCountUp(target, isActive, { duration = 1200, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isActive) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    const start = performance.now()

    function tick(now) {
      const elapsed = Math.min(1, (now - start) / duration)
      const eased = easeOutQuart(elapsed)
      setValue(Number((target * eased).toFixed(decimals)))

      if (elapsed < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, isActive, duration, decimals])

  return value
}
