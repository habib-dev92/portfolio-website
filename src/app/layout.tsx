import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import VisitTracker from "@/components/VisitTracker";
import PageTransition from "@/components/PageTransition";
import ToastContainer from "@/components/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://habibulhaq.vercel.app"),
  title: {
    default: "Habib Ul Haq | Full-Stack & Agentic AI Developer — Supply Chain & AI Solutions",
    template: "%s | Habib Ul Haq",
  },
  description:
    "Portfolio of Habib Ul Haq — 15+ years supply chain and warehouse management expertise combined with Full-Stack development (Next.js, React, TypeScript, Python) and Agentic AI engineering. Building AI-powered solutions for businesses and supply chains. Based in Karachi, Pakistan.",
  keywords: [
    "Habib Ul Haq",
    "Full-Stack Developer",
    "Agentic AI Developer",
    "Supply Chain Management",
    "Warehouse Management",
    "AI Solutions",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Python",
    "FastAPI",
    "LangChain",
    "AI Developer Pakistan",
    "Portfolio",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Habib Ul Haq" }],
  creator: "Habib Ul Haq",
  publisher: "Habib Ul Haq",
  openGraph: {
    title: "Habib Ul Haq | Full-Stack & Agentic AI Developer — Supply Chain & AI Solutions",
    description:
      "Building AI-Powered Solutions for Businesses and Supply Chains. 15+ years supply chain experience meets modern software engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Habib Ul Haq",
    images: [
      {
        url: "/logo.jpeg",
        width: 400,
        height: 400,
        alt: "Habib Ul Haq Logo",
      },
      {
        url: "/habib-picture.png",
        width: 800,
        height: 800,
        alt: "Habib Ul Haq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habib Ul Haq | Full-Stack & Agentic AI Developer",
    description:
      "Building AI-Powered Solutions for Businesses and Supply Chains.",
    images: ["/logo.jpeg"],
    creator: "@habib_dev92",
  },
  alternates: {
    canonical: "https://habibulhaq.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} dark`}
        suppressHydrationWarning
      >
        <head>
          <link rel="icon" href="/logo.jpeg" sizes="any" />
          <link rel="apple-touch-icon" href="/logo.jpeg" />
          <meta name="theme-color" content="#0B1121" />
          <meta name="application-name" content="Habib Ul Haq" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'light') {
                      document.documentElement.classList.remove('dark');
                    } else {
                      document.documentElement.classList.add('dark');
                    }
                  } catch(e) {}
                })();
              `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Habib Ul Haq",
                givenName: "Habib",
                familyName: "Ul Haq",
                jobTitle: "Full-Stack & Agentic AI Developer | Junior Manager Warehouse",
                url: "https://habibulhaq.vercel.app",
                image: "https://habibulhaq.vercel.app/habib-picture.png",
                logo: "https://habibulhaq.vercel.app/logo.jpeg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Karachi",
                  addressCountry: "PK",
                },
                sameAs: [
                  "https://linkedin.com/in/habib-ul-haq-975140221",
                  "https://github.com/habib-dev92",
                ],
                knowsAbout: [
                  "Supply Chain Management",
                  "Warehouse Management",
                  "Full-Stack Development",
                  "Agentic AI",
                  "Next.js",
                  "TypeScript",
                  "Python",
                  "FastAPI",
                  "LangChain",
                  "PostgreSQL",
                  "Docker",
                ],
                hasOccupation: [
                  {
                    "@type": "Occupation",
                    name: "Full-Stack & Agentic AI Developer",
                  },
                  {
                    "@type": "Occupation",
                    name: "Supply Chain Manager",
                  },
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Habib Ul Haq",
                url: "https://habibulhaq.vercel.app",
                description: "Portfolio of Habib Ul Haq — AI-Powered Solutions for Businesses and Supply Chains.",
                author: {
                  "@type": "Person",
                  name: "Habib Ul Haq",
                },
              }),
            }}
          />
        </head>
      <body className="bg-background text-foreground antialiased">
        <CursorGlow />
        <VisitTracker />
        <Navbar />
        <ToastContainer />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
