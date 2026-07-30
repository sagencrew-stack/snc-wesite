import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarClock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sage & Crew Next. Recruitment briefs, project requests, and AI workflow ideas welcome.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="container-padded py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="section-eyebrow bg-gold/15 text-gold-soft">Contact</span>
            <h1 className="text-4xl md:text-6xl text-ivory leading-tight">
              Tell us what you&apos;re working on. <span className="italic text-gold">We&apos;ll come back.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ivory/80">
              Scoping a software project, planning an AI workflow, or need a
              custom ERP? Send a quick note. We typically reply within one
              business day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-padded grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-24">
          <ContactForm />

          <div className="space-y-6">
            <div className="space-y-4 rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
              <h3 className="text-lg">Direct lines</h3>
              <ContactRow icon={Mail} label="Email" value="sagencrew@gmail.com" href="mailto:sagencrew@gmail.com" />
              <ContactRow icon={Phone} label="Phone / WhatsApp" value="+91 80085 43889" href="tel:+918008543889" />
              <ContactRow icon={MapPin} label="Based in" value="Hyderabad, India" />
              <ContactRow icon={CalendarClock} label="Response time" value="Within 1 business day" />
            </div>

            <div className="space-y-3 rounded-3xl border border-gold/30 bg-gold/5 p-7 shadow-inset-gold">
              <Sparkles className="h-5 w-5 text-gold-deep" />
              <h3 className="text-lg">Already working with us?</h3>
              <p className="text-sm text-charcoal/75">
                Email your project manager directly or reach us on WhatsApp
                for the fastest response on active projects.
              </p>
              <a href="https://wa.me/918008543889" target="_blank" rel="noopener" className="btn-secondary">
                WhatsApp us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.12em] text-charcoal/55">{label}</p>
        {href ? (
          <a href={href} className="text-sm font-medium text-navy hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-navy">{value}</p>
        )}
      </div>
    </div>
  );
}
