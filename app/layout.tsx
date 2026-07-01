import type { Metadata } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nitish | ML & CV Engineer",
  description:
    "Computer Vision engineer and data analyst. Founder of Kinesis — AI motion capture for football academies. Open to ML/CV and SWE roles in Tokyo and Singapore.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${shareTechMono.variable}`}>
      <body className="font-body antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
