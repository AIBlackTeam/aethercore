import { memo } from 'react'
import { motion } from 'framer-motion'
import { trustedCompanies } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'

export default memo(function Trusted() {
  return (
    <SectionWrapper className="relative py-16 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-slate-600 mb-10">
          Trusted by forward-thinking companies
        </p>
        <ul
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 list-none p-0 m-0"
          aria-label="Companies that trust AetherCore"
        >
          {trustedCompanies.map((name) => (
            <motion.li
              key={name}
              className="flex items-center gap-2.5 group cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-6 h-6 rounded bg-gradient-to-br from-[#00d4ff20] to-[#a855f720] border border-white/10 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-[8px] font-mono font-bold text-slate-400">{name[0]}</span>
              </div>
              <span className="text-slate-500 font-display font-semibold text-sm tracking-wide group-hover:text-slate-300 transition-colors duration-300">
                {name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
})
