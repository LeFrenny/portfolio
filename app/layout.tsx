import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nitish — Choose your own path",
    template: "%s | Nitish",
  },
  description:
    "Sports, computers, and games. Explore Nitish's projects, interests, and things he's learning along the way.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SiteEffects />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
