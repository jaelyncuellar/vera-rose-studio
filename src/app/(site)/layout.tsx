// base layout - the frame of entire site

import Navbar from "@/app/(site)/components/layout/Navbar";
import Footer from "@/app/(site)/components/layout/Footer";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://verarosestudio.example.com"),
  title: "Vera Rose Studio | Portrait & Brand Photography in New York",
  description:
    "Vera Rose Studio is a New York portrait and brand photography studio creating refined, editorial images for founders, creatives, and professionals. View the gallery, explore sessions, and reserve your date.",
  openGraph: {
    title: "Vera Rose Studio",
    description:
      "Refined portrait & brand photography in New York. Editorial sessions for founders, creatives, and professionals.",
    url: "https://verarosestudio.example.com",
    siteName: "Vera Rose Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <main className="flex-1">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
