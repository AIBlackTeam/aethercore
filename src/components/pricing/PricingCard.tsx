import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import type { PricingPlan } from '../../types'

interface PricingCardProps extends PricingPlan {
  index: number
}

const PricingCard = memo(function PricingCard({
  name, price, period, description, features, cta, highlighted, index,
}: PricingCardProps) {
  const cardStyle = useMemo(() => (
    highlighted
      ? { boxShadow: '0 0 60px rgba(168,85,247,0.15), 0 0 120px rgba(0,212,255,0.08)' }
      : {}
  ), [highlighted])

  const checkColor = highlighted ? '#a855f7' : '#00d4ff'

  return (
    <motion.div
      className={`relative rounded-2xl p-7 flex flex-col ${
        highlighted
          ? 'border border-[#a855f750] bg-gradient-to-b from-[#a855f708] to-[#00d4ff05]'
          : 'glass'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={cardStyle}
      aria-label={`${name} plan — ${price}${period}`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2" aria-hidden="true">
          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#00d4ff] px-3 py-1 rounded-full">
            <Sparkles size={10} /> Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">{name}</p>
        <div className="flex items-end gap-1 mb-2">
          <span className="font-display font-bold text-5xl text-white">{price}</span>
          {period && <span className="text-slate-500 text-sm mb-2">{period}</span>}
        </div>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1 list-none p-0 m-0" aria-label={`${name} plan features`}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: checkColor }} aria-hidden="true" />
            <span className="text-slate-400 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`text-center py-3 px-5 rounded-lg text-sm font-display font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
          highlighted
            ? 'bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white hover:opacity-90 focus-visible:outline-[#a855f7]'
            : 'btn-secondary'
        }`}
        aria-label={`${cta} — ${name} plan`}
      >
        {cta}
      </a>
    </motion.div>
  )
})

export default PricingCard
