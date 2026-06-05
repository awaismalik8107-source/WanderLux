import { useState } from 'react'
import { motion } from 'framer-motion'
import { getImageUrl, getImageSrcset } from '../data/destinations'

export default function DestinationCard({ destination, index }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const d = destination

  const badgeClass = d.badgeType === 'popular'
    ? 'bg-gold text-black'
    : d.badgeType === 'new'
    ? 'bg-white text-black'
    : 'bg-black/60 text-white'

  return (
    <motion.article
      className="group relative h-[300px] sm:h-[360px] lg:h-[380px] xl:h-[420px] overflow-hidden rounded-2xl bg-[#1a1a1a] cursor-pointer transition-shadow duration-350
        hover:shadow-[inset_0_0_0_2px_#C9A84C] hover:scale-[1.02]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={`${d.name}, ${d.country} — ${d.price}`}
      onClick={(e) => {
        if (!e.target.closest('a')) {
          window.location.href = `/destinations/${d.slug}`
        }
      }}
    >
      {/* Image */}
      <picture className="absolute inset-0 block bg-[#1a1a1a]">
        <source
          type="image/webp"
          srcSet={getImageSrcset(d.imageId, 'webp')}
          sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc((100vw - 60px) / 2), 373px"
        />
        <img
          src={getImageUrl(d.imageId, 900, 'jpg')}
          srcSet={getImageSrcset(d.imageId, 'jpg')}
          sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc((100vw - 60px) / 2), 373px"
          alt={d.imageAlt}
          aria-label={d.imageAria}
          width="900"
          height="1260"
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-400 group-hover:brightness-110 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>

      {/* Overlay */}
      <span className="destination-overlay absolute inset-0 z-[1] pointer-events-none" aria-hidden="true" />

      {/* Badge */}
      {d.badge && (
        <span className={`absolute top-[18px] right-[18px] z-[2] px-2.5 py-1 rounded-md text-[11px] font-bold leading-[1.4] ${badgeClass}`}>
          {d.badge}
        </span>
      )}

      {/* Content */}
      <div className="absolute left-0 bottom-0 z-[2] w-full p-6 max-[599px]:p-[18px]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 text-xl leading-none" aria-hidden="true">{d.flag}</span>
          <span className="text-white/70 text-[13px] font-bold tracking-[1.5px] leading-[1.35] uppercase">
            {d.region}
          </span>
        </div>
        <h3 className="mt-1 text-white text-2xl max-[599px]:text-[22px] font-bold leading-[1.2]">
          {d.name}
        </h3>
        <div className="flex flex-wrap items-center gap-[10px_12px] mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.15] text-white text-xs leading-[1.45] backdrop-blur-[8px]">
            {d.duration}
          </span>
        </div>
        <p className="mt-3 text-white/[0.85] text-[15px] leading-[1.45]">{d.price}</p>
        <a
          href={`/destinations/${d.slug}`}
          className="inline-flex items-center gap-1 mt-3 text-gold text-[13px] font-medium leading-[1.4] group-hover:underline underline-offset-4"
          aria-label={`View packages for ${d.name}, ${d.country}`}
        >
          View packages
          <span className="inline-block transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>
    </motion.article>
  )
}
