import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Porsche 911 GT3 RS | Track-Focused Precision",
  description:
    "The Porsche 911 GT3 RS — a high-performance sports car renowned for its track-focused design and precision engineering. 525 HP, 4.0L flat-six, 296 km/h.",
  keywords: ["Porsche", "911 GT3 RS", "sports car", "racing", "track car"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
