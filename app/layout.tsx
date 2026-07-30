import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageLoader } from "@/components/page-loader";
import { WAFab } from "@/components/wa-fab";
import { ShsTrumpCard } from "@/components/shs-trump-card";
import { ScrollProgress } from "@/components/scroll-progress";
import "@/app/globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sage & Crew Next — Software Studio · Hyderabad",
    template: "%s · Sage & Crew Next",
  },
  description:
    "Sage & Crew Next builds production-ready software, automates business operations with AI, and powers hiring through Sage Hire Stack. Based in Hyderabad.",
  metadataBase: new URL("https://sagencrewnext.com"),
  openGraph: {
    title: "Sage & Crew Next — Software Studio · Hyderabad",
    description:
      "We build software, automate operations, and support hiring. Production-ready digital systems for growing businesses.",
    url: "https://sagencrewnext.com",
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
      <body className="min-h-screen font-sans bg-navy text-ivory antialiased">
        <PageLoader />
        <div id="scroll-progress"><div id="scroll-progress-bar" /></div>
        <SiteHeader />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <SiteFooter />
        <WAFab />
        <ShsTrumpCard />
        <ScrollProgress />
      </body>
    </html>
  );
}
