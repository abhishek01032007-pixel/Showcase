import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Aarav & Riya — Our Love Story",
  description: "A premium, cinematic one-page love story created by Pixel Memories.",
  keywords: ["love story", "couple memories", "anniversary website", "premium loved one website"],
  openGraph: { title: "Aarav & Riya — Our Love Story", description: "Every photograph holds a whole world.", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#110b18" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
