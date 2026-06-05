import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const features = [
  {
    title: 'Tailor-Made Planning',
    description:
      'Every itinerary is built around your travel style, schedule, comfort level, and personal preferences.',
    icon: 'compass',
    position:
      'lg:left-[-24px] xl:left-[-34px] lg:top-[54px] xl:top-[64px]',
  },
  {
    title: 'Verified Luxury Stays',
    description:
      'Hotels, resorts, and villas are carefully selected for quality, service, safety, and experience.',
    icon: 'shield',
    position:
      'lg:right-[-24px] xl:right-[-36px] lg:top-[126px] xl:top-[118px]',
  },
  {
    title: '24/7 Travel Support',
    description:
      'Our team stays available before, during, and after your journey for smooth assistance.',
    icon: 'headset',
    position:
      'lg:left-[-28px] xl:left-[-46px] lg:bottom-[118px] xl:bottom-[128px]',
  },
  {
    title: 'Private Local Experts',
    description:
      'Enjoy guided experiences with trusted destination specialists who know every hidden detail.',
    icon: 'pin',
    position:
      'lg:right-[-24px] xl:right-[-34px] lg:bottom-[48px] xl:bottom-[60px]',
  },
]

const trustItems = [
  {
    number: '01',
    title: 'Personal Travel Designers',
    description: 'Dedicated specialists for every trip.',
  },
  {
    number: '02',
    title: 'Flexible Itineraries',
    description: 'Plans adjusted around your schedule.',
  },
  {
    number: '03',
    title: 'Transparent Pricing',
    description: 'No hidden charges or unclear fees.',
  },
  {
    number: '04',
    title: 'End-to-End Handling',
    description: 'Flights, stays, transfers, guides, and support.',
  },
]

function FeatureIcon({ name }) {
  const iconProps = {
    className:
      'mb-4 h-[34px] w-[34px] text-[#C89B3C] transition-transform duration-[350ms] ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (name === 'shield') {
    return (
      <svg {...iconProps}>
        <path d="M12 3 19 6v5.2c0 4.1-2.8 7.9-7 9.8-4.2-1.9-7-5.7-7-9.8V6l7-3Z" />
        <path d="m9.4 12 1.8 1.8 3.7-4" />
      </svg>
    )
  }

  if (name === 'headset') {
    return (
      <svg {...iconProps}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M5 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z" />
        <path d="M16 13h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3v-5Z" />
        <path d="M18 18v.5A2.5 2.5 0 0 1 15.5 21H13" />
      </svg>
    )
  }

  if (name === 'pin') {
    return (
      <svg {...iconProps}>
        <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
        <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        <path d="m17.5 4.5.7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.3.7.2-1.5-1.1-1.1 1.5-.2.7-1.4Z" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m15.2 8.8-2.1 4.3-4.3 2.1 2.1-4.3 4.3-2.1Z" />
      <path d="M12 2.8v2" />
      <path d="M12 19.2v2" />
      <path d="M2.8 12h2" />
      <path d="M19.2 12h2" />
    </svg>
  )
}

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  const imageReveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      clipPath: shouldReduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  return (
    <section
      id="why-choose-us"
      className="relative z-[5] -mt-10 w-full rounded-t-[40px] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF7F0_100%)]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 md:py-[110px] lg:px-20 lg:py-[150px]">
        <div className="grid items-center gap-14 lg:grid-cols-[45fr_55fr] lg:gap-[90px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
          >
            <p className="mb-6 text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#C89B3C]">
              Why Choose Us
            </p>
            <h2
              id="why-choose-us-heading"
              className="max-w-[560px] font-serif text-[34px] font-bold leading-[1.1] text-[#111111] text-balance md:text-[44px] xl:text-[58px]"
            >
              The Difference Is In The Details
            </h2>
            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.8] text-[#666666] lg:text-[20px]">
              From the first conversation to the final moment of your journey, every detail is handled with care. Our specialists design seamless travel experiences built around your style, comfort, budget, and expectations.
            </p>
            <blockquote className="mt-[45px] border-l-[3px] border-[#C89B3C] pl-[22px] font-serif text-[21px] italic leading-[1.6] text-[#333333] lg:text-[22px]">
              &ldquo;Luxury travel is not only about where you go. It is about how effortlessly the journey unfolds.&rdquo;
            </blockquote>
          </motion.div>

          <div className="relative">
            <motion.div
              className="overflow-hidden rounded-[24px] lg:rounded-[34px]"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
            >
              <img
                src="/assets/why-choose-us-traveler.webp"
                alt="Luxury traveler overlooking a scenic destination with a curated travel experience."
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full object-cover object-center md:h-[520px] lg:h-[720px]"
              />
            </motion.div>

            <div className="mt-[18px] grid grid-cols-1 gap-[18px] lg:contents">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  tabIndex={0}
                  className={`group rounded-[22px] border border-white/55 bg-white/[0.78] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-[18px] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.16)] focus-visible:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] lg:absolute lg:w-[224px] lg:p-5 xl:w-[286px] xl:p-6 ${feature.position}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6%' }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion ? 0 : index * 0.12,
                    ease,
                  }}
                >
                  <FeatureIcon name={feature.icon} />
                  <h3 className="text-[20px] font-bold leading-[1.3] text-[#111111] lg:text-[18px] xl:text-[20px]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[#666666] lg:text-[14px] xl:text-[15px]">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-[100px] grid grid-cols-1 gap-9 border-t border-black/[0.08] pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
          aria-label="Travel agency trust commitments"
        >
          {trustItems.map((item) => (
            <article key={item.number}>
              <p className="mb-5 text-[13px] font-bold leading-none tracking-[3px] text-[#C89B3C]">
                {item.number}
              </p>
              <h3 className="text-[21px] font-bold leading-[1.25] text-[#111111]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#666666]">
                {item.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
