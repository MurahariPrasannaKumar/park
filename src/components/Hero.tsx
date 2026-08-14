"use client";

import { motion } from "framer-motion";
import { Sparkles, Ticket, PlayCircle } from "lucide-react";
import GiantWheel from "./GiantWheel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white pt-32 pb-20 sm:pt-40"
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-carnival-yellow/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-carnival-pink/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-carnival-teal/20 blur-3xl" />

      {/* floating decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-[8%] top-[18%] text-4xl animate-float-slow">🎈</span>
        <span className="absolute left-[80%] top-[14%] text-5xl animate-float-slower">🎠</span>
        <span className="absolute left-[15%] top-[65%] text-3xl animate-bob">🍭</span>
        <span className="absolute left-[88%] top-[55%] text-4xl animate-float-slow">🍿</span>
        <span className="absolute left-[48%] top-[8%] text-3xl animate-bob">✨</span>
        <span className="absolute left-[3%] top-[80%] text-4xl animate-float-slower">🎪</span>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-carnival-pink shadow-sm ring-1 ring-carnival-pink/20">
            <Sparkles className="h-3.5 w-3.5" />
            Kurnool&apos;s #1 Family Amusement Park
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-carnival-navy sm:text-6xl lg:text-[4.2rem]">
            Where Every Day
            <br />
            Feels Like a{" "}
            <span className="relative inline-block text-carnival-pink">
              Carnival
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="#ffc93c"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate-600">
            Soar high on the Giant Wheel, chug along with our beloved Panda
            Train, and lose yourself in a world of thrilling rides, live
            entertainment, and mouth-watering food stalls — all in the heart
            of Kurnool, Andhra Pradesh.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 rounded-full bg-carnival-pink px-8 py-4 font-display font-bold text-white shadow-[0_10px_25px_rgba(255,93,143,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(255,93,143,0.55)]"
            >
              <Ticket className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Book Your Tickets
            </a>
            <a
              href="#rides"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display font-bold text-carnival-navy shadow-md ring-1 ring-carnival-navy/10 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <PlayCircle className="h-5 w-5 text-carnival-blue" />
              Explore Rides
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { value: "12+", label: "Rides & Attractions" },
              { value: "20+", label: "Food & Fun Stalls" },
              { value: "1M+", label: "Happy Visitors" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold text-carnival-navy">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-carnival-yellow/40 via-carnival-pink/30 to-carnival-blue/30 blur-2xl" />
          <GiantWheel className="relative h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}
