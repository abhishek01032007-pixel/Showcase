import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./drifting-memories.css";

const display = Archivo_Black({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Maya & Zoya - Premium Best Friend Website",
  description: "A premium one-page best friend memory website showcase by Pixel Memories.",
  keywords: ["best friend website", "friendship memories", "premium friendship website", "Pixel Memories"],
  openGraph: {
    title: "Maya & Zoya - Best Friends Forever",
    description: "Two people. One chaos. Infinite memories.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090b12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
