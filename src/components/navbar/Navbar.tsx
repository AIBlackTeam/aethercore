import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import type { NavLink } from '../../types'

const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

// Section IDs to watch for scroll-spy
const SECTION_IDS = ['services', 'portfolio', 'pricing', 'why-us', 'contact']

export default memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // Navbar background on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = useCallback(() => setOpen(false), [])

  const getLinkHref = (href: string) => href.replace('#', '')

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="AetherCore — Back to top"
          >
            <div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center"
              aria-hidden="true"
            >
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Aether<span className="gradient-text">Core</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((l) => {
              const sectionId = getLinkHref(l.href)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={l.label}
                  href={l.href}
                  role="listitem"
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 font-sans ${
                    isActive
                      ? 'text-[#00d4ff]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm">
              <span>Start Project</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-30 pt-20 glass md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-6 pt-10 list-none m-0 p-0">
                {NAV_LINKS.map((l, i) => {
                  const sectionId = getLinkHref(l.href)
                  const isActive = activeSection === sectionId
                  return (
                    <li key={l.label}>
                      <motion.a
                        href={l.href}
                        aria-current={isActive ? 'location' : undefined}
                        className={`text-xl font-display font-semibold transition-colors ${
                          isActive ? 'text-[#00d4ff]' : 'text-slate-300 hover:text-white'
                        }`}
                        onClick={closeMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        {l.label}
                      </motion.a>
                    </li>
                  )
                })}
                <li>
                  <motion.a
                    href="#contact"
                    className="btn-primary mt-4 inline-block"
                    onClick={closeMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <span>Start Project</span>
                  </motion.a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})
