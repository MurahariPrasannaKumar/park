"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#rides", label: "Rides" },
  { href: "#stalls", label: "Food & Fun" },
  { href: "#offers", label: "Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Plan Your Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F5F5]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(20,33,61,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-carnival-pink via-carnival-orange to-carnival-yellow text-lg shadow-md animate-wiggle">
            🎡
          </span>
          <span className={`font-display text-xl font-bold leading-none sm:text-2xl transition-colors ${scrolled ? "text-carnival-navy" : "text-white"}`}>
            Children&apos;s Park
            <span className={`mt-0.5 flex items-center gap-1 text-[11px] font-semibold tracking-wide transition-colors ${scrolled ? "text-carnival-blue/80" : "text-zinc-200"}`}>
              <MapPin className="h-3 w-3" /> KURNOOL, ANDHRA PRADESH
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-semibold transition-colors hover:text-carnival-pink ${scrolled ? "text-carnival-navy/80" : "text-zinc-200 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className="hidden rounded-full bg-carnival-pink px-6 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,93,143,0.45)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,93,143,0.55)] md:inline-block"
        >
          Book Tickets
        </a>

        <button
          className={`rounded-full p-2 shadow-md md:hidden transition-colors ${scrolled ? "bg-[#F5F5F5] text-carnival-navy" : "bg-white/10 text-white backdrop-blur-md"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 bg-[#F5F5F5] px-5 pb-5 shadow-lg md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display font-semibold text-carnival-navy hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-carnival-pink px-6 py-3 text-center font-display font-bold text-white"
          >
            Book Tickets
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

