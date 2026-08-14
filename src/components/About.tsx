"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { emoji: "🌳", title: "Green & Spacious", desc: "12 acres of lush gardens and shaded walkways." },
  { emoji: "🛡️", title: "Safety First", desc: "Trained staff and regularly inspected rides." },
  { emoji: "👨‍👩‍👧‍👦", title: "Family Friendly", desc: "Rides and stalls designed for every age group." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-carnival-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-carnival-yellow/30 via-carnival-teal/20 to-carnival-blue/20" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-[3rem] ring-1 ring-slate-100">
              <span className="text-7xl animate-bob">🎪</span>
              <p className="font-display text-lg font-bold text-carnival-navy">
                Since 1998
              </p>
              <p className="max-w-[220px] text-center text-sm text-slate-500">
                A Kurnool landmark bringing joy to generations of families
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-purple">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
              A Legacy of Laughter in Kurnool
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              What began as a small community fairground has blossomed into
              Andhra Pradesh&apos;s most cherished amusement park. For over
              two decades, Children&apos;s Park has been where Kurnool
              families create memories — first Giant Wheel rides, first
              cotton candy, first Panda Train giggles.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Today, we combine that same warmth with modern rides, vibrant
              entertainment, and a food court bursting with flavour —
              welcoming over a million happy visitors and counting.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100"
                >
                  <span className="text-2xl">{h.emoji}</span>
                  <p className="mt-2 font-display text-sm font-bold text-carnival-navy">
                    {h.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
