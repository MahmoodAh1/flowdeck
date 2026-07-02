import { brand } from '../data/content'

// Compact brand mark: three descending columns → a board / progress chart.
export function LogoMark({ className = '' }) {
  return (
    <span
      className={`grid place-items-center rounded-xl bg-brand-600 text-white ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" aria-hidden="true">
        <rect x="4" y="5" width="3.5" height="14" rx="1.5" fill="currentColor" opacity="0.95" />
        <rect x="10.25" y="5" width="3.5" height="10" rx="1.5" fill="currentColor" opacity="0.75" />
        <rect x="16.5" y="5" width="3.5" height="6" rx="1.5" fill="currentColor" opacity="0.55" />
      </svg>
    </span>
  )
}

export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        {brand.name}
      </span>
    </a>
  )
}
