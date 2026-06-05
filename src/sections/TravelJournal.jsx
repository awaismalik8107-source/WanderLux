import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const filters = [
  'All',
  'Luxury Escapes',
  'Destination Guides',
  'Travel Tips',
  'Culture',
  'Adventure',
]

const articles = [
  {
    category: 'LUXURY ESCAPES',
    tags: ['Luxury Escapes', 'Adventure'],
    date: 'June 2026',
    title: 'How To Choose The Perfect Luxury Escape For Your Travel Style',
    excerpt:
      'From private villas and quiet island retreats to cultural journeys and adventure escapes, discover how to select a trip that matches your pace, comfort, and expectations.',
    readTime: '6 min read',
    linkLabel: 'Read Guide',
    image: '/assets/journal-luxury-escape.webp',
    alt: 'Luxury cliffside destination overlooking the sea during golden hour.',
    featured: true,
  },
  {
    category: 'DESTINATION GUIDE',
    tags: ['Destination Guides', 'Luxury Escapes'],
    date: 'June 2026',
    title: '7 Destinations For Travelers Who Want Calm, Beauty, And Comfort',
    excerpt:
      'A curated list of peaceful destinations for couples, families, and luxury travelers looking for refined escapes.',
    readTime: '5 min read',
    linkLabel: 'Read More',
    image: '/assets/journal-calm-destinations.webp',
    alt: 'Luxury resort overlooking the ocean during sunset.',
  },
  {
    category: 'CULTURE & HERITAGE',
    tags: ['Culture'],
    date: 'May 2026',
    title: 'Why Japan Remains One Of The Most Meaningful Cultural Journeys',
    excerpt:
      'From Kyoto temples to Tokyo\'s modern rhythm, Japan offers a rare balance of tradition, food, design, and discovery.',
    readTime: '7 min read',
    linkLabel: 'Read More',
    image: '/assets/journal-japan-culture.webp',
    alt: 'Traveler walking through a traditional Kyoto temple path.',
  },
  {
    category: 'TRAVEL TIPS',
    tags: ['Travel Tips'],
    date: 'May 2026',
    title: 'What A Private Travel Planner Actually Handles For You',
    excerpt:
      'Flights, stays, routes, transfers, guides, special requests, and real-time support - here is what happens behind the scenes.',
    readTime: '4 min read',
    linkLabel: 'Read More',
    image: '/assets/journal-private-planner.webp',
    alt: 'Open travel notebook with trip planning notes and travel essentials.',
  },
]

