import Link from "next/link";

import { LogoMark } from "@/components/logo-mark";
import { HIRE_APP_URL } from "@/lib/utils";

const FOOTER_LINKS = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/case-studies", label: "Case studies" },
    { href: "/contact", label: "Contact" },
  ],
  Solutions: [
    { href: "/services", label: "Recruitment" },
    { href: "/projects", label: "Software Projects" },
    { href: "/ai-solutions", label: "AI & Automation" },
    { href: "/sage-hire-stack", label: "Sage Hire Stack" },
    { href: "/pricing", label: "Pricing" },
  ],
  "For Candidates": [
    { href: "/for-candidates", label: "Job Seeker Guide" },
    { href: "/tools", label: "Free Career Tools" },
    { href: "/#candidates", label: "Resume Services" },
    { href: "/#candidates", label: "LinkedIn Optimization" },
    { href: "/tools", label: "ATS Tools" },
  ],
  Legal: [
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#081628] pt-16 pb-8 text-ivory/75">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <LogoMark tone="light" />
            <p className="max-w-md text-[13.5px] leading-relaxed text-ivory/60">
              Sage &amp; Crew Next helps businesses grow through recruitment,
              staffing, software projects, AI-enabled automation, websites,
              dashboards, and digital branding. We also support professionals
              with resume, LinkedIn, and interview readiness.
            </p>
            <div className="flex flex-col gap-2 text-[12.5px] text-ivory/55">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:sagencrew@gmail.com" className="transition hover:text-gold">
                  sagencrew@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="https://wa.me/919133666619" target="_blank" rel="noopener" className="transition hover:text-gold">
                  +91 91336 66619 · WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15 15 0 010 20"/>
                </svg>
                <a href="https://sagencrewnext.com" className="transition hover:text-gold">
                  sagencrewnext.com
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/50">
                  {heading}
                </div>
                <ul className="space-y-2.5 text-[13px]">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ivory/8 pt-6 md:flex-row md:items-center">
          <p className="text-[12px] text-ivory/50">
            © {new Date().getFullYear()} Sage &amp; Crew Next. All rights reserved.
          </p>
          <p className="text-[12px] text-ivory/45">
            Build Teams · Build Systems · Build AI-Powered Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
