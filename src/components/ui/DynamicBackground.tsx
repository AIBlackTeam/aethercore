import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Static style objects — never recreated on render
const BASE_GRADIENT = {
  background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
  filter: 'blur(40px)',
} as const

const MID_GRADIENT = {
  background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
  filter: 'blur(60px)',
} as const

const BOTTOM_GRADIENT = {
  background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
  filter: 'blur(50px)',
} as const

const GRID_STYLE = {
  backgroundImage: `
    linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
  `,
  backgroundSize: '80px 80px',
} as const

export default memo(function DynamicBackground() {
  const shouldReduceMotion = useReducedMotion()

  const orb1Animate = shouldReduceMotion ? {} : { x: [0, 30, 0], y: [0, -20, 0] }
  const orb2Animate = shouldReduceMotion ? {} : { x: [0, -40, 0], y: [0, 30, 0] }
  const orb3Animate = shouldReduceMotion ? {} : { x: [0, 20, 0], y: [0, 20, 0] }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#050b14] to-[#020408]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{ ...BASE_GRADIENT, willChange: shouldReduceMotion ? 'auto' : 'transform' }}
        animate={orb1Animate}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[-15%] w-[700px] h-[700px] rounded-full"
        style={{ ...MID_GRADIENT, willChange: shouldReduceMotion ? 'auto' : 'transform' }}
        animate={orb2Animate}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full"
        style={{ ...BOTTOM_GRADIENT, willChange: shouldReduceMotion ? 'auto' : 'transform' }}
        animate={orb3Animate}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={GRID_STYLE} />
    </div>
  )
})
