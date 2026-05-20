import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "@/app/globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Sage & Crew Next — Recruitment, Software & AI Automation",
    template: "%s · Sage & Crew Next",
  },
  description:
    "One partner for hiring, software, and AI-powered workflows. Sage & Crew Next helps growing teams across India recruit faster, build better, and ship smarter.",
  metadataBase: new URL("https://sagencrew.in"),
  openGraph: {
    title: "Sage & Crew Next",
    description:
      "Recruitment, software projects, and AI-powered workflows for growing Indian teams.",
    url: "https://sagencrew.in",
    siteName: "Sage & Crew Next",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
