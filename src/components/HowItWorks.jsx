import Container from './ui/Container'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Up and running in three steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No lengthy setup, no consultant required. Most teams are planning their
            first sprint the same afternoon they sign up.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-200 to-transparent md:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-lg shadow-brand-600/30">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
