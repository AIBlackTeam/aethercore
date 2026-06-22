import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PortfolioMockup from './PortfolioMockup'
import type { PortfolioProject } from '../../types'

interface PortfolioCardProps extends PortfolioProject {
  index: number
}

const PortfolioCard = memo(function PortfolioCard({
  title, category, description, gradient, accent, tags, mockup, index,
}: PortfolioCardProps) {
  return (
    <motion.article
      className="group glass rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      aria-label={`${title} — ${category}`}
    >
      {/* Mockup preview */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}
        style={{ borderBottom: `1px solid ${accent}20` }}
      >
        <PortfolioMockup type={mockup} accent={accent} />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: `${accent}12`, backdropFilter: 'blur(2px)' }}
          aria-hidden="true"
        >
          <span
            className="flex items-center gap-2 text-sm font-display font-semibold px-4 py-2 rounded-lg"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}50` }}
          >
            View Project <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${accent}20`, border: `1px solid ${accent}40`, color: accent }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-mono text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
})

export default PortfolioCard
