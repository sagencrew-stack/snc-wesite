import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for recruitment, software projects, and AI work. India-first, fixed-scope where we can.",
};

const PLANS = [
  {
    name: "Recruitment",
    blurb: "Per successful hire",
    price: "8.33%",
    suffix: "of fixed CTC",
    bullets: [
      "Full-cycle hiring on the role",
      "Live client portal during the search",
      "DPDP-compliant candidate handling",
      "90-day free replacement guarantee",
    ],
    cta: { label: "Start a search", href: "/contact" },
    highlight: false,
  },
  {
    name: "Software project",
    blurb: "Fixed-scope per build",
    price: "Quoted",
    suffix: "after scope",
    bullets: [
      "Discovery call → written spec → sign-off",
      "Small senior team, no offshore handoffs",
      "Weekly demos, real-time visibility",
      "30-day post-launch support included",
    ],
    cta: { label: "Discuss a build", href: "/contact" },
    highlight: true,
  },
  {
    name: "AI integration",
    blurb: "Per workflow",
    price: "Quoted",
    suffix: "+ API cost ceiling",
    bullets: [
      "One LLM-powered workflow at a time",
      "Cost-ceiling guarantee on API spend",
      "Fallback paths for every LLM call",
      "Audit logs + human-in-the-loop where it matters",
    ],
    cta: { label: "Discuss AI work", href: "/contact" },
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">Pricing</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Transparent rates. <span className="italic text-gold">No retainer games.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              We bill per outcome where we can — per successful hire for
              recruitment, fixed-scope quotes for software and AI work. No
              long-tail retainers, no surprise invoices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "space-y-5 rounded-3xl border p-7 shadow-soft",
                  plan.highlight
                    ? "border-gold/40 bg-navy text-ivory shadow-gold"
                    : "border-navy/10 bg-white",
                )}
              >
                <div className="space-y-1">
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.18em]",
                      plan.highlight ? "text-gold/90" : "text-gold-deep",
                    )}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={cn(
                      "text-sm",
                      plan.highlight ? "text-ivory/75" : "text-charcoal/70",
                    )}
                  >
                    {plan.blurb}
                  </p>
                </div>

                <div className="space-y-1">
                  <p
                    className={cn(
                      "font-display text-5xl tracking-tight",
                      plan.highlight ? "text-ivory" : "text-navy",
                    )}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={cn(
                      "text-xs uppercase tracking-[0.12em]",
                      plan.highlight ? "text-ivory/60" : "text-charcoal/55",
                    )}
                  >
                    {plan.suffix}
                  </p>
                </div>

                <ul
                  className={cn(
                    "space-y-2 text-sm",
                    plan.highlight ? "text-ivory/85" : "text-charcoal/80",
                  )}
                >
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlight ? "text-gold" : "text-gold-deep",
                        )}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.cta.href}
                  className={plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                  {plan.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              <span className="section-eyebrow">For startups</span>
              <h2 className="text-3xl md:text-4xl">
                Early-stage? <span className="italic text-gold-deep">Talk to us.</span>
              </h2>
              <p className="text-charcoal/75">
                For pre-Series A founders, we sometimes offer a reduced rate, an
                equity-component option, or a fixed-fee per role instead of a
                percentage. Not a blanket discount — but if the company and the
                problem are interesting, we listen.
              </p>
            </div>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
              <Sparkles className="h-6 w-6 text-gold-deep" />
              <h3 className="mt-3 text-xl">90-day replacement</h3>
              <p className="mt-2 text-sm text-charcoal/75">
                Every recruitment placement is backed by a free replacement
                guarantee for 90 days. If your hire leaves in that window, we
                re-run the search at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
