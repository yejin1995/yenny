import { Mail, Globe, Link, ScrollText, ArrowUpRight } from 'lucide-react'

// ─── Content ─────────────────────────────────────────────────────────────────
// All page copy lives here — swap these constants to update the portfolio.

const PERSON_NAME = 'ALEX CHEN'

const NAV_ITEMS = ['HOME', 'ABOUT', 'RESEARCH', 'PUBLICATIONS', 'CONTACT'] as const

const SOCIAL_NAV = [
  { Icon: Mail, href: 'mailto:alex@example.edu', label: 'Email' },
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: Link, href: '#', label: 'Profile' },
] as const

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'

const HERO_LINES = ['ENGINEERING', 'INTELLIGENCE', 'FOR A MORE', 'HUMAN', 'WORLD']
const HERO_ACCENT = 'Graduate Researcher'

const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'

const ABOUT_HEADING_LINES = ['HELLO!', "I'M ALEX"]
const ABOUT_ACCENT = 'Scholar'
const ABOUT_STATEMENT = [
  'PHD CANDIDATE IN COMPUTER SCIENCE AT STANFORD HAI.',
  'BUILDING CAUSAL ML SYSTEMS THAT REASON OVER CLINICAL DATA.',
  'FOCUSED ON FAIRNESS, INTERPRETABILITY,',
  'AND HUMAN-AI ALIGNMENT.',
]

const KEYWORDS = [
  'MACHINE LEARNING',
  'CAUSAL INFERENCE',
  'HEALTH DATA',
  'FAIRNESS',
  'INTERPRETABILITY',
  'CLINICAL AI',
  'NEURAL NETWORKS',
  'HUMAN-AI',
  'ALIGNMENT',
]

const GRID_ACCENT = 'Selected'
const GRID_HEADING_LINES = ['FEATURED', 'RESEARCH']
const GRID_CTA_LINES = ['VIEW FULL', 'CV']

type FeaturedCard = {
  title: string
  subtitle: string
  label: string
  value: string
  video: string
}

const FEATURED_CARDS: FeaturedCard[] = [
  {
    title: 'CAUSAL MACHINE LEARNING',
    subtitle: 'Healthcare AI Systems',
    label: 'RESEARCH FOCUS',
    value: 'HEALTHCARE AI',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
  },
  {
    title: 'ALGORITHMIC FAIRNESS',
    subtitle: 'Equitable AI Design',
    label: 'HIGHLIGHT',
    value: '12 PUBLICATIONS',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
  },
  {
    title: 'INTERPRETABLE DEEP LEARNING',
    subtitle: 'Explainable AI',
    label: 'METHOD',
    value: 'NEURAL ATTENTION',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
  },
]

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const CTA_ACCENT = "Let's connect"
const CTA_LINES = ['READ THE WORK.', 'FOLLOW THE RESEARCH.', 'BUILD WHAT COMES NEXT.']

const CTA_SOCIAL = [
  { Icon: Mail, href: 'mailto:alex@example.edu', label: 'Email' },
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: ScrollText, href: '#', label: 'CV' },
  { Icon: Link, href: '#', label: 'Profile' },
] as const

