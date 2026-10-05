import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import BackToTop from "@/components/BackToTop";
import { profile } from "@/data/portfolio";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description:
    "Software engineer building full-stack SaaS products and real-time voice AI agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${GeistPixelSquare.variable} ${mono.variable}`}>
      <body className="grain min-h-screen">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
