import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const FOOTER_LINKS = {
  Company: [
    { href: "/about",    label: "About Us" },
    { href: "/projects", label: "Our Work" },
    { href: "/services", label: "Services" },
    { href: "/ai-solutions", label: "AI Solutions" },
    { href: "/contact",  label: "Contact" },
  ],
  Products: [
    { href: "/sage-hire-stack", label: "Sage Hire Stack" },
    { href: "/liferra",         label: "Liferra" },
    { href: "/projects",        label: "Client Projects" },
  ],
  Services: [
    { href: "/services#web",    label: "Web Applications" },
    { href: "/services#mobile", label: "Mobile Apps" },
    { href: "/services#ai",     label: "AI & Automation" },
    { href: "/services#erp",    label: "ERP Systems" },
    { href: "/services#saas",   label: "SaaS Development" },
  ],
  Legal: [
    { href: "/faq",     label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms",   label: "Terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#060F1C] pt-16 pb-8 text-ivory/75">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-5">
            <LogoMark tone="light" />
            <p className="max-w-xs text-[13.5px] leading-relaxed text-ivory/55">
              We design, build, and ship software products — web apps, mobile apps,
              AI automation, and SaaS platforms — for businesses across India and beyond.
            </p>
            <div className="flex flex-col gap-2.5 text-[12.5px] text-ivory/50">
              <a href="mailto:sagencrew@gmail.com" className="flex items-center gap-2 transition hover:text-gold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                sagencrew@gmail.com
              </a>
              <a href="https://wa.me/919133666619" target="_blank" rel="noopener" className="flex items-center gap-2 transition hover:text-gold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 017.19 15.7a19.79 19.79 0 01-3.07-8.67A2 2 0 016.11 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L10.09 12.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +91 91336 66619 · WhatsApp
              </a>
              <span className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/40">
                  {heading}
                </div>
                <ul className="space-y-2.5 text-[13px]">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-ivory/55 transition hover:text-gold">
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
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ivory/[0.06] pt-6 md:flex-row md:items-center">
          <p className="text-[12px] text-ivory/40">
            © {new Date().getFullYear()} Sage &amp; Crew Next. All rights reserved.
          </p>
          <p className="text-[12px] text-ivory/30">
            Design · Build · Ship · Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
