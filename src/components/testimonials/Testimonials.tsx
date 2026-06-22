import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data'
import SectionWrapper from '../ui/SectionWrapper'

export default function Testimonials() {
  return (
    <SectionWrapper className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Client Voices</span>
          <h2 className="section-heading mb-4">
            What Clients <span className="gradient-text">Actually Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Client testimonials">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              role="listitem"
              className="glass rounded-2xl p-6 group m-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                borderColor: `${t.color}30`,
                boxShadow: `0 0 30px ${t.color}10`,
              }}
            >
              <blockquote className="m-0">
                <Quote size={28} className="mb-4 opacity-20" style={{ color: t.color }} aria-hidden="true" />

                {/* Star rating */}
                <div
                  className="flex gap-1 mb-4"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      size={13}
                      className={j < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}60, ${t.color}30)` }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    <span>{t.role}</span>, <span>{t.company}</span>
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
