import type { ReactNode } from 'react'
import DynamicBackground from '../components/ui/DynamicBackground'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BackToTop from '../components/ui/BackToTop'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary sectionName="Page Content">
          <main id="main-content" tabIndex={-1}>
            {/* Skip to main content target */}
            {children}
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
      <BackToTop />
    </div>
  )
}
