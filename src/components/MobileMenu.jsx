import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-navy/[0.98] px-6 py-[26px]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.26 }}
          aria-hidden={!isOpen}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-[22px] font-bold text-white">
              WanderLux
            </a>
            <button
              className="relative w-11 h-11 bg-transparent border-0"
              type="button"
              aria-label="Close menu"
              onClick={onClose}
            >
              <span className="absolute left-[10px] top-1/2 w-[25px] h-0.5 bg-white rounded-full rotate-45" />
              <span className="absolute left-[10px] top-1/2 w-[25px] h-0.5 bg-white rounded-full -rotate-45" />
            </button>
          </div>

          {/* Links */}
          <div className="grid gap-6 mt-[72px] text-[28px] font-semibold text-white/[0.86]">
            {menuLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#trip-enquiry"
              onClick={onClose}
              className="inline-flex justify-center w-full mt-6 px-[22px] py-4 border border-gold rounded-lg text-white text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              Enquire now
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
