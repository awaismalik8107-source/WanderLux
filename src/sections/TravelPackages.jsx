import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const tiers = [
  {
    name: 'Essential Escape',
    bestFor: 'Couples, families, and first-time luxury travelers.',
    price: 'From $1,900 / traveler',
    description:
      'A refined travel experience with carefully selected hotels, smooth transfers, and guided planning for a comfortable journey.',
    includes: [
      '4 to 6 nights',
      '4-star or selected boutique hotels',
      'Airport transfers',
      'Basic itinerary planning',
      'Optional guided activities',
      'Email support before travel',
    ],
    button: 'Request Essential Plan',
  },
  {
    name: 'Signature Journey',
    badge: 'MOST POPULAR',
    bestFor: 'Travelers who want a complete, personalized, stress-free premium experience.',
    price: 'From $3,900 / traveler',
    description:
      'Our most balanced luxury journey with premium stays, private transfers, curated experiences, and dedicated planning support.',
    includes: [
      '7 to 10 nights',
      '5-star hotels or luxury resorts',
      'Private airport transfers',
      'Personalized itinerary design',
      'Private guided experiences',
      'Restaurant and experience reservations',
      'WhatsApp support during travel',
    ],
    button: 'Request Signature Plan',
    recommended: true,
  },
  {
    name: 'Ultra Private Experience',
    bestFor: 'Honeymoons, VIP travelers, private groups, and once-in-a-lifetime journeys.',
    price: 'From $8,500 / traveler',
    description:
      'A fully private, highly customized travel experience with exclusive stays, private guides, luxury transfers, and white-glove support.',
    includes: [
      '10+ nights',
      'Ultra-luxury resorts, villas, or private lodges',
      'Private chauffeur and premium transfers',
      'Private guides and exclusive experiences',
      'Special occasion planning',
      '24/7 priority support',
      'Custom luxury add-ons',
    ],
    button: 'Request Ultra Plan',
  },
]

function CheckIcon() {
  return (
    <svg
      className="mt-[5px] h-4 w-4 shrink-0 text-[#D9B63E]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.4 4.2L19 7" />
    </svg>
  )
}

function PackageCard({ tier, index, shouldReduceMotion }) {
  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: (itemIndex) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.2 + itemIndex * 0.045,
        ease,
      },
    }),
  }

  const cardOrder = tier.recommended
    ? 'md:max-lg:order-3 md:max-lg:col-span-2 md:max-lg:mx-auto md:max-lg:max-w-[620px] lg:order-none'
    : tier.name === 'Ultra Private Experience'
      ? 'md:max-lg:order-2 lg:order-none'
      : 'md:max-lg:order-1 lg:order-none'

  return (
    <motion.div
      className={cardOrder}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : index * 0.13,
        ease,
      }}
    >
      <article
        className={`group flex min-h-0 flex-col rounded-[34px] border p-[30px] shadow-[0_30px_90px_rgba(0,0,0,0.30)] backdrop-blur-[18px] transition-all duration-[350ms] ease-out hover:-translate-y-[10px] hover:border-[rgba(212,175,55,0.45)] md:min-h-[640px] md:p-[46px] lg:min-h-[680px] ${
          tier.recommended
            ? 'border-[rgba(212,175,55,0.55)] bg-[linear-gradient(180deg,rgba(212,175,55,0.18),rgba(255,255,255,0.08))] lg:scale-[1.04]'
            : 'border-white/[0.14] bg-white/[0.07]'
        }`}
      >
        <div className="min-h-[38px]">
          {tier.badge && (
            <span className="inline-flex rounded-full bg-[#D9B63E] px-4 py-[9px] text-[11px] font-bold uppercase leading-none tracking-[2px] text-[#194979]">
              {tier.badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-[30px] font-bold leading-[1.2] text-white">
          {tier.name}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.6] text-white/[0.62]">
          {tier.bestFor}
        </p>
        <p className="mt-8 text-[28px] font-bold leading-[1.18] text-[#D9B63E] lg:text-[34px]">
          {tier.price}
        </p>
        <p className="mt-6 text-[16px] leading-[1.7] text-white/[0.75]">
          {tier.description}
        </p>

        <motion.ul
          className="mt-8 grid gap-[13px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
        >
          {tier.includes.map((item, itemIndex) => (
            <motion.li
              key={item}
              custom={itemIndex}
              variants={itemVariants}
              className="flex gap-3 text-[15px] leading-[1.7] text-white/[0.78]"
            >
              <CheckIcon />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <a
          href="#trip-enquiry"
          className={`mt-auto inline-flex min-h-[58px] w-full items-center justify-center rounded-full px-6 py-4 text-center text-[15px] font-bold leading-none transition-all duration-[350ms] ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B63E] ${
            tier.recommended
              ? 'border border-transparent bg-[#D9B63E] text-[#194979] hover:-translate-y-[3px] hover:bg-white'
              : 'border border-white/[0.35] bg-transparent text-white hover:bg-white hover:text-[#194979]'
          }`}
          aria-label={`${tier.button} through the custom travel enquiry form`}
        >
          {tier.button}
        </a>
      </article>
    </motion.div>
  )
}

export default function TravelPackages() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  return (
    <section
      id="packages"
      className="relative z-[10] w-full overflow-hidden bg-[#0A1628] bg-[linear-gradient(180deg,#0A1628_0%,#142033_54%,#07101F_100%)] text-white"
      aria-labelledby="travel-packages-heading"
    >
      <span className="sr-only">Travel Packages</span>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[85px] md:px-10 md:py-[110px] lg:px-20 lg:py-[150px]">
        <motion.div
          className="mx-auto mb-[90px] max-w-[900px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#D9B63E]">
            PACKAGE TIERS
          </p>
          <h2
            id="travel-packages-heading"
            className="mx-auto max-w-[900px] font-serif text-[34px] font-bold leading-[1.1] text-white text-balance md:text-[46px] lg:text-[60px]"
          >
            Choose The Journey That Fits Your Style
          </h2>
          <p className="mx-auto mt-[26px] max-w-[820px] text-[17px] leading-[1.8] text-white/[0.72] lg:text-[20px]">
            Whether you want a peaceful escape, a fully private luxury journey, or a once-in-a-lifetime ultra-premium experience, our packages are designed to give you clarity before your custom proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-[34px] md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <PackageCard
              key={tier.name}
              tier={tier}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-[60px] max-w-[780px] text-center text-[15px] leading-[1.7] text-white/[0.58]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
        >
          All packages are customized according to destination, season, hotel availability, flight routes, number of travelers, and personal preferences.
        </motion.p>
      </div>
    </section>
  )
}
