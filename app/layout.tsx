import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Mantra | B2B Export Solutions – India",
  description:
    "Global Mantra connects international buyers with premium Indian export products – agro commodities, ready-to-eat foods, and industrial packaging materials. Reliable B2B export partner.",
  keywords:
    "india export, agro products export, spices export, pulses export, packaging materials, B2B trade, international logistics",
  openGraph: {
    title: "Global Mantra | B2B Export Solutions",
    description: "Connecting Global Markets Through Reliable Export Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
