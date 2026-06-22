import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft, Zap } from 'lucide-react'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <main className="relative text-center max-w-lg mx-auto" aria-labelledby="not-found-heading">
        <motion.div
          className="flex items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center" aria-hidden="true">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            Aether<span className="gradient-text">Core</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-[clamp(6rem,20vw,10rem)] leading-none block mb-6"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(0,212,255,0.3))',
            }}
          >
            404
          </span>
        </motion.div>

        <motion.h1
          id="not-found-heading"
          className="font-display font-bold text-2xl text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => navigate('/')}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={15} aria-hidden="true" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Go Back
          </button>
        </motion.div>
      </main>
    </div>
  )
}
