import Link from "next/link";
import { HeroDashboard } from "@/components/hero-dashboard";
import { MetricsCounter } from "@/components/metrics-counter";
import { ScrollReveal } from "@/components/scroll-reveal";

/* ── Tech marquee ── */
const TECH = [
  "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL",
  "React Native", "Node.js", "Tailwind CSS", "n8n", "Gemini AI",
  "Vercel", "Expo", "Python", "OpenAI", "Stripe",
];

function TechMarquee() {
  return (
    <div className="marquee-wrap py-1">
      <div className="marquee-track">
        {[...TECH, ...TECH].map((t, i) => (
          <span key={i} className="marquee-item">
            {t}<span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 1. HERO ── */
function Hero() {
  return (
    <section className="hero-bg dot-grid min-h-[calc(100vh-68px)] flex items-center pt-24 pb-16">
      <div className="container-padded w-full relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="section-eyebrow mb-7">Software Studio · Hyderabad</div>
            <h1 className="font-display text-[42px] font-medium leading-[1.08] tracking-[-0.025em] text-ivory sm:text-[52px] lg:text-[60px]">
              We Design, Build &amp;<br />
              Ship Software<br />
              <span style={{
                background: "linear-gradient(130deg, #A8C3A5 0%, #7A9E7E 55%, #C9A646 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                That Lasts.
              </span>
            </h1>
            <p className="mt-6 max-w-[500px] text-[15px] font-normal leading-[1.9] text-muted">
              Web applications, mobile apps, ERP systems, AI automation, and SaaS platforms —
              designed, built, and shipped for growing businesses in India and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?intent=project" className="btn-primary rounded-full">
                Start a Project →
              </Link>
              <Link href="/projects" className="btn-ghost-light rounded-full">
                View Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {["30+ Products Shipped", "20+ Clients", "5+ Years Active", "3 Countries"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[12px] font-normal text-muted/50">
                  <span className="h-[3px] w-[3px] rounded-full bg-sage/35" />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroDashboard />
          </div>
        </div>
        <div className="mt-14 border-t border-white/[0.04] pt-8">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}

/* ── 2. WHAT WE BUILD ── */
const CAPABILITIES = [
  {
    bar: "linear-gradient(90deg, #7A9E7E, #5C8060)",
    icon: "⬡",
    title: "Web Applications",
    desc: "SaaS platforms, internal tools, B2B portals, and multi-tenant apps. Built with Next.js + Supabase on fixed-scope timelines.",
    accent: "#7A9E7E",
    href: "/services#web",
  },
  {
    bar: "linear-gradient(90deg, #60A5FA, #3B82F6)",
    icon: "◎",
    title: "Mobile Apps",
    desc: "Cross-platform iOS and Android with React Native. One codebase, native performance, polished UI.",
    accent: "#60A5FA",
    href: "/services#mobile",
  },
  {
    bar: "linear-gradient(90deg, #C9A646, #A8842E)",
    icon: "◈",
    title: "AI & Automation",
    desc: "LLM agents, n8n workflows, document automation, and data pipelines that replace manual work — not prototype demos.",
    accent: "#C9A646",
    href: "/services#ai",
  },
  {
    bar: "linear-gradient(90deg, #8B5CF6, #7C3AED)",
    icon: "◐",
    title: "ERP & Business Systems",
    desc: "Custom ERPs, CRMs, and operations dashboards built for your actual workflow — not generic software with 6-month config.",
    accent: "#8B5CF6",
    href: "/services#erp",
  },
  {
    bar: "linear-gradient(90deg, #10B981, #059669)",
    icon: "○",
    title: "SaaS Development",
    desc: "End-to-end SaaS product builds — architecture, auth, billing, and onboarding. We've shipped our own SaaS, so we know every trap.",
    accent: "#10B981",
    href: "/services#saas",
  },
  {
    bar: "linear-gradient(90deg, #EC4899, #DB2777)",
    icon: "◑",
    title: "UI/UX Design",
    desc: "User flows, wireframes, and polished interfaces. Design-led thinking, not Figma templates dropped on a developer.",
    accent: "#EC4899",
    href: "/services#design",
  },
];

function WhatWeBuild() {
  return (
    <section style={{ background: "#F7F5EE" }} className="py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-eyebrow-light mb-4">What We Build</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-dark md:text-[42px]">
                Six Disciplines, One Team
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-dark/55 leading-relaxed">
                No outsourcing. No freelancers. The same team that built Sage Hire Stack and Liferra builds your product.
              </p>
            </div>
            <Link href="/services" className="text-[13px] font-normal shrink-0 transition-colors" style={{ color: "#5C8060" }}>
              All services →
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 55}>
              <Link href={c.href} className="group flex h-full flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(7,26,47,0.12)]" style={{ border: "1px solid rgba(7,26,47,0.07)" }}>
                <div className="h-[2.5px] w-full" style={{ background: c.bar }} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 text-[22px]" style={{ color: c.accent }}>{c.icon}</div>
                  <h3 className="font-display text-[17px] font-medium tracking-tight text-dark mb-2 group-hover:text-dark/80 transition-colors">{c.title}</h3>
                  <p className="text-[13px] leading-[1.75] text-dark/52 flex-1">{c.desc}</p>
                  <div className="mt-4 text-[12px] font-medium transition-colors" style={{ color: c.accent }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. OUR PRODUCTS ── */
const PRODUCTS = [
  {
    bar: "linear-gradient(90deg, #C9A646, #7A9E7E)",
    tag: "Own SaaS Product",
    tagStyle: { background: "rgba(201,166,70,0.10)", border: "1px solid rgba(201,166,70,0.22)", color: "#A8842E" },
    name: "Sage Hire Stack",
    url: "sagehirestack.com",
    href: "/sage-hire-stack",
    external: false,
    desc: "Our own AI-powered recruitment platform — built because we needed it, opened to clients when it worked. Resume parsing, AI screening, candidate pipeline, interview scheduling, and real-time client sharing.",
    stack: ["Next.js", "Supabase", "Gemini AI", "TypeScript"],
    stat: "Live SaaS",
    statLabel: "Product status",
    badge: "Live",
  },
  {
    bar: "linear-gradient(90deg, #60A5FA, #8B5CF6)",
    tag: "Own Mobile Product",
    tagStyle: { background: "rgba(96,165,250,0.10)", border: "1px solid rgba(96,165,250,0.22)", color: "#3B82F6" },
    name: "Liferra",
    url: "liferra.app",
    href: "/liferra",
    external: false,
    desc: "A mobile-first life dashboard we're building for ourselves — goal tracking, habit streaks, mood logs, finance snapshots, and an AI coach that knows your week. Built with React Native + Supabase.",
    stack: ["React Native", "Expo", "Supabase", "TypeScript"],
    stat: "In Development",
    statLabel: "Product status",
    badge: "Beta",
  },
];

const CLIENT_PROJECTS = [
  {
    bar: "linear-gradient(90deg, #7A9E7E, #5C8060)",
    tag: "Health Tech Platform",
    tagStyle: { background: "rgba(122,158,126,0.10)", border: "1px solid rgba(92,128,96,0.20)", color: "#5C8060" },
    name: "Teampurex",
    url: "teampurex.com",
    href: "https://teampurex.com",
    external: true,
    desc: "Medically supervised health coaching — personal training, physiotherapy, and mental wellness — serving clients across India and the UK.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stat: "India & UK",
    statLabel: "Active markets",
    badge: "Live",
  },
  {
    bar: "linear-gradient(90deg, #0E2A47, #071A2F)",
    tag: "ERP & Corporate Website",
    tagStyle: { background: "rgba(7,26,47,0.07)", border: "1px solid rgba(7,26,47,0.14)", color: "#0E2A47" },
    name: "Mahantraders",
    url: "mahantraders.com",
    href: "https://mahantraders.com",
    external: true,
    desc: "Digital platform and custom ERP for a Hyderabad FMCG commodity trading company — sugar trading, export operations, and supplier management.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    stat: "FMCG & Export",
    statLabel: "Industry",
    badge: "Live",
  },
];

function ProjectCard({ p }: { p: typeof CLIENT_PROJECTS[0] }) {
  const Wrapper = p.external ? "a" : Link;
  const extraProps = p.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrapper
      href={p.href}
      {...(extraProps as any)}
      className="group flex h-full flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(7,26,47,0.12)]"
      style={{ border: "1px solid rgba(7,26,47,0.07)" }}
    >
      <div className="h-[2.5px] w-full" style={{ background: p.bar }} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <span className="rounded-full px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-widest" style={p.tagStyle}>
            {p.tag}
          </span>
          <span className="rounded-full px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-widest" style={{ background: "rgba(122,158,126,0.10)", color: "#5C8060" }}>
            {p.badge}
          </span>
        </div>
        <h3 className="font-display text-[22px] font-medium tracking-tight text-dark leading-tight group-hover:text-dark/75 transition-colors">
          {p.name}
        </h3>
        <p className="mt-0.5 mb-4 text-[12px]" style={{ color: "rgba(7,26,47,0.28)" }}>{p.url} ↗</p>
        <p className="flex-1 text-[13.5px] font-normal leading-[1.75]" style={{ color: "rgba(7,26,47,0.57)" }}>{p.desc}</p>
        <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(7,26,47,0.06)" }}>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.stack.map(s => <span key={s} className="stack-badge-dark">{s}</span>)}
          </div>
          <div>
            <div className="font-display text-[17px] font-semibold text-dark/75">{p.stat}</div>
            <div className="text-[10px] font-normal uppercase tracking-wider mt-0.5" style={{ color: "rgba(7,26,47,0.28)" }}>{p.statLabel}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function OurProducts() {
  return (
    <section className="bg-navy-mid py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-eyebrow mb-4">Products We Own</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[42px]">
                We Ship for Clients.<br />We Also Ship for Ourselves.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-muted leading-relaxed">
                Two live products built entirely in-house. They&apos;re how we eat our own cooking.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 80}>
              <ProjectCard p={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. CLIENT WORK ── */
function ClientWork() {
  return (
    <section style={{ background: "#F7F5EE" }} className="py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-eyebrow-light mb-4">Client Work</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-dark md:text-[42px]">
                Selected Projects
              </h2>
            </div>
            <Link href="/projects" className="text-[13px] font-normal shrink-0 transition-colors" style={{ color: "#5C8060" }}>
              All projects →
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CLIENT_PROJECTS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 80}>
              <ProjectCard p={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 5. HOW WE WORK ── */
const PROCESS = [
  { n: "01", title: "Scope",    desc: "45-min discovery call → written spec we both agree on. No code until the scope is locked." },
  { n: "02", title: "Architect", desc: "Tech stack, database schema, auth model, and deployment plan. Designed for maintainability." },
  { n: "03", title: "Build",    desc: "Weekly demos on staging. You see exactly where things are — no surprises on delivery day." },
  { n: "04", title: "Ship",     desc: "Production deploy, CI/CD, monitoring, and post-launch squashing included in every project." },
  { n: "05", title: "Support",  desc: "Optional retainer or clean handoff with full docs. Your code, your servers, your call." },
];

function HowWeWork() {
  return (
    <section className="bg-navy py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-14">
            <div className="section-eyebrow mb-4">Process</div>
            <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[42px]">
              From Brief to Live in Weeks
            </h2>
            <p className="mt-3 max-w-lg text-[15px] text-muted leading-relaxed">
              No six-month discovery phases. No bloated sprints. Clear milestones, weekly visibility.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 65}>
              <div className="flex flex-col h-full rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.05)", background: "rgba(7,26,47,0.35)" }}>
                <div className="font-display text-[32px] font-medium mb-4" style={{ color: "rgba(122,158,126,0.18)" }}>{p.n}</div>
                <h3 className="font-display text-[15px] font-medium text-ivory mb-2">{p.title}</h3>
                <p className="text-[12.5px] text-muted/68 leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. METRICS ── */
function Metrics() {
  return (
    <section style={{ background: "#F4F7FA" }} className="py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-eyebrow-light mb-4">By the Numbers</div>
            <h2 className="font-display text-[34px] font-medium tracking-tight text-dark md:text-[42px]">
              Five Years of Shipping
            </h2>
          </div>
        </ScrollReveal>
        <MetricsCounter />
      </div>
    </section>
  );
}

/* ── 7. AI AUTOMATION ── */
const AI_ITEMS = [
  { icon: "🤖", name: "AI Agent Development",    desc: "Custom LLM agents that perform multi-step tasks — research, writing, classification, routing — in your workflow." },
  { icon: "🔄", name: "Workflow Automation",      desc: "n8n and custom automation that cuts manual steps across finance, ops, and customer success." },
  { icon: "📄", name: "Document Generation",      desc: "Contracts, reports, and invoices generated from templates by AI — seconds instead of hours." },
  { icon: "💬", name: "AI Assistants & Copilots", desc: "Internal or customer-facing LLM chatbots fine-tuned to your business context and data." },
  { icon: "📊", name: "Data Pipelines",           desc: "ETL, sync, and reporting automation between your tools — CRMs, ERPs, databases, and APIs." },
  { icon: "🎯", name: "CRM & Lead Automation",    desc: "Auto-score leads, trigger follow-up sequences, keep CRM data clean — without manual effort." },
];

function AISection() {
  return (
    <section className="bg-navy-mid py-28">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mb-14">
            <div className="section-eyebrow mb-4">AI & Automation</div>
            <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[42px]">
              Practical AI for Real Operations
            </h2>
            <p className="mt-3 max-w-lg text-[15px] text-muted leading-relaxed">
              Not strategy decks. Production AI systems that cut your team&apos;s manual work from day one.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AI_ITEMS.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 55}>
              <div className="flex items-start gap-4 rounded-xl p-5" style={{ border: "1px solid rgba(122,158,126,0.10)", background: "rgba(7,26,47,0.40)" }}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[18px]" style={{ background: "rgba(122,158,126,0.08)", border: "1px solid rgba(122,158,126,0.13)" }}>
                  {item.icon}
                </div>
                <div>
                  <div className="mb-1 text-[13.5px] font-medium" style={{ color: "rgba(244,247,250,0.85)" }}>{item.name}</div>
                  <div className="text-[12.5px] leading-relaxed text-muted/68">{item.desc}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={200}>
          <div className="mt-5 rounded-xl p-5" style={{ border: "1px solid rgba(122,158,126,0.08)", background: "rgba(7,26,47,0.30)" }}>
            <p className="mb-3 text-[11px] uppercase tracking-widest" style={{ color: "rgba(168,179,194,0.35)" }}>Tools we use</p>
            <div className="flex flex-wrap gap-2">
              {["n8n", "OpenAI GPT-4", "Google Gemini", "Python", "LangChain", "Supabase Edge Functions", "REST APIs & Webhooks"].map(t => (
                <span key={t} className="stack-badge">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── 8. ABOUT STRIP ── */
function AboutStrip() {
  return (
    <section style={{ background: "#F4F7FA" }} className="py-28">
      <div className="container-padded max-w-5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <div className="section-eyebrow-light mb-5">About Us</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-dark mb-5 md:text-[38px]">
                A Studio That Ships<br />
                <span style={{ color: "#5C8060" }}>What It Builds.</span>
              </h2>
              <p className="text-[15px] font-normal leading-[1.85] mb-4" style={{ color: "rgba(7,26,47,0.60)" }}>
                We started as a technical recruitment firm in Hyderabad. Clients kept
                asking &ldquo;Can you build the software too?&rdquo; — so we did. Then
                we automated our own operations with AI. Then built Sage Hire Stack for ourselves.
              </p>
              <p className="text-[15px] font-normal leading-[1.85] mb-8" style={{ color: "rgba(7,26,47,0.60)" }}>
                Today we&apos;re a software studio. Every tool we sell, we&apos;ve built
                and used ourselves first. No outsourcing. No retainer lock-in. Full code ownership.
              </p>
              <Link href="/about" className="btn-ghost-dark rounded-full inline-flex">
                Our Story →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="rounded-2xl p-7 bg-white" style={{ border: "1px solid rgba(7,26,47,0.07)", boxShadow: "0 2px 14px -6px rgba(7,26,47,0.08)" }}>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl font-display text-[20px] font-semibold text-white" style={{ background: "linear-gradient(135deg, #0E2A47, #071A2F)" }}>
                  V
                </div>
                <div>
                  <div className="font-display text-[15px] font-medium text-dark">Vardhan Puttepu</div>
                  <div className="mt-0.5 text-[12px]" style={{ color: "rgba(7,26,47,0.38)" }}>Founder, Sage &amp; Crew Next</div>
                </div>
              </div>
              <blockquote className="border-l-2 pl-4 text-[13.5px] italic leading-[1.85]" style={{ borderColor: "rgba(122,158,126,0.28)", color: "rgba(7,26,47,0.58)" }}>
                &ldquo;Every project we take on, we treat like we&apos;re building it for ourselves.
                That&apos;s how Sage Hire Stack was born — we needed the tool,
                built it, and realised others needed it too.&rdquo;
              </blockquote>
              <div className="mt-6 grid grid-cols-3 gap-2.5 text-center">
                {[{ v: "30+", l: "Products" }, { v: "5+", l: "Years" }, { v: "3", l: "Countries" }].map(s => (
                  <div key={s.l} className="rounded-xl p-3.5" style={{ background: "#F4F7FA" }}>
                    <div className="font-display text-[18px] font-semibold" style={{ color: "#C9A646" }}>{s.v}</div>
                    <div className="mt-1 text-[10px]" style={{ color: "rgba(7,26,47,0.32)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── 9. CTA ── */
function FinalCTA() {
  return (
    <section className="bg-navy py-32">
      <div className="container-padded">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="section-eyebrow mb-6">Let&apos;s Build Together</div>
            <h2 className="font-display text-[36px] font-medium tracking-tight text-ivory leading-tight md:text-[48px]">
              What Are You Building?<br />
              <span style={{ color: "#A8C3A5" }}>Let&apos;s Ship It.</span>
            </h2>
            <p className="mt-5 text-[15px] font-normal leading-[1.85] max-w-lg mx-auto" style={{ color: "#A8B3C2" }}>
              Free 45-minute discovery call. We&apos;ll scope it, quote it, and tell you exactly how fast we can deliver.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact?intent=project" className="btn-primary rounded-full">
                Start a Project →
              </Link>
              <Link href="/projects" className="btn-ghost-light rounded-full">
                See Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-[11.5px] font-normal" style={{ color: "rgba(168,179,194,0.38)" }}>
              {["No retainer lock-in", "Hyderabad-based", "Fixed-scope delivery", "Code you own"].map(t => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-[3px] w-[3px] rounded-full" style={{ background: "rgba(122,158,126,0.30)" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── PAGE ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <OurProducts />
      <ClientWork />
      <HowWeWork />
      <Metrics />
      <AISection />
      <AboutStrip />
      <FinalCTA />
    </>
  );
}
