import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoLimits∞nline — eSIM without the fine print",
  description:
    "Real unlimited eSIMs in 200+ countries. Local profiles where possible, honest bundles everywhere else. Built in Amsterdam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
