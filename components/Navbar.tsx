"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Crest from "@/components/Crest";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Work"],
  ["/blog", "Notes"],
  ["/contact", "Contact"],
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Nitish, home">
        <Crest className="brand-mark" />
        <span>
          nitish<span className="brand-suffix"> / personal archive</span>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              (href === "/" ? pathname === href : pathname.startsWith(href))
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-resume" href="/resume.pdf" download>
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
