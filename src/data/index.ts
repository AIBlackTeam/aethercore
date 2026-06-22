import {
  Globe, Bot, Smartphone, Palette, TrendingUp, Cloud,
  ShieldCheck, Zap, Code2, HeartHandshake, Rocket, BarChart3,
} from 'lucide-react'
import type {
  Service, WhyUsItem, Stat, PortfolioProject,
  Testimonial, ProcessStep, PricingPlan, FAQ,
} from '../types'

export const services: Service[] = [
  { icon: Globe, title: 'Web Development', description: 'Custom websites and web applications engineered for performance, scalability, and business impact.', color: 'blue' },
  { icon: Bot, title: 'AI Solutions', description: 'AI-powered tools and intelligent automation that eliminate friction and accelerate growth.', color: 'purple' },
  { icon: Smartphone, title: 'Mobile Applications', description: 'Native-quality Android and iOS applications with seamless user experiences.', color: 'blue' },
  { icon: Palette, title: 'UI/UX Design', description: 'Premium user experiences backed by research, strategy, and pixel-perfect execution.', color: 'purple' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'Growth-focused strategies that turn audiences into loyal, high-value customers.', color: 'blue' },
  { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable, resilient deployment solutions engineered for enterprise reliability.', color: 'purple' },
]

export const whyUs: WhyUsItem[] = [
  { icon: Code2, title: 'Senior Expertise', description: 'Every project is led by senior engineers and designers with 8+ years of industry experience.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile sprints and streamlined workflows mean your product ships on time, every time.' },
  { icon: Rocket, title: 'Modern Technologies', description: 'We build with the latest frameworks and architectures — future-proof by default.' },
  { icon: HeartHandshake, title: 'Dedicated Support', description: 'A direct line to your team, not a ticket queue. Real people, real answers, fast.' },
  { icon: ShieldCheck, title: 'Secure Development', description: 'Security is built in from day one — not bolted on after. OWASP-compliant by practice.' },
  { icon: BarChart3, title: 'Business Growth Focused', description: 'We measure success in your KPIs, not ours. Strategy and execution aligned to your goals.' },
]

export const stats: Stat[] = [
  { value: '200+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '70+', label: 'Global Clients' },
  { value: '24/7', label: 'Support' },
  { value: '15+', label: 'Countries Served' },
]

export const portfolio: PortfolioProject[] = [
  {
    title: 'AI Analytics Platform',
    category: 'AI / Data',
    description: 'Real-time intelligence dashboard processing 10M+ events daily with predictive modeling.',
    gradient: 'from-blue-600/20 to-cyan-400/10',
    accent: '#00d4ff',
    tags: ['React', 'Python', 'TensorFlow'],
    mockup: 'dashboard',
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Web Development',
    description: 'Multi-vendor marketplace serving 50K+ daily active users with $2M+ monthly GMV.',
    gradient: 'from-purple-600/20 to-pink-400/10',
    accent: '#a855f7',
    tags: ['Next.js', 'Node.js', 'Stripe'],
    mockup: 'ecommerce',
  },
  {
    title: 'Corporate Enterprise Website',
    category: 'UI/UX + Web',
    description: 'International enterprise rebrand and digital transformation across 12 global markets.',
    gradient: 'from-violet-600/20 to-blue-400/10',
    accent: '#7c3aed',
    tags: ['React', 'CMS', 'i18n'],
    mockup: 'corporate',
  },
  {
    title: 'Fintech Dashboard',
    category: 'Fintech',
    description: 'Regulatory-compliant financial management platform with real-time portfolio analytics.',
    gradient: 'from-cyan-600/20 to-teal-400/10',
    accent: '#06b6d4',
    tags: ['TypeScript', 'D3.js', 'AWS'],
    mockup: 'fintech',
  },
  {
    title: 'Healthcare Platform',
    category: 'HealthTech',
    description: 'HIPAA-compliant telemedicine platform connecting 8K+ patients with specialists.',
    gradient: 'from-emerald-600/20 to-cyan-400/10',
    accent: '#10b981',
    tags: ['React Native', 'Node.js', 'HIPAA'],
    mockup: 'healthcare',
  },
  {
    title: 'AI Chat Assistant',
    category: 'AI / Automation',
    description: 'Enterprise-grade conversational AI with multi-channel deployment and custom training.',
    gradient: 'from-fuchsia-600/20 to-purple-400/10',
    accent: '#d946ef',
    tags: ['LLM', 'Python', 'WebSocket'],
    mockup: 'chat',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'James Carter', role: 'CEO', company: 'Lumina Labs', avatar: 'JC', rating: 5,
    review: 'AetherCore delivered a platform that exceeded every metric we set. Revenue grew 340% in the first quarter post-launch. These are not just developers — they are strategic technology partners.',
    color: '#00d4ff',
  },
  {
    name: 'Emily Watson', role: 'Founder', company: 'NovaEdge', avatar: 'EW', rating: 5,
    review: 'From concept to deployment in eight weeks. The UI/UX quality was on par with the best SaaS products in the market. Our churn rate dropped 60% after the redesign.',
    color: '#a855f7',
  },
  {
    name: 'Daniel Moore', role: 'Director of Technology', company: 'Orion Dynamics', avatar: 'DM', rating: 5,
    review: 'The AI solution they built reduced our operational overhead by $400K annually. Their engineering depth is exceptional — they anticipated problems we had not even considered.',
    color: '#7c3aed',
  },
]

export const process: ProcessStep[] = [
  { step: '01', title: 'Discovery', description: 'Deep-dive into your business, goals, audience, and competitive landscape to define the opportunity.' },
  { step: '02', title: 'Planning', description: 'Architecture, tech stack selection, sprint roadmap, and detailed project scope with clear deliverables.' },
  { step: '03', title: 'Design', description: 'High-fidelity prototypes, design systems, and user testing — no surprises at handoff.' },
  { step: '04', title: 'Development', description: 'Agile sprints with weekly demos, automated testing, and continuous integration from day one.' },
  { step: '05', title: 'Launch', description: 'Zero-downtime deployment, performance audits, and a thorough go-live checklist.' },
  { step: '06', title: 'Support', description: 'Ongoing monitoring, feature iterations, and a dedicated account manager post-launch.' },
]

export const pricing: PricingPlan[] = [
  {
    name: 'Starter', price: '$299', period: '/month',
    description: 'Perfect for early-stage startups and solo founders.',
    features: ['5-page custom website', 'Mobile-responsive design', 'Basic SEO optimization', 'Contact form integration', '1 revision round', 'Email support'],
    cta: 'Get Started', highlighted: false,
  },
  {
    name: 'Professional', price: '$799', period: '/month',
    description: 'The go-to choice for growing businesses that need results.',
    features: ['Up to 20-page web application', 'Custom UI/UX design', 'Advanced SEO + analytics', 'API integrations', 'CMS integration', '3 revision rounds', 'Priority support', 'Monthly performance report'],
    cta: 'Start Project', highlighted: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: '',
    description: 'Tailored solutions for complex, large-scale products.',
    features: ['Full-scale product development', 'Dedicated engineering team', 'AI / ML integrations', 'Cloud infrastructure setup', 'Security audits', 'Unlimited revisions', '24/7 dedicated support', 'SLA guarantee'],
    cta: 'Contact Us', highlighted: false,
  },
]

export const faqs: FAQ[] = [
  { question: 'How long does a typical project take?', answer: 'Project timelines depend on scope. A standard marketing website takes 3–4 weeks. A full web application or SaaS product typically runs 8–16 weeks. We provide a detailed timeline during the planning phase so you always know what to expect.' },
  { question: 'Do you work with international clients?', answer: 'Yes — we serve clients across 15+ countries. All communication is in English, and we work across time zones with async-first workflows and scheduled video calls to keep collaboration smooth.' },
  { question: 'What happens after the project launches?', answer: 'All plans include post-launch support. We offer ongoing maintenance retainers, feature development, and performance monitoring. Your account manager stays with you long after go-live.' },
  { question: 'Can you redesign an existing product?', answer: 'Absolutely. Redesigns are a large part of our work. We begin with a UX audit and competitive analysis, then propose an improvement roadmap before touching a single pixel.' },
  { question: 'What technologies do you use?', answer: 'We are technology-agnostic and choose the best tool for each job. Our primary stack includes React, Next.js, Node.js, Python, AWS, and various AI/ML frameworks — but we adapt to your existing environment when needed.' },
  { question: 'How is pricing structured for custom projects?', answer: 'Custom projects are quoted based on scope, complexity, and timeline. We provide a fixed-price quote after the discovery phase so there are no surprises. Enterprise engagements can also be structured as monthly retainers.' },
]

export const trustedCompanies: string[] = [
  'Lumina Labs', 'NovaEdge', 'Quantum Peak', 'Helix Systems', 'Orion Dynamics',
]
