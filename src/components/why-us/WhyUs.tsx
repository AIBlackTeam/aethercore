import { memo } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { whyUs } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'

const GUARANTEES = [
  'On-time delivery guarantee',
  'No hidden fees',
  'Source code ownership',
  'Free 30-day post-launch support',
] as const

export default memo(function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Why AetherCore</span>
            <h2 className="section-heading mb-6">
              We Don't Just Build.<br />
              <span className="gradient-text">We Engineer Growth.</span>
            </h2>
            <p className="section-sub mb-8">
              Most agencies hand you a website. We hand you a competitive weapon. Every decision —
              architecture, design, copy, infrastructure — is made through the lens of your business outcome.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Contact AetherCore to discuss your project"
            >
              <span>Talk to Our Team</span>
            </a>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 m-0">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={item.title}
                  className="glass rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ borderColor: 'rgba(0,212,255,0.25)', scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg bg-[#00d4ff10] border border-[#00d4ff20] flex items-center justify-center flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <Icon size={16} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>

        <motion.div
          className="mt-16 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-label="Our guarantees"
        >
          <ul className="flex flex-wrap items-center justify-center gap-6 list-none p-0 m-0">
            {GUARANTEES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#00d4ff]" aria-hidden="true" />
                <span className="text-sm text-slate-400 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
})
