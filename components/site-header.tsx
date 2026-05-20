"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { HIRE_APP_URL, cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/sage-hire-stack", label: "Hire Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Free tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-ivory/85 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between gap-6">
        <LogoMark />

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/75 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={HIRE_APP_URL} className="text-sm font-medium text-navy/75 hover:text-navy">
            Sign in
          </a>
          <Link href="/contact" className="btn-primary">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-navy md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-navy/10 bg-ivory md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="container-padded grid gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={HIRE_APP_URL}
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-2 text-sm font-medium text-navy/85 hover:bg-navy/5"
          >
            Sign in
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
