import { memo } from 'react'
import { motion } from 'framer-motion'
import { services } from '../../data'
import ServiceCard from './ServiceCard'
import SectionWrapper from '../ui/SectionWrapper'

export default memo(function Services() {
  return (
    <SectionWrapper id="services" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">What We Build</span>
          <h2 className="section-heading mb-4">
            Full-Spectrum <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            From first pixel to production deployment — every capability your product needs under one roof.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Our services"
        >
          {services.map((service, i) => (
            <div key={service.title} role="listitem">
              <ServiceCard {...service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
})
