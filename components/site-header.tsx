"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/ai-solutions", label: "AI" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PRODUCTS = [
  { href: "/sage-hire-stack", label: "Sage Hire Stack", sub: "AI recruitment platform" },
  { href: "/liferra", label: "Liferra", sub: "Life dashboard app" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(7,26,47,0.94)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="flex h-16 items-center justify-between md:h-[68px]">
          <LogoMark tone="light" />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-5 text-[13px] font-normal text-ivory/55 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Products dropdown */}
            <li className="relative">
              <button
                onClick={() => setProductsOpen(o => !o)}
                onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
                className="flex items-center gap-1 nav-link transition-colors hover:text-ivory"
              >
                Products <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", productsOpen && "rotate-180")} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-white/[0.08] bg-[#0A1C33] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] overflow-hidden">
                  {PRODUCTS.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col px-4 py-3 hover:bg-white/[0.04] transition-colors border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-[13px] font-medium text-ivory/80">{p.label}</span>
                      <span className="text-[11px] text-ivory/35 mt-0.5">{p.sub}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="rounded-full border border-white/12 px-4 py-2 text-[13px] font-normal text-ivory/60 transition-colors hover:border-white/22 hover:text-ivory"
            >
              Contact
            </Link>
            <Link
              href="/contact?intent=project"
              className="btn-primary rounded-full px-4 py-2 text-[13px]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg text-ivory/60 transition hover:bg-white/8 hover:text-ivory lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mb-4 mt-1 rounded-2xl border border-white/[0.07] bg-navy-mid p-4 lg:hidden">
            <ul className="flex flex-col text-[14px] text-ivory/65">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2.5 border-b border-white/[0.05]">Home</Link>
              </li>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} className="block py-2.5 border-b border-white/[0.05]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="block py-2.5 border-b border-white/[0.05] text-ivory/35 text-[11px] uppercase tracking-widest">Products</span>
              </li>
              {PRODUCTS.map(p => (
                <li key={p.href}>
                  <Link href={p.href} onClick={() => setMenuOpen(false)} className="block py-2.5 border-b border-white/[0.05]">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-3">
                <Link
                  href="/contact?intent=project"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary flex-1 rounded-full py-2.5 text-center text-[13px]"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
