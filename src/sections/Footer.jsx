import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const exploreLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Featured Packages', href: '#featured-packages' },
  { label: 'Traveler Stories', href: '#traveler-stories' },
  { label: 'Travel Journal', href: '#blog' },
  { label: 'About Us', href: '#why-choose-us' },
]

const serviceLinks = [
  'Luxury Escapes',
  'Honeymoon Planning',
  'Family Vacations',
  'Corporate Travel',
  'Private Guided Tours',
  'Custom Itineraries',
]

const legalLinks = [
  'Privacy Policy',
  'Terms & Conditions',
  'Cancellation Policy',
  'Cookie Policy',
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
]

function SocialIcon({ name }) {
  const iconProps = {
    className: 'h-[18px] w-[18px]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (name === 'facebook') {
    return (
      <svg {...iconProps}>
        <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.4l.6-3h-3V9c0-.6.4-1 1-1Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...iconProps}>
        <path d="M6.5 10v8" />
        <path d="M10.5 18v-4.4c0-2 1.2-3.6 3.3-3.6 1.9 0 3.2 1.4 3.2 3.6V18" />
        <path d="M6.5 6.5h.01" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    )
  }

  if (name === 'youtube') {
    return (
      <svg {...iconProps}>
        <path d="M3.8 8.8c.2-1.3 1.2-2.2 2.5-2.4C8 6.1 12 6.1 12 6.1s4 0 5.7.3c1.3.2 2.3 1.1 2.5 2.4.3 1.7.3 3.2.3 3.2s0 1.5-.3 3.2c-.2 1.3-1.2 2.2-2.5 2.4-1.7.3-5.7.3-5.7.3s-4 0-5.7-.3c-1.3-.2-2.3-1.1-2.5-2.4-.3-1.7-.3-3.2-.3-3.2s0-1.5.3-3.2Z" />
        <path d="m10.4 9.7 4.1 2.3-4.1 2.3V9.7Z" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
    </svg>
  )
}

function FooterColumn({ title, children, className = '', index, shouldReduceMotion }) {
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.09,
        ease,
      }}
    >
      {title && (
        <h3 className="mb-6 text-[15px] font-bold uppercase leading-none tracking-[2.5px] text-white">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  )
}

