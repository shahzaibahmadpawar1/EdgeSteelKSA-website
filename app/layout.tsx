import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Edge Steel KSA",
    default: "Edge Steel KSA — Precision Steel Fabrication",
  },
  description:
    "Leading steel fabrication company delivering world-class fabrication, laser cutting, and industrial solutions across Saudi Arabia.",
  keywords: [
    "steel fabrication",
    "laser cutting",
    "Saudi Arabia",
    "KSA",
    "structural steel",
    "equipment rental",
    "manpower supply",
  ],
  openGraph: {
    siteName: "Edge Steel KSA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // html/body/lang/dir are defined in [locale]/layout.tsx
  return <>{children}</>;
}
