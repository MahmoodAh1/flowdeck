/**
 * Single source of truth for all landing-page copy.
 * Edit text here — components stay presentational.
 */
import {
  LayoutDashboard,
  CalendarRange,
  Zap,
  FileText,
  BarChart3,
  Plug,
} from 'lucide-react'

export const brand = {
  name: 'Flowdeck',
  tagline: 'Project management that keeps everyone moving',
}

export const nav = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

// Placeholder customer wordmarks for the social-proof strip.
export const logos = ['Northbeam', 'Skylark', 'Latitude', 'Everly', 'Cobalt', 'Meridian']

export const features = [
  {
    icon: LayoutDashboard,
    title: 'Boards for every workflow',
    desc: 'Switch between Kanban, list, calendar, and timeline views without losing context. Everyone sees work the way that suits them.',
  },
  {
    icon: CalendarRange,
    title: 'Sprint & capacity planning',
    desc: 'Plan sprints, set estimates, and balance workloads so no one is overbooked and nothing slips through the cracks.',
  },
  {
    icon: Zap,
    title: 'No-code automations',
    desc: 'Move cards, assign owners, and send updates automatically. Kill the busywork with rules anyone on the team can build.',
  },
  {
    icon: FileText,
    title: 'Docs & wikis, built in',
    desc: 'Keep specs, notes, and decisions right next to the work they describe. No more hunting across five different tabs.',
  },
  {
    icon: BarChart3,
    title: 'Real-time dashboards',
    desc: 'Track velocity, burndown, and progress with dashboards that update the moment work does — no spreadsheets required.',
  },
  {
    icon: Plug,
    title: '100+ integrations',
    desc: 'Connect Slack, GitHub, Figma, and the rest of your stack so Flowdeck fits neatly into the way you already work.',
  },
]

export const steps = [
  {
    title: 'Bring your work together',
    desc: 'Import tasks, docs, and issues from the tools you already use — or start fresh in minutes with a ready-made template.',
  },
  {
    title: 'Plan in the view that fits',
    desc: 'Board, timeline, or calendar: organize the roadmap, assign clear owners, and set due dates the whole team can see.',
  },
  {
    title: 'Ship and measure',
    desc: 'Track progress in real time, celebrate wins, and use built-in insights to plan the next sprint even smarter.',
  },
]

export const pricing = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    tagline: 'For individuals and small side projects.',
    cta: 'Start for free',
    highlighted: false,
    features: [
      'Up to 3 members',
      'Unlimited tasks & projects',
      'Board & list views',
      '2 active automations',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    priceMonthly: 12,
    priceAnnual: 10,
    tagline: 'For growing teams that need to move fast.',
    cta: 'Start free trial',
    highlighted: true,
    features: [
      'Unlimited members',
      'All views incl. timeline & calendar',
      'Unlimited automations',
      'Dashboards & reporting',
      'Priority support',
    ],
  },
  {
    name: 'Business',
    priceMonthly: 22,
    priceAnnual: 19,
    tagline: 'For organizations that need scale and control.',
    cta: 'Contact sales',
    highlighted: false,
    features: [
      'Everything in Pro',
      'Advanced permissions',
      'SSO & SAML',
      'Audit logs & data residency',
      'Dedicated success manager',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Flowdeck replaced three separate tools for us. Sprint planning went from a two-hour ordeal to about fifteen minutes.',
    name: 'Maya Chen',
    role: 'Head of Product',
    company: 'Northbeam',
  },
  {
    quote:
      'The timeline view finally gave our leadership the visibility they had been asking for. Team adoption was basically instant.',
    name: 'Diego Alvarez',
    role: 'Engineering Manager',
    company: 'Skylark',
  },
  {
    quote:
      'We shipped 30% more last quarter without adding headcount. Flowdeck keeps everyone aligned and honest about progress.',
    name: 'Priya Nair',
    role: 'Chief Operating Officer',
    company: 'Latitude',
  },
]

export const faqs = [
  {
    q: 'Do I need a credit card to get started?',
    a: 'No. The Free plan is free forever, and paid plans come with a 14-day trial that never asks for a card up front.',
  },
  {
    q: 'Can I import from Jira, Trello, or Asana?',
    a: 'Yes. Flowdeck ships one-click importers for Jira, Trello, and Asana, plus CSV import for everything else.',
  },
  {
    q: 'How secure is my data?',
    a: 'We are SOC 2 Type II compliant, encrypt data in transit and at rest, and offer SSO/SAML and audit logs on the Business plan.',
  },
  {
    q: 'Can I change or cancel my plan anytime?',
    a: 'Absolutely. Upgrade, downgrade, or cancel whenever you like — changes are prorated and take effect immediately.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'Annual billing saves roughly 15%, and we offer additional discounts for nonprofits, students, and educators.',
  },
  {
    q: 'What if my team needs help migrating?',
    a: 'Every plan includes docs and live chat. Business customers also get a dedicated success manager to run the migration with you.',
  },
]

export const footer = {
  columns: [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Customers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help center', 'API reference', 'Community'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Status'],
    },
  ],
}
