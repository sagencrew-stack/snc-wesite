"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bot,
  Briefcase,
  Calculator,
  ChevronDown,
  Code2,
  FileText,
  Menu,
  Server,
  Sparkles,
  X,
} from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { HIRE_APP_URL, cn } from "@/lib/utils";

type DropdownKey = "business" | "candidates" | null;

const B2B_LINKS = [
  {
    href: "/services",
    label: "Recruitment & talent",
    sub: "Full-cycle tech hiring, India-first",
    icon: Briefcase,
  },
  {
    href: "/projects",
    label: "Software projects",
    sub: "Internal tools, portals & CRMs",
    icon: Code2,
  },
  {
    href: "/ai-solutions",
    label: "AI & automation",
    sub: "Workflows that actually ship",
    icon: Bot,
  },
  {
    href: "/services",
    label: "Cloud & infrastructure",
    sub: "AWS, Azure, Kubernetes, Datadog",
    icon: Server,
  },
];

const B2C_LINKS = [
  {
    href: "/for-candidates",
    label: "Job seeker guide",
    sub: "Your next move, prepared",
    icon: Sparkles,
  },
  {
    href: "/tools",
    label: "CTC calculator",
    sub: "Offered CTC → monthly take-home",
    icon: Calculator,
  },
  {
    href: "/tools",
    label: "Resume checker",
    sub: "Flag gaps, weak verbs, ATS issues",
    icon: FileText,
  },
];

const FLAT_LINKS = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/sage-hire-stack", label: "Hire Stack" },
  { href: "/about", label: "About" },
];

const ALL_MOBILE_LINKS = [
  { href: "/services", label: "Recruitment & talent" },
  { href: "/projects", label: "Software projects" },
  { href: "/ai-solutions", label: "AI & automation" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/sage-hire-stack", label: "Hire Stack" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/for-candidates", label: "For job seekers" },
  { href: "/tools", label: "Free career tools" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

  function openDropdown(key: DropdownKey) {
    setActiveDropdown(key);
  }
  function closeDropdown() {
    setActiveDropdown(null);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-ivory/90 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between gap-6">
        <LogoMark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* For Business dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("business")}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeDropdown === "business"
                  ? "bg-navy/8 text-navy"
                  : "text-navy/75 hover:text-navy",
              )}
            >
              For Business
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  activeDropdown === "business" && "rotate-180",
                )}
              />
            </button>

            {activeDropdown === "business" && (
              <div className="absolute left-0 top-full w-72 rounded-2xl border border-navy/10 bg-white py-2 shadow-lift">
                {B2B_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeDropdown}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-ivory-soft"
                  >
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold-deep">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">{item.label}</p>
                      <p className="text-xs text-charcoal/60">{item.sub}</p>
                    </div>
                  </Link>
                ))}
                <div className="mx-4 mt-1 border-t border-navy/8 pt-2">
                  <Link
                    href="/pricing"
                    onClick={closeDropdown}
                    className="block px-1 py-2 text-xs font-semibold text-navy/65 hover:text-navy"
                  >
                    Pricing →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* For Job Seekers dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("candidates")}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeDropdown === "candidates"
                  ? "bg-navy/8 text-navy"
                  : "text-navy/75 hover:text-navy",
              )}
            >
              For Job Seekers
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  activeDropdown === "candidates" && "rotate-180",
                )}
              />
            </button>

            {activeDropdown === "candidates" && (
              <div className="absolute left-0 top-full w-64 rounded-2xl border border-navy/10 bg-white py-2 shadow-lift">
                {B2C_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeDropdown}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-ivory-soft"
                  >
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold-deep">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">{item.label}</p>
                      <p className="text-xs text-charcoal/60">{item.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat links */}
          {FLAT_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href={HIRE_APP_URL} className="text-sm font-medium text-navy/75 hover:text-navy">
            Sign in
          </a>
          <Link href="/contact" className="btn-primary">
            Talk to us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-navy md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-ivory md:hidden">
          <nav className="container-padded grid gap-1 py-4">
            <p className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              For Business
            </p>
            {B2B_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-2 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              For Job Seekers
            </p>
            {B2C_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-2 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Company
            </p>
            {FLAT_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
            >
              Pricing
            </Link>
            <div className="mt-2 grid gap-2">
              <a
                href={HIRE_APP_URL}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
              >
                Sign in
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
              >
                Talk to us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
