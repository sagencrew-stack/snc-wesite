import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Briefcase,
  CheckCircle2,
  Code2,
  Quote,
  Sparkles,
  Wand2,
  Wrench,
} from "lucide-react";

import { HIRE_APP_URL } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-ivory">
        <div className="container-padded grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28 md:gap-16">
          <div className="space-y-7">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">
              Recruitment · Software · AI
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[64px] xl:text-[72px] text-ivory leading-[1.05]">
              One partner for <span className="italic text-gold">people, systems, and AI-powered growth.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ivory/80">
              We help growing teams across India hire faster, build smarter
              software, and put AI to work where it actually matters. From a
              single role to a full product, we ship.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={HIRE_APP_URL} className="btn-ghost-light">
                Open Sage Hire Stack
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-gold/20 bg-navy-soft/60 p-7 shadow-gold">
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                <Sparkles className="h-3.5 w-3.5" />
                What we&apos;re doing right now
              </p>
              <ul className="space-y-4 text-sm text-ivory/85">
                {[
                  "Hiring 40+ engineering and product roles for high-growth Indian SaaS teams.",
                  "Shipping internal tools, dashboards, and CRMs on Next.js + Supabase.",
                  "Wiring Gemini, Claude, and OpenAI into recruiting, support, and ops workflows.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">What we do</span>
            <h2 className="text-3xl md:text-5xl">
              Three practices, <span className="italic text-gold-deep">one partner.</span>
            </h2>
            <p className="text-base leading-relaxed text-charcoal/75">
              We don&apos;t spread thin. Recruitment is the front door — software and
              AI deepen the relationship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Briefcase}
              title="Recruitment & talent"
              copy="Full-cycle hiring for tech, product, design, and GTM roles. India-first, remote-friendly. Built on our own Sage Hire Stack."
              href="/services"
            />
            <ServiceCard
              icon={Code2}
              title="Software projects"
              copy="Custom internal tools, customer portals, and CRMs. Next.js + Supabase + Tailwind. Small senior team, no offshore handoffs."
              href="/projects"
            />
            <ServiceCard
              icon={Bot}
              title="AI & automation"
              copy="Practical AI integrations that ship. Resume parsing, sourcing copilots, support triage, and ops dashboards."
              href="/ai-solutions"
            />
          </div>
        </div>
      </section>

      {/* Hire Stack callout */}
      <section className="bg-navy text-ivory">
        <div className="container-padded grid items-center gap-10 py-20 md:grid-cols-2 md:py-24">
          <div className="space-y-5">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">
              Our own product
            </span>
            <h2 className="text-ivory text-3xl md:text-5xl">
              The Sage Hire Stack <span className="italic text-gold">runs every search we do.</span>
            </h2>
            <p className="max-w-xl text-ivory/80">
              A modern HCM-lite platform we built for our recruiters and our
              clients. Every position, candidate, interview, offer, and joining
              tracked in one place — with proper DPDP-compliant data handling.
            </p>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              {[
                "AI resume parsing — auto-fill candidate fields from a PDF",
                "Client portal — real-time visibility into your pipeline",
                "Candidate portal — joining docs + interview schedule in one place",
                "Indian context — LPA, ₹ Indian numbering, DPDP consent flow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Wand2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/sage-hire-stack" className="btn-primary">
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={HIRE_APP_URL} className="btn-ghost-light">
                Open the app
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-gold/25 bg-navy-soft/70 p-6 shadow-gold">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-ivory/55">
                  <span>Position · POS-2026-0042</span>
                  <span className="rounded-full bg-gold/20 px-2 py-0.5 text-gold-soft">
                    Interviews in progress
                  </span>
                </div>
                <p className="font-display text-2xl text-ivory">
                  Senior Backend Engineer · Bengaluru
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2 text-xs">
                  {[
                    { label: "Sourced", value: 24 },
                    { label: "Shortlist", value: 7 },
                    { label: "Offers", value: 2 },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-navy/50 px-3 py-3"
                    >
                      <p className="text-ivory/55 uppercase tracking-wider">{s.label}</p>
                      <p className="font-display text-2xl text-gold">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-ivory/10 bg-navy/40 p-3 text-xs text-ivory/70">
                  <p className="mb-1 text-ivory/55 uppercase tracking-wider">
                    Next interview
                  </p>
                  <p className="text-sm">
                    Anita Reddy · Manager round · Tomorrow 11:00 IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">How we work</span>
            <h2 className="text-3xl md:text-5xl">
              Small senior team. <span className="italic text-gold-deep">No offshore handoffs.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                copy: "30-minute call to understand the role, system, or workflow. No deck required.",
              },
              {
                step: "02",
                title: "Scope",
                copy: "We write the spec, you sign off. No surprises mid-engagement.",
              },
              {
                step: "03",
                title: "Execute",
                copy: "Weekly check-ins. Real-time visibility into pipeline or progress.",
              },
              {
                step: "04",
                title: "Hand off",
                copy: "Docs, training, and 30-day support. Your team owns it.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="space-y-2 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
              >
                <p className="font-display text-2xl text-gold-deep">{step.step}</p>
                <p className="font-semibold text-navy">{step.title}</p>
                <p className="text-sm text-charcoal/75">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">Who we help</span>
            <h2 className="text-3xl md:text-5xl">
              Employers, candidates, <span className="italic text-gold-deep">and operators.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <AudienceCard
              icon={Briefcase}
              eyebrow="For employers"
              title="Need the right candidates, faster?"
              copy="We source and screen so your team interviews only the top of the funnel. Recruitment-as-a-service with full pipeline visibility."
              cta={{ label: "How recruitment works", href: "/services" }}
            />
            <AudienceCard
              icon={Sparkles}
              eyebrow="For candidates"
              title="A stronger resume, a sharper profile."
              copy="Free tools to polish your resume, build a portfolio, and apply with confidence. No sign-up walls."
              cta={{ label: "Open the toolkit", href: "/tools" }}
            />
            <AudienceCard
              icon={Wrench}
              eyebrow="For founders"
              title="Software that just ships."
              copy="Internal tools, customer portals, and AI workflows built in weeks, not quarters. Small senior team, real ownership."
              cta={{ label: "See what we've built", href: "/projects" }}
            />
          </div>
        </div>
      </section>

      {/* Pull-quote / values */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-gold/80" aria-hidden />
            <p className="mt-5 font-display text-2xl leading-relaxed text-ivory md:text-3xl">
              We don&apos;t pitch shiny things. We ship work our clients can point at
              six months later and still be proud of.
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-gold/80">
              — Vishnu, Founder
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Ready to build your <span className="italic text-gold">next team, system, or AI-powered workflow?</span>
                </h2>
                <p className="text-ivory/80">
                  Tell us what you&apos;re hiring for, building, or trying to
                  automate. We&apos;ll come back within one business day with a plan
                  — or honestly tell you we&apos;re not the right fit.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link href="/contact" className="btn-primary">
                  Start the conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={HIRE_APP_URL} className="btn-ghost-light">
                  Already a client? Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  copy,
  href,
}: {
  icon: typeof Briefcase;
  title: string;
  copy: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-navy/10 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lift"
    >
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{copy}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep group-hover:underline">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function AudienceCard({
  icon: Icon,
  eyebrow,
  title,
  copy,
  cta,
}: {
  icon: typeof Briefcase;
  eyebrow: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-navy/10 bg-white p-7 shadow-soft">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
        <Icon className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-charcoal/75">{copy}</p>
      <Link
        href={cta.href}
        className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-navy hover:underline"
      >
        {cta.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
