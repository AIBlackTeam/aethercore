import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BTN_STYLE = {
  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
  boxShadow: '0 0 25px rgba(0,212,255,0.35), 0 0 50px rgba(168,85,247,0.2)',
} as const

const BTN_HOVER_STYLE = {
  boxShadow: '0 0 35px rgba(0,212,255,0.5), 0 0 70px rgba(168,85,247,0.3)',
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'instant' : 'smooth' })
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center"
          style={BTN_STYLE}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, ...BTN_HOVER_STYLE }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} className="text-white" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
