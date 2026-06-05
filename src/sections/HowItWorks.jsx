import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const processSteps = [
  {
    number: '01',
    title: 'Share Your Travel Vision',
    description:
      'Tell us where you want to go, who you are traveling with, your preferred style, budget range, dates, and the kind of experience you want to create.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Receive A Curated Proposal',
    description:
      'Our specialists design a personalized itinerary with selected hotels, routes, experiences, transfers, guides, and estimated pricing for your review.',
    icon: 'document',
  },
  {
    number: '03',
    title: 'Refine Every Detail',
    description:
      'We adjust the plan until it feels right. From room preferences and private tours to flight timing and special requests, every detail is refined before confirmation.',
    icon: 'sliders',
  },
  {
    number: '04',
    title: 'Travel With Full Support',
    description:
      'Once confirmed, we handle bookings and remain available throughout your journey, making sure everything runs smoothly from departure to return.',
    icon: 'headset',
  },
]

function ProcessIcon({ name }) {
  const iconProps = {
    className: 'h-[42px] w-[42px]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (name === 'document') {
    return (
      <svg {...iconProps}>
        <path d="M6.5 3.5h7l4 4v13h-11v-17Z" />
        <path d="M13.5 3.5v4h4" />
        <path d="M9 11h6" />
        <path d="M9 14.5h6" />
        <path d="M9 18h3.5" />
      </svg>
    )
  }

  if (name === 'sliders') {
    return (
      <svg {...iconProps}>
        <path d="M5 6.5h8" />
        <path d="M17 6.5h2" />
        <path d="M5 12h2" />
        <path d="M11 12h8" />
        <path d="M5 17.5h9" />
        <path d="M18 17.5h1" />
        <path d="M13 4.5v4" />
        <path d="M7 10v4" />
        <path d="M14 15.5v4" />
      </svg>
    )
  }

  if (name === 'headset') {
    return (
      <svg {...iconProps}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M5 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z" />
        <path d="M16 13h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3v-5Z" />
        <path d="M18 18v.4A2.6 2.6 0 0 1 15.4 21H13" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.3" />
      <path d="m15.3 8.7-2.2 4.4-4.4 2.2 2.2-4.4 4.4-2.2Z" />
      <path d="M12 2.7v2" />
      <path d="M12 19.3v2" />
      <path d="M2.7 12h2" />
      <path d="M19.3 12h2" />
    </svg>
  )
}

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  const lineReveal = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, scaleX: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  return (
    <section
      id="how-it-works"
      className="relative z-[7] -mt-[50px] w-full rounded-t-[44px] bg-[linear-gradient(180deg,#FAF7F0_0%,#FFFFFF_100%)]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[85px] md:px-10 md:py-[110px] lg:px-20 lg:py-[150px]">
        <motion.div
          className="mx-auto mb-[95px] max-w-[820px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#C89B3C]">
            HOW IT WORKS
          </p>
          <h2
            id="how-it-works-heading"
            className="mx-auto max-w-[800px] font-serif text-[34px] font-bold leading-[1.1] text-[#111111] text-balance md:text-[46px] lg:text-[60px]"
          >
            From Dream To Departure
          </h2>
          <p className="mx-auto mt-[26px] max-w-[780px] text-[17px] leading-[1.8] text-[#666666] lg:text-[20px]">
            Planning a meaningful journey should feel exciting, not overwhelming. Our travel specialists guide you through every step, designing a seamless experience around your destination, budget, comfort, and personal style.
          </p>
        </motion.div>

        <div className="relative max-[639px]:pl-8 max-[639px]:before:absolute max-[639px]:before:bottom-4 max-[639px]:before:left-2 max-[639px]:before:top-4 max-[639px]:before:w-px max-[639px]:before:bg-[rgba(200,155,60,0.35)]">
          <motion.div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[80px] z-0 hidden h-px origin-left bg-[rgba(200,155,60,0.35)] lg:block"
            variants={lineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8%' }}
            aria-hidden="true"
          />
          {['25%', '50%', '75%'].map((left, index) => (
            <motion.span
              key={left}
              className="pointer-events-none absolute top-[74px] z-20 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#C89B3C] shadow-[0_0_0_8px_rgba(250,247,240,0.95)] lg:block"
              style={{ left }}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : 0.18 + index * 0.12,
                ease,
              }}
              aria-hidden="true"
            />
          ))}

          <div className="relative z-10 grid grid-cols-1 gap-[34px] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                className="group relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-7 shadow-[0_28px_80px_rgba(0,0,0,0.07)] transition-all duration-[350ms] ease-out hover:-translate-y-[10px] hover:shadow-[0_36px_100px_rgba(0,0,0,0.12)] md:min-h-[390px] md:rounded-[30px] md:p-[42px]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.14,
                  ease,
                }}
              >
                <span
                  className="absolute -left-[35px] top-10 hidden h-3 w-3 rounded-full bg-[#C89B3C] shadow-[0_0_0_7px_#FAF7F0] max-[639px]:block"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute right-7 top-7 font-serif text-[64px] font-bold leading-none text-[rgba(200,155,60,0.12)] md:right-9 md:top-8 md:text-[86px]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div
                  className="mb-8 grid h-[76px] w-[76px] place-items-center rounded-full bg-[rgba(200,155,60,0.10)] text-[#C89B3C]"
                  aria-hidden="true"
                >
                  <ProcessIcon name={step.icon} />
                </div>
                <h3 className="relative text-[24px] font-bold leading-[1.25] text-[#111111]">
                  {step.title}
                </h3>
                <p className="relative mt-[18px] text-[16px] leading-[1.75] text-[#666666]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mx-auto mt-[90px] max-w-[720px] text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
        >
          <h3 className="font-serif text-[30px] font-bold leading-[1.2] text-[#111111] md:text-[38px]">
            Ready to start planning your journey?
          </h3>
          <p className="mx-auto mt-4 max-w-[620px] text-[17px] leading-[1.75] text-[#666666]">
            Tell us your destination, dates, and travel style. Our specialists will prepare a personalized proposal for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#trip-enquiry"
              className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[#111111] px-[34px] py-[18px] text-[16px] font-semibold leading-none text-white transition-all duration-[350ms] ease-out hover:-translate-y-[3px] hover:bg-[#C89B3C] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]"
            >
              Plan My Trip
            </a>
            <a
              href="#packages"
              className="inline-flex min-h-[44px] items-center justify-center text-[16px] font-semibold leading-none text-[#111111] underline decoration-transparent underline-offset-8 transition-colors duration-200 hover:text-[#C89B3C] hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]"
            >
              View Travel Packages
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