export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const shouldReduceMotion = useReducedMotion()

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    setNewsletterStatus('Thank you. You are subscribed to curated travel ideas.')
  }

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease },
    },
  }

  return (
    <footer
      id="footer"
      className="border-t border-white/[0.10] bg-[#07101F] bg-[linear-gradient(180deg,#07101F_0%,#0A1628_52%,#06101B_100%)] text-white"
      aria-labelledby="footer-heading"
    >
      <span id="footer-theme" className="sr-only">
        Continue The Journey
      </span>

      <motion.div
        className="mx-auto max-w-[1000px] px-5 pb-[70px] pt-[85px] text-center md:px-10 md:pb-[84px] md:pt-[105px] lg:pb-[90px] lg:pt-[120px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#D4AF37]">
          READY WHEN YOU ARE
        </p>
        <h2
          id="footer-heading"
          className="mx-auto max-w-[850px] font-serif text-[34px] font-bold leading-[1.1] text-white text-balance md:text-[44px] lg:text-[58px]"
        >
          Let&rsquo;s Design A Journey Worth Remembering
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.8] text-white/[0.68] lg:text-[19px]">
          Share your destination, travel style, and expectations. Our specialists will help turn your idea into a carefully planned travel experience.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#trip-enquiry"
            className="inline-flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#D4AF37] px-[34px] py-[18px] text-[16px] font-bold leading-none text-[#0A1628] transition-all duration-[350ms] ease-out hover:-translate-y-[3px] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] sm:w-auto"
          >
            Plan My Trip
          </a>
          <a
            href="#packages"
            className="inline-flex min-h-[58px] w-full items-center justify-center rounded-full border border-white/[0.28] bg-transparent px-[34px] py-[18px] text-[16px] font-semibold leading-none text-white transition-all duration-[350ms] ease-out hover:bg-white hover:text-[#0A1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] sm:w-auto"
          >
            Explore Packages
          </a>
        </div>
      </motion.div>

      <div className="border-t border-white/[0.10]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-[60px] px-5 py-16 md:grid-cols-2 md:px-10 md:py-20 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr] lg:px-20">
          <FooterColumn index={0} shouldReduceMotion={shouldReduceMotion}>
            <a
              href="#section-hero"
              className="inline-flex font-serif text-[28px] font-bold leading-none tracking-[-0.5px] text-white transition-colors duration-200 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              aria-label="WanderLux Travel home"
            >
              WanderLux Travel
            </a>
            <p className="mt-6 max-w-[330px] text-[15px] leading-[1.75] text-white/[0.62]">
              Curated luxury journeys, private escapes, and meaningful travel experiences designed with care, comfort, and detail.
            </p>
            <div className="mt-7 flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.16] text-white/[0.75] transition-all duration-[350ms] ease-out hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                  aria-label={`WanderLux Travel on ${social.label}`}
                >
                  <SocialIcon name={social.icon} />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </FooterColumn>

          <FooterColumn title="Explore" index={1} shouldReduceMotion={shouldReduceMotion}>
            <nav aria-label="Footer explore navigation">
              <ul className="grid gap-4">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex text-[15px] leading-none text-white/[0.65] transition-all duration-200 hover:translate-x-1 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          <FooterColumn title="Services" index={2} shouldReduceMotion={shouldReduceMotion}>
            <nav aria-label="Footer services navigation">
              <ul className="grid gap-4">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#trip-enquiry"
                      className="inline-flex text-[15px] leading-none text-white/[0.65] transition-all duration-200 hover:translate-x-1 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          <FooterColumn title="Contact" index={3} shouldReduceMotion={shouldReduceMotion}>
            <address className="not-italic text-[15px] leading-[1.75] text-white/[0.65]">
              <p>
                Email:
                <br />
                <a
                  href="mailto:hello@wanderluxtravel.com"
                  className="text-white transition-colors duration-200 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                >
                  hello@wanderluxtravel.com
                </a>
              </p>
              <p className="mt-4">
                Phone / WhatsApp:
                <br />
                <a
                  href="tel:+923000000000"
                  className="text-white transition-colors duration-200 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                >
                  +92 300 0000000
                </a>
              </p>
              <p className="mt-4">
                Office:
                <br />
                <span className="text-white">Islamabad, Pakistan</span>
              </p>
              <p className="mt-4">
                Support:
                <br />
                <span className="text-white">Available Monday to Saturday</span>
                <br />
                <span className="text-white">10:00 AM - 7:00 PM</span>
              </p>
            </address>

            <form className="mt-8" onSubmit={handleNewsletterSubmit}>
              <p className="mb-3 text-[16px] font-bold leading-[1.35] text-white">
                Receive Curated Travel Ideas
              </p>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto]">
                <input
                  id="footer-newsletter-email"
                  name="footer-newsletter-email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="min-h-[50px] rounded-full border border-white/[0.14] bg-white/[0.08] px-5 text-[15px] text-white outline-none transition-all duration-200 placeholder:text-white/[0.45] focus:border-[#D4AF37] focus:ring-4 focus:ring-[rgba(212,175,55,0.16)]"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#D4AF37] px-6 text-[15px] font-bold leading-none text-[#0A1628] transition-all duration-[350ms] ease-out hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 min-h-[20px] text-[13px] leading-[1.6] text-white/[0.58]" role="status" aria-live="polite">
                {newsletterStatus}
              </p>
            </form>
          </FooterColumn>
        </div>
      </div>

      <p className="mx-auto max-w-[780px] px-5 pb-8 text-center text-[13px] leading-[1.6] text-white/[0.45] md:px-10">
        Licensed travel consultants. Partnered with verified hotels, guides, and destination operators.
      </p>

      <div className="border-t border-white/[0.10]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 px-5 py-7 text-center md:flex-row md:px-10 md:text-left lg:px-20">
          <p className="text-[14px] leading-[1.6] text-white/[0.50]">
            &copy; 2026 WanderLux Travel. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#footer"
                    className="text-[14px] leading-none text-white/[0.50] transition-colors duration-200 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
