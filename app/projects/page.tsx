import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects we've built",
  description:
    "Internal tools, customer portals, and AI workflows we've shipped for Indian SaaS teams.",
};

const PROJECTS = [
  {
    title: "Sage Hire Stack",
    tag: "Internal product",
    copy: "HCM-lite platform we built for our recruiters and our clients. Next.js 14, Supabase, Gemini-powered resume parsing, full DPDP-compliant data handling.",
    stack: ["Next.js 14", "Supabase", "Tailwind", "Gemini Flash"],
  },
  {
    title: "Client onboarding portal",
    tag: "Mid-stage SaaS",
    copy: "Replaced a manual spreadsheet-and-email flow with a self-serve portal. Cut implementation time from 6 weeks to 9 days.",
    stack: ["Next.js", "Postgres", "Resend"],
  },
  {
    title: "Sales operations AI assistant",
    tag: "Series A B2B",
    copy: "Slack-based assistant that triages inbound leads, drafts responses, and updates CRM. Used by a 5-person SDR team 50+ times a day.",
    stack: ["Slack API", "Claude", "Hubspot"],
  },
  {
    title: "Resume polishing tool",
    tag: "Public utility",
    copy: "Free candidate-facing tool that takes a resume PDF and returns formatting + content recommendations. Powers part of the candidate funnel.",
    stack: ["Next.js", "Gemini", "pdf-parse"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">Projects</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Work we&apos;ve shipped <span className="italic text-gold">that we&apos;d show again.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              A small selection of internal tools, portals, and AI workflows
              we&apos;ve built. Names redacted for the client work — happy to share
              more in a call.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="space-y-4 rounded-2xl border border-navy/10 bg-white p-7 shadow-soft"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  <Code2 className="h-3.5 w-3.5" />
                  {p.tag}
                </div>
                <h3 className="text-2xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{p.copy}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-navy/15 bg-ivory-soft px-2.5 py-0.5 text-xs text-navy/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 text-ivory md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Got a project in mind?
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  A two-line description is enough to start. We&apos;ll come back
                  with a scope and a realistic timeline.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary">
                  Talk to us
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
