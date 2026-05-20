import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & automation",
  description:
    "Practical AI integrations that ship. Resume parsing, sourcing copilots, support triage, and ops automation. Gemini, Claude, OpenAI — used where they actually help.",
};

const USE_CASES = [
  {
    icon: FileText,
    title: "Resume & document parsing",
    copy: "Auto-extract structured fields from resumes, invoices, contracts. We use Gemini Flash for cost — falling back to regex for resilience.",
  },
  {
    icon: Search,
    title: "Sourcing copilots",
    copy: "LLM-assisted candidate matching against your JD. Surface the top 10 from a pool of 1,000 with reasoning you can audit.",
  },
  {
    icon: MessageSquare,
    title: "Support triage & routing",
    copy: "Classify and summarize inbound tickets. Auto-draft responses for common queries; escalate the rest to humans with context.",
  },
  {
    icon: Zap,
    title: "Ops & workflow automation",
    copy: "Connect Sheets, Slack, email, and your CRM with LLM-generated summaries, reports, and routine actions.",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">AI & automation</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Practical AI for <span className="italic text-gold">everyday business workflows.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              No demos. No chat-bots that hallucinate. We ship narrow AI
              integrations that save real hours — typically inside your existing
              tools (Sheets, Slack, your CRM) so adoption is zero-friction.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact" className="btn-primary">
                Discuss your use case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="section-eyebrow">Where AI earns its keep</span>
            <h2 className="text-3xl md:text-5xl">
              Use cases we&apos;ve shipped.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="space-y-3 rounded-2xl border border-navy/10 bg-white p-7 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <u.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl">{u.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{u.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="container-padded py-20 md:py-24">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <span className="section-eyebrow">How we pick the model</span>
              <h2 className="text-3xl md:text-4xl">
                Cost, latency, accuracy — <span className="italic text-gold-deep">in that order.</span>
              </h2>
              <p className="text-charcoal/75">
                We default to Gemini Flash for high-volume, low-cost parsing.
                Claude when reasoning quality matters (matching, summarization).
                OpenAI when an existing integration locks us in. We also fall
                back to regex / classical NLP when an LLM is overkill.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Cost ceiling agreed up-front — no API-bill surprises",
                  "Fallback paths for every LLM call (no hard dependency)",
                  "Audit logs for every model call (what was sent, what came back)",
                  "Human-in-the-loop on irreversible actions, always",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                <Sparkles className="h-3.5 w-3.5" />
                Built on Sage Hire Stack
              </div>
              <p className="mt-4 font-display text-2xl text-navy">
                AI resume parsing
              </p>
              <p className="mt-2 text-sm text-charcoal/75">
                Our recruiters drop a resume PDF, Gemini extracts 14+ structured
                fields, candidate row is pre-filled. We review and save. What
                used to take 8-12 minutes per candidate now takes ~30 seconds.
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.12em] text-charcoal/55">
                Stack
              </p>
              <p className="text-sm">
                Next.js · Supabase · pdf-parse · mammoth · Gemini 2.5 Flash
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-24">
          <div className="rounded-3xl border border-gold/20 bg-navy-soft/60 p-10 md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-ivory text-3xl md:text-5xl">
                  Have a workflow that&apos;s ripe for AI?
                </h2>
                <p className="mt-3 max-w-xl text-ivory/80">
                  Send us a 2-line description. If we think it&apos;s a good fit,
                  we&apos;ll come back with a fixed-scope proposal. If not, we&apos;ll
                  tell you what to try instead.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary">
                  Start the conversation
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
