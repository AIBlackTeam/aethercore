import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, Users, Star } from 'lucide-react'

const CARDS = [
  { id: 'hero-card-revenue', icon: TrendingUp, label: 'Revenue Growth', value: '+340%', sub: 'Avg client result', color: '#00d4ff', delay: 0, position: 'top-[15%] left-[2%] lg:left-[-2%]' },
  { id: 'hero-card-satisfaction', icon: Star, label: 'Satisfaction', value: '99%', sub: 'Client rating', color: '#a855f7', delay: 0.15, position: 'top-[55%] right-[2%] lg:right-[-2%]' },
  { id: 'hero-card-clients', icon: Users, label: 'Global Clients', value: '70+', sub: 'Across 15 countries', color: '#7c3aed', delay: 0.3, position: 'bottom-[10%] left-[5%] lg:left-[0%]' },
] as const

export default memo(function HeroCards() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {CARDS.map((card) => {
        const Icon = card.icon
        return (
          <motion.aside
            key={card.id}
            aria-label={`${card.label}: ${card.value}`}
            className={`absolute ${card.position} glass rounded-xl p-4 w-44 hidden sm:block`}
            style={{ borderColor: `${card.color}25` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -12, 0] }
            }
            transition={shouldReduceMotion
              ? { delay: card.delay + 1, duration: 0.5 }
              : { opacity: { delay: card.delay + 1, duration: 0.5 }, scale: { delay: card.delay + 1, duration: 0.5 }, y: { delay: card.delay + 1.5, duration: 4, repeat: Infinity, ease: 'easeInOut' } }
            }
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
              style={{ background: `${card.color}18` }}
              aria-hidden="true"
            >
              <Icon size={16} style={{ color: card.color }} />
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-0.5">
              {card.label}
            </p>
            <p className="font-display font-bold text-xl text-white">{card.value}</p>
            <p className="text-[10px] text-slate-500">{card.sub}</p>
          </motion.aside>
        )
      })}
    </>
  )
})
