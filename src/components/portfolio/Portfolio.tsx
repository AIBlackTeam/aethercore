import { memo } from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../../data'
import PortfolioCard from './PortfolioCard'
import SectionWrapper from '../ui/SectionWrapper'

export default memo(function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-heading mb-4">
            Products That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            A selection of projects where great engineering and sharp design turned business
            problems into measurable wins.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Portfolio projects"
        >
          {portfolio.map((project, i) => (
            <div key={project.title} role="listitem">
              <PortfolioCard {...project} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Contact us to see more projects"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
})
