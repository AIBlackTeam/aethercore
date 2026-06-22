import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import HeroCards from './HeroCards'
import HeroBackground from './HeroBackground'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const HEADLINE_STYLE = {
  background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #a855f7 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
  filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))',
} as const

const GLOW_STYLE = {
  background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.12) 0%, rgba(168,85,247,0.08) 50%, transparent 100%)',
  filter: 'blur(30px)',
  transform: 'translateY(10px)',
} as const

const TECH_STACK = ['React', 'Next.js', 'Python', 'AWS', 'TensorFlow', 'Node.js'] as const

export default memo(function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      aria-label="AetherCore — Engineering Digital Excellence"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="flex justify-center mb-8">
            <span className="section-tag" aria-label="Next-generation digital agency">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" aria-hidden="true" />
              Next-generation digital agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="relative mb-6">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={GLOW_STYLE} />
            <h1 className="relative font-display font-bold text-[clamp(2.8rem,7.5vw,6rem)] leading-[1.06] tracking-tight text-white">
              Engineering{' '}
              <span style={HEADLINE_STYLE}>Digital</span>
              <br />
              Excellence
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={shouldReduceMotion ? {} : itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build powerful websites, AI solutions, and digital products that help ambitious
            businesses scale globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={shouldReduceMotion ? {} : itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
              aria-label="Start a project with AetherCore"
            >
              <span>Start Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary inline-flex items-center justify-center gap-2"
              aria-label="Explore our portfolio work"
            >
              <ArrowDown size={14} aria-hidden="true" />
              Explore Work
            </a>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            variants={shouldReduceMotion ? {} : itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mt-14"
            aria-label="Technologies we use"
          >
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest mr-2" aria-hidden="true">
              Built with
            </span>
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-slate-500 glass rounded px-2.5 py-1 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <HeroCards />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono text-slate-600 tracking-widest">SCROLL</span>
        {!shouldReduceMotion && (
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    </section>
  )
})
