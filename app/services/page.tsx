import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, Clock, Target, Users } from "lucide-react";

import { HIRE_APP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Recruitment services",
  description:
    "Full-cycle recruitment for tech, product, design, and GTM roles across India. Run on our own Sage Hire Stack with full pipeline visibility.",
};

const ROLES = [
  "Engineering — backend, frontend, full-stack, data, DevOps",
  "Product — managers, designers, analysts",
  "Sales, marketing, customer success",
  "Operations, finance, HR leadership",
  "Founding team / first 10 hires for early-stage startups",
];

const PROCESS = [
  {
    step: "01",
    title: "Intake & spec",
    copy: "We sit with you for 60 minutes to understand the role, comp band, must-haves, and red flags. You leave with a written spec we both sign off on.",
  },
  {
    step: "02",
    title: "Source & screen",
    copy: "We hit LinkedIn, Naukri, Sage's own talent network, and warm referrals. Every candidate is screened by a human before they reach your inbox.",
  },
  {
    step: "03",
    title: "Submit & track",
    copy: "You see every profile, interview, and offer move in real time in your Sage Hire Stack portal. No back-and-forth Excel sheets.",
  },
  {
    step: "04",
    title: "Close & onboard",
    copy: "We handle offer negotiation, BGV consent (DPDP-compliant), document collection, and joining-day check-ins.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">Recruitment</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Hiring that <span className="italic text-gold">actually closes.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              We&apos;ve placed 200+ engineers, product folks, and operators
              across early-stage Indian startups and scaling SaaS companies. No
              spray-and-pray. No 200 mediocre CVs in your inbox. Just the
              shortlist you&apos;d hire from.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="btn-primary">
                Start a search
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={HIRE_APP_URL} className="btn-ghost-light">
                Existing client? Sign in
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <span className="section-eyebrow">Roles we hire for</span>
              <h2 className="text-3xl md:text-4xl">India-first. Tech-first.</h2>
              <p className="text-charcoal/75">
                We&apos;re sharpest on tech, product, and GTM roles — the seats
                that make or break a 10-50 person company.
              </p>
              <ul className="space-y-2 text-sm">
                {ROLES.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Stat icon={Users} label="Candidates placed" value="200+" />
              <Stat icon={Briefcase} label="Active clients" value="20+" />
              <Stat icon={Clock} label="Avg. time-to-shortlist" value="7 days" />
              <Stat icon={Target} label="Offer accept rate" value="82%" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">How a search runs</span>
            <h2 className="text-3xl md:text-5xl">
              Four steps, <span className="italic text-gold-deep">zero surprises.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="space-y-2 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
              >
                <p className="font-display text-2xl text-gold-deep">{p.step}</p>
                <p className="font-semibold text-navy">{p.title}</p>
                <p className="text-sm text-charcoal/75">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl text-ivory">
                Pipeline visibility, <span className="italic text-gold">live.</span>
              </h2>
              <p className="text-ivory/80">
                Every search runs on our own Sage Hire Stack platform. You see
                every candidate sourced, every interview scheduled, and every
                offer&apos;s status the moment it moves — no weekly status emails
                required.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/sage-hire-stack" className="btn-primary">
                  See the platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-ivory/85">
              {[
                "Real-time client dashboard scoped to your roles only",
                "AI-parsed resumes — no manual data entry on our side",
                "DPDP-compliant consent flow before sharing candidate data",
                "Slack / email pings when interviews are confirmed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <h2 className="text-ivory text-3xl md:text-5xl">
              Tell us about the role.
            </h2>
            <p className="mt-3 max-w-2xl text-ivory/80">
              Best-case turnaround: shortlist in your inbox within 7 days. Honest
              fit-check on a 30-minute call before you sign anything.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Start a search
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Briefcase;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-soft">
      <Icon className="h-5 w-5 text-gold-deep" aria-hidden />
      <p className="mt-3 font-display text-3xl text-navy">{value}</p>
      <p className="text-xs uppercase tracking-[0.12em] text-charcoal/60">{label}</p>
    </div>
  );
}
