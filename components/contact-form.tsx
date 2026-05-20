"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Topic = "recruitment" | "software" | "ai" | "candidate" | "other";

interface FormState {
  name: string;
  email: string;
  company: string;
  topic: Topic;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  topic: "recruitment",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = useTransition();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 5) {
      setError("Name, email, and a brief message are required.");
      return;
    }
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, website: honeypot }),
        });
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
        if (!res.ok || !json.ok) {
          setError(
            json.error ??
              "Couldn't send right now. Please try again or email sagencrew@gmail.com directly.",
          );
          return;
        }
        setSent(true);
        setForm(INITIAL);
      } catch {
        setError(
          "Couldn't reach the server. Please try again or email sagencrew@gmail.com directly.",
        );
      }
    });
  }

  if (sent) {
    return (
      <div className="space-y-4 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-7 shadow-soft">
        <CheckCircle2 className="h-7 w-7 text-emerald-700" />
        <h2 className="text-2xl md:text-3xl">Got it — we&apos;ll be in touch.</h2>
        <p className="text-sm text-charcoal/75">
          Your message landed in our inbox. Expect a reply within one business day.
          If it&apos;s urgent, reach us on{" "}
          <a href="tel:+918008543889" className="font-medium text-navy hover:underline">
            +91 80085 43889
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm font-medium text-navy hover:underline"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-navy/10 bg-white p-7 shadow-soft"
    >
      <div>
        <h2 className="text-2xl md:text-3xl">Drop us a line</h2>
        <p className="mt-2 text-sm text-charcoal/75">
          We&apos;re a small team, so we read every message. Prefer email? Reach us at{" "}
          <a
            href="mailto:sagencrew@gmail.com"
            className="font-medium text-navy hover:underline"
          >
            sagencrew@gmail.com
          </a>
          .
        </p>
      </div>

      {/* Honeypot — hidden from real users via CSS */}
      <div className="hidden" aria-hidden>
        <label>
          Website (leave blank)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          required
        />
      </div>

      <Field
        label="Company (optional)"
        value={form.company}
        onChange={(v) => update("company", v)}
      />

      <div className="space-y-1">
        <label
          htmlFor="topic"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/65"
        >
          What&apos;s this about?
        </label>
        <select
          id="topic"
          value={form.topic}
          onChange={(e) => update("topic", e.target.value as Topic)}
          className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          <option value="recruitment">Recruitment — hiring a role</option>
          <option value="software">Software project</option>
          <option value="ai">AI / automation</option>
          <option value="candidate">I&apos;m a candidate looking for a role</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/65"
        >
          Message
          <span className="text-gold-deep"> *</span>
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          required
          maxLength={5000}
          className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
          placeholder="A couple of lines is enough to get started."
        />
      </div>

      {error ? (
        <p className="rounded-md border border-red-500/30 bg-red-500/5 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary disabled:opacity-60"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isPending ? "Sending…" : "Send message"}
        {!isPending ? <ArrowRight className="h-4 w-4" /> : null}
      </button>

      <p className="text-xs text-charcoal/55">
        We use your details only to reply. No marketing list, no third-party sharing.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/[^a-z]/g, "-");
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/65"
      >
        {label}
        {required ? <span className="text-gold-deep"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
    </div>
  );
}
