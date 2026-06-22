import { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, MapPin, AlertCircle, Loader2, CheckCircle } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import type { ContactFormState, FormStatus } from '../../types'

const BUDGETS = ['< $1K', '$1K–$5K', '$5K–$15K', '$15K–$50K', '$50K+'] as const
const SERVICE_OPTIONS = [
  'Web Development', 'AI Solutions', 'Mobile App',
  'UI/UX Design', 'Digital Marketing', 'Cloud Infrastructure',
] as const

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@aethercore.com', href: 'mailto:hello@aethercore.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 800-2040', href: 'tel:+15558002040' },
  { icon: MapPin, label: 'Location', value: 'Global · Remote-first', href: '#' },
] as const

const EMPTY_FORM: ContactFormState = {
  name: '', email: '', phone: '', service: '', budget: '', message: '',
}

interface FieldErrors {
  name?: string
  email?: string
  service?: string
  message?: string
}

function validate(form: ContactFormState): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.name.trim()) errors.name = 'Full name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) errors.message = 'Tell us about your project.'
  else if (form.message.trim().length < 20) errors.message = 'Please provide a bit more detail (20+ characters).'
  return errors
}

export default function Contact() {
  const formId = useId()
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormState, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...form, [name]: value })[name as keyof FieldErrors] }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(form)[name as keyof FieldErrors] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]))
    setTouched(allTouched as typeof touched)
    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      // Focus first error field
      const first = Object.keys(fieldErrors)[0]
      document.getElementById(`${formId}-${first}`)?.focus()
      return
    }

    setStatus('loading')
    try {
      // Simulated async submit — replace with fetch('/api/contact', {...}) in production
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => (Math.random() > 0.05 ? resolve() : reject(new Error('Network error'))), 1200)
      })
      setStatus('success')
      setForm(EMPTY_FORM)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `field-input ${errors[field] && touched[field] ? 'border-red-500/60 focus:border-red-500' : ''}`

  const fieldId = (name: string) => `${formId}-${name}`
  const errorId = (name: string) => `${formId}-${name}-error`

  return (
    <SectionWrapper id="contact" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading mb-4">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Tell us about your project. We'll respond within 24 hours with a clear path forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff10] border border-[#00d4ff20] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Icon size={16} className="text-[#00d4ff]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-0.5">{label}</p>
                  <a href={href} className="text-white text-sm font-medium hover:text-[#00d4ff] transition-colors">
                    {value}
                  </a>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">Response Time</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-white text-sm">Usually within 4 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                className="glass rounded-2xl p-10 text-center min-h-[400px] flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                  Thank you! We'll review your project details and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary text-sm mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project inquiry form"
                className="glass rounded-2xl p-6 space-y-5"
              >
                {status === 'error' && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                  >
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" aria-hidden="true" />
                    <p className="text-red-300 text-sm">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:hello@aethercore.com" className="underline">hello@aethercore.com</a>
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor={fieldId('name')} className="field-label">
                      Full Name <span aria-label="required" className="text-[#00d4ff]">*</span>
                    </label>
                    <input
                      id={fieldId('name')}
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Smith"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? errorId('name') : undefined}
                      className={inputClass('name')}
                    />
                    {errors.name && touched.name && (
                      <p id={errorId('name')} role="alert" className="field-error">
                        <AlertCircle size={11} aria-hidden="true" />{errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={fieldId('email')} className="field-label">
                      Email Address <span aria-label="required" className="text-[#00d4ff]">*</span>
                    </label>
                    <input
                      id={fieldId('email')}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@company.com"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? errorId('email') : undefined}
                      className={inputClass('email')}
                    />
                    {errors.email && touched.email && (
                      <p id={errorId('email')} role="alert" className="field-error">
                        <AlertCircle size={11} aria-hidden="true" />{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor={fieldId('phone')} className="field-label">
                      Phone <span className="text-slate-600 font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id={fieldId('phone')}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className="field-input"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor={fieldId('service')} className="field-label">
                      Service <span aria-label="required" className="text-[#00d4ff]">*</span>
                    </label>
                    <select
                      id={fieldId('service')}
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.service && touched.service)}
                      aria-describedby={errors.service && touched.service ? errorId('service') : undefined}
                      className={`${inputClass('service')} bg-[#050b14]`}
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && touched.service && (
                      <p id={errorId('service')} role="alert" className="field-error">
                        <AlertCircle size={11} aria-hidden="true" />{errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <fieldset>
                  <legend className="field-label mb-2">Budget Range</legend>
                  <div className="grid grid-cols-5 gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                        aria-pressed={form.budget === b}
                        className={`text-xs font-mono py-2.5 rounded-lg border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00d4ff] ${
                          form.budget === b
                            ? 'border-[#00d4ff60] bg-[#00d4ff15] text-[#00d4ff]'
                            : 'border-white/[0.06] text-slate-500 hover:border-white/20 hover:text-slate-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Message */}
                <div>
                  <label htmlFor={fieldId('message')} className="field-label">
                    Project Details <span aria-label="required" className="text-[#00d4ff]">*</span>
                  </label>
                  <textarea
                    id={fieldId('message')}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project, goals, timeline, and any technical requirements…"
                    required
                    aria-required="true"
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? errorId('message') : undefined}
                    rows={4}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && touched.message && (
                    <p id={errorId('message')} role="alert" className="field-error">
                      <AlertCircle size={11} aria-hidden="true" />{errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">
                  * Required fields. We never share your information with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
