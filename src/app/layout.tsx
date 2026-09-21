// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZentriX — Luxury & Exotic Car Rentals",
  description:
    "Experience the freedom of the road with ZentriX's curated fleet of luxury sedans, sports coupes, and exotic supercars.",
  icons: {
    icon: "/zentrix_logo_cropped.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 antialiased">{children}</body>
    </html>
  );
}