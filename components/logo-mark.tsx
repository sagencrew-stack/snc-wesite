import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  tone?: "light" | "dark";
}

export function LogoMark({ className, tone = "dark" }: LogoMarkProps) {
  const isLight = tone === "light";
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-gold font-display text-lg font-semibold text-navy shadow-inset-gold">
        S
      </span>
      <span
        className={cn(
          "font-display text-lg leading-none tracking-tight",
          isLight ? "text-ivory" : "text-navy",
        )}
      >
        Sage &amp; Crew Next
      </span>
    </Link>
  );
}
