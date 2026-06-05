import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinationCardData, destinationFilters } from '../data/destinations'
import DestinationFilter from '../components/DestinationFilter'
import DestinationCard from '../components/DestinationCard'

const INITIAL_COUNT = 9
const BATCH_SIZE = 3

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [destHeight, setDestHeight] = useState(0)
  const destRef = useRef(null)

  useEffect(() => {
    if (!destRef.current) return
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setDestHeight(entries[0].borderBoxSize[0].blockSize)
      }
    })
    observer.observe(destRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeFilter === 'All'
    ? destinationCardData
    : destinationCardData.filter((d) => d.categories.includes(activeFilter))

  const shown = filtered.slice(0, visibleCount)
  const allShown = shown.length >= filtered.length

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter)
    setVisibleCount(INITIAL_COUNT)
  }, [])

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filtered.length))
  }, [filtered.length])

  return (
    <div 
      className="sticky z-[3] will-change-transform" 
      style={{ top: destHeight > 0 ? `calc(100dvh - ${destHeight}px)` : 'auto' }}
    >
      <section
        ref={destRef}
        id="section-3"
        className="relative -mt-[140px] max-[899px]:-mt-[110px] max-[599px]:-mt-[80px]"
        aria-labelledby="destinations-heading"
      >
        <div className="relative min-h-screen pt-20 pb-[100px] max-[1199px]:pt-[60px] max-[1199px]:pb-20 max-[899px]:pt-[50px] max-[899px]:pb-[70px] max-[599px]:pt-10 max-[599px]:pb-[60px] rounded-t-[20px] bg-navy shadow-[0_-28px_70px_rgba(10,22,40,0.22)] text-white overflow-visible">
          <span className="absolute -top-20 left-0 w-px h-px" id="destinations" aria-hidden="true" />

          {/* Heading Block */}
          <div className="w-full max-w-[640px] max-[599px]:max-w-full mx-auto mb-14 max-[899px]:mb-12 max-[599px]:mb-10 px-10 max-[599px]:px-5 text-center">
            <motion.p
            className="mb-3.5 text-gold text-[11px] font-bold tracking-[2px] leading-[1.4] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore the world
          </motion.p>
          <motion.h2
            id="destinations-heading"
            className="m-0 font-serif text-[52px] max-[1199px]:text-[42px] max-[899px]:text-[36px] max-[599px]:text-[30px] font-bold leading-[1.15] text-white text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every destination. Perfectly planned.
          </motion.h2>
          <motion.p
            className="max-w-[480px] mx-auto mt-[18px] text-white/60 text-lg max-[599px]:text-base leading-[1.6] text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From hidden escapes to landmark cities — handpicked by our travel specialists, tailored to you.
          </motion.p>

          {/* Filter Row */}
          <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <DestinationFilter
              filters={destinationFilters}
              active={activeFilter}
              onChange={handleFilterChange}
            />
          </motion.div>
        </div>

        {/* Card Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px_20px] w-full max-w-[1200px] mx-auto px-10 max-[599px]:px-5"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((destination, index) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            disabled={allShown}
            onClick={loadMore}
            className="inline-flex items-center justify-center gap-2 px-9 py-3.5 border border-white/30 rounded-full bg-transparent text-white/80 text-[15px] font-medium leading-[1.4]
              transition-all duration-200
              hover:enabled:border-white/60 hover:enabled:bg-white/[0.08] hover:enabled:text-white
              disabled:opacity-40 disabled:cursor-not-allowed
              focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]
              max-[599px]:w-[calc(100%-40px)] max-[599px]:px-6"
            aria-label={`Load more destinations, showing ${shown.length} of ${filtered.length}`}
          >
            <span>{allShown ? "You've seen all destinations" : 'Explore more destinations'}</span>
            {!allShown && (
              <svg
                className="w-4 h-4 stroke-current stroke-2 fill-none transition-transform duration-250 hover:translate-y-[3px]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m6 13 6 6 6-6" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
