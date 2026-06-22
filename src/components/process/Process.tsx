import { memo } from 'react'
import { motion } from 'framer-motion'
import { process as processSteps } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'

export default memo(function Process() {
  return (
    <SectionWrapper id="process" className="relative py-24 px-6" aria-label="Our development process">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">How We Work</span>
          <h2 className="section-heading mb-4">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Six phases that take your idea from raw concept to a live product your users love — on schedule.
          </p>
        </motion.div>

        <ol className="relative list-none p-0 m-0" aria-label="Development process steps">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            aria-hidden="true"
            style={{ background: 'linear-gradient(180deg, transparent, #00d4ff40, #a855f740, transparent)' }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          <div className="space-y-10">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              const nodeColor = isLeft ? '#00d4ff' : '#a855f7'
              return (
                <motion.li
                  key={step.step}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-14 md:pl-0`}>
                    <div className="glass rounded-xl p-5 hover:border-[#00d4ff25] transition-all duration-300">
                      <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: nodeColor }}>
                        Phase {step.step}
                      </span>
                      <h3 className="font-display font-semibold text-white text-lg mt-1 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Node */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <div
                      className="w-12 h-12 rounded-full glass flex items-center justify-center"
                      style={{ border: `2px solid ${nodeColor}50` }}
                    >
                      <span className="font-mono font-bold text-xs" style={{ color: nodeColor }}>
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" aria-hidden="true" />
                </motion.li>
              )
            })}
          </div>
        </ol>
      </div>
    </SectionWrapper>
  )
})
