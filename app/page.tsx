import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroAnimation } from "@/components/hero-animation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HIRE_APP_URL } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-bg dot-grid relative overflow-hidden pb-14 pt-24 text-ivory md:pb-20 md:pt-28">
        <div className="container-padded">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left */}
            <ScrollReveal>
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold pillar-pulse" />
                  Business Growth Partner
                </div>
                <h1 className="font-display text-4xl leading-[1.05] text-ivory md:text-6xl lg:text-[64px] xl:text-[72px]">
                  Build Teams.{" "}
                  <span className="italic text-gold">Build Systems.</span>{" "}
                  <br className="hidden lg:block" />
                  Build AI-Powered Growth.
                </h1>
                <p className="mx-auto max-w-xl text-[15.5px] leading-relaxed text-ivory/75 lg:mx-0 md:text-[17px]">
                  Sage &amp; Crew Next helps businesses grow with recruitment
                  support, software projects, AI-enabled automation, websites,
                  dashboards, and digital branding solutions.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Link
                    href="/contact?intent=project"
                    className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] md:px-6 md:py-3.5 md:text-[14.5px]"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact?intent=employer"
                    className="rounded-full border border-ivory/25 px-5 py-3 text-[14px] font-semibold text-ivory transition hover:bg-ivory hover:text-navy md:px-6 md:py-3.5 md:text-[14.5px]"
                  >
                    Hire Talent
                  </Link>
                  <Link
                    href="/ai-solutions"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-[14px] font-semibold text-ivory/85 transition hover:text-gold md:py-3.5 md:text-[14.5px]"
                  >
                    Explore AI Solutions
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <p className="text-[12.5px] text-ivory/55">
                  People, platforms, and AI-powered progress for growing businesses.
                </p>
              </div>
            </ScrollReveal>

            {/* Right — canvas animation */}
            <ScrollReveal delay={150}>
              <HeroAnimation />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3 PILLARS ── */}
      <section className="relative overflow-hidden border-t border-white/5 bg-navy py-12 text-ivory md:py-16">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container-padded relative">
          <div className="grid gap-5 md:grid-cols-3 md:gap-7">
            {[
              {
                n: "01",
                title: "Teams",
                copy: "Recruitment, staffing, screening, and hiring coordination for IT and non-IT roles.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 100-8 4 4 0 000 8z"/><path d="M1 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>
                ),
              },
              {
                n: "02",
                title: "Systems",
                copy: "Websites, web apps, dashboards, CRM tools, HR systems, and automation workflows.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M9 9h6v6H9z"/></svg>
                ),
              },
              {
                n: "03",
                title: "AI & Automation",
                copy: "AI-enabled workflows, automation, smart dashboards, and digital branding that move your business faster.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                ),
              },
            ].map((p) => (
              <ScrollReveal key={p.n}>
                <div className="pillar-card">
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/85">
                    Pillar {p.n}
                  </div>
                  <div className="mb-2 font-display text-2xl text-ivory">{p.title}</div>
                  <p className="text-[13.5px] leading-relaxed text-ivory/65">{p.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE PARTNER ── */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="gold-line-c mx-auto mb-5 block" />
              <h2 className="font-display text-3xl text-navy md:text-5xl">
                One partner for{" "}
                <span className="italic text-gold">
                  people, systems, and AI-powered growth.
                </span>
              </h2>
              <p className="mt-4 text-[15.5px] text-charcoal/70">
                Three connected capabilities that work together as your business scales.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Build Teams",
                copy: "We help companies hire quality talent through recruitment, staffing, screening, and hiring coordination.",
                href: "/services",
                cta: "Hiring services",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 100-8 4 4 0 000 8z"/><path d="M1 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/></svg>,
              },
              {
                title: "Build Systems",
                copy: "We build practical digital systems — websites, dashboards, web apps, CRM tools, HR systems, and automation workflows.",
                href: "/projects",
                cta: "See projects",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M9 9h6v6H9z"/></svg>,
              },
              {
                title: "Build AI & Automation",
                copy: "We help businesses use AI, automation, and smart workflows to reduce manual work, improve decisions, and move faster.",
                href: "/ai-solutions",
                cta: "AI solutions",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
              },
            ].map((s) => (
              <ScrollReveal key={s.title}>
                <div className="svc-card card-hover rounded-2xl border border-navy/8 bg-white p-7 shadow-soft">
                  <div className="svc-ic">{s.icon}</div>
                  <div className="mb-2 font-display text-xl text-navy">{s.title}</div>
                  <p className="text-[14px] leading-relaxed text-charcoal/65">{s.copy}</p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition hover:text-gold"
                  >
                    {s.cta}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="gold-line mb-5 block" />
                <h2 className="font-display text-3xl text-navy md:text-5xl">What We Do</h2>
                <p className="mt-4 text-[15.5px] text-charcoal/70">
                  Six service lines that span the people, platforms, and presence a growing business needs.
                </p>
              </div>
              <Link
                href="/contact?intent=project"
                className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-navy transition hover:text-gold"
              >
                Talk to us about a project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Recruitment & Staffing", copy: "Contract hiring, permanent hiring, IT and non-IT recruitment, bulk hiring, and profile shortlisting." },
              { title: "Software Projects", copy: "Websites, web applications, dashboards, portals, CRM tools, HR systems, and internal business platforms." },
              { title: "AI & Business Automation", copy: "AI-assisted workflows, automated reports, reminders, approvals, lead follow-ups, document processing, and manual work reduction." },
              { title: "Websites & Digital Branding", copy: "Business websites, landing pages, brand content, company profiles, and digital presence building." },
              { title: "Career Branding", copy: "Resume writing, LinkedIn optimization, ATS improvement, interview readiness, and professional profile support." },
              { title: "Cloud & DevOps Support", copy: "Deployment support, CI/CD, monitoring, cloud infrastructure, containers, Kubernetes, and automation guidance." },
            ].map((s) => (
              <ScrollReveal key={s.title}>
                <div className="svc-card card-hover rounded-2xl border border-navy/6 bg-ivory p-6">
                  <div className="svc-ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  </div>
                  <div className="mb-1.5 font-display text-lg text-navy">{s.title}</div>
                  <p className="text-[13.5px] leading-relaxed text-charcoal/65">{s.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TEASER ── */}
      <section className="relative overflow-hidden bg-ivory py-16 md:py-24">
        <div className="sage-blob -top-20 right-0 h-[420px] w-[420px]" />
        <div className="container-padded relative">
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="gold-line mb-5 block" />
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  AI &amp; Automation
                </div>
                <h2 className="font-display text-3xl text-navy md:text-5xl">
                  Practical AI for{" "}
                  <span className="italic text-gold">everyday business workflows.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15.5px] text-charcoal/70">
                  We help businesses identify where AI and automation actually reduce
                  repetitive work — without the hype, without overclaiming.
                </p>
              </div>
              <Link
                href="/ai-solutions"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-[14px] font-semibold text-navy transition hover:bg-navy hover:text-ivory"
              >
                See all AI services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "AI Workflow Automation",
                copy: "Automate follow-ups, reminders, approvals, reports, and lead handoffs. Built on n8n, Make, or Zapier with AI steps where they add real value.",
                href: "/ai-solutions",
              },
              {
                title: "AI Resume & Candidate Screening",
                copy: "AI-assisted resume filtering against JDs, skill extraction, and ranked shortlists. Always human-reviewed before profiles reach you.",
                href: "/ai-solutions",
              },
              {
                title: "Smart Dashboards & Insights",
                copy: "Custom dashboards for leads, hiring, sales, operations. AI-assisted natural-language insights so owners can ask questions of their own data.",
                href: "/ai-solutions",
              },
            ].map((c) => (
              <ScrollReveal key={c.title}>
                <Link
                  href={c.href}
                  className="group block rounded-2xl border border-navy/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/20 to-gold/5 text-gold-deep">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <span className="rounded-md border border-sage/25 bg-sage/12 px-2 py-1 text-[10.5px] uppercase tracking-wider text-sage-deep">
                      Available
                    </span>
                  </div>
                  <div className="mb-2 font-display text-xl text-navy">{c.title}</div>
                  <p className="text-[13.5px] leading-relaxed text-charcoal/65">{c.copy}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition group-hover:text-gold">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="gold-line-c mx-auto mb-5 block" />
              <h2 className="font-display text-3xl text-navy md:text-5xl">How We Work</h2>
              <p className="mt-4 text-[15.5px] text-charcoal/70">
                A simple, transparent process from first conversation to delivery and beyond.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-9">
            {[
              { n: "01", title: "Understand", copy: "We understand your hiring need, business idea, workflow, or digital challenge — and what success looks like for you." },
              { n: "02", title: "Plan", copy: "We map the right solution — screens, services, content, or a hiring approach — with clear deliverables." },
              { n: "03", title: "Build", copy: "We create the website, system, shortlist, automation, content, or digital asset you signed off on." },
              { n: "04", title: "Review", copy: "We test, refine, validate, and improve before delivery — no surprises at handover." },
              { n: "05", title: "Support", copy: "We help with launch, coordination, handover, improvements, and ongoing growth." },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 80}>
                <div className="flex items-start gap-6">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-[15px] font-bold text-navy"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37, #A8881F)",
                      boxShadow: "0 0 0 4px rgba(212,175,55,0.12)",
                    }}
                  >
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <div className="mb-1.5 font-display text-xl text-navy">{step.title}</div>
                    <p className="text-[14px] leading-relaxed text-charcoal/70">{step.copy}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="gold-line-c mx-auto mb-5 block" />
              <h2 className="font-display text-3xl text-navy md:text-5xl">Who We Help</h2>
              <p className="mt-4 text-[15.5px] text-charcoal/70">
                We work best with teams and individuals at this stage of building.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {["Startups", "Small Businesses", "HR Teams", "Fitness & Wellness Brands", "Service Businesses", "Technology Teams", "Job Seekers", "Growing Companies"].map((a) => (
                <span key={a} className="aud-chip">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  {a}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOR EMPLOYERS ── */}
      <section id="employers" className="bg-ivory py-16 md:py-24">
        <div className="container-padded grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <span className="gold-line mb-5 block" />
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                For Employers
              </div>
              <h2 className="font-display text-3xl text-navy md:text-5xl">
                Need the right candidates,{" "}
                <span className="italic text-gold">faster?</span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal/70">
                Share your job description and hiring requirements. Our team reviews
                the role, screens suitable candidates, and shares relevant resumes —
                typically within agreed turnaround windows.
              </p>
              <ul className="mt-6 space-y-2.5 text-[14px] text-charcoal/75">
                {["Contract, permanent, and bulk hiring support", "IT and non-IT recruitment across role families", "Human-screened profiles, not auto-forwards", "Interview coordination and feedback tracking"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?intent=employer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[14.5px] text-ivory transition hover:bg-navy-deep"
              >
                Submit Hiring Requirement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-3xl border border-navy/8 bg-white p-7 shadow-soft">
              <div className="flex items-start gap-3 border-b border-navy/5 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                </div>
                <div>
                  <div className="font-display text-lg text-navy">Job Description</div>
                  <div className="text-[12px] text-charcoal/60">Senior Cloud Architect · Hyderabad / Remote</div>
                </div>
              </div>
              <div className="border-b border-navy/5 py-5">
                <div className="mb-2 text-[12px] uppercase tracking-wider text-charcoal/55">Skills extracted</div>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS", "GCP", "Terraform", "Kubernetes", "Python"].map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-2.5 pt-5">
                {[{ init: "AS", name: "Aarav S.", score: "95%" }, { init: "PR", name: "Priya R.", score: "91%" }, { init: "VK", name: "Vikram K.", score: "88%" }].map((c) => (
                  <div key={c.name} className="flex items-center justify-between rounded-lg bg-ivory px-3 py-2 text-[13px]">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/15 text-[11px] font-semibold text-sage-deep">{c.init}</div>
                      <span className="font-medium text-navy">{c.name}</span>
                    </div>
                    <span className="font-semibold text-gold-deep">{c.score}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[10.5px] text-charcoal/40">Illustrative workflow</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOR CANDIDATES ── */}
      <section id="candidates" className="bg-white py-16 md:py-24">
        <div className="container-padded grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-3xl border border-navy/8 bg-ivory p-7 shadow-soft">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-navy/6 bg-white p-4">
                  <div className="mb-2 text-[10.5px] uppercase tracking-wider text-charcoal/55">Before</div>
                  <div className="font-display text-3xl text-red-500">42<span className="text-[16px]">%</span></div>
                  <div className="mt-1 text-[11px] text-charcoal/55">ATS Score</div>
                </div>
                <div className="rounded-2xl border border-gold/30 bg-white p-4">
                  <div className="mb-2 text-[10.5px] uppercase tracking-wider text-gold/85">After</div>
                  <div className="font-display text-3xl text-gold-deep">86<span className="text-[16px]">%</span></div>
                  <div className="mt-1 text-[11px] text-charcoal/55">ATS Score</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-[12.5px]">
                {[{ label: "Keyword Match", val: "78%" }, { label: "Format Quality", val: "92%" }, { label: "LinkedIn Headline", val: "Optimized" }].map((r) => (
                  <div key={r.label} className="flex items-center justify-between rounded-lg border border-navy/5 bg-white px-3 py-1.5">
                    <span className="text-charcoal/70">{r.label}</span>
                    <span className="font-semibold text-gold-deep">{r.val}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[10.5px] text-charcoal/40">Illustrative resume upgrade</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={150}>
            <div>
              <span className="gold-line mb-5 block" />
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                For Candidates
              </div>
              <h2 className="font-display text-3xl text-navy md:text-5xl">
                A stronger resume,{" "}
                <span className="italic text-gold">a sharper profile.</span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal/70">
                We help professionals upgrade their resumes, optimize LinkedIn for
                recruiter visibility, and prepare for interviews — so your skills
                come across as clearly as they should.
              </p>
              <ul className="mt-6 space-y-2.5 text-[14px] text-charcoal/75">
                {["ATS-friendly resume writing and redesign", "LinkedIn headline, about, and skill optimization", "Mock interviews and structured prep", "Career positioning for your next role"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?intent=candidate"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[14.5px] text-ivory transition hover:bg-navy-deep"
              >
                Upload Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FREE TOOLS TEASER ── */}
      <section className="relative overflow-hidden bg-ivory py-16 md:py-24">
        <div className="sage-blob -left-20 top-10 h-[420px] w-[420px]" />
        <div className="container-padded relative">
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="gold-line mb-5 block" />
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Free Tools
                </div>
                <h2 className="font-display text-3xl text-navy md:text-5xl">
                  Built to help you,{" "}
                  <span className="italic text-gold">no sign-up required.</span>
                </h2>
                <p className="mt-4 text-[15.5px] text-charcoal/70">
                  Practical, instant tools for hiring teams, project planners, and job seekers.
                </p>
              </div>
              <Link href="/tools" className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-navy transition hover:text-gold">
                Explore all tools
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "ATS Resume Score Checker", sub: "Match your resume against any JD." },
              { title: "CTC Calculator", sub: "CTC → in-hand monthly (India)." },
              { title: "Resume Keyword Matcher", sub: "Surface missing keywords instantly." },
              { title: "JD Keyword Extractor", sub: "Pull skills, experience, qualifications." },
            ].map((t) => (
              <ScrollReveal key={t.title}>
                <Link href="/tools" className="block rounded-xl border border-navy/8 bg-white p-5 transition hover:border-gold/40 hover:shadow-soft">
                  <div className="font-display text-[15px] text-navy">{t.title}</div>
                  <div className="mt-1 text-[12px] text-charcoal/60">{t.sub}</div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="gradient-cta relative overflow-hidden py-20 text-ivory md:py-28">
        <div className="absolute inset-0 dot-grid opacity-30" />
        {[
          { label: "Recruitment", cls: "left-8 top-10 floaty" },
          { label: "Software Projects", cls: "right-12 top-24 floaty-2" },
          { label: "AI Automation", cls: "bottom-16 left-20 floaty-3" },
          { label: "Digital Branding", cls: "bottom-10 right-24 floaty" },
          { label: "Smart Dashboards", cls: "left-1/4 top-1/2 floaty-2" },
        ].map((chip) => (
          <div
            key={chip.label}
            className={`glass-dark absolute hidden rounded-xl px-3.5 py-2 text-[12px] text-ivory/85 md:block ${chip.cls}`}
          >
            {chip.label}
          </div>
        ))}

        <div className="container-padded relative text-center">
          <ScrollReveal>
            <span className="gold-line-c mx-auto mb-5 block" />
            <h2 className="font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
              Ready to build your{" "}
              <span className="italic text-gold">
                next team, system, or AI-powered workflow?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15.5px] text-ivory/70 md:text-[16.5px]">
              Whether you need hiring support, a business website, a custom dashboard,
              AI-enabled automation, or digital branding, Sage &amp; Crew Next can help
              you move from idea to execution.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?intent=project"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14.5px]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?intent=employer" className="btn-ghost-light rounded-full px-6 py-3.5 text-[14.5px]">
                Hire Talent
              </Link>
              <Link
                href="/ai-solutions"
                className="rounded-full border border-ivory/25 px-6 py-3.5 text-[14.5px] font-semibold text-ivory transition hover:bg-ivory/10"
              >
                Discuss AI Solution
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
