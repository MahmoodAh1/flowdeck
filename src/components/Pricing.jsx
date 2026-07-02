import { useState } from 'react'
import { Check } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import { pricing } from '../data/content'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free, upgrade when your team grows. Every paid plan comes with a
            14-day trial.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${annual ? 'text-slate-500' : 'text-slate-900'}`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              annual ? 'bg-brand-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                annual ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-500'}`}
          >
            Annual
          </span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            Save ~15%
          </span>
        </div>

        {/* Plans */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {pricing.map((plan) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900 lg:-my-2 lg:py-10'
                    : 'bg-white text-slate-900 ring-1 ring-slate-200'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p
                  className={`mt-1 text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">${price}</span>
                  <span
                    className={`text-sm font-medium ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    /user /mo
                  </span>
                </div>
                <p
                  className={`mt-1 text-xs ${plan.highlighted ? 'text-slate-400' : 'text-slate-400'}`}
                >
                  {price === 0
                    ? 'Free forever'
                    : annual
                      ? 'billed annually'
                      : 'billed monthly'}
                </p>

                <Button
                  href="#"
                  variant={plan.highlighted ? 'white' : 'secondary'}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-5 w-5 flex-none ${plan.highlighted ? 'text-brand-400' : 'text-brand-600'}`}
                        strokeWidth={2.5}
                      />
                      <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
