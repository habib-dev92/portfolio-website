import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habib Ul Haq | Full-Stack & Agentic AI Developer",
  description:
    "Portfolio of Habib Ul Haq — Full-Stack & Agentic AI Developer specializing in Next.js, TypeScript, AI Agents, and modern web applications.",
  keywords: [
    "Habib Ul Haq",
    "Full-Stack Developer",
    "Agentic AI",
    "Next.js",
    "TypeScript",
    "React",
    "AI Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Habib Ul Haq | Full-Stack & Agentic AI Developer",
    description:
      "AI Agentic Developer combining full-stack expertise with LLM tooling. Building intelligent agents, chatbots, and automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        <AmbientBackground />
        <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
