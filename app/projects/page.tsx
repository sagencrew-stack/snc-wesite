import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  SageHireStackThumb,
  LiferraThumb,
  TeampurexThumb,
  MahantraderThumb,
  RishiDishaThumb,
} from "@/components/project-thumbnails";

export const metadata: Metadata = {
  title: "Our Work — Projects",
  description:
    "Software products, ERPs, SaaS platforms, and mobile apps built by Sage & Crew Next. Real projects, real clients, live in production.",
};

const PROJECTS = [
  {
    thumbnail: <SageHireStackThumb />,
    type: "OWN SAAS PRODUCT",
    status: "LIVE",
    statusColor: "emerald",
    title: "Sage Hire Stack",
    url: "https://sagehirestack.com",
    urlLabel: "sagehirestack.com ↗",
    industry: "HR Tech · SaaS",
    desc: "Our own AI-powered recruitment platform — built because we needed it for ourselves, opened to clients when it worked. Full ATS with AI resume parsing, candidate pipeline management, interview scheduling, and real-time client sharing portal.",
    highlights: [
      "AI fit scoring with Gemini — parses and ranks resumes automatically",
      "Kanban pipeline across 10 stages with drag-drop and bulk actions",
      "Client-facing portal for live pipeline visibility without logins",
      "Offer tracking, backout risk engine, and activity audit log",
    ],
    stack: ["Next.js 14", "Supabase", "Gemini AI", "TypeScript", "Tailwind CSS", "Vercel"],
    accentBar: "linear-gradient(90deg, #7A9E7E, #5C8060)",
    accentText: "#5C8060",
  },
  {
    thumbnail: <LiferraThumb />,
    type: "OWN MOBILE PRODUCT",
    status: "BETA",
    statusColor: "gold",
    title: "Liferra",
    url: "https://liferra.app",
    urlLabel: "liferra.app ↗",
    industry: "Productivity · Mobile",
    desc: "A mobile-first life dashboard — goal tracking, habit streaks, mood logs, finance snapshots, and an AI coach that knows your week. Built for our team first, opening to early users in beta.",
    highlights: [
      "Weekly AI coaching summary based on your logged data",
      "Habit streaks, mood tracking, and goal progress in one view",
      "Finance snapshot — income, expenses, and savings rate",
      "Offline-first architecture with Supabase real-time sync",
    ],
    stack: ["React Native", "Expo", "Supabase", "TypeScript", "Gemini AI"],
    accentBar: "linear-gradient(90deg, #C9A646, #A8842E)",
    accentText: "#A8842E",
  },
  {
    thumbnail: <TeampurexThumb />,
    type: "HEALTH TECH PLATFORM",
    status: "LIVE",
    statusColor: "emerald",
    title: "Teampurex",
    url: "https://teampurex.com",
    urlLabel: "teampurex.com ↗",
    industry: "Health Tech · B2C",
    desc: "Medically supervised health coaching platform — personal training, physiotherapy, and mental wellness — serving clients across India and the UK. Full booking, client management, and coach dashboard.",
    highlights: [
      "Coach and client portals with session booking and progress tracking",
      "Multi-country operations — India and UK timezone and currency support",
      "Physiotherapy, personal training, and mental wellness in one platform",
      "Mobile-responsive for clients booking and tracking on the go",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    accentBar: "linear-gradient(90deg, #60A5FA, #3B82F6)",
    accentText: "#3B82F6",
  },
  {
    thumbnail: <MahantraderThumb />,
    type: "ERP & CORPORATE WEBSITE",
    status: "LIVE",
    statusColor: "emerald",
    title: "Mahantraders",
    url: "https://mahantraders.com",
    urlLabel: "mahantraders.com ↗",
    industry: "FMCG · ERP",
    desc: "Digital platform and custom ERP for a Hyderabad-based FMCG commodity trading company. Sugar trading, export operations, supplier management, cash book, and buyer statement modules — all custom-built to their workflow.",
    highlights: [
      "Custom ERP replacing manual spreadsheet operations",
      "Daily entry, supplier ledger, and buyer statement modules",
      "Cash book with audit trail and stock management",
      "Corporate website with inquiry and order management",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    accentBar: "linear-gradient(90deg, #8B5CF6, #7C3AED)",
    accentText: "#7C3AED",
  },
  {
    thumbnail: <RishiDishaThumb />,
    type: "VAASTU & ASTROLOGY PORTAL",
    status: "LIVE",
    statusColor: "emerald",
    title: "RishiDisha",
    url: "https://rishidisha.in",
    urlLabel: "rishidisha.in ↗",
    industry: "Spirituality · B2C",
    desc: "Online Vaastu and astrology consultation portal — service listings, expert profiles, session booking, and a content hub. Built for a Hyderabad-based practice looking to move consultations online.",
    highlights: [
      "Service catalogue with Vaastu, astrology, and numerology offerings",
      "Expert profile pages and online appointment booking",
      "Content hub for articles and consultation guides",
      "Mobile-first design for client bookings on the go",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    accentBar: "linear-gradient(90deg, #F59E0B, #D97706)",
    accentText: "#D97706",
  },
];

const STATUS_STYLES: Record<string, string> = {
  emerald: "bg-emerald-500/12 text-emerald-700 border border-emerald-500/20",
  gold:    "bg-amber-400/12 text-amber-700 border border-amber-400/25",
};

export default function ProjectsPage() {
  const owned = PROJECTS.filter(p => p.type.startsWith("OWN"));
  const client = PROJECTS.filter(p => !p.type.startsWith("OWN"));

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="container-padded">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-6">Our Work</div>
            <h1 className="font-display text-[42px] font-medium leading-[1.08] tracking-[-0.025em] text-ivory md:text-[58px]">
              Products we built.<br />
              <span style={{
                background: "linear-gradient(130deg, #A8C3A5 0%, #7A9E7E 55%, #C9A646 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>All of them live.</span>
            </h1>
            <p className="mt-6 text-[16px] font-normal leading-[1.85] text-ivory/60 max-w-xl">
              Five projects across SaaS, mobile, ERP, health tech, and B2C — built by the same team, shipped on fixed timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Own products */}
      <section style={{ background: "#F7F5EE" }} className="py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12">
              <div className="section-eyebrow-light mb-4">Products We Own</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-dark md:text-[40px]">
                We Ship for Clients. We Also Ship for Ourselves.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-dark/55 leading-relaxed">
                Two live in-house products. They&apos;re how we know what we&apos;re building actually works.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {owned.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Client work */}
      <section className="bg-navy-mid py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mb-12">
              <div className="section-eyebrow mb-4">Client Work</div>
              <h2 className="font-display text-[32px] font-medium tracking-tight text-ivory md:text-[40px]">
                Selected Projects
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-muted leading-relaxed">
                A selection of what we&apos;ve built for clients. More detail available on a call.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {client.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} dark />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="container-padded">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[34px] font-medium tracking-tight text-ivory md:text-[44px]">
                Want to be next on this list?
              </h2>
              <p className="mt-4 text-[15px] text-muted leading-relaxed">
                Free 45-minute discovery call. We&apos;ll scope it, quote it, and tell you exactly how fast we can ship.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact?intent=project" className="btn-primary rounded-full">
                  Start a Project →
                </Link>
                <Link href="/services" className="btn-ghost-light rounded-full">
                  See Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

type Project = Omit<typeof PROJECTS[0], "thumbnail"> & { thumbnail: ReactNode };

function ProjectCard({ project: p, index, dark = false }: {
  project: Project;
  index: number;
  dark?: boolean;
}) {
  return (
    <ScrollReveal delay={index * 80}>
      <div
        className={`flex h-full flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
          dark
            ? "border border-white/8 bg-white/4 hover:bg-white/6"
            : "border border-dark/7 bg-white hover:shadow-[0_8px_30px_-8px_rgba(7,26,47,0.12)]"
        }`}
      >
        {/* Thumbnail */}
        <div className="overflow-hidden border-b border-white/5 bg-[#0A0F1C]">
          {p.thumbnail}
        </div>

        <div className="flex flex-1 flex-col p-6">
          {/* Header row */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className={`text-[10px] font-semibold uppercase tracking-[0.16em] mb-1.5 ${dark ? "text-ivory/35" : "text-dark/35"}`}>
                {p.type}
              </div>
              <h3 className={`font-display text-[20px] font-medium tracking-tight ${dark ? "text-ivory" : "text-dark"}`}>
                {p.title}
              </h3>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${STATUS_STYLES[p.statusColor]}`}>
              {p.status}
            </span>
          </div>

          {/* URL + Industry */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium transition-colors"
              style={{ color: p.accentText }}
            >
              {p.urlLabel}
            </a>
            <span className={`text-[10px] ${dark ? "text-ivory/30" : "text-dark/30"}`}>·</span>
            <span className={`text-[11px] ${dark ? "text-ivory/45" : "text-dark/45"}`}>{p.industry}</span>
          </div>

          {/* Description */}
          <p className={`text-[13px] leading-[1.8] mb-5 flex-1 ${dark ? "text-ivory/55" : "text-dark/55"}`}>
            {p.desc}
          </p>

          {/* Highlights */}
          <ul className="mb-5 space-y-1.5">
            {p.highlights.map(h => (
              <li key={h} className={`flex items-start gap-2 text-[12px] leading-relaxed ${dark ? "text-ivory/45" : "text-dark/45"}`}>
                <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ background: p.accentText + "80" }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className={`flex flex-wrap gap-1.5 pt-4 ${dark ? "border-t border-white/6" : "border-t border-dark/5"}`}>
            {p.stack.map(t => (
              <span
                key={t}
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                  dark
                    ? "bg-white/8 text-ivory/60 border border-white/8"
                    : "bg-dark/5 text-dark/55 border border-dark/8"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
