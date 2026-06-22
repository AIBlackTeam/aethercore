import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'
import type { FAQ as FAQType } from '../../types'

interface FAQItemProps extends FAQType {
  itemId: string
}

function FAQItem({ question, answer, itemId }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  const headingId = `faq-q-${itemId}`
  const panelId = `faq-a-${itemId}`

  return (
    <div className="glass rounded-xl overflow-hidden">
      <h3 className="m-0">
        <button
          id={headingId}
          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="font-display font-semibold text-white text-sm leading-relaxed group-hover:text-[#00d4ff] transition-colors">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: open ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.05)',
              color: open ? '#00d4ff' : '#64748b',
            }}
          >
            {open ? <Minus size={12} /> : <Plus size={12} />}
          </span>
        </button>
      </h3>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const baseId = useId()

  return (
    <SectionWrapper id="faq" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Common Questions</span>
          <h2 className="section-heading mb-4">
            Got Questions? <span className="gradient-text">We Have Answers.</span>
          </h2>
        </motion.div>

        <div className="space-y-3" role="list" aria-label="Frequently asked questions">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              role="listitem"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                itemId={`${baseId}-${i}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-[#00d4ff] hover:underline focus-visible:outline-2 focus-visible:outline-[#00d4ff]">
              Talk to us directly →
            </a>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
