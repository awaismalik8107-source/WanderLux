import { useCountUp } from '../hooks/useCountUp'

export default function StatCounter({ value, display, label, decimals = 0, suffix = '', isVisible }) {
  const count = useCountUp(value, isVisible, { decimals })

  function formatDisplay() {
    if (!isVisible) return display
    if (suffix === '+') return `${Math.round(count).toLocaleString('en')}+`
    if (suffix === '★') return `${count.toFixed(decimals)}★`
    if (suffix === '%') return `${Math.round(count)}%`
    return Math.round(count).toLocaleString('en')
  }

  return (
    <div className="flex flex-col items-center gap-2 min-w-0">
      <span className="font-serif text-[30px] md:text-[38px] font-bold text-navy leading-none">
        {formatDisplay()}
      </span>
      <span className="text-[#999] text-[13px] tracking-[0.02em] leading-[1.4] text-center">
        {label}
      </span>
    </div>
  )
}
