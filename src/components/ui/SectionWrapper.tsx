import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  'aria-label'?: string
}

const SectionWrapper = memo(function SectionWrapper({
  children,
  className = '',
  id,
  delay = 0,
  'aria-label': ariaLabel,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      aria-label={ariaLabel}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.section>
  )
})

export default SectionWrapper
