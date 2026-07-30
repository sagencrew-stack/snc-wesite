import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Custom web apps, mobile apps, AI automation, ERP systems, and SaaS platforms — designed, built, and shipped by Sage & Crew Next in Hyderabad.",
};

const SERVICES = [
  {
    id: "web",
    icon: "⬡",
    bar: "linear-gradient(90deg, #7A9E7E, #5C8060)",
    title: "Web Applications",
    desc: "Production-ready web apps built with Next.js, React, and Supabase. From MVPs to full-scale SaaS platforms — all shipped on fixed timelines.",
    items: [
      "SaaS platforms and multi-tenant apps",
      "Internal dashboards and admin portals",
      "B2B and B2C web applications",
      "API development and integrations",
      "Progressive Web Apps (PWA)",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    accent: "#7A9E7E",
  },
  {
    id: "mobile",
    icon: "◎",
    bar: "linear-gradient(90deg, #60A5FA, #3B82F6)",
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps with React Native. One codebase, iOS and Android, with native performance and a polished UI.",
    items: [
      "Cross-platform iOS & Android (React Native)",
      "Consumer and B2B mobile products",
      "Offline-first architecture",
      "Push notifications and deep linking",
      "App Store and Play Store deployment",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase"],
    accent: "#60A5FA",
  },
  {
    id: "ai",
    icon: "◈",
    bar: "linear-gradient(90deg, #C9A646, #A8842E)",
    title: "AI & Automation",
    desc: "AI workflows and automation that cut real manual work — not demos. Built with LLMs, n8n, and custom agents that run in production from day one.",
    items: [
      "Custom AI agent development",
      "LLM integrations (GPT-4, Gemini, Claude)",
      "n8n workflow automation",
      "Document and report generation",
      "Data pipelines and CRM automation",
    ],
    stack: ["n8n", "OpenAI", "Gemini", "LangChain", "Python", "Supabase Edge Functions"],
    accent: "#C9A646",
  },
  {
    id: "erp",
    icon: "◐",
    bar: "linear-gradient(90deg, #8B5CF6, #7C3AED)",
    title: "ERP & Business Systems",
    desc: "Internal tools, ERPs, and operations dashboards built for how your business actually works — not generic software that needs 6 months of configuration.",
    items: [
      "Custom ERP and inventory systems",
      "Operations and logistics dashboards",
      "Finance and accounting tools",
      "CRM systems tailored to your process",
      "Legacy system migrations and modernisation",
    ],
    stack: ["Next.js", "PostgreSQL", "Supabase", "React", "TypeScript"],
    accent: "#8B5CF6",
  },
  {
    id: "saas",
    icon: "○",
    bar: "linear-gradient(90deg, #10B981, #059669)",
    title: "SaaS Development",
    desc: "End-to-end SaaS product development — from idea to live, paying customers. We've built our own SaaS (Sage Hire Stack) and know exactly what it takes.",
    items: [
      "Product architecture and technical design",
      "Multi-tenancy, auth, and billing (Stripe)",
      "User onboarding and activation flows",
      "Analytics, usage metering, and limits",
      "Post-launch support and iteration",
    ],
    stack: ["Next.js", "Supabase", "Stripe", "TypeScript", "Vercel", "Resend"],
    accent: "#10B981",
  },
  {
    id: "design",
    icon: "◑",
    bar: "linear-gradient(90deg, #EC4899, #DB2777)",
    title: "UI/UX Design",
    desc: "Design-led product thinking: wireframes, prototypes, and polished UI built from user flows first. No templates, no Figma-to-trash pipelines.",
    items: [
      "Product design and wireframing",
      "Design system creation",
      "User flow and conversion optimisation",
      "Mobile-first responsive design",
      "Brand identity and visual language",
    ],
    stack: ["Figma", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    accent: "#EC4899",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery",     desc: "We spend time understanding your business, users, and goals before writing a single line of code. Output: a scoped spec we both agree on." },
  { step: "02", title: "Architecture",  desc: "Tech stack selection, database schema, auth model, and deployment plan. We design for maintainability, not just the demo." },
  { step: "03", title: "Build & Ship",  desc: "Weekly check-ins, staging previews you can click, and a clear handover. We ship on fixed timelines with full code ownership." },
  { step: "04", title: "Launch",        desc: "Production deployment, monitoring setup, CI/CD, and post-launch bug squashing included. You launch confident, not hopeful." },
  { step: "05", title: "Support",       desc: "Optional retainer for ongoing features and maintenance. Or hand-off to your team with full docs — your call." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-ivory pt-32 pb-20">
        <div className="container-padded">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-6">Services</div>
            <h1 className="font-display text-[42px] font-medium leading-[1.08] tracking-[-0.025em] text-ivory md:text-[58px]">
              Software built to ship,<br />
              <span style={{
                background: "linear-gradient(130deg, #A8C3A5 0%, #7A9E7E 55%, #C9A646 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>not to impress in demos.</span>
            </h1>
            <p className="mt-6 text-[16px] font-normal leading-[1.85] text-ivory/65 max-w-xl">
              We build web apps, mobile apps, AI systems, ERP platforms, and SaaS products —
              end-to-end, on fixed scope. Based in Hyderabad, shipping globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?intent=project" className="btn-primary rounded-full">
                Discuss Your Project →
              </Link>
              <Link href="/projects" className="btn-ghost-light rounded-full">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: "#F7F5EE" }} className="py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-14">
              <div className="section-eyebrow-light mb-4">What We Build</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-dark md:text-[42px]">
                Six Disciplines, One Team
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-dark/55 leading-relaxed">
                We don&apos;t outsource or use freelancers. Every discipline below is handled by the same team that built Sage Hire Stack and Liferra.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 60}>
                <div id={s.id} className="group flex h-full flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(7,26,47,0.12)]" style={{ border: "1px solid rgba(7,26,47,0.07)" }}>
                  <div className="h-[2.5px] w-full" style={{ background: s.bar }} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 text-[22px]" style={{ color: s.accent }}>{s.icon}</div>
                    <h3 className="font-display text-[18px] font-medium tracking-tight text-dark mb-2">{s.title}</h3>
                    <p className="text-[13.5px] leading-[1.75] text-dark/55 mb-5 flex-1">{s.desc}</p>

                    <ul className="space-y-2 mb-5">
                      {s.items.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-[12.5px] text-dark/52">
                          <span className="h-[3px] w-[3px] flex-shrink-0 rounded-full mt-[7px]" style={{ background: s.accent + "70" }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid rgba(7,26,47,0.05)" }}>
                      {s.stack.map(t => (
                        <span key={t} className="stack-badge-dark">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-mid py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-14">
              <div className="section-eyebrow mb-4">How We Work</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[42px]">
                From Brief to Live in Weeks
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-muted leading-relaxed">
                No long discovery phases. No bloated project plans. A clear five-step process with weekly visibility.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 70}>
                <div className="flex flex-col h-full rounded-xl p-5 relative" style={{ border: "1px solid rgba(255,255,255,0.05)", background: "rgba(7,26,47,0.35)" }}>
                  <div className="font-display text-[32px] font-medium mb-4" style={{ color: "rgba(122,158,126,0.18)" }}>{p.step}</div>
                  <h3 className="font-display text-[15px] font-medium text-ivory mb-2">{p.title}</h3>
                  <p className="text-[12.5px] text-muted/70 leading-relaxed">{p.desc}</p>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/10 text-lg">›</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section style={{ background: "#F4F7FA" }} className="py-24">
        <div className="container-padded max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-eyebrow-light mb-4">Engagement</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-dark md:text-[40px]">
                How We Engage
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Fixed Scope",
                tag: "Most Popular",
                tagColor: "#5C8060",
                desc: "You provide a spec. We give a fixed price and timeline. No surprises, no scope creep billing. Best for defined products.",
                bar: "linear-gradient(90deg, #7A9E7E, #5C8060)",
              },
              {
                title: "Time & Material",
                tag: "Flexible",
                tagColor: "#3B82F6",
                desc: "Pay per sprint for ongoing product development, feature work, or early-stage discovery where scope will evolve.",
                bar: "linear-gradient(90deg, #60A5FA, #3B82F6)",
              },
              {
                title: "Retainer",
                tag: "Long-term",
                tagColor: "#C9A646",
                desc: "Monthly bucket of hours for teams that need a reliable technical partner post-launch — features, fixes, scaling.",
                bar: "linear-gradient(90deg, #C9A646, #A8842E)",
              },
            ].map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 80}>
                <div className="flex flex-col h-full rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid rgba(7,26,47,0.07)" }}>
                  <div className="h-[3px]" style={{ background: e.bar }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-[17px] font-medium text-dark">{e.title}</h3>
                      <span className="rounded-full px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider" style={{ background: e.tagColor + "12", color: e.tagColor, border: `1px solid ${e.tagColor}25` }}>
                        {e.tag}
                      </span>
                    </div>
                    <p className="text-[13px] text-dark/55 leading-relaxed flex-1">{e.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="section-eyebrow mb-6">Let&apos;s Build</div>
              <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[44px]">
                Tell Us What You&apos;re Building
              </h2>
              <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-md mx-auto">
                Free 45-minute discovery call. We&apos;ll scope it, quote it, and tell you exactly how fast we can ship.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact?intent=project" className="btn-primary rounded-full">
                  Start a Project →
                </Link>
                <Link href="/projects" className="btn-ghost-light rounded-full">
                  See Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
