"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-yellow-500/25"
          : "bg-black/45 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-12">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="2Ride Logo"
            width={42}
            height={42}
            className="rounded-full border border-white/20 bg-black/40 p-1"
            priority
          />
          <span className="text-lg font-extrabold tracking-wide text-white">
            2Ride
          </span>
        </a>

        <nav className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider sm:gap-8 sm:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/85 transition hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/254757541714"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300 md:inline-block"
        >
          Join Ride
        </a>
      </div>
    </header>
  );
}
