import { lazy, Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/hero/Hero'
import Trusted from '../components/trusted/Trusted'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'

// Below-fold sections are lazy loaded
const Services = lazy(() => import('../components/services/Services'))
const WhyUs = lazy(() => import('../components/why-us/WhyUs'))
const Stats = lazy(() => import('../components/stats/Stats'))
const Portfolio = lazy(() => import('../components/portfolio/Portfolio'))
const Testimonials = lazy(() => import('../components/testimonials/Testimonials'))
const Process = lazy(() => import('../components/process/Process'))
const Pricing = lazy(() => import('../components/pricing/Pricing'))
const FAQ = lazy(() => import('../components/faq/FAQ'))
const Contact = lazy(() => import('../components/contact/Contact'))

function SectionFallback() {
  return <div className="h-24" aria-hidden="true" />
}

function LazySection({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <ErrorBoundary sectionName={name}>
      <Suspense fallback={<SectionFallback />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default function Home() {
  return (
    <MainLayout>
      {/* Above fold — not lazy loaded */}
      <Hero />
      <Trusted />

      {/* Below fold — lazy loaded with individual error boundaries */}
      <LazySection name="Services"><Services /></LazySection>
      <LazySection name="Why Us"><WhyUs /></LazySection>
      <LazySection name="Stats"><Stats /></LazySection>
      <LazySection name="Portfolio"><Portfolio /></LazySection>
      <LazySection name="Testimonials"><Testimonials /></LazySection>
      <LazySection name="Process"><Process /></LazySection>
      <LazySection name="Pricing"><Pricing /></LazySection>
      <LazySection name="FAQ"><FAQ /></LazySection>
      <LazySection name="Contact"><Contact /></LazySection>
    </MainLayout>
  )
}
