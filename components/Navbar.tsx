"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line-base bg-bg-base/90 backdrop-blur after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gradient-to-r after:from-transparent after:via-terminal/40 after:to-transparent">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-3 border border-line-base bg-bg-panel-soft px-3 py-2 font-display text-sm text-ink shadow-glow transition-all duration-200 hover:border-terminal"
        >
          <span className="text-terminal">~/</span>
          frenny.dev
        </Link>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b px-2 py-2 font-display text-xs lowercase tracking-[0.08em] transition-all duration-200 hover:border-terminal hover:text-terminal ${
                  active
                    ? "border-terminal text-ink"
                    : "border-transparent text-ink-muted"
                }`}
              >
                [ {item.label.toLowerCase()} ]
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
