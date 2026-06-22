import { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Static shape data extracted outside component — no recreation on render
const SHAPES = [
  { id: 'shape-blue-lg', size: 180, x: '8%', y: '20%', color: '#00d4ff', delay: 0, duration: 8 },
  { id: 'shape-purple-md', size: 120, x: '85%', y: '15%', color: '#a855f7', delay: 1.5, duration: 10 },
  { id: 'shape-blue-sm', size: 80, x: '75%', y: '70%', color: '#00d4ff', delay: 0.8, duration: 7 },
  { id: 'shape-violet-xs', size: 60, x: '15%', y: '75%', color: '#7c3aed', delay: 2, duration: 9 },
  { id: 'shape-purple-sm', size: 100, x: '50%', y: '85%', color: '#a855f7', delay: 0.3, duration: 11 },
] as const

// CSS-based particles — avoids 20 Framer Motion instances
const PARTICLE_POSITIONS = Array.from({ length: 16 }, (_, i) => ({
  id: `particle-${i}`,
  left: `${10 + (i * 4.2) % 80}%`,
  top: `${15 + (i * 7.3) % 70}%`,
  color: i % 2 === 0 ? '#00d4ff' : '#a855f7',
  size: i % 3 === 0 ? 2 : 1,
  delay: `${(i * 0.4).toFixed(1)}s`,
  duration: `${3 + (i % 3)}s`,
}))

// Static style constants — computed once, not on every render
const RING_STYLE = {
  background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,212,255,0.07) 25%, transparent 50%, rgba(168,85,247,0.07) 75%, transparent 100%)',
} as const

const CORE_GLOW_STYLE = {
  background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)',
  filter: 'blur(40px)',
} as const

const LINE_TOP_STYLE = {
  background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(168,85,247,0.4), transparent)',
} as const

const LINE_BOTTOM_STYLE = {
  background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(0,212,255,0.4), transparent)',
} as const

export default memo(function HeroBackground() {
  const shouldReduceMotion = useReducedMotion()

  const ringAnimation = useMemo(
    () => (shouldReduceMotion ? {} : { rotate: 360 }),
    [shouldReduceMotion]
  )

  const ringTransition = useMemo(
    () => (shouldReduceMotion ? {} : { duration: 30, repeat: Infinity, ease: 'linear' as const }),
    [shouldReduceMotion]
  )

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Rotating gradient ring — single Framer Motion instance */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={ringAnimation}
        transition={ringTransition}
        style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
      >
        <div className="w-[800px] h-[800px] rounded-full" style={RING_STYLE} />
      </motion.div>

      {/* Core radial glow — static, no animation needed */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={CORE_GLOW_STYLE}
      />

      {/* Floating shapes — Framer Motion, but stable data, reduced when motion off */}
      {!shouldReduceMotion && SHAPES.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color}10 0%, transparent 70%)`,
            border: `1px solid ${shape.color}15`,
            filter: 'blur(1px)',
            willChange: 'transform, opacity',
          }}
          animate={{ y: [0, -24, 0], scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: shape.duration, delay: shape.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* CSS-animated particles — no React overhead per particle */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          {PARTICLE_POSITIONS.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full animate-particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 4px ${p.color}`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      )}

      {/* Horizontal accent lines */}
      <div className="absolute top-[40%] left-0 right-0 h-px opacity-20" style={LINE_TOP_STYLE} />
      <div className="absolute top-[60%] left-0 right-0 h-px opacity-10" style={LINE_BOTTOM_STYLE} />
    </div>
  )
})
