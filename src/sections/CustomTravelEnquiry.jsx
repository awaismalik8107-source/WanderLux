import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const benefits = [
  'Personalized itinerary planning',
  'Luxury hotel and resort selection',
  'Private transfers, guides, and experiences',
  '24/7 support before and during travel',
]

const destinationOptions = [
  'Maldives',
  'Switzerland',
  'Japan',
  'Turkey',
  'Dubai',
  'Europe',
  'Custom / Not Sure Yet',
]

const travelerOptions = [
  '1 traveler',
  '2 travelers',
  'Family',
  'Group',
  'Corporate',
]

const travelStyleOptions = [
  'Luxury Escape',
  'Adventure',
  'Cultural Journey',
  'Honeymoon',
  'Family Vacation',
  'Business Travel',
  'Not Sure Yet',
]

const budgetOptions = [
  'Under $2,000',
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Custom',
]

const fields = [
  {
    id: 'enquiry-full-name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Your full name',
    autoComplete: 'name',
    required: true,
  },
  {
    id: 'enquiry-email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com',
    autoComplete: 'email',
    required: true,
  },
  {
    id: 'enquiry-phone',
    label: 'Phone / WhatsApp',
    type: 'tel',
    placeholder: '+92 300 0000000',
    autoComplete: 'tel',
  },
  {
    id: 'enquiry-destination',
    label: 'Destination Interested In',
    type: 'select',
    options: destinationOptions,
  },
  {
    id: 'enquiry-dates',
    label: 'Travel Dates',
    type: 'text',
    placeholder: 'Preferred dates or month',
  },
  {
    id: 'enquiry-travelers',
    label: 'Number of Travelers',
    type: 'select',
    options: travelerOptions,
  },
  {
    id: 'enquiry-style',
    label: 'Travel Style',
    type: 'select',
    options: travelStyleOptions,
  },
  {
    id: 'enquiry-budget',
    label: 'Budget Range',
    type: 'select',
    options: budgetOptions,
  },
]

function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
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

function SelectArrow() {
  return (
    <svg
      className="pointer-events-none absolute right-[18px] top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function FormField({ field, index, shouldReduceMotion }) {
  const inputClass =
    'h-[58px] w-full rounded-[16px] border border-black/[0.10] bg-[#FAFAFA] px-[18px] py-4 text-[15px] leading-[1.4] text-[#111111] transition-all duration-200 placeholder:text-[#999999] focus:border-[#C89B3C] focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.12)]'

  return (
    <motion.div
      className="grid gap-2"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : index * 0.045,
        ease,
      }}
    >
      <label
        htmlFor={field.id}
        className="text-[13px] font-semibold leading-none text-[#333333]"
      >
        {field.label}
      </label>

      {field.type === 'select' ? (
        <div className="relative">
          <select
            id={field.id}
            name={field.id}
            defaultValue=""
            className={`${inputClass} appearance-none pr-12`}
          >
            <option value="" disabled>
              Select option
            </option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectArrow />
        </div>
      ) : (
        <input
          id={field.id}
          name={field.id}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required}
          className={inputClass}
        />
      )}
    </motion.div>
  )
}

export default function CustomTravelEnquiry() {
  const [statusMessage, setStatusMessage] = useState('')
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  const benefitList = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const benefitItem = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatusMessage('Thank you. A dedicated travel specialist will review your enquiry and respond within 24 hours.')
  }

  return (
    <section
      id="trip-enquiry"
      className="relative z-[9] w-full overflow-hidden bg-[#FAF7F0] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF7F0_45%,#F4EFE4_100%)]"
      aria-labelledby="custom-travel-enquiry-heading"
    >
      <span className="sr-only">Custom Travel Enquiry</span>
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 px-5 py-[85px] md:px-10 md:py-[110px] lg:grid-cols-[42fr_58fr] lg:gap-20 lg:px-20 lg:py-[150px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#C89B3C]">
            PLAN YOUR TRIP
          </p>
          <h2
            id="custom-travel-enquiry-heading"
            className="max-w-[600px] font-serif text-[34px] font-bold leading-[1.1] text-[#111111] text-balance md:text-[46px] lg:text-[60px]"
          >
            Begin Your Journey With Us
          </h2>
          <p className="mt-7 max-w-[610px] text-[17px] leading-[1.8] text-[#666666] lg:text-[20px]">
            Tell us where you want to go, how you want to travel, and what kind of experience you are imagining. Our travel specialists will review your preferences and prepare a carefully curated proposal designed around you.
          </p>

          <motion.ul
            className="mt-[42px] grid gap-[18px]"
            variants={benefitList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8%' }}
          >
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                className="flex items-start gap-4 text-[17px] leading-[1.6] text-[#333333]"
                variants={benefitItem}
              >
                <span className="mt-1 text-[#C89B3C]">
                  <CheckIcon />
                </span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-[42px] rounded-[22px] border border-black/[0.08] bg-white p-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.25, ease }}
          >
            <p className="text-[17px] font-bold leading-[1.35] text-[#111111]">
              Response time: Within 24 hours
            </p>
            <p className="mt-2 text-[15px] leading-[1.7] text-[#666666]">
              A dedicated travel specialist will contact you after reviewing your enquiry.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-[36px] border border-black/[0.08] bg-white p-7 shadow-[0_34px_100px_rgba(0,0,0,0.10)] md:p-11 lg:p-14"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 36, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
        >
          <div className="mb-[38px]">
            <h3 className="text-[30px] font-bold leading-[1.2] text-[#111111]">
              Request A Custom Travel Proposal
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#666666]">
              Share a few details and our specialists will begin shaping your journey.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                field={field}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}

            <motion.div
              className="grid gap-2 md:col-span-2"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : fields.length * 0.045,
                ease,
              }}
            >
              <label
                htmlFor="enquiry-message"
                className="text-[13px] font-semibold leading-none text-[#333333]"
              >
                Message / Special Requests
              </label>
              <textarea
                id="enquiry-message"
                name="enquiry-message"
                placeholder="Tell us about your dream trip, preferred hotels, activities, or any special requirements."
                className="h-[150px] w-full resize-none rounded-[16px] border border-black/[0.10] bg-[#FAFAFA] px-[18px] py-4 text-[15px] leading-[1.55] text-[#111111] transition-all duration-200 placeholder:text-[#999999] focus:border-[#C89B3C] focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.12)]"
              />
            </motion.div>

            <motion.div
              className="mt-2 md:col-span-2"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : (fields.length + 1) * 0.045,
                ease,
              }}
            >
              <button
                type="submit"
                className="inline-flex h-[62px] w-full items-center justify-center rounded-full bg-[#111111] px-7 text-[16px] font-bold leading-none text-white transition-all duration-[350ms] ease-out hover:-translate-y-[3px] hover:bg-[#C89B3C] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]"
              >
                Send My Travel Enquiry
              </button>
              <p className="mx-auto mt-4 max-w-[560px] text-center text-[13px] leading-[1.6] text-[#777777]">
                Your information is private and will only be used to prepare your travel proposal.
              </p>
              <p className="mt-3 min-h-[22px] text-center text-[14px] leading-[1.55] text-[#4D6B3C]" role="status" aria-live="polite">
                {statusMessage}
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
