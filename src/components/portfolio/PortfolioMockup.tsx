import { memo } from 'react'
import type { MockupType } from '../../types'

interface MockupProps {
  type: MockupType
  accent: string
}

// Static style values computed once per render based on accent prop
function getMockupStyles(accent: string) {
  return {
    dim: '#0a1628',
    mid: 'rgba(255,255,255,0.06)',
    line: 'rgba(255,255,255,0.08)',
    accentFill: `${accent}20`,
    accentStroke: `${accent}40`,
    accentText: accent,
  }
}

function DashboardMockup({ accent }: { accent: string }) {
  const { dim, mid, line } = getMockupStyles(accent)
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="320" height="180" fill={dim} />
      <rect x="0" y="0" width="55" height="180" fill="rgba(0,0,0,0.3)" />
      <rect x="10" y="16" width="35" height="6" rx="3" fill={accent} opacity="0.7" />
      {[36, 52, 68, 84, 100].map((y, i) => (
        <rect key={`sb-${y}`} x="10" y={y} width={i === 0 ? 35 : 28} height="5" rx="2.5" fill={mid} />
      ))}
      <rect x="55" y="0" width="265" height="28" fill="rgba(0,0,0,0.2)" />
      <rect x="65" y="10" width="60" height="7" rx="3.5" fill={mid} />
      <rect x="260" y="8" width="50" height="10" rx="5" fill={accent} opacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={`kpi-${i}`}>
          <rect x={65 + i * 82} y="36" width="74" height="42" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
          <rect x={73 + i * 82} y="43" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
          <rect x={73 + i * 82} y="52" width="44" height="10" rx="3" fill={accent} opacity={0.5 - i * 0.1} />
          <rect x={73 + i * 82} y="66" width="20" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        </g>
      ))}
      <rect x="65" y="86" width="170" height="82" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
      <polyline points="75,150 95,130 115,140 135,115 155,125 175,105 195,118 215,100 225,108" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" />
      <polyline points="75,150 95,130 115,140 135,115 155,125 175,105 195,118 215,100 225,108 225,168 75,168" fill={accent} opacity="0.08" />
      <rect x="243" y="86" width="77" height="82" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={`sp-${i}`} x="251" y={96 + i * 16} width={40 + (i % 2) * 15} height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
      ))}
    </svg>
  )
}

function EcommerceMockup({ accent }: { accent: string }) {
  const { dim, mid, line } = getMockupStyles(accent)
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="320" height="180" fill={dim} />
      <rect x="0" y="0" width="320" height="24" fill="rgba(0,0,0,0.3)" />
      <rect x="12" y="8" width="40" height="7" rx="3.5" fill={accent} opacity="0.7" />
      {[80, 110, 140, 170].map((x) => (
        <rect key={`nav-${x}`} x={x} y="10" width="22" height="5" rx="2.5" fill={mid} />
      ))}
      <rect x="270" y="7" width="38" height="10" rx="5" fill={accent} opacity="0.5" />
      <rect x="8" y="30" width="200" height="70" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
      <rect x="18" y="42" width="80" height="10" rx="4" fill={accent} opacity="0.6" />
      <rect x="18" y="57" width="110" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
      <rect x="18" y="83" width="60" height="12" rx="6" fill={accent} opacity="0.7" />
      {[0, 1].map((i) => (
        <g key={`prod-${i}`}>
          <rect x={216 + i * 50} y="30" width="44" height="70" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
          <rect x={222 + i * 50} y="37" width="32" height="32" rx="4" fill={`${accent}20`} />
          <rect x={222 + i * 50} y="74" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
          <rect x={222 + i * 50} y="83" width="16" height="5" rx="2.5" fill={accent} opacity="0.5" />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <g key={`grid-${i}`}>
          <rect x={8 + i * 76} y="108" width="68" height="64" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
          <rect x={16 + i * 76} y="115" width="52" height="32" rx="4" fill={`${accent}15`} />
          <rect x={16 + i * 76} y="152" width="36" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
          <rect x={16 + i * 76} y="161" width="22" height="4" rx="2" fill={accent} opacity="0.4" />
        </g>
      ))}
    </svg>
  )
}

