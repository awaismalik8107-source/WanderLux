import { motion } from 'framer-motion'

export default function LogoRow({ logos, type, isVisible }) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-[18px] md:justify-between m-0 p-0 list-none ${
        type === 'cert' ? '' : ''
      }`}
      aria-label={type === 'press' ? 'Press and media logos' : 'Certification, award, and partner logos'}
    >
      {logos.map((logo, i) => (
        <motion.li
          key={logo.src}
          className={`inline-flex items-center justify-center min-w-0 ${
            type === 'cert' ? 'flex-col gap-[5px]' : ''
          }`}
          initial={{ opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width="260"
            height="56"
            loading="lazy"
            decoding="async"
            className="block w-auto h-7 max-w-[138px] object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:max-w-[138px] max-[768px]:max-w-[96px] max-[375px]:max-w-[88px]"
          />
          {type === 'cert' && logo.sub && (
            <span className="text-[#bbb] text-[9px] font-medium tracking-[0.07em] leading-[1.2] text-center uppercase">
              {logo.sub}
            </span>
          )}
        </motion.li>
      ))}
    </ul>
  )
}
