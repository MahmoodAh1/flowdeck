import Container from './ui/Container'
import { logos } from '../data/content'

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
          Trusted by fast-moving teams around the world
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {logos.map((name) => (
            <span
              key={name}
              className="text-xl font-bold tracking-tight text-slate-400 grayscale transition hover:text-slate-600"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
