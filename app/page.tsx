import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { ParticleBackground } from "@/components/particle-bg";
import { ScrollReveal } from "@/components/scroll-reveal";

/* ─── service data ─────────────────────────────────────── */
const SOFTWARE_SERVICES = [
  {
    title: "Web Application Development",
    copy: "Custom web apps, portals, admin panels, and internal tools built on modern stacks — React, Next.js, Node.js, Supabase.",
    tag: "Core",
  },
  {
    title: "Mobile App Design & Build",
    copy: "Cross-platform mobile apps using React Native or Flutter. Product-quality UI with performance that holds up.",
    tag: "Core",
  },
  {
    title: "SaaS Product Development",
    copy: "End-to-end SaaS — multi-tenant architecture, billing, role-based access, real-time data. We've built one ourselves.",
    tag: "Speciality",
  },
  {
    title: "UI/UX & Product Design",
    copy: "Wireframes, interactive prototypes, design systems, and pixel-perfect implementation. Design that converts.",
    tag: "Core",
  },
  {
    title: "Dashboards & Analytics",
    copy: "Custom reporting dashboards, KPI trackers, CRM tools, and data visualisation for operations, sales, and HR teams.",
    tag: "Core",
  },
  {
    title: "AI Integration & Automation",
    copy: "Embed AI into real workflows — document processing, candidate screening, smart recommendations, n8n/Make automation.",
    tag: "AI",
  },
];

const PROCESS_STEPS = [
  { n: "01", title: "Discovery", copy: "We map the problem, scope, and success criteria together — before writing a line of code." },
  { n: "02", title: "Design", copy: "Wireframes, prototypes, and a design system. You review and approve before we move to build." },
  { n: "03", title: "Build", copy: "Iterative sprints with real demos every cycle. You see progress — not just status updates." },
  { n: "04", title: "Ship & Support", copy: "Deployment, handover, documentation. Ongoing support and iterations as you scale." },
];

const PROJECTS = [
  {
    name: "Sage Hire Stack",
    type: "SaaS · AI Recruitment Platform",
    desc: "Our own product — a full-stack recruitment command centre with AI resume scoring, ATS pipeline, client portal, interview scheduling, and offer management.",
    tech: ["Next.js 14", "Supabase", "Gemini AI", "TypeScript"],
    status: "Live",
    href: "/sage-hire-stack",
    accent: "text-gold-deep",
    bg: "bg-navy",
    dark: true,
  },
  {
    name: "Team Purex",
    type: "Fitness & Wellness Platform",
    desc: "Digital home for a fitness brand — client portal, transformation tracking, workout planning, diet guidance, and trainer-to-client engagement flows.",
    tech: ["Next.js", "Custom CMS", "Vercel"],
    status: "Live",
    href: "https://teampurex.com",
    accent: "text-sage-deep",
    bg: "bg-white",
    dark: false,
    external: true,
  },
  {
    name: "Mahan Traders ERP",
    type: "Trade & Operations Software",
    desc: "Full ERP for a sugar trading firm — daily entry, supplier management, buyer statements, cash book, audit trail, and automated inventory reconciliation.",
    tech: ["Next.js", "Supabase", "Postgres", "RLS"],
    status: "In production",
    href: "/projects",
    accent: "text-charcoal",
    bg: "bg-ivory",
    dark: false,
  },
];

