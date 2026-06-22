import { motion } from 'framer-motion'

const LETTERS = ['A', 'e', 't', 'h', 'e', 'r', 'C', 'o', 'r', 'e'] as const

export default function Loader() {
  return (
    <div
      className="fixed inset-0 bg-[#020408] flex items-center justify-center z-50"
      role="status"
      aria-label="Loading AetherCore"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00d4ff] border-r-[#a855f7]" />
          <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-[#00d4ff] border-l-[#a855f7]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#00d4ff] font-display font-bold text-sm">AC</span>
          </div>
        </motion.div>

        <div className="flex gap-1.5" aria-hidden="true">
          {LETTERS.map((letter, i) => (
            <motion.span
              key={`loader-${letter}-${i}`}
              className="font-display text-slate-400 text-sm font-medium"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.08, repeat: Infinity }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
