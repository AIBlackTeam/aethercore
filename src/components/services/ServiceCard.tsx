import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types'

interface ServiceCardProps extends Service {
  index: number
}

const ServiceCard = memo(function ServiceCard({ icon: Icon, title, description, color, index }: ServiceCardProps) {
  const accent = color === 'blue' ? '#00d4ff' : '#a855f7'

  const iconStyle = useMemo(() => ({
    background: `${accent}15`,
    border: `1px solid ${accent}25`,
  }), [accent])

  const arrowStyle = useMemo(() => ({ color: accent }), [accent])

  return (
    <motion.article
      className="glass rounded-2xl p-6 group cursor-default border border-white/[0.08] transition-all duration-300 hover:border-[rgba(0,212,255,0.2)] hover:bg-white/[0.05]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      aria-label={title}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={iconStyle}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: accent }} />
      </div>

      <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

      <div
        className="flex items-center gap-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={arrowStyle}
        aria-hidden="true"
      >
        Learn more <ArrowUpRight size={12} />
      </div>
    </motion.article>
  )
})

export default ServiceCard