function FeaturedArticle({ article, shouldReduceMotion }) {
  return (
    <motion.article
      key={article.title}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
    >
      <a
        href="#blog"
        className="group relative block overflow-hidden rounded-[32px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]"
        aria-label={`${article.linkLabel}: ${article.title}`}
      >
        <motion.img
          src={article.image}
          alt={article.alt}
          width="1600"
          height="1067"
          loading="lazy"
          decoding="async"
          className="h-[340px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05] md:h-[440px] lg:h-[620px]"
          initial={shouldReduceMotion ? false : { scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.82)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-7 md:p-[44px]">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[12px] font-bold uppercase leading-none tracking-[3px] text-[#D4AF37]">
              {article.category}
            </p>
            <p className="text-[14px] leading-none text-white/[0.72]">
              {article.date} / {article.readTime}
            </p>
          </div>
          <h3 className="max-w-[720px] text-[26px] font-bold leading-[1.2] text-white md:text-[36px]">
            {article.title}
          </h3>
          <p className="mt-4 max-w-[660px] text-[16px] leading-[1.7] text-white/[0.82] md:text-[17px]">
            {article.excerpt}
          </p>
          <span className="mt-6 inline-flex text-[16px] font-semibold leading-none text-white underline decoration-transparent underline-offset-8 transition-colors duration-200 group-hover:decoration-current">
            {article.linkLabel}
          </span>
        </div>
      </a>
    </motion.article>
  )
}

function SmallArticle({ article, index, shouldReduceMotion }) {
  return (
    <motion.article
      key={article.title}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease,
      }}
    >
      <a
        href="#blog"
        className="group grid gap-6 rounded-[26px] border border-black/[0.08] bg-[#FAFAFA] p-6 transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-[rgba(200,155,60,0.35)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.08)] focus-visible:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] lg:grid-cols-[170px_minmax(0,1fr)] xl:grid-cols-[190px_minmax(0,1fr)]"
        aria-label={`${article.linkLabel}: ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.alt}
          width="900"
          height="700"
          loading="lazy"
          decoding="async"
          className="h-[240px] w-full rounded-[20px] object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.025] lg:h-[170px]"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="text-[11px] font-bold uppercase leading-none tracking-[2.5px] text-[#C89B3C]">
              {article.category}
            </p>
            <p className="text-[13px] leading-none text-[#888888]">
              {article.date} / {article.readTime}
            </p>
          </div>
          <h3 className="mt-4 text-[22px] font-bold leading-[1.3] text-[#111111]">
            {article.title}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#666666]">
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex text-[15px] font-semibold leading-none text-[#111111] transition-colors duration-200 group-hover:text-[#C89B3C]">
            {article.linkLabel}
          </span>
        </div>
      </a>
    </motion.article>
  )
}

export default function TravelJournal() {
  const [activeFilter, setActiveFilter] = useState('All')
  const shouldReduceMotion = useReducedMotion()

  const visibleArticles = useMemo(() => {
    if (activeFilter === 'All') return articles
    return articles.filter((article) => article.tags.includes(activeFilter))
  }, [activeFilter])

  const featuredArticle = visibleArticles[0]
  const sideArticles = visibleArticles.slice(1)
  const hasSideArticles = sideArticles.length > 0

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  }

  return (
    <section
      id="blog"
      className="relative z-[8] w-full overflow-hidden bg-white"
      aria-labelledby="travel-journal-heading"
    >
      <span id="travel-journal" className="sr-only">
        Travel Journal
      </span>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(circle_at_1px_1px,#111_1px,transparent_0)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-[85px] md:px-10 md:py-[110px] lg:px-20 lg:py-[150px]">
        <motion.div
          className="grid gap-9 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:items-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <div>
            <p className="mb-[22px] text-[13px] font-semibold uppercase leading-none tracking-[4px] text-[#C89B3C]">
              TRAVEL JOURNAL
            </p>
            <h2
              id="travel-journal-heading"
              className="max-w-[620px] font-serif text-[34px] font-bold leading-[1.1] text-[#111111] text-balance md:text-[46px] lg:text-[60px]"
            >
              The Travel Journal
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-[620px] text-[17px] leading-[1.8] text-[#666666] lg:text-[19px]">
              Explore curated destination guides, seasonal travel ideas, luxury stay recommendations, and expert insights designed to help you imagine your next unforgettable journey.
            </p>
            <a
              href="#blog"
              className="mt-6 inline-flex text-[16px] font-semibold leading-none text-[#111111] underline decoration-transparent underline-offset-8 transition-colors duration-200 hover:text-[#C89B3C] hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]"
            >
              View All Guides
            </a>
          </div>
        </motion.div>

        <motion.div
          className="-mx-5 mt-[54px] flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease }}
          aria-label="Filter travel journal articles by category"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-5 py-3 text-[14px] font-semibold leading-none transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] ${
                  isActive
                    ? 'border-[#111111] bg-[#111111] text-white'
                    : 'border-black/[0.08] bg-[#FAF7F0] text-[#333333] hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#111111]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </motion.div>

        <div className={`mt-[54px] grid gap-[38px] ${hasSideArticles ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : 'lg:grid-cols-1'}`}>
          {featuredArticle && (
            <FeaturedArticle
              article={featuredArticle}
              shouldReduceMotion={shouldReduceMotion}
            />
          )}

          {hasSideArticles && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {sideArticles.map((article, index) => (
                <SmallArticle
                  key={article.title}
                  article={article}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