/* ─── page ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-bg dot-grid relative overflow-hidden pb-16 pt-24 text-ivory md:pb-20 md:pt-28">
        <ParticleBackground />
        <div className="container-padded relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/85">
                <span className="h-1.5 w-1.5 rounded-full bg-gold pillar-pulse" />
                Software & Product Studio · Hyderabad
              </div>

              <h1 className="font-display text-[34px] leading-[1.1] text-ivory md:text-[46px]">
                We design and build{" "}
                <span className="italic text-gold">digital products</span>{" "}
                that work.
              </h1>

              <p className="mx-auto max-w-xl text-[14.5px] leading-relaxed text-ivory/70 md:text-[15.5px]">
                Web apps, mobile apps, SaaS platforms, dashboards, and AI-powered tools —
                built end-to-end by a focused studio in Hyderabad.
                Recruitment services are what we built software for. Now we help you build yours too.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/projects"
                  className="btn-gold inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13.5px]"
                >
                  See Our Work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact?intent=project"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ivory/30 px-5 py-2.5 text-[13.5px] font-semibold text-ivory transition hover:bg-ivory/10"
                >
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[13.5px] font-medium text-ivory/60 transition hover:text-gold"
                >
                  Recruitment services
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={150}>
            <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-ivory/10 rounded-2xl border border-ivory/10 bg-white/[0.06] backdrop-blur">
              {[
                { value: "30+", label: "Apps shipped" },
                { value: "5 yrs", label: "Studio experience" },
                { value: "Hyd.", label: "India-based" },
              ].map((s) => (
                <div key={s.label} className="py-4 text-center">
                  <div className="font-display text-[22px] text-gold">{s.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-ivory/50">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT WE BUILD ────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="gold-line mb-4 block" />
                <h2 className="font-display text-[26px] text-navy md:text-[32px]">What we build</h2>
                <p className="mt-2 max-w-lg text-[14px] text-charcoal/65">
                  Software is 70% of what we do. Below are the six areas where we go deep.
                </p>
              </div>
              <Link
                href="/projects"
                className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition hover:text-gold"
              >
                View portfolio
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOFTWARE_SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 50}>
                <div className="group svc-card card-hover rounded-2xl border border-navy/7 bg-ivory p-6">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="svc-ic shrink-0">
                      <ServiceIcon index={i} />
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      s.tag === "AI" ? "chip-gold" : s.tag === "Speciality" ? "chip" : "bg-navy/5 text-navy/50"
                    }`}>
                      {s.tag}
                    </span>
                  </div>
                  <div className="mb-1.5 font-display text-[16px] text-navy">{s.title}</div>
                  <p className="text-[13px] leading-relaxed text-charcoal/60">{s.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Recruitment teaser — clearly secondary */}
          <ScrollReveal>
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-navy/8 bg-navy/3 px-6 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="7" r="4" /><path d="M17 11a4 4 0 100-8"/><path d="M1 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[13px] font-semibold text-navy">Recruitment & Talent Services</span>
                <span className="text-[13px] text-charcoal/55"> — contract, permanent, and bulk hiring for IT and non-IT roles across India.</span>
              </div>
              <Link href="/services" className="shrink-0 text-[12.5px] font-semibold text-navy/60 transition hover:text-gold">
                Learn more →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────── */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-10">
              <span className="gold-line mb-4 block" />
              <h2 className="font-display text-[26px] text-navy md:text-[32px]">Selected work</h2>
              <p className="mt-2 text-[14px] text-charcoal/65">
                Projects we&apos;ve designed, built, and shipped.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {PROJECTS.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 60}>
                <div className={`group rounded-2xl border ${p.dark ? "border-gold/15" : "border-navy/7"} ${p.bg} overflow-hidden`}>
                  <div className="grid items-center gap-6 p-7 md:grid-cols-[1fr_auto]">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`font-display text-[18px] ${p.dark ? "text-ivory" : "text-navy"}`}>
                          {p.name}
                        </span>
                        <span className={`rounded-full text-[10.5px] font-semibold uppercase tracking-[0.12em] px-2.5 py-0.5 ${
                          p.dark ? "bg-gold/15 text-gold" : "bg-navy/7 text-navy/55"
                        }`}>
                          {p.status}
                        </span>
                      </div>
                      <p className={`text-[11.5px] font-medium uppercase tracking-[0.14em] ${p.dark ? "text-ivory/45" : "text-charcoal/45"}`}>
                        {p.type}
                      </p>
                      <p className={`max-w-xl text-[13.5px] leading-relaxed ${p.dark ? "text-ivory/70" : "text-charcoal/65"}`}>
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-medium ${
                            p.dark ? "bg-white/8 text-ivory/70" : "bg-navy/6 text-navy/60"
                          }`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={p.href}
                      {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition ${
                        p.dark
                          ? "border-gold/35 text-gold hover:bg-gold hover:text-navy"
                          : "border-navy/15 text-navy hover:bg-navy hover:text-ivory"
                      }`}
                    >
                      {p.external ? "Visit live site" : "View project"}
                      {p.external ? <ArrowUpRight className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-6 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 px-5 py-2.5 text-[13px] font-semibold text-navy transition hover:bg-navy hover:text-ivory"
              >
                See all projects
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="gold-line-c mx-auto mb-4 block" />
              <h2 className="font-display text-[26px] text-navy md:text-[32px]">How a project runs</h2>
              <p className="mt-2 text-[14px] text-charcoal/65">
                Straightforward process. No surprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div className="relative rounded-2xl border border-navy/7 bg-ivory p-6">
                  <div className="mb-3 font-display text-[28px] leading-none text-gold/35">{s.n}</div>
                  <div className="mb-1.5 font-display text-[15px] text-navy">{s.title}</div>
                  <p className="text-[12.5px] leading-relaxed text-charcoal/60">{s.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI INTEGRATION ───────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-navy/5 bg-ivory py-16 md:py-20">
        <div className="sage-blob -right-20 top-0 h-[360px] w-[360px]" />
        <div className="container-padded relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <ScrollReveal>
              <div>
                <span className="gold-line mb-4 block" />
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  AI Integration
                </div>
                <h2 className="font-display text-[26px] text-navy md:text-[32px]">
                  We embed AI where it{" "}
                  <span className="italic text-gold">actually earns its place.</span>
                </h2>
                <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-charcoal/65">
                  Not AI for the press release. AI in the product — resume scoring engines,
                  smart document processing, workflow automation, and recommendation layers
                  that cut real manual work. We&apos;ve built it into our own SaaS.
                </p>
                <ul className="mt-5 space-y-2 text-[13.5px] text-charcoal/70">
                  {[
                    "AI-powered resume screening and scoring",
                    "Document parsing and extraction (Gemini, GPT)",
                    "Workflow automation (n8n, Make, Zapier with AI steps)",
                    "Smart dashboards with natural-language querying",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-solutions"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-navy/15 px-5 py-2.5 text-[13px] font-semibold text-navy transition hover:bg-navy hover:text-ivory"
                >
                  All AI services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                <div className="mb-4 flex items-center justify-between border-b border-navy/5 pb-4">
                  <div>
                    <div className="text-[13px] font-semibold text-navy">AI Resume Score</div>
                    <div className="mt-0.5 text-[11px] text-charcoal/50">Senior Cloud Architect · Auto-processed</div>
                  </div>
                  <span className="chip-gold rounded-full px-2.5 py-1 text-[10px]">AI</span>
                </div>
                <div className="mb-4 grid grid-cols-5 gap-1.5">
                  {[
                    { label: "Clarity", val: 88 },
                    { label: "Impact", val: 76 },
                    { label: "Skills", val: 92 },
                    { label: "Format", val: 84 },
                    { label: "Complete", val: 79 },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="mb-1 h-16 w-full overflow-hidden rounded-lg bg-navy/5">
                        <div
                          className="w-full rounded-lg bg-gradient-to-t from-gold/60 to-gold/20 transition-all"
                          style={{ height: `${m.val}%`, marginTop: `${100 - m.val}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-charcoal/50">{m.label}</div>
                      <div className="text-[11px] font-semibold text-navy">{m.val}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {[
                    { skill: "AWS", pct: 92 },
                    { skill: "Terraform", pct: 85 },
                    { skill: "Python", pct: 78 },
                  ].map((r) => (
                    <div key={r.skill} className="flex items-center gap-3">
                      <span className="w-16 text-[11px] text-charcoal/55">{r.skill}</span>
                      <div className="flex-1 rounded-full bg-navy/6">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-gold to-gold/50" style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="w-8 text-right text-[10px] font-medium text-charcoal/55">{r.pct}%</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[10px] text-charcoal/35">Illustrative AI processing</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SAGE HIRE STACK — OWN PRODUCT ────────────────── */}
      <section className="relative overflow-hidden bg-navy py-16 text-ivory md:py-20">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />
        <div className="container-padded relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold/70">
                  Our Own Product
                </div>
                <h2 className="font-display text-[26px] leading-tight text-ivory md:text-[34px]">
                  Sage Hire Stack —{" "}
                  <span className="italic text-gold">recruitment software we built and use ourselves.</span>
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-ivory/65">
                  We don&apos;t just build software for clients — we built a full SaaS product to run our own
                  recruitment operations. Sage Hire Stack is an AI-powered talent acquisition command
                  centre with a full ATS, client portal, offer management, and interview suite.
                </p>
                <ul className="mt-5 space-y-2 text-[13px] text-ivory/70">
                  {[
                    "AI resume scoring with Gemini models",
                    "Real-time ATS kanban pipeline",
                    "Client portal with role-based access",
                    "Interview scheduling and structured feedback",
                    "Offer management and onboarding workflows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <Link
                    href="/sage-hire-stack"
                    className="btn-gold inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13.5px]"
                  >
                    Learn about Sage Hire Stack
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="https://hire.sagencrewnext.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-5 py-2.5 text-[13.5px] font-semibold text-ivory transition hover:bg-ivory/8"
                  >
                    Open app
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-dark rounded-2xl border border-gold/15 p-5 shadow-lift">
                {/* Mini product mockup */}
                <div className="mb-4 flex items-center gap-3 border-b border-white/6 pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-deep font-display font-bold text-[12px] text-navy">S</div>
                  <div>
                    <div className="text-[13px] font-semibold text-ivory">Sage Hire Stack</div>
                    <div className="text-[10px] text-ivory/45">AI Talent Acquisition Platform</div>
                  </div>
                  <span className="ml-auto rounded-full bg-sage/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-sage">Live</span>
                </div>

                {/* KPI row */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Active Roles", value: "12" },
                    { label: "In Pipeline", value: "84" },
                    { label: "Offers Out", value: "6" },
                  ].map((k) => (
                    <div key={k.label} className="rounded-xl border border-white/6 bg-white/4 p-3 text-center">
                      <div className="font-display text-[20px] text-ivory">{k.value}</div>
                      <div className="mt-0.5 text-[9.5px] uppercase tracking-wider text-ivory/40">{k.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pipeline stages */}
                <div className="mb-3 text-[9.5px] uppercase tracking-wider text-ivory/35">ATS Pipeline</div>
                <div className="space-y-1.5">
                  {[
                    { stage: "Applied", count: 32, pct: 85 },
                    { stage: "Screening", count: 18, pct: 55 },
                    { stage: "Interview", count: 9, pct: 30 },
                    { stage: "Offer", count: 6, pct: 18 },
                  ].map((s) => (
                    <div key={s.stage} className="flex items-center gap-3">
                      <span className="w-16 text-[11px] text-ivory/55">{s.stage}</span>
                      <div className="flex-1 rounded-full bg-white/5">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-gold/70 to-gold/25" style={{ width: `${s.pct}%` }} />
                      </div>
                      <span className="text-[11px] text-ivory/45">{s.count}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[9.5px] text-ivory/25">Illustrative dashboard</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RECRUITMENT SERVICES (30%) ────────────────────── */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="container-padded">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px]">
            <ScrollReveal>
              <div>
                <span className="gold-line mb-4 block" />
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                  Talent Solutions
                </div>
                <h2 className="font-display text-[26px] text-navy md:text-[32px]">
                  Recruitment services,{" "}
                  <span className="italic text-gold">done by the people who built the software for it.</span>
                </h2>
                <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-charcoal/65">
                  Our team handles end-to-end hiring for IT and non-IT roles across India.
                  Every search runs on Sage Hire Stack — so you get full pipeline visibility,
                  not just weekly emails.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "IT Recruitment", copy: "Engineers, DevOps, product managers, QA, data, and design across levels." },
                    { title: "Non-IT Hiring", copy: "Sales, marketing, operations, finance, and leadership roles." },
                    { title: "Contract & Staffing", copy: "Short-term and project-based placement with payroll flexibility." },
                    { title: "Bulk Hiring", copy: "High-volume hiring campaigns with structured screening and tracking." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-navy/7 bg-white p-4">
                      <div className="mb-1 text-[13.5px] font-semibold text-navy">{item.title}</div>
                      <p className="text-[12.5px] leading-relaxed text-charcoal/55">{item.copy}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Link
                    href="/contact?intent=employer"
                    className="btn-gold inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13.5px]"
                  >
                    Submit a hiring brief
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/12 px-5 py-2.5 text-[13.5px] font-semibold text-navy transition hover:bg-navy hover:text-ivory"
                  >
                    See all services
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-2.5 border-b border-navy/5 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-navy">Hiring Requirement Received</div>
                    <div className="text-[11px] text-charcoal/50">Senior Cloud Architect · Hyderabad / Remote</div>
                  </div>
                </div>
                <div className="border-b border-navy/5 py-4">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-charcoal/45">Skills matched</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["AWS", "GCP", "Terraform", "Kubernetes", "Python"].map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  {[
                    { init: "AS", name: "Aarav S.", score: "94 / 100" },
                    { init: "PR", name: "Priya R.", score: "89 / 100" },
                    { init: "VK", name: "Vikram K.", score: "86 / 100" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between rounded-lg bg-ivory px-3 py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/15 text-[11px] font-semibold text-sage-deep">{c.init}</div>
                        <span className="text-[13px] font-medium text-navy">{c.name}</span>
                      </div>
                      <span className="text-[11.5px] font-semibold text-gold-deep">{c.score}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[10px] text-charcoal/35">Illustrative shortlist — runs on Sage Hire Stack</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ──────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-8 text-center">
              <span className="gold-line-c mx-auto mb-4 block" />
              <h2 className="font-display text-[24px] text-navy md:text-[28px]">Who we work with</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                "Startups building 0→1",
                "Scale-ups needing a product team",
                "Businesses replacing spreadsheets",
                "Companies automating workflows",
                "HR teams upgrading their stack",
                "Founders shipping their first app",
                "IT teams with recruitment backlogs",
              ].map((a) => (
                <span key={a} className="aud-chip">
                  <CheckCircle2 className="h-3 w-3 text-gold" />
                  {a}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="gradient-cta relative overflow-hidden py-16 text-ivory md:py-24">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="container-padded relative text-center">
          <ScrollReveal>
            <span className="gold-line-c mx-auto mb-5 block" />
            <h2 className="font-display text-[28px] leading-tight text-ivory md:text-[38px]">
              Have a product to build or a role to fill?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] text-ivory/65 md:text-[15px]">
              Software studio work and talent solutions from a single team in Hyderabad.
              No hand-offs. No middlemen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?intent=project"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px]"
              >
                Start a Software Project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact?intent=employer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-[13.5px] font-semibold text-ivory transition hover:bg-ivory/10"
              >
                Submit a Hiring Requirement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-[13px] font-medium text-ivory/55 transition hover:text-ivory"
              >
                Just want to talk? →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ─── icon helper ───────────────────────────────────────── */
function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
    <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h4M7 11h6M7 14h3"/></svg>,
    <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2h5z"/><path d="M19 8l-5 5 2 4 5-9h-2z"/></svg>,
  ];
  return icons[index] ?? icons[0];
}
