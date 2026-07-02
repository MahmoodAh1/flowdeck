import { ArrowRight, Play, Sparkles, Check } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'

// --- Stylized in-app product preview (pure markup, no images) ---------------
const columns = [
  {
    name: 'To do',
    tone: 'text-slate-500',
    dot: 'bg-slate-300',
    cards: [
      { title: 'Draft Q3 roadmap', tag: 'Planning', tagClass: 'bg-amber-100 text-amber-700', avatars: 2 },
      { title: 'Research onboarding flow', tag: 'Design', tagClass: 'bg-violet-100 text-violet-700', avatars: 1 },
    ],
  },
  {
    name: 'In progress',
    tone: 'text-brand-600',
    dot: 'bg-brand-500',
    cards: [
      { title: 'Build billing API', tag: 'Backend', tagClass: 'bg-sky-100 text-sky-700', avatars: 3, progress: 60 },
      { title: 'Redesign dashboard', tag: 'Design', tagClass: 'bg-violet-100 text-violet-700', avatars: 2, progress: 35 },
    ],
  },
  {
    name: 'Done',
    tone: 'text-emerald-600',
    dot: 'bg-emerald-500',
    cards: [
      { title: 'Launch changelog', tag: 'Shipped', tagClass: 'bg-emerald-100 text-emerald-700', avatars: 2, done: true },
    ],
  },
]

const avatarColors = ['bg-brand-500', 'bg-rose-400', 'bg-emerald-400', 'bg-amber-400']

function MiniAvatars({ count }) {
  return (
    <div className="flex -space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-6 w-6 rounded-full ring-2 ring-white ${avatarColors[i % avatarColors.length]}`}
        />
      ))}
    </div>
  )
}

function BoardCard({ card }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${card.tagClass}`}>
          {card.tag}
        </span>
        {card.done && (
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-800">{card.title}</p>
      {typeof card.progress === 'number' && (
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-brand-500" style={{ width: `${card.progress}%` }} />
        </div>
      )}
      <div className="mt-3 flex items-center justify-between">
        <MiniAvatars count={card.avatars} />
        <span className="text-[11px] font-medium text-slate-400">FD-{100 + card.title.length}</span>
      </div>
    </div>
  )
}

function ProductMockup() {
  return (
    <div className="animate-float rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <div className="ml-3 flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
          Sprint 24 · Product team
        </div>
      </div>

      {/* board */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
        {columns.map((col) => (
          <div key={col.name} className="rounded-xl bg-slate-50/80 p-3">
            <div className="mb-3 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${col.dot}`} />
              <span className={`text-xs font-bold uppercase tracking-wide ${col.tone}`}>
                {col.name}
              </span>
              <span className="ml-auto text-xs font-medium text-slate-400">
                {col.cards.length}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {col.cards.map((card) => (
                <BoardCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Hero -------------------------------------------------------------------
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <Container className="pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm transition-colors hover:bg-white"
        >
          <Sparkles className="h-4 w-4" />
          New: AI-powered sprint planning
          <ArrowRight className="h-4 w-4" />
        </a>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Project management that keeps
          <span className="text-brand-600"> everyone moving</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Plan, track, and ship work in one place. Flowdeck turns scattered tasks,
          docs, and updates into a single source of truth your whole team will
          actually enjoy using.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#pricing" variant="primary" size="lg">
            Start free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#how" variant="secondary" size="lg">
            <Play className="h-4 w-4" />
            Watch demo
          </Button>
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Free 14-day trial · No credit card required · Cancel anytime
        </p>

        {/* product preview */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <ProductMockup />
        </div>
      </Container>
    </section>
  )
}
