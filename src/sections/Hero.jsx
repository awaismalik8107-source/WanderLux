import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import TripSearchForm from '../components/TripSearchForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.76, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden isolate text-white bg-navy"
      id="section-hero"
      role="banner"
      aria-label="Golden hour view of Maldives overwater villas and turquoise lagoon for WanderLux Travel Co."
    >
      {/* Background Image */}
      <img
        src="/assets/wanderlux-maldives-hero.webp"
        alt="Golden hour view of Maldives overwater villas beside a turquoise lagoon."
        width="1920"
        height="1080"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-30 w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0 -z-20" aria-hidden="true" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-[2] flex items-center min-h-screen px-5 md:px-12 pt-[108px] pb-16 md:pt-[108px] max-[768px]:min-h-[90vh] max-[768px]:pt-[98px] max-[768px]:pb-11">
        <div className="w-full max-w-site mx-auto">
          <div className="w-full max-w-[920px] min-w-0 max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center max-[768px]:max-w-[calc(100vw-48px)]">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.3)}
              className="mb-3.5 text-gold text-[13px] max-[768px]:text-xs font-bold tracking-[0.12em] leading-[1.4] uppercase max-[768px]:w-full max-[768px]:text-balance"
            >
              Luxury travel, crafted around you
            </motion.p>

            {/* Title */}
            <motion.h1
              {...fadeUp(0.6)}
              className="max-w-[680px] m-0 font-serif text-[64px] max-[1024px]:text-[38px] max-[768px]:text-[34px] max-[375px]:text-[30px] font-bold leading-[1.15] text-white"
              style={{ textShadow: '0 2px 28px rgba(0,0,0,0.26)' }}
            >
              The world is waiting. Where will you go next?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.9)}
              className="max-w-[580px] mt-4 text-white/[0.88] text-lg max-[1024px]:text-[17px] max-[768px]:text-base max-[375px]:text-[15px] leading-[1.65] max-[768px]:leading-[1.6] text-balance"
              style={{ textShadow: '0 1px 18px rgba(0,0,0,0.22)' }}
            >
              Bespoke itineraries, private villas, and hand-picked experiences across 91 destinations — designed entirely
              around you by a dedicated travel expert.
            </motion.p>

            {/* Search Form */}
            <motion.div {...fadeUp(1.1)} className="mt-8">
              <TripSearchForm />
            </motion.div>

            {/* Trust Line */}
            <motion.p
              {...fadeUp(1.25)}
              className="mt-4 text-white/[0.74] text-[13px] tracking-[0.03em] leading-[1.6] max-[768px]:max-w-[480px]"
              style={{ textShadow: '0 1px 14px rgba(0,0,0,0.24)' }}
            >
              34,000+ trips planned&nbsp; · &nbsp;4.9★ on TripAdvisor&nbsp; · &nbsp;91 destinations&nbsp; · &nbsp;24/7 support
            </motion.p>

            {/* Secondary CTA */}
            <motion.a
              {...fadeUp(1.4)}
              href="#destinations"
              className="inline-flex mt-6 text-white/[0.82] text-sm font-medium underline-offset-[5px] transition-colors duration-200 hover:text-white hover:underline"
            >
              Browse all destinations ↓
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
