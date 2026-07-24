import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { CreatePortfolioCTA } from "@/components/CreatePortfolioCTA";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";
import "./portfolio-refresh.css";

const display = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://showcase-premium-portfolio.vercel.app"),
  title: { default: "Aarav Mehta — Creative Developer & Product Designer", template: "%s — Aarav Mehta" },
  description: "Premium personal portfolio showcase for a creative developer and product designer, created by Pixel Memories.",
  keywords: ["creative developer", "product designer", "premium portfolio", "personal website", "Pixel Memories"],
  authors: [{ name: "Pixel Memories" }],
  openGraph: {
    title: "Aarav Mehta — Creative Developer & Product Designer",
    description: "Ideas made useful. Experiences made memorable.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#11110f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <CustomCursor />
        <SiteHeader />
        {children}
        <CreatePortfolioCTA />
        <Footer />
      </body>
    </html>
  );
}
