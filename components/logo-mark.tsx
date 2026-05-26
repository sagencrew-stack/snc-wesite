import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  tone?: "light" | "dark";
}

export function LogoMark({ className, tone = "dark" }: LogoMarkProps) {
  const isLight = tone === "light";
  return (
    <Link href="/" aria-label="Sage & Crew Next — Home" className={cn("inline-flex items-center gap-2.5 group", className)}>
      <Image
        src="/logo-mark.svg"
        alt="Sage & Crew Next"
        width={48}
        height={48}
        className={cn(
          "object-contain transition-transform duration-300 group-hover:scale-105",
          isLight ? "brand-mark-dark" : "brand-mark"
        )}
        priority
      />
      <span className="flex items-baseline gap-1 text-[18px] md:text-[19px]">
        <span className={cn("font-display italic", isLight ? "text-ivory" : "text-navy")}>Sage</span>
        <span className={cn("font-semibold tracking-tight", isLight ? "text-ivory/90" : "text-charcoal")}>&amp; Crew</span>
        <span className="font-semibold text-gold">Next</span>
      </span>
    </Link>
  );
}
