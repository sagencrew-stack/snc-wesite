import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions from employers and candidates working with Sage & Crew Next.",
};

const EMPLOYER_FAQS = [
  {
    q: "How quickly can you start a search?",
    a: "Same week. We block 60 minutes for a kickoff call, sign a one-page agreement, and start sourcing within 48 hours. Best-case shortlist in your inbox within 7 days.",
  },
  {
    q: "What roles are you sharpest on?",
    a: "Engineering (backend, frontend, full-stack, data, DevOps), product (managers, designers, analysts), and GTM (sales, marketing, CS) for 10-200 person Indian companies. We also handle founding-team hiring for early-stage startups.",
  },
  {
    q: "Do you do contingency or retained?",
    a: "Contingency by default — you pay only when someone joins. Retained for senior leadership searches where the comp band warrants it. Always discussed upfront.",
  },
  {
    q: "What's your replacement guarantee?",
    a: "90 days, free replacement. If the hire leaves in the first 90 days, we re-run the search at no cost — regardless of who left or why.",
  },
  {
    q: "Do clients get any visibility into the search?",
    a: "Yes — every client gets a portal on hire.sagencrew.in showing every candidate, every interview, every offer in real time. No more 'where are we?' emails.",
  },
];

const CANDIDATE_FAQS = [
  {
    q: "How do I get on your radar?",
    a: "Send us your resume via the contact form. We add you to our network and reach out when we have a relevant role. We won't spam you with mismatched openings.",
  },
  {
    q: "Will you share my resume without asking?",
    a: "Never. India's DPDP Act 2023 requires explicit consent, and we ask for it on every role before sharing your profile with a client. You can revoke any time.",
  },
  {
    q: "How long does the typical process take?",
    a: "From first call to offer: 2-5 weeks for most engineering and product roles. We push to keep things tight and tell you honestly if a client is dragging their feet.",
  },
  {
    q: "Do you charge candidates anything?",
    a: "Never. Companies pay us when a hire joins. Candidates pay nothing, ever.",
  },
  {
    q: "Are the free tools really free?",
    a: "Yes. No email wall, no upgrade tier. Built as a thank-you to the community.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">FAQ</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Questions we hear <span className="italic text-gold">all the time.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              Two sections — one for employers, one for candidates. If your
              question isn&apos;t here, drop us a line.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl md:text-3xl">For employers</h2>
              <div className="space-y-4">
                {EMPLOYER_FAQS.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl md:text-3xl">For candidates</h2>
              <div className="space-y-4">
                {CANDIDATE_FAQS.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Different question?
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  Drop us a line. We aim to reply within one business day.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary">
                  Ask us anything
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

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-navy/10 bg-white p-5 shadow-soft open:shadow-lift">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy marker:hidden">
        {q}
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{a}</p>
    </details>
  );
}
