import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Eye,
  FileSignature,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { HIRE_APP_URL } from "@/lib/utils";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Sage Hire Stack — our recruitment platform",
  description:
    "The HCM-lite platform we built for our recruiters and our clients. AI resume parsing, client + candidate portals, DPDP-compliant data handling — built India-first.",
};

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI resume parsing",
    copy: "Drop a PDF, Gemini Flash extracts name, email, phone, current role, skills, CTC, notice period. Our recruiters review, not retype.",
  },
  {
    icon: Eye,
    title: "Client portal",
    copy: "Your hiring team sees every position, candidate, interview, and offer status — live. No more Excel sheets emailed on Friday.",
  },
  {
    icon: Users,
    title: "Candidate portal",
    copy: "Candidates see their interview schedule, joining docs, and offer status in one place. No more inbox archeology.",
  },
  {
    icon: ShieldCheck,
    title: "DPDP-compliant",
    copy: "Consent capture before client sharing, soft-deletes, activity audit trail. Built for India's Digital Personal Data Protection Act 2023.",
  },
  {
    icon: CalendarClock,
    title: "Interview workflow",
    copy: "Schedule rounds, capture per-dimension feedback, auto-advance the pipeline based on the decision. Every round logged.",
  },
  {
    icon: FileSignature,
    title: "Offer & onboarding",
    copy: "Create, route for approval, release, accept. Then onboard with the standard Indian doc kit (PAN, Aadhaar, BGV consent, etc.).",
  },
];

export default function SageHireStackPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <span className="section-eyebrow bg-gold/15 text-gold-soft">
                Our recruitment platform
              </span>
              <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
                Every search we run, <span className="italic text-gold">visible to you.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-ivory/80">
                The Sage Hire Stack is the HCM-lite platform we built for our
                recruiters and our clients. Now every client engagement runs on
                it — and you get a real-time portal of your own.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href={HIRE_APP_URL} className="btn-primary">
                  Open the app
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact" className="btn-ghost-light">
                  Request access
                </Link>
              </div>
              <p className="text-xs text-ivory/55">
                Hosted at <span className="font-mono text-gold/80">hire.sagencrew.in</span>
              </p>
            </div>

            <div className="rounded-3xl border border-gold/25 bg-navy-soft/70 p-6 shadow-gold">
              <div className="flex items-center justify-between text-xs text-ivory/55">
                <span>Position dashboard</span>
                <Bell className="h-4 w-4 text-gold/70" />
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <PortalRow label="Open positions" value="14" tone="ivory" />
                <PortalRow label="Profiles submitted" value="42" tone="ivory" />
                <PortalRow label="Interviews this week" value="9" tone="gold" />
                <PortalRow label="Offers released" value="3" tone="ivory" />
                <PortalRow label="Joiners this month" value="2" tone="gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">What&apos;s inside</span>
            <h2 className="text-3xl md:text-5xl">
              Built for India. <span className="italic text-gold-deep">Tuned for trust.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="space-y-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg">{f.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <span className="section-eyebrow">For clients</span>
              <h2 className="text-3xl md:text-4xl">Read-only, real-time.</h2>
              <p className="text-charcoal/75">
                Your hiring team sees only your positions and only the
                candidates we&apos;ve submitted to you. No commercials, no
                internal notes — just the data you need to make a decision.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Dashboard with open positions and pipeline metrics",
                  "Per-position candidate lists with current stage",
                  "Live interview schedule with join links",
                  "Offer status tracking",
                  "Notes from your account manager (when relevant)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <span className="section-eyebrow">For candidates</span>
              <h2 className="text-3xl md:text-4xl">No more inbox archeology.</h2>
              <p className="text-charcoal/75">
                Candidates we work with get their own portal. Interview
                schedules, offer details, and joining documents — all in one
                place, on their phone.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Upcoming interviews with mode, link, and IST time",
                  "Offer view with full breakdown",
                  "Joining doc checklist with secure upload",
                  "Updates from the Sage team in one feed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / pre-launch CTA */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <span className="section-eyebrow bg-gold/15 text-gold-soft">
                Launching 2026
              </span>
              <h2 className="text-ivory text-3xl md:text-5xl">
                Hiring is broken.{" "}
                <span className="italic text-gold">We built the fix.</span>
              </h2>
              <p className="max-w-xl text-ivory/80">
                Sage Hire Stack is a recruitment operations platform built by
                people who&apos;ve run hiring pipelines — not just theorised
                about them. From sourcing to offer to onboarding, every step
                tracked, automated, and visible.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Your entire pipeline. One screen.",
                    copy: "Stop stitching together spreadsheets, WhatsApp threads, and email chains. Every candidate, every role, every status — live.",
                  },
                  {
                    title: "AI that does the grunt work.",
                    copy: "Resume scoring, candidate ranking, automated follow-ups. The AI handles repetitive decisions so your recruiters focus on conversations that close offers.",
                  },
                  {
                    title: "Built for accountability, not just activity.",
                    copy: "Clients see real-time progress. Offers go through an approval gate. When something stalls, you know — before the candidate ghosts.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-semibold text-ivory">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-ivory/70">{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Waitlist form */}
            <div className="rounded-3xl border border-gold/25 bg-navy-soft/70 p-8 shadow-gold">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                Early access waitlist
              </p>
              <p className="mt-3 font-display text-2xl text-ivory">
                Get early access before we open the doors.
              </p>
              <p className="mt-2 text-sm text-ivory/70">
                Small group. Full features. Direct input on the roadmap.
                Priority onboarding.
              </p>
              <WaitlistForm />
              <p className="mt-4 text-center text-xs text-ivory/45">
                No credit card. No commitment. Unsubscribe anytime.
              </p>
              <div className="mt-5 border-t border-ivory/10 pt-4 text-xs text-ivory/55">
                Already used by the team behind 200+ placements across
                engineering, cloud, and AI roles in India.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Already a client? <span className="italic text-gold">Sign in.</span>
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  Use the credentials your Sage account manager sent. Forgot
                  them? Reach out and we&apos;ll resend.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a href={HIRE_APP_URL} className="btn-primary">
                  Open hire.sagencrew.in
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact" className="btn-ghost-light">
                  Talk to your account manager
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PortalRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ivory" | "gold";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-navy/40 px-3 py-2">
      <span className="text-ivory/65">{label}</span>
      <span
        className={
          tone === "gold"
            ? "font-display text-xl text-gold"
            : "font-display text-xl text-ivory"
        }
      >
        {value}
      </span>
    </div>
  );
}
