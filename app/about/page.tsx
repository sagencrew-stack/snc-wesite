import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Heart, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sage & Crew Next is a Hyderabad-based recruitment, software, and AI studio. We help growing Indian teams hire faster and ship smarter.",
};

const VALUES = [
  {
    icon: Compass,
    title: "Honest scoping",
    copy: "If we're not the right fit, we'll tell you on the first call and point you somewhere better.",
  },
  {
    icon: Target,
    title: "Skin in the game",
    copy: "We work with a small set of clients at any time. Your search isn't a side queue.",
  },
  {
    icon: Sparkles,
    title: "Built, not bought",
    copy: "We ship code, dashboards, and AI workflows under our own name. We use what we sell.",
  },
  {
    icon: Heart,
    title: "Treat people well",
    copy: "Candidates get fast, honest feedback. Clients get the truth, even when it's inconvenient.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">About</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              A small senior team <span className="italic text-gold">based in Hyderabad.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              Sage &amp; Crew Next started as a recruitment shop and grew into
              what felt natural — building the software our recruiters needed,
              then offering it to clients. Today we run three practices:
              recruitment, software projects, and practical AI integrations.
            </p>
            <p className="text-base leading-relaxed text-ivory/70">
              We stay small on purpose. Every engagement is owned by a senior
              person who picks up the phone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">What we believe</span>
            <h2 className="text-3xl md:text-5xl">
              Four values, <span className="italic text-gold-deep">no slogans.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="space-y-3 rounded-2xl border border-navy/10 bg-white p-7 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl">{v.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              <span className="section-eyebrow">Founder</span>
              <h2 className="text-3xl md:text-4xl">Vishnu</h2>
              <p className="text-charcoal/75">
                Engineer-turned-recruiter-turned-founder. Started Sage &amp;
                Crew Next after a decade of running tech hires for Indian SaaS
                companies. Cares about resume design more than is healthy.
              </p>
            </div>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
              <h3 className="text-xl">Why &quot;Sage &amp; Crew Next&quot;?</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                Sage — the colour and the calm, considered judgement we try to
                bring. Crew — we&apos;re a small team that&apos;s yours when you
                hire us. Next — the role, the project, or the workflow that&apos;s
                up next on your list.
              </p>
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
                  Want to work with us?
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  Drop us a line — we usually reply within a business day.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary">
                  Get in touch
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
