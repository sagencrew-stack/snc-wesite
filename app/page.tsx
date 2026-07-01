import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ParticleBackground } from "@/components/particle-bg";
import { ScrollReveal } from "@/components/scroll-reveal";

/* ─── data ─────────────────────────────────────────────── */
const TECH = [
  "Next.js", "React Native", "TypeScript", "Supabase", "PostgreSQL",
  "Gemini AI", "Flutter", "Node.js", "Tailwind CSS", "Vercel",
  "n8n Automation", "GPT-4", "Framer Motion", "Docker", "Prisma",
];

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Web Application Development",
    copy: "Custom web apps, portals, admin panels, and internal tools. React, Next.js, Node.js, Supabase — modern stacks, real delivery.",
    tag: "CORE",
    wide: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: "Mobile App Design & Build",
    copy: "Cross-platform iOS & Android apps in React Native or Flutter. Product-quality UI that performs.",
    tag: "CORE",
    wide: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "SaaS Product Development",
    copy: "End-to-end SaaS — multi-tenant architecture, billing, role-based access, real-time data. We built one ourselves.",
    tag: "SPECIALITY",
    wide: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: "UI/UX & Product Design",
    copy: "Wireframes, design systems, interactive prototypes. Design that converts — and implementation that matches.",
    tag: "CORE",
    wide: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h4M7 11h6M7 14h3"/>
      </svg>
    ),
    title: "Dashboards & Analytics",
    copy: "Custom reporting, KPI trackers, CRM tools, and data visualisation for operations, sales, and HR teams.",
    tag: "CORE",
    wide: false,
  },
];

const PROJECTS = [
  {
    name: "Sage Hire Stack",
    type: "SaaS · AI Recruitment Platform",
    desc: "Our own product — an AI-powered talent acquisition platform with ATS pipeline, resume scoring, client portal, interview scheduling, and offer management.",
    tech: ["Next.js 14", "Supabase", "Gemini AI", "TypeScript"],
    status: "Live",
    href: "/sage-hire-stack",
    strip: "bg-gradient-to-r from-[#D4AF37] via-[#c49e2a] to-[#7A9E7E]",
    dark: true,
    bg: "bg-navy",
  },
  {
    name: "Team Purex",
    type: "Fitness & Wellness Platform",
    desc: "Digital home for a fitness brand — client portal, transformation tracking, workout planning, diet guidance, and trainer-to-client engagement flows.",
    tech: ["Next.js", "Custom CMS", "Vercel"],
    status: "Live",
    href: "https://teampurex.com",
    strip: "bg-gradient-to-r from-[#7A9E7E] via-emerald-400 to-[#7A9E7E]",
    dark: false,
    bg: "bg-white",
    external: true,
  },
  {
    name: "Mahan Traders ERP",
    type: "Trade & Operations Software",
    desc: "Full ERP for a sugar trading firm — daily entry, supplier management, buyer statements, cash book, audit trail, and automated inventory reconciliation.",
    tech: ["Next.js", "Supabase", "Postgres", "RLS"],
    status: "In production",
    href: "/projects",
    strip: "bg-gradient-to-r from-[#0B1F3A] via-[#1F4068] to-[#0B1F3A]",
    dark: false,
    bg: "bg-ivory",
  },
];

