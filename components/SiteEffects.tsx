"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const cursor = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    const ring = cursor.current;
    if (!ring) return;
    let frame = 0;
    const hide = () => { ring.dataset.visible = "false"; };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return hide();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ring.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        ring.dataset.visible = "true";
        ring.dataset.active = String(
          event.target instanceof Element &&
          Boolean(event.target.closest("a, button, summary, [role='button']")),
        );
      });
    };
    const leave = () => { cancelAnimationFrame(frame); hide(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", leave);
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("keydown", leave);
    media.addEventListener("change", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", leave);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("keydown", leave);
      media.removeEventListener("change", leave);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        animations.push(element.animate(
          [{ opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        ));
        observer.unobserve(element);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(
      ".hero-copy, .profile-display, .page-heading, .interest-note, .section-title, .project-card, .hello-banner, .contact-item, .note-card, .about-story, .background-section, .toolkit",
    ).forEach((element) => observer.observe(element));
    const stop = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
    media.addEventListener("change", stop);
    return () => { stop(); media.removeEventListener("change", stop); };
  }, [pathname]);

  return <div ref={cursor} className="cursor-orbit" aria-hidden="true"><span /></div>;
}
