import type { LucideIcon } from 'lucide-react'

export type AccentColor = 'blue' | 'purple'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: AccentColor
}

export interface WhyUsItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export type MockupType = 'dashboard' | 'ecommerce' | 'corporate' | 'fintech' | 'healthcare' | 'chat'

export interface PortfolioProject {
  title: string
  category: string
  description: string
  gradient: string
  accent: string
  tags: string[]
  mockup: MockupType
}

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  review: string
  color: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactFormState {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface NavLink {
  label: string
  href: string
}