// ─── Component ───────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div className="bg-background text-cream overflow-x-hidden">
      {/* Full-screen texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden rounded-b-[48px] sm:rounded-b-[64px]">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010828]/80 via-[#010828]/30 to-[#010828]/85" />

        {/* Content column */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="flex items-center justify-between px-6 md:px-10 lg:px-14 pt-7 pb-5 w-full max-w-[1831px] mx-auto">
            {/* Logo / Name */}
            <span className="font-grotesk text-cream text-sm md:text-base tracking-[0.22em] select-none">
              {PERSON_NAME}
            </span>

            {/* Center pill nav — hidden on mobile */}
            <nav className="hidden md:flex liquid-glass rounded-full px-7 py-3 items-center gap-5 lg:gap-7">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-grotesk text-cream/70 text-[11px] tracking-[0.18em] hover:text-cream transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Social icon buttons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_NAV.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon size={14} className="text-cream/75" />
                </a>
              ))}
            </div>
          </header>

          {/* Hero heading area */}
          <div className="flex-1 flex items-center justify-center relative px-6 pb-14">
            {/* Decorative accent — cursive overlay */}
            <span
              className="absolute top-[12%] right-[6%] md:right-[8%] lg:right-[12%]
                         font-condiment text-neon text-4xl md:text-5xl lg:text-6xl
                         opacity-75 -rotate-6 select-none pointer-events-none leading-none"
            >
              {HERO_ACCENT}
            </span>

            {/* Main heading */}
            <h1
              className="font-grotesk text-cream text-center leading-[0.88]
                         text-[12.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] xl:text-[7vw]"
            >
              {HERO_LINES.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>

            {/* Mobile social icons — below heading */}
            <div className="md:hidden absolute bottom-4 flex items-center gap-3">
              {SOCIAL_NAV.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <Icon size={14} className="text-cream/75" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: About ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={ABOUT_VIDEO}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#010828]/68" />

        <div className="relative z-10 flex flex-col justify-between min-h-screen
                        max-w-[1831px] mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-20">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
            {/* Left — heading block */}
            <div className="flex-shrink-0">
              <span className="font-condiment text-neon text-4xl md:text-5xl leading-none block mb-2">
                {ABOUT_ACCENT}
              </span>
              <h2
                className="font-grotesk text-cream leading-[0.88]
                           text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]"
              >
                {ABOUT_HEADING_LINES.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h2>
            </div>

            {/* Right — research statement */}
            <div className="md:max-w-sm lg:max-w-md xl:max-w-lg md:pt-4">
              {ABOUT_STATEMENT.map((line, i) => (
                <p
                  key={i}
                  className="font-mono text-cream/55 text-[11px] md:text-xs
                             uppercase tracking-[0.16em] leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom row — decorative keyword cluster */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 overflow-hidden mt-10"
            aria-hidden="true"
          >
            {KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="font-grotesk text-cream text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw]
                           uppercase leading-none opacity-[0.055] whitespace-nowrap select-none"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Research Grid ───────────────────────────── */}
      <section className="bg-background py-20 md:py-28 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1831px] mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14 md:mb-18 gap-6">
            {/* Left — section heading */}
            <div>
              <span className="font-condiment text-neon text-3xl md:text-4xl leading-none block mb-1">
                {GRID_ACCENT}
              </span>
              <h2
                className="font-grotesk text-cream leading-[0.9]
                           text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.5vw]"
              >
                {GRID_HEADING_LINES.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h2>
            </div>

            {/* Right — CTA button with neon underline */}
            <button className="group flex flex-col items-end flex-shrink-0 pb-0.5">
              {GRID_CTA_LINES.map((line, i) => (
                <span
                  key={i}
                  className="font-grotesk text-cream leading-[0.9]
                             text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[3vw]
                             group-hover:text-neon transition-colors duration-300"
                >
                  {line}
                </span>
              ))}
              <div className="w-full h-[3px] bg-neon mt-2 rounded-full" />
            </button>
          </div>

          {/* 3-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {FEATURED_CARDS.map((card, i) => (
              <div
                key={i}
                className="liquid-glass rounded-3xl overflow-hidden aspect-square relative"
              >
                {/* Card video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.video}
                />

                {/* Top-to-middle gradient for title legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#010828]/65 via-[#010828]/20 to-transparent" />

                {/* Bottom gradient for overlay bar */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010828]/90 via-[#010828]/30 to-transparent" />

                {/* Card title — centered */}
                <div className="absolute inset-x-0 top-0 bottom-16 flex flex-col items-center justify-center px-6 z-10">
                  <h3
                    className="font-grotesk text-cream text-lg md:text-xl lg:text-2xl
                               text-center leading-tight"
                  >
                    {card.title}
                  </h3>
                  <p className="font-mono text-neon/60 text-[9px] uppercase tracking-[0.2em] mt-2">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom overlay bar */}
                <div className="absolute bottom-0 inset-x-0 liquid-glass px-5 py-3.5 flex items-center justify-between z-10">
                  <div>
                    <p className="font-mono text-cream/40 text-[9px] uppercase tracking-[0.15em] mb-0.5">
                      {card.label}
                    </p>
                    <p className="font-grotesk text-cream text-sm uppercase tracking-wide">
                      {card.value}
                    </p>
                  </div>
                  <button
                    className="w-9 h-9 rounded-full bg-violet-600/85 flex items-center
                               justify-center flex-shrink-0 hover:bg-violet-500 transition-colors duration-200"
                    aria-label="View details"
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Final CTA / Contact ───────────────────────────────── */}
      <section className="bg-background px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="max-w-[1831px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Native-aspect video — no object-cover */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
              src={CTA_VIDEO}
            />

            {/* Full overlay */}
            <div className="absolute inset-0 bg-[#010828]/55" />

            {/* Center text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
              <span className="font-condiment text-neon text-4xl md:text-5xl leading-none mb-5 block">
                {CTA_ACCENT}
              </span>
              <h2
                className="font-grotesk text-cream leading-[0.9]
                           text-[7vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[4vw]"
              >
                {CTA_LINES.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h2>
            </div>

            {/* Bottom-left social icon stack */}
            <div className="absolute bottom-6 left-6 md:bottom-9 md:left-9 z-10">
              <div className="liquid-glass rounded-2xl p-2.5 flex flex-col gap-2">
                {CTA_SOCIAL.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center
                               hover:bg-white/10 transition-colors duration-200"
                  >
                    <Icon size={15} className="text-cream/70" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
