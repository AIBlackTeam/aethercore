import { motion } from 'framer-motion'
import { stats } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'

const GRADIENT_STYLE = {
  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

export default function Stats() {
  return (
    <SectionWrapper className="relative py-20 px-6 overflow-hidden" aria-label="Company statistics">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.04) 30%, rgba(168,85,247,0.04) 70%, transparent 100%)' }}
      />
      <div className="absolute inset-0 border-y border-white/[0.04] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-dark-900/80 backdrop-blur-sm flex flex-col items-center justify-center py-10 px-6 text-center hover:bg-dark-800/60 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <dt className="order-2 text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">
                {stat.label}
              </dt>
              <dd className="order-1 font-display font-bold text-4xl md:text-5xl" style={GRADIENT_STYLE}>
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  )
}
