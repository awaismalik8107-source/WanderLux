import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { pressLogos, certLogos, stats } from '../data/logos'
import LogoRow from '../components/LogoRow'
import StatCounter from '../components/StatCounter'

export default function TrustBar() {
  const [ref, isVisible] = useInView({ threshold: 0.15 })

  return (
    <motion.section
      ref={ref}
      id="section-trust-bar"
      className="relative bg-white pt-[52px] pb-[192px] max-[768px]:pt-9 max-[768px]:pb-[150px]"
      role="complementary"
      aria-label="Press features and certifications"
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-site mx-auto px-5 md:px-12">
        {/* Press Logos */}
        <div aria-labelledby="press-logos-title">
          <span
            id="press-logos-title"
            className="block mb-7 text-[#aaa] text-[11px] font-medium tracking-[0.1em] leading-[1.4] text-center uppercase"
          >
            AS SEEN IN
          </span>
          <LogoRow logos={pressLogos} type="press" isVisible={isVisible} />
        </div>

        {/* Divider */}
        <div className="w-full h-px my-10 bg-[#e8e8e8]" aria-hidden="true" />

        {/* Cert/Partner Logos */}
        <div aria-labelledby="partner-logos-title">
          <span
            id="partner-logos-title"
            className="block mb-7 text-[#aaa] text-[11px] font-medium tracking-[0.1em] leading-[1.4] text-center uppercase"
          >
            CERTIFIED, AWARDED &amp; PARTNERED WITH
          </span>
          <LogoRow logos={certLogos} type="cert" isVisible={isVisible} />
        </div>

        {/* Divider */}
        <div className="w-full h-px my-10 bg-[#e8e8e8]" aria-hidden="true" />

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-around gap-y-8 gap-x-5 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:justify-items-center"
          aria-label="WanderLux business statistics"
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              display={stat.display}
              label={stat.label}
              decimals={stat.decimals}
              suffix={stat.suffix}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
