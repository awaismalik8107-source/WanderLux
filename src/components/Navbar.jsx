import { useState } from 'react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-10" aria-label="Primary navigation">
        <div className="w-full max-w-site mx-auto px-5 md:px-12 flex items-center justify-between gap-8 min-h-[76px] md:min-h-[88px]">
          {/* Logo */}
          <a href="#" className="font-serif text-[22px] font-bold text-white leading-none" aria-label="WanderLux home">
            WanderLux
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 transition-colors duration-200 hover:text-white group"
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#trip-enquiry"
            className="hidden lg:inline-flex items-center justify-center min-h-[38px] px-[18px] py-2 border border-gold rounded-md text-white text-sm font-medium transition-all duration-200 hover:bg-gold hover:border-gold"
          >
            Enquire now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] bg-transparent border-0"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-[26px] h-0.5 bg-white rounded-full" />
            <span className="block w-[26px] h-0.5 bg-white rounded-full" />
            <span className="block w-[26px] h-0.5 bg-white rounded-full" />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
