import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import { profile } from "@/data/portfolio";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description:
    "Software engineer building full-stack SaaS products and real-time voice AI agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="grain min-h-screen">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
