"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Ticket } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Children's Park, Kurnool", "Andhra Pradesh, India"],
  },
  {
    icon: Clock,
    title: "Timings",
    lines: ["Tue – Sun: 10:00 AM – 9:00 PM", "Closed on Mondays"],
  },
  {
    icon: Ticket,
    title: "Entry Tickets",
    lines: ["Adults: ₹150 · Kids: ₹100", "Combo passes available"],
  },
  {
    icon: Phone,
    title: "Contact",
    lines: ["+91 98765 43210", "hello@childrensparkkurnool.in"],
  },
];

export default function VisitInfo() {
  return (
    <section id="visit" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-blue">
              Plan Your Visit
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
              Your Carnival Adventure Awaits
            </h2>
            <p className="mt-4 max-w-lg text-lg text-slate-300">
              Nestled in the heart of Kurnool, Children&apos;s Park is easy to
              reach and perfect for a full day of family fun. Grab your
              tickets online and skip the queue!
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {INFO.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-carnival-blue/10 text-carnival-blue">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-carnival-navy">
                      {item.title}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#top"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-carnival-pink px-8 py-4 font-display font-bold text-white shadow-[0_10px_25px_rgba(255,93,143,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(255,93,143,0.55)]"
            >
              <Ticket className="h-5 w-5" />
              Reserve Your Spot Today
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-carnival-blue/15 via-carnival-teal/10 to-carnival-yellow/15 ring-1 ring-slate-100"
          >
            <div className="absolute inset-0 bg-noise opacity-40" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="text-6xl animate-bob">📍</span>
              <p className="font-display text-xl font-bold text-carnival-navy">
                Children&apos;s Park
              </p>
              <p className="font-semibold text-slate-500">
                Kurnool, Andhra Pradesh — 518001
              </p>
              <span className="mt-2 rounded-full bg-[#F5F5F5] px-4 py-1.5 text-xs font-bold text-carnival-blue shadow-sm">
                Easy parking &amp; auto/cab access
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

