import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

const ease = [0.19, 1, 0.22, 1]

const smallStories = [
  {
    text: 'The Japan itinerary was perfectly balanced. We experienced temples, food, culture, shopping, and quiet hidden places we would never have found alone.',
    name: 'Sara Malik',
    trip: 'Japan Heritage Experience',
    location: 'Islamabad, Pakistan',
  },
  {
    text: 'Our Swiss Alps journey was planned with incredible attention to detail. The hotels, guides, train routes, and mountain views were beyond anything we expected.',
    name: 'Bilal Ahmed',
    trip: 'Alpine Discovery Expedition',
    location: 'Karachi, Pakistan',
  },
  {
    text: 'What impressed us most was the support. Even when our flight changed, the team adjusted everything quickly and kept the trip completely stress-free.',
    name: 'Mariam Sheikh',
    trip: 'Dubai Luxury Escape',
    location: 'Rawalpindi, Pakistan',
  },
]

const metrics = [
  {
    value: 4.9,
    decimals: 1,
    suffix: '/5',
    label: 'Average traveler rating',
  },
  {
    value: 34000,
    suffix: '+',
    label: 'Successful journeys planned',
  },
  {
    value: 91,
    label: 'Destinations served',
  },
  {
    value: 68,
    suffix: '%',
    label: 'Travelers book again',
  },
]

function Rating({ className = '', size = 'text-[16px]' }) {
  return (
    <p
      className={`font-semibold leading-none tracking-[2px] text-[#C9A84C] ${size} ${className}`}
      aria-label="5 out of 5 stars"
    >
      <span aria-hidden="true">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
    </p>
  )
}

function MetricItem({ metric, isActive, isLast }) {
  const value = useCountUp(metric.value, isActive, {
    duration: 1400,
    decimals: metric.decimals ?? 0,
  })

  const formattedValue = metric.value >= 1000
    ? Math.round(value).toLocaleString('en-US')
    : value.toLocaleString('en-US', {
        minimumFractionDigits: metric.decimals ?? 0,
        maximumFractionDigits: metric.decimals ?? 0,
      })

  return (
    <article
      className={`relative px-0 py-3 text-center md:px-8 lg:px-10 ${
        isLast ? '' : 'lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-14 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-white/[0.12]'
      }`}
    >
      <p className="font-serif text-[34px] font-bold leading-none text-[#C9A84C] lg:text-[46px]">
        {formattedValue}
        {metric.suffix ?? ''}
      </p>
      <p className="mt-4 text-[15px] leading-[1.6] text-white/[0.62]">
        {metric.label}
      </p>
    </article>
  )
}

export default function TravelerStories() {
  const shouldReduceMotion = useReducedMotion()
  const metricsRef = useRef(null)
  const metricsInView = useInView(metricsRef, { once: true, margin: '-10%' })

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  const imageReveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      clipPath: shouldReduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  return (
    <section
      id="traveler-stories"
      className="relative z-[6] -mt-[50px] w-full rounded-t-[44px] bg-[linear-gradient(180deg,#0A1628_0%,#142033_55%,#07101F_100%)] text-white"
      aria-labelledby="traveler-stories-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[85px] md:px-10 md:py-[110px] lg:px-20 lg:py-[150px]">
        <motion.div
          className="mx-auto mb-[90px] max-w-[850px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#C9A84C]">
            Traveler Stories
          </p>
          <h2
            id="traveler-stories-heading"
            className="mx-auto max-w-[850px] font-serif text-[34px] font-bold leading-[1.1] text-white text-balance md:text-[46px] lg:text-[60px]"
          >
            Stories From Our Travelers
          </h2>
          <p className="mx-auto mt-[26px] max-w-[760px] text-[17px] leading-[1.8] text-white/[0.72] lg:text-[20px]">
            Every journey leaves behind a story. Hear from travelers who trusted us to design seamless escapes, meaningful adventures, and unforgettable moments across the world.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-[70px]">
          <div className="group relative overflow-hidden rounded-[26px] md:rounded-[34px]">
            <img
              src="/assets/testimonial-travelers-maldives.webp"
              alt="Happy travelers enjoying a luxury beach destination during a curated travel experience."
              width="1024"
              height="1536"
              loading="lazy"
              decoding="async"
              className="h-[380px] w-full object-cover object-center brightness-[0.88] transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04] md:h-[480px] lg:h-[680px]"
            />
            <motion.img
              src="/assets/testimonial-travelers-maldives.webp"
              alt=""
              aria-hidden="true"
              width="1024"
              height="1536"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.25))]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-6 right-6 flex items-center gap-4"
              aria-hidden="true"
            >
              <span className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white/[0.9] text-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-[350ms] ease-out group-hover:scale-[1.08]">
                <svg
                  className="h-6 w-6 translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                </svg>
              </span>
              <span className="hidden text-[15px] font-semibold leading-none text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] sm:inline">
                Watch their story
              </span>
            </div>
          </div>

          <motion.article
            className="rounded-[28px] border border-white/[0.14] bg-[rgba(20,32,51,0.74)] p-[30px] shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-[18px] md:rounded-[34px] md:p-[46px] lg:p-16"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 38, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
          >
            <p className="font-serif text-[92px] leading-none text-[#C9A84C] opacity-90" aria-hidden="true">
              &ldquo;
            </p>
            <blockquote className="-mt-4 font-serif text-[21px] font-normal leading-[1.65] text-white md:text-[25px] lg:text-[30px]">
              Our Maldives retreat felt effortless from the first call to the flight home. Every transfer, villa detail, dining reservation, and private experience was handled before we even had to ask. It felt personal, calm, and truly unforgettable.
            </blockquote>
            <div className="mt-10">
              <Rating className="mb-5 tracking-[3px]" size="text-[18px]" />
              <p className="text-[22px] font-bold leading-[1.25] text-white">
                Ayesha &amp; Hamza Khan
              </p>
              <p className="mt-2 text-[16px] leading-[1.65] text-white/[0.65]">
                Maldives Signature Retreat
                <br />
                Lahore, Pakistan
              </p>
            </div>
          </motion.article>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {smallStories.map((story, index) => (
            <motion.article
              key={story.name}
              tabIndex={0}
              className="group flex min-h-[300px] flex-col rounded-[26px] border border-white/[0.12] bg-[rgba(20,32,51,0.52)] p-[34px] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:border-[rgba(201,168,76,0.35)] focus-visible:-translate-y-2 focus-visible:border-[rgba(201,168,76,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A84C]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease,
              }}
            >
              <Rating className="mb-[22px]" />
              <p className="text-[17px] leading-[1.75] text-white/[0.82]">
                {story.text}
              </p>
              <div className="mt-auto pt-7">
                <p className="text-[18px] font-bold leading-[1.3] text-white">
                  {story.name}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/[0.56]">
                  {story.trip}
                  <br />
                  {story.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          ref={metricsRef}
          className="mt-[90px] grid grid-cols-1 gap-5 border-y border-white/[0.11] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
          aria-label="Traveler trust metrics"
        >
          {metrics.map((metric, index) => (
            <MetricItem
              key={metric.label}
              metric={metric}
              isActive={metricsInView}
              isLast={index === metrics.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
