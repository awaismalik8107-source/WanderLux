import { useState, useRef, useEffect } from 'react'
import { searchDestinations } from '../data/searchDestinations'

export default function TripSearchForm() {
  // Destination autocomplete state
  const [destQuery, setDestQuery] = useState('')
  const [destOpen, setDestOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const destRef = useRef(null)

  // Date state
  const [dateOpen, setDateOpen] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const dateRef = useRef(null)

  // Traveller state
  const [travellers, setTravellers] = useState(1)

  // Form state
  const [isLoading, setIsLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const filteredDests = searchDestinations.filter((d) =>
    d.toLowerCase().includes(destQuery.toLowerCase().trim())
  )

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (destRef.current && !destRef.current.contains(e.target)) setDestOpen(false)
      if (dateRef.current && !dateRef.current.contains(e.target)) setDateOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function formatDate(val) {
    if (!val) return ''
    const [y, m, d] = val.split('-').map(Number)
    return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(
      new Date(y, m - 1, d)
    )
  }

  const dateDisplay = startDate && endDate
    ? `${formatDate(startDate)} – ${formatDate(endDate)}`
    : startDate
    ? `${formatDate(startDate)} – choose end`
    : ''

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setStatusMsg('')
    setTimeout(() => {
      setIsLoading(false)
      setStatusMsg('A travel expert will shape matching ideas for your enquiry.')
    }, 1100)
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') { setDestOpen(false); return }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setDestOpen(true)
      const dir = e.key === 'ArrowDown' ? 1 : -1
      setSelectedIndex((prev) => {
        const next = prev === -1 ? 0 : (prev + dir + filteredDests.length) % filteredDests.length
        return next
      })
    }
    if (e.key === 'Enter' && selectedIndex > -1) {
      e.preventDefault()
      setDestQuery(filteredDests[selectedIndex])
      setDestOpen(false)
      setSelectedIndex(-1)
    }
  }

  return (
    <div id="trip-search">
      <form
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(230px,1.32fr)_minmax(218px,1fr)_minmax(194px,0.9fr)_auto] gap-2 w-full max-w-[920px] p-2 rounded-xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {/* Destination Field */}
        <div ref={destRef} className="relative flex items-center min-h-[52px] px-3 border border-navy/[0.14] rounded-lg bg-white">
          <svg className="shrink-0 w-[19px] h-[19px] mr-2.5 text-gold stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full min-w-0 border-0 outline-0 bg-transparent text-ink text-sm placeholder:text-[#606a7d]"
            value={destQuery}
            onChange={(e) => { setDestQuery(e.target.value); setDestOpen(true); setSelectedIndex(-1) }}
            onFocus={() => setDestOpen(true)}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={destOpen}
            aria-autocomplete="list"
          />
          {destOpen && filteredDests.length > 0 && (
            <div className="search-popover" role="listbox">
              {filteredDests.map((dest, i) => (
                <button
                  key={dest}
                  type="button"
                  role="option"
                  aria-selected={i === selectedIndex}
                  className={`w-full px-3 py-[11px] border-0 rounded-lg bg-transparent text-ink text-left text-sm transition-colors duration-150 hover:bg-gold/[0.12] hover:text-[#7a581c] ${
                    i === selectedIndex ? 'bg-gold/[0.12] text-[#7a581c]' : ''
                  }`}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => { setDestQuery(dest); setDestOpen(false); setSelectedIndex(-1) }}
                >
                  {dest}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Field */}
        <div ref={dateRef} className="relative flex items-center min-h-[52px] px-3 border border-navy/[0.14] rounded-lg bg-white">
          <svg className="shrink-0 w-[19px] h-[19px] mr-2.5 text-gold stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4" /><path d="M16 2v4" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <input
            type="text"
            placeholder="When are you travelling?"
            className="w-full min-w-0 border-0 outline-0 bg-transparent text-ink text-sm placeholder:text-[#606a7d] cursor-pointer"
            value={dateDisplay}
            readOnly
            onClick={() => setDateOpen(!dateOpen)}
            onFocus={() => setDateOpen(true)}
          />
          {dateOpen && (
            <div className="search-popover !grid grid-cols-1 sm:grid-cols-2 gap-2.5 !max-h-none !overflow-visible !p-3.5 !w-[360px]">
              <label className="grid gap-[7px] text-muted text-xs font-bold uppercase tracking-wider">
                <span>Start</span>
                <input
                  type="date"
                  min={today}
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value)
                    if (endDate && endDate < e.target.value) setEndDate('')
                  }}
                  className="min-h-[42px] px-2.5 border border-navy/[0.14] rounded-lg text-ink bg-white text-sm"
                />
              </label>
              <label className="grid gap-[7px] text-muted text-xs font-bold uppercase tracking-wider">
                <span>End</span>
                <input
                  type="date"
                  min={startDate || today}
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value)
                    if (startDate && e.target.value) setDateOpen(false)
                  }}
                  className="min-h-[42px] px-2.5 border border-navy/[0.14] rounded-lg text-ink bg-white text-sm"
                />
              </label>
            </div>
          )}
        </div>

        {/* Traveller Field */}
        <div className="flex items-center min-h-[52px] px-3 border border-navy/[0.14] rounded-lg bg-white">
          <svg className="shrink-0 w-[19px] h-[19px] mr-2.5 text-gold stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <div className="grid grid-cols-[34px_minmax(36px,1fr)_34px] items-center w-full gap-1.5">
            <button
              type="button"
              disabled={travellers <= 1}
              className="inline-flex items-center justify-center w-[34px] h-[34px] border border-navy/[0.16] rounded-full bg-white text-ink text-xl leading-none transition-all duration-150 hover:border-gold hover:text-[#8a641f] hover:bg-gold/10 disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => setTravellers((t) => Math.max(1, t - 1))}
              aria-label="Decrease travellers"
            >
              −
            </button>
            <input
              type="number"
              value={travellers}
              readOnly
              className="w-full min-w-0 border-0 outline-0 bg-transparent text-center font-semibold text-ink text-sm"
              min="1" max="20"
            />
            <button
              type="button"
              disabled={travellers >= 20}
              className="inline-flex items-center justify-center w-[34px] h-[34px] border border-navy/[0.16] rounded-full bg-white text-ink text-xl leading-none transition-all duration-150 hover:border-gold hover:text-[#8a641f] hover:bg-gold/10 disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => setTravellers((t) => Math.min(20, t + 1))}
              aria-label="Increase travellers"
            >
              +
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative inline-flex items-center justify-center min-h-[52px] px-7 border-0 rounded-lg bg-gold text-white text-[15px] font-semibold whitespace-nowrap transition-all duration-200 hover:bg-gold-dark active:translate-y-px md:col-span-2 xl:col-span-1 disabled:opacity-80"
        >
          <span className={isLoading ? 'opacity-0' : ''}>Find my trip</span>
          {isLoading && (
            <span className="absolute w-[18px] h-[18px] border-2 border-white/40 border-t-white rounded-full animate-spin" />
          )}
        </button>
      </form>

      {/* Status message */}
      <p className="min-h-[18px] mt-2 text-white/[0.78] text-[13px]" role="status" aria-live="polite">
        {statusMsg}
      </p>
    </div>
  )
}