/* ─── page ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════ */}
      <section className="hero-bg relative min-h-screen overflow-hidden text-ivory">
        {/* Stronger glow orb */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-[38%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]" />
          <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/[0.09] blur-[80px]" />
        </div>
        <ParticleBackground />

        <div className="container-padded relative z-10 flex min-h-screen flex-col justify-center pb-12 pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px]">
            {/* Left */}
            <ScrollReveal>
              <div>
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold pillar-pulse" />
                  Software &amp; Product Studio · Hyderabad
                </div>

                {/* Headline */}
                <h1 className="font-display text-[42px] font-bold leading-[1.05] tracking-tight text-ivory md:text-[58px] lg:text-[68px]">
                  We build software<br />
                  <span className="italic text-gold">clients actually use.</span>
                </h1>

                {/* Sub-copy — tight, punchy */}
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ivory/65 md:text-[16px]">
                  Web apps, mobile apps, SaaS products, AI integrations —
                  designed and shipped end-to-end from Hyderabad.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact?intent=project"
                    className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-[14px] font-semibold text-ivory transition hover:bg-ivory/10"
                  >
                    See Our Work
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {[
                    { n: "30+", label: "apps shipped" },
                    { n: "5 yrs", label: "studio experience" },
                    { n: "3", label: "countries served" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-[28px] font-bold leading-none text-gold">{s.n}</div>
                      <div className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-ivory/45">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Product preview card */}
            <ScrollReveal delay={120}>
              <div className="hidden lg:block">
                <div className="glass-dark floaty rounded-2xl border border-gold/20 p-5 shadow-lift">
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3 border-b border-white/6 pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-[#A8881F] font-display text-[13px] font-bold text-navy">S</div>
                    <div>
                      <div className="text-[13px] font-semibold text-ivory">Sage Hire Stack</div>
                      <div className="text-[10.5px] text-ivory/40">AI Recruitment Platform · Live</div>
                    </div>
                    <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Live</span>
                  </div>

                  {/* KPIs */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {[{ v: "12", l: "Active Roles" }, { v: "84", l: "In Pipeline" }, { v: "6", l: "Offers Out" }].map((k) => (
                      <div key={k.l} className="rounded-xl border border-white/5 bg-white/4 p-3 text-center">
                        <div className="font-display text-[22px] text-ivory">{k.v}</div>
                        <div className="mt-0.5 text-[9px] uppercase tracking-wider text-ivory/35">{k.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline bars */}
                  <div className="mb-1 text-[9.5px] uppercase tracking-wider text-ivory/30">ATS Pipeline</div>
                  <div className="space-y-1.5 py-2">
                    {[{ s: "Applied", c: 32, p: 85 }, { s: "Screening", c: 18, p: 55 }, { s: "Interview", c: 9, p: 30 }, { s: "Offer", c: 6, p: 18 }].map((r) => (
                      <div key={r.s} className="flex items-center gap-3">
                        <span className="w-16 text-[11px] text-ivory/50">{r.s}</span>
                        <div className="flex-1 rounded-full bg-white/5">
                          <div className="h-1.5 rounded-full bg-gradient-to-r from-gold to-gold/30" style={{ width: `${r.p}%` }} />
                        </div>
                        <span className="w-5 text-right text-[11px] text-ivory/40">{r.c}</span>
                      </div>
                    ))}
                  </div>

                  {/* AI Score row */}
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-gold/15 bg-gold/5 p-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2h5z"/><path d="M19 8l-5 5 2 4 5-9h-2z"/>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-semibold text-ivory/80">AI Resume Score</div>
                      <div className="text-[10px] text-ivory/40">Priya R. · 94 / 100 match</div>
                    </div>
                    <span className="chip-gold rounded-full px-2 py-0.5 text-[9px]">AI</span>
                  </div>
                  <p className="mt-3 text-center text-[9px] text-ivory/20">Illustrative — runs on Sage Hire Stack</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <div className="h-6 w-px bg-gradient-to-b from-transparent to-ivory/60" />
          <div className="h-6 w-px bg-gradient-to-b from-ivory/60 to-transparent animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ══ TECH MARQUEE ═══════════════════════════════════ */}
      <section className="border-y border-navy/8 bg-white py-4">
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...TECH, ...TECH].map((t, i) => (
              <span key={i} className="marquee-item">
                {t}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══════════════════════════════════ */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-3 inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/50">
              What we build
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-[30px] text-navy md:text-[38px]">
                Software is 70% of what we do.
              </h2>
              <Link href="/projects" className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy/60 transition hover:text-gold">
                View portfolio <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Bento grid */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {/* Wide card */}
            <ScrollReveal className="md:col-span-2">
              <div className="svc-card-v2 group h-full min-h-[190px]">
                <div className="svc-ic mb-4 transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-gold">
                  {SERVICES[0].icon}
                </div>
                <div className="mb-1 font-display text-[18px] text-navy">{SERVICES[0].title}</div>
                <p className="text-[13.5px] leading-relaxed text-charcoal/60">{SERVICES[0].copy}</p>
                <span className="mt-4 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  {SERVICES[0].tag}
                </span>
              </div>
            </ScrollReveal>

            {/* Regular card */}
            <ScrollReveal delay={60}>
              <div className="svc-card-v2 group h-full min-h-[190px]">
                <div className="svc-ic mb-4 transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-gold">
                  {SERVICES[1].icon}
                </div>
                <div className="mb-1 font-display text-[18px] text-navy">{SERVICES[1].title}</div>
                <p className="text-[13.5px] leading-relaxed text-charcoal/60">{SERVICES[1].copy}</p>
                <span className="mt-4 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  {SERVICES[1].tag}
                </span>
              </div>
            </ScrollReveal>

            {/* 3 equal cards */}
            {SERVICES.slice(2).map((s, i) => (
              <ScrollReveal key={s.title} delay={(i + 2) * 60}>
                <div className="svc-card-v2 group h-full min-h-[175px]">
                  <div className="svc-ic mb-4 transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-gold">
                    {s.icon}
                  </div>
                  <div className="mb-1 font-display text-[17px] text-navy">{s.title}</div>
                  <p className="text-[13px] leading-relaxed text-charcoal/60">{s.copy}</p>
                  <span className="mt-3 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy/40">
                    {s.tag}
                  </span>
                </div>
              </ScrollReveal>
            ))}

            {/* AI — featured full-width dark card */}
            <ScrollReveal className="md:col-span-3">
              <div className="svc-card-v2 featured group relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/6 blur-3xl" />
                <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8">
                      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2h5z"/>
                      <path d="M19 8l-5 5 2 4 5-9h-2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="chip-gold mb-2 inline-block">AI — Featured</span>
                    <div className="font-display text-[20px] text-ivory">AI Integration &amp; Workflow Automation</div>
                    <p className="mt-1.5 max-w-2xl text-[13.5px] text-ivory/60">
                      Not AI for the press release — AI that cuts real manual work. Resume scoring, document extraction, smart recommendations, n8n/Make automation pipelines. We&apos;ve built and shipped it ourselves.
                    </p>
                  </div>
                  <Link href="/ai-solutions" className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-4 py-2 text-[13px] font-semibold text-gold transition hover:bg-gold hover:text-navy">
                    AI Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Recruitment teaser */}
          <ScrollReveal>
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-navy/8 bg-white px-6 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 100-8"/><path d="M1 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/>
                </svg>
              </div>
              <p className="flex-1 text-[13.5px] text-charcoal/65">
                <span className="font-semibold text-navy">Recruitment &amp; Talent Services —</span>{" "}
                end-to-end hiring for IT and non-IT roles across India, powered by our own ATS.
              </p>
              <Link href="/services" className="shrink-0 text-[13px] font-semibold text-gold transition hover:text-gold-deep">
                View talent services →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ NUMBERS ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-16 md:py-20">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[80px]" />
        <div className="container-padded relative">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: "30+", label: "Digital products shipped" },
              { n: "5 yrs", label: "In product studio" },
              { n: "3", label: "Countries served" },
              { n: "100%", label: "Project completion rate" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="stat-num">{s.n}</div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.15em] text-ivory/40">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SELECTED WORK ══════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-3 inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/50">
              Selected work
            </div>
            <h2 className="font-display text-[30px] text-navy md:text-[38px]">
              Products we&apos;ve built and shipped.
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-5">
            {PROJECTS.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 70}>
                <div className={`group overflow-hidden rounded-2xl border ${p.dark ? "border-gold/15" : "border-navy/7"} ${p.bg}`}>
                  {/* Color strip */}
                  <div className={`work-strip ${p.strip}`} />
                  <div className="grid items-center gap-6 p-7 md:grid-cols-[1fr_auto]">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`font-display text-[20px] ${p.dark ? "text-ivory" : "text-navy"}`}>{p.name}</span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${p.dark ? "bg-gold/15 text-gold" : "bg-navy/7 text-navy/50"}`}>
                          {p.status}
                        </span>
                      </div>
                      <p className={`text-[11.5px] font-medium uppercase tracking-[0.14em] ${p.dark ? "text-ivory/40" : "text-charcoal/40"}`}>{p.type}</p>
                      <p className={`max-w-xl text-[14px] leading-relaxed ${p.dark ? "text-ivory/70" : "text-charcoal/65"}`}>{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-medium ${p.dark ? "bg-white/8 text-ivory/65" : "bg-navy/5 text-navy/55"}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={p.href}
                      {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-[13px] font-semibold transition ${
                        p.dark
                          ? "border-gold/35 text-gold hover:bg-gold hover:text-navy"
                          : "border-navy/15 text-navy hover:bg-navy hover:text-ivory"
                      }`}
                    >
                      {p.external ? "Visit live" : "View project"}
                      {p.external ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-[13.5px] font-semibold text-navy transition hover:bg-navy hover:text-ivory"
              >
                See all projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ HOW A PROJECT RUNS ═════════════════════════════ */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-3 inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/50">
              How we work
            </div>
            <h2 className="font-display text-[30px] text-navy md:text-[38px]">
              A process built for real delivery.
            </h2>
            <p className="mt-2 text-[14.5px] text-charcoal/55">No surprises. No scope creep. Just product.</p>
          </ScrollReveal>

          <div className="proc-h-wrap mt-12 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", title: "Discovery", copy: "We map the problem, scope, and success criteria together — before writing a single line of code." },
              { n: "02", title: "Design", copy: "Wireframes, prototypes, and a design system. You approve before we build." },
              { n: "03", title: "Build", copy: "Iterative sprints with real demos every cycle. Visible progress, not status updates." },
              { n: "04", title: "Ship & Support", copy: "Deployment, handover, documentation. Ongoing support as you scale." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div className="proc-h-step text-center md:text-center">
                  <div className="proc-h-num">{s.n}</div>
                  <div className="mb-2 font-display text-[17px] text-navy">{s.title}</div>
                  <p className="text-[13px] leading-relaxed text-charcoal/55">{s.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SAGE HIRE STACK SPOTLIGHT ══════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-20 text-ivory md:py-28">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold/8 blur-[80px]" />
        <div className="container-padded relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <span className="section-eyebrow mb-4 inline-block">Our Own Product</span>
              <h2 className="font-display text-[30px] leading-tight text-ivory md:text-[42px]">
                Sage Hire Stack —{" "}
                <span className="italic text-gold">we built our own SaaS.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ivory/60">
                We don&apos;t just promise great software — we built a full SaaS product ourselves to run our own
                recruitment operations. That&apos;s proof of stack, not a slide deck.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "AI resume scoring with Gemini models",
                  "Real-time ATS kanban pipeline",
                  "Client portal with role-based access",
                  "Interview scheduling &amp; structured feedback",
                  "Offer management and onboarding workflows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ivory/65">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12l5 5 9-11"/>
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/sage-hire-stack" className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px]">
                  Explore Sage Hire Stack <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a href="https://hire.sagencrewnext.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 text-[13.5px] font-semibold text-ivory transition hover:bg-ivory/8">
                  Open app <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-dark rounded-2xl border border-gold/15 p-5 shadow-lift">
                <div className="mb-4 flex items-center gap-3 border-b border-white/6 pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-[#A8881F] font-display text-[12px] font-bold text-navy">S</div>
                  <div>
                    <div className="text-[13px] font-semibold text-ivory">Sage Hire Stack</div>
                    <div className="text-[10px] text-ivory/40">AI Talent Acquisition</div>
                  </div>
                  <span className="ml-auto rounded-full bg-sage/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sage">Live</span>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[{ v: "12", l: "Active Roles" }, { v: "84", l: "In Pipeline" }, { v: "6", l: "Offers Out" }].map((k) => (
                    <div key={k.l} className="rounded-xl border border-white/5 bg-white/4 p-3 text-center">
                      <div className="font-display text-[22px] text-ivory">{k.v}</div>
                      <div className="mt-0.5 text-[9px] uppercase tracking-wider text-ivory/35">{k.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-1 text-[9.5px] uppercase tracking-wider text-ivory/30">ATS Pipeline</div>
                <div className="space-y-1.5">
                  {[{ s: "Applied", c: 32, p: 85 }, { s: "Screening", c: 18, p: 55 }, { s: "Interview", c: 9, p: 30 }, { s: "Offer", c: 6, p: 18 }].map((r) => (
                    <div key={r.s} className="flex items-center gap-3">
                      <span className="w-16 text-[11px] text-ivory/50">{r.s}</span>
                      <div className="flex-1 rounded-full bg-white/5">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-gold/70 to-gold/25" style={{ width: `${r.p}%` }} />
                      </div>
                      <span className="text-[11px] text-ivory/40">{r.c}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[9.5px] text-ivory/20">Illustrative dashboard</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ SPLIT CTA ══════════════════════════════════════ */}
      <section>
        <div className="grid md:grid-cols-2">
          {/* Software side */}
          <ScrollReveal>
            <div className="split-cta-left relative overflow-hidden px-8 py-16 md:px-12 md:py-20">
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/6 blur-[60px]" />
              <div className="relative">
                <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/70">Software Projects</span>
                <h3 className="font-display text-[26px] leading-tight text-ivory md:text-[32px]">
                  Have a product to design or build?
                </h3>
                <p className="mt-3 max-w-sm text-[14px] text-ivory/55">
                  Tell us what you&apos;re building. We&apos;ll take it from idea to deployed product.
                </p>
                <Link
                  href="/contact?intent=project"
                  className="mt-7 btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Recruitment side */}
          <ScrollReveal delay={80}>
            <div className="split-cta-right relative overflow-hidden px-8 py-16 md:px-12 md:py-20">
              <div className="pointer-events-none absolute -left-8 top-0 h-64 w-64 rounded-full bg-sage/10 blur-[60px]" />
              <div className="relative">
                <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/45">Talent Solutions</span>
                <h3 className="font-display text-[26px] leading-tight text-navy md:text-[32px]">
                  Need to hire great people?
                </h3>
                <p className="mt-3 max-w-sm text-[14px] text-charcoal/55">
                  End-to-end IT and non-IT hiring across India. Every search runs on Sage Hire Stack.
                </p>
                <Link
                  href="/contact?intent=employer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3 text-[14px] font-semibold text-navy shadow-soft transition hover:bg-navy hover:text-ivory"
                >
                  Submit a Hiring Brief <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
