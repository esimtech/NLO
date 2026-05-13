import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoLimits∞nline — eSIM without the fine print",
  description:
    "Real unlimited eSIMs in 200+ countries. Local profiles where possible, honest bundles everywhere else. Built in Amsterdam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrainsMono.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
