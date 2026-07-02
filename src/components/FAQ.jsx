import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from './ui/Container'
import { faqs } from '../data/content'

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-slate-200">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-base font-semibold text-slate-900">{item.q}</span>
          <ChevronDown
            className={`h-5 w-5 flex-none text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        hidden={!isOpen}
        className="pb-5 pr-8 text-sm leading-relaxed text-slate-600"
      >
        {item.a}
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              id={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Still have questions?{' '}
          <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">
            Talk to our team
          </a>
        </p>
      </Container>
    </section>
  )
}
