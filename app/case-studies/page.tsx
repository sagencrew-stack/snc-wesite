import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Server,
  TrendingDown,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case studies — Sage & Crew Next",
  description:
    "Real work, real outcomes. How Sage & Crew Next helped teams with cloud infrastructure, AI automation, and technical recruitment.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">
              Case studies
            </span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Real work.{" "}
              <span className="italic text-gold">Real outcomes.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              We don&apos;t do vague case studies. If we can&apos;t put a number
              on the outcome, we don&apos;t count it. Every engagement below is
              something we&apos;re proud to point at.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar — static for now, easy to make dynamic later */}
      <section className="border-b border-navy/10 bg-ivory">
        <div className="container-padded flex flex-wrap gap-2 py-4">
          {["All", "Infrastructure", "AI & automation", "Recruitment"].map(
            (label, i) => (
              <span
                key={label}
                className={
                  i === 0
                    ? "rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-ivory"
                    : "rounded-full border border-navy/15 px-4 py-1.5 text-xs font-medium text-navy/65"
                }
              >
                {label}
              </span>
            ),
          )}
        </div>
      </section>

      {/* Case study: Observability automation */}
      <section className="bg-ivory">
        <div className="container-padded py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Header card */}
            <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft md:p-10">
              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/65">
                  Infrastructure
                </span>
                <span className="rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/65">
                  Observability
                </span>
                <span className="rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/65">
                  Kubernetes · Datadog · AWS
                </span>
              </div>

              {/* Client snapshot */}
              <div className="mb-6 grid gap-4 rounded-2xl bg-ivory-soft p-5 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Industry
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy">
                    SaaS / 3D Design & Collaboration
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Scale
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy">
                    High-traffic, multi-tenant production
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Engagement type
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy">
                    Infrastructure automation
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl text-navy font-display leading-snug">
                Automating observability tagging for high-traffic SaaS products
                — cutting incident triage time by 82%
              </h2>

              {/* Problem */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-red-500/10 text-red-600">
                    <Clock className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-navy">
                    The Problem
                  </h3>
                </div>
                <p className="text-charcoal/75 leading-relaxed">
                  Two of the client&apos;s flagship products —{" "}
                  <strong className="text-navy">Build 3D</strong> and{" "}
                  <strong className="text-navy">Plans</strong> — were running on
                  Kubernetes clusters with inconsistent, manually maintained
                  Datadog tags. As traffic scaled, the monitoring layer
                  couldn&apos;t reliably correlate alerts to services,
                  environments, or deployment versions. Engineers were spending
                  the first 20 minutes of every incident just figuring out{" "}
                  <em>which</em> environment was on fire and <em>which</em>{" "}
                  version was running — before any actual debugging could begin.
                  Meanwhile, a weekly &ldquo;tag cleanup&rdquo; task was quietly
                  consuming ~3 hours of senior SRE time that should have been
                  spent on reliability work.
                </p>
              </div>

              {/* Solution */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gold/15 text-gold-deep">
                    <Server className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-navy">
                    The Sage &amp; Crew Solution
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Audited the full Datadog tag taxonomy across both products — identified 14 conflicting tag conventions inherited from separate teams.",
                    "Defined a unified tagging standard (env, service, version, team, product) aligned to existing Kubernetes labels — zero new concepts for the engineering team to learn.",
                    "Built an automated tag-injection pipeline using Kubernetes admission webhooks — new deployments tagged correctly at the pod level, no manual step required.",
                    "Updated all Datadog monitors, dashboards, and SLOs to the new taxonomy in a single migration window.",
                    "Wired Datadog deployment tracking to the CI/CD pipeline — every production push creates a traceable deployment event automatically.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-charcoal/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <TrendingDown className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-navy">
                    The Impact
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: Clock,
                      metric: "22 min → 4 min",
                      label: "Mean time to triage",
                      tone: "emerald",
                    },
                    {
                      icon: BarChart3,
                      metric: "60% → 100%",
                      label: "Production pods with correct tags",
                      tone: "emerald",
                    },
                    {
                      icon: Zap,
                      metric: "−38%",
                      label: "Datadog alert noise",
                      tone: "emerald",
                    },
                    {
                      icon: Clock,
                      metric: "3 hrs/week",
                      label: "SRE toil eliminated",
                      tone: "gold",
                    },
                    {
                      icon: CheckCircle2,
                      metric: "100%",
                      label: "Env-to-version traceability",
                      tone: "gold",
                    },
                    {
                      icon: Server,
                      metric: "Zero",
                      label: "Manual tags per deployment",
                      tone: "gold",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-navy/8 bg-ivory-soft p-4"
                    >
                      <p className="font-display text-2xl text-navy">
                        {stat.metric}
                      </p>
                      <p className="mt-1 text-xs text-charcoal/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-gold/5 py-4 pl-5 pr-4">
                <p className="text-sm italic text-charcoal/80">
                  &ldquo;We finally have a monitoring setup that tells us what&apos;s
                  wrong, not just that something is wrong.&rdquo;
                </p>
                <p className="mt-2 text-xs font-semibold text-navy/65">
                  — Engineering Lead
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="bg-ivory-soft">
        <div className="container-padded py-16 text-center">
          <p className="text-sm text-charcoal/55">
            More case studies publishing soon — recruitment, AI automation, and
            software projects.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-ivory text-3xl md:text-5xl">
              Want results like these?
            </h2>
            <p className="text-ivory/80">
              Tell us what you&apos;re trying to fix. We&apos;ll come back
              within one business day with an honest assessment — and a
              fixed-scope proposal if we&apos;re a fit.
            </p>
            <Link href="/contact" className="btn-primary">
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
