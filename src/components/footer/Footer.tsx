import { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { Zap, Linkedin, Github, Instagram, Twitter, Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Web Development', href: '#services' },
  { label: 'AI Solutions', href: '#services' },
  { label: 'Mobile Apps', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'Cloud Infrastructure', href: '#services' },
]

const SOCIAL_LINKS = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com', label: 'X (Twitter)' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

const CONTACT_DETAILS = [
  { icon: Mail, value: 'hello@aethercore.com', href: 'mailto:hello@aethercore.com', label: 'Send email' },
  { icon: Phone, value: '+1 (555) 800-2040', href: 'tel:+15558002040', label: 'Call us' },
  { icon: MapPin, value: 'Global · Remote-first', href: '#', label: 'Location' },
]

export default function Footer() {
  const emailId = useId()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subError, setSubError] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) { setSubError('Please enter your email address.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setSubError('Please enter a valid email.'); return }
    setSubError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative border-t border-white/[0.05] pt-16 pb-8 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5" aria-label="AetherCore — homepage">
              <div
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                aria-hidden="true"
              >
                <Zap size={17} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Aether<span className="gradient-text">Core</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Engineering digital excellence for ambitious companies worldwide. From startup to enterprise scale.
            </p>

            <address className="not-italic space-y-3 mb-6">
              {CONTACT_DETAILS.map(({ icon: Icon, value, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label}: ${value}`}
                  className="flex items-center gap-2.5 group w-fit"
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={13} className="text-[#00d4ff] flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-500 text-xs group-hover:text-slate-300 transition-colors">{value}</span>
                </a>
              ))}
            </address>

            <nav aria-label="Social media links">
              <ul className="flex gap-2 list-none p-0 m-0">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-[#00d4ff] hover:border-[#00d4ff30] transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={15} aria-hidden="true" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h2 className="font-display font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#00d4ff] to-transparent" aria-hidden="true" />
              Quick Links
            </h2>
            <ul className="space-y-3 list-none p-0 m-0">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 text-sm hover:text-[#00d4ff] transition-colors duration-200 flex items-center gap-1.5 group w-fit"
                  >
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services links">
            <h2 className="font-display font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#a855f7] to-transparent" aria-hidden="true" />
              Services
            </h2>
            <ul className="space-y-3 list-none p-0 m-0">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 text-sm hover:text-[#a855f7] transition-colors duration-200 flex items-center gap-1.5 group w-fit"
                  >
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h2 className="font-display font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#00d4ff] to-transparent" aria-hidden="true" />
              Newsletter
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4" id={`${emailId}-desc`}>
              Weekly insights on digital trends, tech, and growth strategies.
            </p>

            {subscribed ? (
              <div role="status" aria-live="polite" className="glass rounded-lg p-3 flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-400" aria-hidden="true" />
                <span className="text-emerald-400 text-xs font-mono">You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate aria-label="Newsletter signup">
                <div className="space-y-2">
                  <div>
                    <label htmlFor={`${emailId}-input`} className="sr-only">
                      Email address for newsletter
                    </label>
                    <input
                      id={`${emailId}-input`}
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setSubError('') }}
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-describedby={subError ? `${emailId}-err` : `${emailId}-desc`}
                      aria-invalid={!!subError}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00d4ff40] transition-all field-input"
                    />
                    {subError && (
                      <p id={`${emailId}-err`} role="alert" className="text-red-400 text-[10px] mt-1">{subError}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-display font-semibold text-white transition-all duration-300 hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}
                  >
                    Subscribe <Send size={11} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-5 glass rounded-lg px-3 py-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-slate-500 text-[10px] font-mono">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} AetherCore. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-5 list-none p-0 m-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
