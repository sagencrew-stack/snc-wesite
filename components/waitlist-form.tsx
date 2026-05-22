"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });
        if (res.ok) {
          setDone(true);
        } else {
          setError("Something went wrong. Try again or email us directly.");
        }
      } catch {
        setError("Something went wrong. Try again or email us directly.");
      }
    });
  }

  if (done) {
    return (
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
        <div>
          <p className="text-sm font-semibold text-ivory">You&apos;re on the list.</p>
          <p className="mt-0.5 text-xs text-ivory/70">
            We&apos;ll reach out before we open the doors. Watch your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="min-w-0 flex-1 rounded-xl border border-ivory/20 bg-navy/40 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
          required
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary shrink-0"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Join
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </form>
  );
}
