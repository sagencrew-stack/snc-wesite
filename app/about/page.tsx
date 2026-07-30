import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sage & Crew Next is a software studio based in Hyderabad. We design, build, and ship web apps, mobile apps, AI systems, and SaaS platforms for businesses across India and beyond.",
};

const VALUES = [
  {
    icon: "⬡",
    title: "Ship, don't slide",
    desc: "We measure success by working software in production — not Figma decks, not strategy presentations. Every engagement ends with something live.",
  },
  {
    icon: "◈",
    title: "Eat your own cooking",
    desc: "Every tool we sell, we've built and used ourselves first. Sage Hire Stack runs our operations. Liferra tracks our team's goals. We know what we build works.",
  },
  {
    icon: "◎",
    title: "Fixed scope, no surprises",
    desc: "We write specs before we write code. Scope, timeline, and price are agreed upfront. We don't bill you for scope creep we caused.",
  },
  {
    icon: "○",
    title: "Code you own",
    desc: "Full source code, full documentation, full deployment access. We don't hold your product hostage to keep you paying retainers.",
  },
];

const TIMELINE = [
  { year: "2019", event: "Founded as a technical recruitment firm in Hyderabad. First 10 tech hires placed." },
  { year: "2020", event: "Clients started asking 'can you build the software too?' — so we did. First web app shipped." },
  { year: "2021", event: "Dedicated engineering team formed. AI automation practice started. 10+ products shipped." },
  { year: "2022", event: "Mahantraders ERP built. Teampurex health platform launched. RishiDisha Vaastu portal live." },
  { year: "2023", event: "Sage Hire Stack v1 released — built for our own recruitment operations first. Opened to clients." },
  { year: "2024", event: "Liferra development started. AI agent and n8n automation practice expanded. 30+ products total." },
  { year: "2025", event: "Sage Hire Stack v2 deployed. 3 countries, 20+ clients. Software-first studio, officially." },
];

