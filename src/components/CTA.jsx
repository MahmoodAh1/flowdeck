import { ArrowRight } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'

export default function CTA() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-violet-600 px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* decorative glows */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to get your team moving?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Join thousands of teams shipping better work with Flowdeck. Free to
            start — you can invite your whole team in minutes.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#" variant="white" size="lg">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="#"
              size="lg"
              className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              Book a demo
            </Button>
          </div>

          <p className="relative mt-5 text-sm text-brand-100">
            No credit card required · Set up in under 5 minutes
          </p>
        </div>
      </Container>
    </section>
  )
}
