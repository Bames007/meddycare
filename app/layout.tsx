import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { DESIGN_TOKENS } from "./utils/constants";
import "./globals.css";

// 1. Optimized Font Loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// 2. Comprehensive SEO & Viewport Meta
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.co.uk"), // Replace with your actual domain
  title: {
    default: "MeddyCare | Premium Live-in Care & Compassionate Support",
    template: "%s | MeddyCare",
  },
  description:
    "Experience dignified, high-fidelity live-in care tailored to your loved one. MeddyCare provides 24/7 expert support, empathy, and professional care in the comfort of your home.",
  keywords: [
    "live-in care",
    "elderly care UK",
    "respite care",
    "specialist home care",
    "dignified living",
  ],
  openGraph: {
    title: "MeddyCare | Premium Live-in Care",
    description: "Compassionate, expert live-in care services across the UK.",
    url: "/",
    siteName: "MeddyCare",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${plusJakarta.variable} ${cormorant.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="antialiased min-h-screen relative font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900"
        style={{ backgroundColor: DESIGN_TOKENS.colors.canvas.background }}
      >
        {/* Subtle, improved ambient grid */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000,transparent)] opacity-[0.2] pointer-events-none z-0" />

        {/* Semantic wrappers for accessibility */}
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>

        <main id="main-content" className="relative z-10 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