const STACK = [
  "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL",
  "React Native", "Expo", "Tailwind CSS", "Vercel", "Node.js",
  "Python", "n8n", "OpenAI", "Google Gemini", "Stripe", "Resend",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="container-padded">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-6">About Us</div>
            <h1 className="font-display text-[42px] font-medium leading-[1.08] tracking-[-0.025em] text-ivory md:text-[58px]">
              A software studio<br />
              <span style={{
                background: "linear-gradient(130deg, #A8C3A5 0%, #7A9E7E 60%, #C9A646 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>that ships what it builds.</span>
            </h1>
            <p className="mt-6 text-[16px] font-normal leading-[1.85] text-ivory/60 max-w-xl">
              Based in Hyderabad. Building web apps, mobile apps, AI systems,
              and SaaS products since 2019. 30+ products shipped. Zero code held hostage.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#F4F7FA" }} className="py-24">
        <div className="container-padded max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div>
                <div className="section-eyebrow-light mb-5">Our Story</div>
                <h2 className="font-display text-[30px] font-medium tracking-tight text-dark mb-5 md:text-[36px]">
                  We started in recruitment.<br />
                  <span style={{ color: "#5C8060" }}>We pivoted to software.</span>
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.85] text-dark/58">
                  <p>
                    Sage & Crew Next was founded in 2019 as a technical recruitment firm.
                    We were good at it — placed engineers, product managers, and operators
                    across Hyderabad&apos;s startup ecosystem.
                  </p>
                  <p>
                    Then clients started asking: <em>&ldquo;Can you build the software too?&rdquo;</em>
                    First a dashboard. Then a full web app. Then an ERP. By 2021 we had
                    a dedicated engineering team and software was 60% of what we did.
                  </p>
                  <p>
                    In 2023 we built Sage Hire Stack — our own AI-powered recruitment
                    platform — because we needed it for ourselves. We&apos;ve used it to run
                    every hire since. That&apos;s our philosophy: we build tools we&apos;d actually use.
                  </p>
                  <p>
                    Today we&apos;re a software studio first. We still power some clients&apos; hiring
                    through Sage Hire Stack — a product we built — not as a staffing agency.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Software studio", "Hyderabad-based", "5+ years active", "No code lock-in"].map(t => (
                    <span key={t} className="rounded-full px-3 py-1.5 text-[11.5px]" style={{ background: "rgba(122,158,126,0.10)", border: "1px solid rgba(92,128,96,0.18)", color: "#5C8060" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-4">
                {/* Founder card */}
                <div className="rounded-2xl bg-white p-7" style={{ border: "1px solid rgba(7,26,47,0.07)", boxShadow: "0 2px 14px -6px rgba(7,26,47,0.08)" }}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl font-display text-[20px] font-semibold text-white" style={{ background: "linear-gradient(135deg, #0E2A47, #071A2F)" }}>
                      V
                    </div>
                    <div>
                      <div className="font-display text-[15px] font-medium text-dark">Vardhan Puttepu</div>
                      <div className="mt-0.5 text-[12px] text-dark/40">Founder, Sage &amp; Crew Next</div>
                    </div>
                  </div>
                  <blockquote className="border-l-2 pl-4 text-[13.5px] italic leading-[1.85] text-dark/58" style={{ borderColor: "rgba(122,158,126,0.30)" }}>
                    &ldquo;Every project we take on, we treat like we&apos;re building it for ourselves.
                    That&apos;s how Sage Hire Stack was born — we needed it, built it,
                    and realised others needed it too. Now we do the same for our clients.&rdquo;
                  </blockquote>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    {[{ v: "30+", l: "Products" }, { v: "5+", l: "Years" }, { v: "3", l: "Countries" }].map(s => (
                      <div key={s.l} className="rounded-xl p-3.5" style={{ background: "#F4F7FA" }}>
                        <div className="font-display text-[18px] font-semibold" style={{ color: "#C9A646" }}>{s.v}</div>
                        <div className="mt-1 text-[10px] text-dark/32">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="rounded-xl bg-white p-5" style={{ border: "1px solid rgba(7,26,47,0.07)" }}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark/35 mb-3">Our Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {STACK.map(t => (
                      <span key={t} className="stack-badge-dark">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-mid py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12">
              <div className="section-eyebrow mb-4">How We Think</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-ivory md:text-[40px]">
                Four Principles We Don&apos;t Bend On
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 70}>
                <div className="flex gap-5 rounded-xl p-6" style={{ border: "1px solid rgba(255,255,255,0.05)", background: "rgba(7,26,47,0.35)" }}>
                  <div className="text-[22px] flex-shrink-0" style={{ color: "#7A9E7E" }}>{v.icon}</div>
                  <div>
                    <h3 className="font-display text-[16px] font-medium text-ivory mb-2">{v.title}</h3>
                    <p className="text-[13px] text-muted/70 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#F7F5EE" }} className="py-24">
        <div className="container-padded max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="section-eyebrow-light mb-4">Timeline</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-dark md:text-[40px]">
                Six Years of Building
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[52px] top-0 bottom-0 w-px" style={{ background: "rgba(7,26,47,0.08)" }} />
            <div className="space-y-6">
              {TIMELINE.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 55}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-[52px] text-right">
                      <span className="font-display text-[13px] font-semibold" style={{ color: "#C9A646" }}>{t.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-[7px]">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#7A9E7E", boxShadow: "0 0 0 3px rgba(122,158,126,0.15)" }} />
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-dark/60 pt-0.5">{t.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[44px]">
                Ready to work with a team<br />
                <span style={{ color: "#A8C3A5" }}>that actually ships?</span>
              </h2>
              <p className="mt-4 text-[15px] text-muted leading-relaxed">
                Free 45-minute discovery call. No sales pitch — just an honest conversation about what you&apos;re building and how fast we can do it.
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