function CorporateMockup({ accent }: { accent: string }) {
  const { dim, mid, line } = getMockupStyles(accent)
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="320" height="180" fill={dim} />
      <rect x="0" y="0" width="320" height="22" fill="rgba(0,0,0,0.25)" />
      <rect x="12" y="7" width="35" height="8" rx="4" fill={accent} opacity="0.7" />
      {[70, 100, 130, 160, 190].map((x) => (
        <rect key={`cn-${x}`} x={x} y="9" width="22" height="5" rx="2.5" fill={mid} />
      ))}
      <rect x="272" y="7" width="40" height="9" rx="4.5" fill={accent} opacity="0.6" />
      <rect x="0" y="22" width="320" height="85" fill={`${accent}08`} />
      <rect x="20" y="36" width="100" height="16" rx="5" fill="rgba(255,255,255,0.12)" />
      <rect x="20" y="57" width="160" height="9" rx="4.5" fill="rgba(255,255,255,0.07)" />
      <rect x="20" y="85" width="70" height="14" rx="7" fill={accent} opacity="0.7" />
      <rect x="98" y="85" width="70" height="14" rx="7" fill={mid} />
      {[0, 1, 2, 3].map((i) => (
        <g key={`cs-${i}`}>
          <rect x={8 + i * 77} y="115" width="69" height="36" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
          <rect x={16 + i * 77} y="122" width="30" height="10" rx="4" fill={accent} opacity={0.5 - i * 0.08} />
          <rect x={16 + i * 77} y="137" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={`tm-${i}`}>
          <rect x={8 + i * 104} y="157" width="96" height="18" rx="5" fill={mid} stroke={line} strokeWidth="0.5" />
          <circle cx={20 + i * 104} cy="166" r="6" fill={`${accent}30`} />
          <rect x={30 + i * 104} y="162" width="50" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x={30 + i * 104} y="169" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
    </svg>
  )
}

function HealthcareMockup({ accent }: { accent: string }) {
  const { dim, mid, line } = getMockupStyles(accent)
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="320" height="180" fill={dim} />
      <rect x="0" y="0" width="60" height="180" fill="rgba(0,0,0,0.3)" />
      <rect x="8" y="12" width="44" height="8" rx="4" fill={accent} opacity="0.6" />
      {[30, 48, 66, 84, 102, 120].map((y, i) => (
        <rect key={`hm-${y}`} x="10" y={y} width={i === 0 ? 40 : 32} height="5" rx="2.5" fill={mid} />
      ))}
      <rect x="60" y="0" width="260" height="22" fill="rgba(0,0,0,0.2)" />
      <rect x="70" y="8" width="70" height="6" rx="3" fill={mid} />
      <rect x="260" y="6" width="50" height="10" rx="5" fill={accent} opacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={`hk-${i}`}>
          <rect x={68 + i * 82} y="30" width="74" height="44" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
          <rect x={76 + i * 82} y="37" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
          <rect x={76 + i * 82} y="46" width="48" height="12" rx="4" fill={accent} opacity={0.45 - i * 0.1} />
          <rect x={76 + i * 82} y="62" width="28" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
        </g>
      ))}
      <rect x="68" y="82" width="244" height="88" rx="6" fill={mid} stroke={line} strokeWidth="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <g key={`hr-${i}`}>
          <rect x="78" y={92 + i * 19} width="224" height="14" rx="4" fill="rgba(255,255,255,0.03)" />
          <circle cx="88" cy={99 + i * 19} r="4" fill={accent} opacity="0.5" />
          <rect x="98" y={96 + i * 19} width="60" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="168" y={96 + i * 19} width="40" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x={268} y={95 + i * 19} width="28" height="6" rx="3" fill={accent} opacity="0.35" />
        </g>
      ))}
    </svg>
  )
}

function ChatMockup({ accent }: { accent: string }) {
  const { dim, mid, line } = getMockupStyles(accent)
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="320" height="180" fill={dim} />
      <rect x="0" y="0" width="85" height="180" fill="rgba(0,0,0,0.25)" />
      <rect x="10" y="12" width="65" height="8" rx="4" fill={accent} opacity="0.6" />
      {[0, 1, 2, 3].map((i) => (
        <g key={`ch-${i}`}>
          <rect x="8" y={30 + i * 32} width="69" height="26" rx="5" fill="rgba(255,255,255,0.04)" />
          <circle cx="20" cy={43 + i * 32} r="6" fill={`${accent}30`} />
          <rect x="30" y={40 + i * 32} width="38" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="30" y={47 + i * 32} width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
      <rect x="85" y="0" width="235" height="22" fill="rgba(0,0,0,0.2)" />
      <circle cx="100" cy="11" r="5" fill={`${accent}30`} />
      <rect x="110" y="8" width="60" height="6" rx="3" fill={mid} />
      <rect x="95" y="28" width="130" height="22" rx="11" fill={`${accent}20`} stroke={`${accent}40`} strokeWidth="0.5" />
      <rect x="102" y="35" width="116" height="8" rx="4" fill={`${accent}40`} />
      <rect x="185" y="58" width="120" height="30" rx="10" fill="rgba(255,255,255,0.06)" />
      <rect x="193" y="66" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
      <rect x="193" y="75" width="74" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
      <rect x="95" y="96" width="160" height="38" rx="10" fill={`${accent}15`} stroke={`${accent}30`} strokeWidth="0.5" />
      <rect x="103" y="104" width="120" height="5" rx="2.5" fill={`${accent}60`} />
      <rect x="103" y="114" width="90" height="5" rx="2.5" fill={`${accent}40`} />
      <rect x="103" y="124" width="60" height="5" rx="2.5" fill={`${accent}25`} />
      <rect x="90" y="150" width="225" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke={line} strokeWidth="1" />
      <rect x="102" y="157" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
      <rect x="295" y="153" width="16" height="16" rx="8" fill={accent} opacity="0.7" />
    </svg>
  )
}

// Memoized with custom comparison — only re-render if type or accent change
const PortfolioMockup = memo(
  function PortfolioMockup({ type, accent }: MockupProps) {
    switch (type) {
      case 'dashboard':
      case 'fintech':
        return <DashboardMockup accent={accent} />
      case 'ecommerce':
        return <EcommerceMockup accent={accent} />
      case 'corporate':
        return <CorporateMockup accent={accent} />
      case 'healthcare':
        return <HealthcareMockup accent={accent} />
      case 'chat':
        return <ChatMockup accent={accent} />
      default:
        return null
    }
  },
  (prev, next) => prev.type === next.type && prev.accent === next.accent
)

export default PortfolioMockup
