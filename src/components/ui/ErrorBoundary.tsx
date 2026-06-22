import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  sectionName?: string
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production replace with your error tracking service (Sentry, Datadog, etc.)
    console.error(`[ErrorBoundary${this.props.sectionName ? ` — ${this.props.sectionName}` : ''}]`, error, info.componentStack)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="relative min-h-[320px] flex items-center justify-center px-6 py-16"
        >
          <div className="glass rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
              <AlertTriangle size={24} className="text-red-400" />
            </div>

            <h2 className="font-display font-bold text-white text-xl mb-2">
              {this.props.sectionName
                ? `${this.props.sectionName} failed to load`
                : 'Something went wrong'}
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              An unexpected error occurred. You can try reloading this section or return to the homepage.
            </p>

            {this.state.error && (
              <pre className="text-left text-xs text-red-400 bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-6 overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}

            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 btn-secondary text-sm"
                aria-label="Retry loading this section"
              >
                <RefreshCw size={14} />
                Try Again
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 btn-primary text-sm"
                aria-label="Return to homepage"
              >
                <Home size={14} />
                <span>Home</span>
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
