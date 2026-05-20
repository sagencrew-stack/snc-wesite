import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileText,
  MailCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free HR & career tools",
  description:
    "Free, no-signup tools for candidates and HR teams across India. CTC calculators, resume checks, JD generators, and more.",
};

const TOOLS = [
  {
    icon: Calculator,
    title: "CTC ↔ in-hand calculator",
    copy: "Convert between offered CTC (LPA) and monthly take-home for Indian salary structures. Old + new tax regimes.",
    status: "Coming soon",
  },
  {
    icon: FileText,
    title: "Resume sanity-check",
    copy: "Upload a resume PDF — we'll flag missing dates, weak verbs, ATS-unfriendly formatting, and offer one-line rewrites.",
    status: "Coming soon",
  },
  {
    icon: Sparkles,
    title: "JD polisher",
    copy: "Paste a job description, get a tighter, India-context version. Removes jargon, surfaces must-haves vs nice-to-haves.",
    status: "Coming soon",
  },
  {
    icon: MailCheck,
    title: "Cold-email composer",
    copy: "Generate a short, sincere outreach email to a recruiter or a hiring manager — tuned to your background.",
    status: "Coming soon",
  },
  {
    icon: UserCheck,
    title: "Notice-period planner",
    copy: "Map out your last-working-day, joining-day, and any buffer you need to negotiate with current and next employer.",
    status: "Coming soon",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">Free tools</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Built to help you, <span className="italic text-gold">no sign-up required.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              Practical tools for Indian candidates and HR teams. No email
              wall, no &quot;upgrade to unlock&quot;, no shady data collection.
              These are how we say thanks for being part of the ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          <p className="mt-10 text-center text-sm text-charcoal/65">
            Want one of these sooner? Tell us which —{" "}
            <Link href="/contact" className="font-medium text-navy hover:underline">
              we&apos;ll bump it up
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Looking for a job?
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  Send us your resume. We&apos;ll add you to our network and
                  reach out when something fits.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary">
                  Submit your resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
