"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { HIRE_APP_URL, cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/ai-solutions", label: "AI & Automation" },
  { href: "/projects", label: "Projects" },
  { href: "/#employers", label: "Hire" },
  { href: "/#candidates", label: "Apply" },
  { href: "/tools", label: "Free Tools" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy/10 bg-ivory/90 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Sage & Crew Next — Home" className="group flex items-center gap-3">
            <LogoMark tone={scrolled ? "dark" : "light"} />
          </Link>

          {/* Desktop nav */}
          <ul
            className={cn(
              "hidden items-center gap-5 text-[13.5px] lg:flex xl:gap-6",
              scrolled ? "text-charcoal/80" : "text-ivory/85",
            )}
          >
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "nav-link transition hover:text-navy",
                    !scrolled && "hover:!text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="/contact?intent=project"
              className={cn(
                "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition",
                scrolled
                  ? "border-navy/15 text-navy hover:bg-navy hover:text-ivory"
                  : "border-ivory/30 text-ivory hover:bg-ivory/10",
              )}
            >
              Start a Project
            </Link>
            <Link
              href="/contact?intent=employer"
              className="btn-gold inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px]"
            >
              Hire Talent
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10 lg:hidden",
              scrolled ? "text-navy" : "text-ivory",
            )}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mb-4 mt-2 rounded-2xl border border-navy/5 bg-white p-4 shadow-lift lg:hidden">
            <ul className="flex flex-col divide-y divide-navy/5 text-[15px] text-charcoal">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="block py-3">Home</Link>
              </li>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} className="block py-3">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-3">About</Link>
              </li>
              <li className="flex gap-2 pt-3">
                <Link
                  href="/contact?intent=project"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-full border border-navy/15 py-2.5 text-center text-[14px] font-semibold text-navy"
                >
                  Start a Project
                </Link>
                <Link
                  href="/contact?intent=employer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold flex-1 rounded-full py-2.5 text-center text-[14px]"
                >
                  Hire Talent
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
