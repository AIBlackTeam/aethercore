import { memo } from 'react'
import { motion } from 'framer-motion'
import { pricing } from '../../data'
import PricingCard from './PricingCard'
import SectionWrapper from '../ui/SectionWrapper'

export default memo(function Pricing() {
  return (
    <SectionWrapper id="pricing" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="section-heading mb-4">
            Simple Plans, <span className="gradient-text">Serious Results</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            No retainer traps. No scope creep surprises. Just clear pricing aligned to the value you receive.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          role="list"
          aria-label="Pricing plans"
        >
          {pricing.map((plan, i) => (
            <div key={plan.name} role="listitem">
              <PricingCard {...plan} index={i} />
            </div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs font-mono text-slate-600 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All prices in USD · No long-term contracts required · Cancel anytime
        </motion.p>
      </div>
    </SectionWrapper>
  )
})
