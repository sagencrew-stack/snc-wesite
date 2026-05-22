import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { HIRE_APP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Job Seekers — Sage & Crew Next",
  description:
    "Free tools, honest guidance, and real job opportunities for engineers, product, and design professionals across India.",
};

const TOOLS = [
  {
    icon: Calculator,
    title: "CTC ↔ in-hand calculator",
    copy: "Convert offered CTC (LPA) into monthly take-home under old and new Indian tax regimes. No sign-up.",
    href: "/tools",
    status: "Coming soon",
  },
  {
    icon: FileText,
    title: "Resume sanity-check",
    copy: "Upload your PDF. We flag missing dates, weak action verbs, ATS-unfriendly formatting, and offer one-line rewrites.",
    href: "/tools",
    status: "Coming soon",
  },
  {
    icon: MessageCircle,
    title: "Cold-email composer",
    copy: "Generate a short, sincere outreach email to a recruiter or hiring manager — tuned to your background.",
    href: "/tools",
    status: "Coming soon",
  },
];

const PROMISES = [
  "Fast, honest feedback on your profile — no ghosting.",
  "We only submit you where you genuinely fit. No shotgun approach.",
  "Your resume and data are never shared without your explicit consent.",
  "If we can't place you, we'll tell you why — and suggest what to fix.",
];

export default function ForCandidatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">
              For job seekers
            </span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Your next career move{" "}
              <span className="italic text-gold">starts here.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              We&apos;ve spent years placing engineers, cloud specialists, and
              AI professionals into roles where they actually grow. Now
              we&apos;re giving you the tools to walk into that conversation
              prepared. Check your resume against real job criteria, benchmark
              your CTC against the market, and when you&apos;re ready — we&apos;ll
              help connect you with the right opportunity. No spam. No ghosting.
              Just straight talk from people who&apos;ve been on both sides of
              the hiring table.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/tools" className="btn-primary">
                Open free tools
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Submit your resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">Free tools</span>
            <h2 className="text-3xl md:text-5xl">
              Built to help you,{" "}
              <span className="italic text-gold-deep">no sign-up required.</span>
            </h2>
            <p className="text-base leading-relaxed text-charcoal/75">
              Practical tools for Indian candidates. No email wall, no
              &ldquo;upgrade to unlock&rdquo;.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TOOLS.map((t) => (
              <div
                key={t.title}
                className="space-y-3 rounded-2xl border border-navy/10 bg-white p-7 shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy/70">
                    {t.status}
                  </span>
                </div>
                <h3 className="text-lg">{t.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{t.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-charcoal/60">
            Want one sooner?{" "}
            <Link href="/contact" className="font-medium text-navy hover:underline">
              Tell us — we&apos;ll bump it up.
            </Link>
          </p>
        </div>
      </section>

      {/* Our promises */}
      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-5">
              <span className="section-eyebrow">How we treat candidates</span>
              <h2 className="text-3xl md:text-4xl">
                Straight talk.{" "}
                <span className="italic text-gold-deep">No runaround.</span>
              </h2>
              <p className="text-charcoal/75">
                We run a boutique practice — a small number of active searches
                at any time. When we reach out, it&apos;s because we genuinely
                think you&apos;re a fit. Here&apos;s what we commit to:
              </p>
              <ul className="space-y-3">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                <Sparkles className="h-3.5 w-3.5" />
                In your Sage candidate portal
              </div>
              <p className="font-display text-xl text-navy">
                Everything in one place, on your phone.
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal/75">
                {[
                  "Upcoming interviews — mode, link, and IST time",
                  "Offer breakdown — CTC, variable, joining bonus",
                  "Joining doc checklist with secure upload",
                  "Updates from your Sage account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={HIRE_APP_URL}
                className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:underline"
              >
                Access your portal
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-ivory text-3xl md:text-5xl">
              Ready to make your move?
            </h2>
            <p className="text-ivory/80">
              Send us your resume. We&apos;ll add you to our network and reach
              out when something genuinely fits — not before.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Submit your resume
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/tools" className="btn-ghost-light">
                Try the free tools first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
