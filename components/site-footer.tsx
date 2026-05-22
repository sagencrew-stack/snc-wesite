import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { HIRE_APP_URL } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory/80">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <LogoMark tone="light" />
          <p className="max-w-sm text-sm leading-relaxed">
            One partner for hiring, software, and AI-powered workflows. We help
            growing teams across India recruit faster, build better, and ship
            smarter.
          </p>
          <p className="text-xs text-ivory/60">
            Hyderabad · Remote-first · India
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-gold/90 text-xs">
            For Business
          </p>
          <FooterLink href="/services">Recruitment &amp; talent</FooterLink>
          <FooterLink href="/projects">Software projects</FooterLink>
          <FooterLink href="/ai-solutions">AI &amp; automation</FooterLink>
          <FooterLink href="/sage-hire-stack">Sage Hire Stack</FooterLink>
          <FooterLink href="/case-studies">Case studies</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
        </div>

        <div className="space-y-2 text-sm">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-gold/90 text-xs">
            For Job Seekers
          </p>
          <FooterLink href="/for-candidates">Job seeker guide</FooterLink>
          <FooterLink href="/tools">Free career tools</FooterLink>
          <p className="mb-3 mt-5 font-semibold uppercase tracking-[0.18em] text-gold/90 text-xs">
            Company
          </p>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <a
            href={HIRE_APP_URL}
            className="block text-ivory/70 hover:text-ivory"
          >
            Client &amp; candidate sign-in →
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-gold/90 text-xs">
            Talk to us
          </p>
          <div className="flex items-start gap-2 text-ivory/80">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
            <a href="mailto:sagencrew@gmail.com" className="hover:text-ivory">
              sagencrew@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-2 text-ivory/80">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
            <a href="tel:+918008543889" className="hover:text-ivory">
              +91 80085 43889
            </a>
          </div>
          <div className="flex items-start gap-2 text-ivory/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-padded flex flex-col items-center justify-between gap-3 py-5 text-xs text-ivory/55 md:flex-row">
          <p>© {new Date().getFullYear()} Sage &amp; Crew Next. All rights reserved.</p>
          <p>Crafted in India · DPDP Act 2023 compliant</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-ivory/70 hover:text-ivory">
      {children}
    </Link>
  );
}
