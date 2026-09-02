"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift, PartyPopper, Sparkles, Ticket, Users } from "lucide-react";

const OFFERS = [
  {
    icon: Users,
    tag: "Family Combo",
    title: "Save 20% on Family Passes",
    desc: "Bring the whole family — 2 adults + 2 kids for a special bundled price, every weekend.",
    color: "from-carnival-pink to-carnival-orange",
  },
  {
    icon: PartyPopper,
    tag: "Birthday Special",
    title: "Free Entry on Your Birthday",
    desc: "Show a valid ID and celebrate your special day with a free ticket, cake stall discount included.",
    color: "from-carnival-purple to-carnival-blue",
  },
  {
    icon: Gift,
    tag: "Group Booking",
    title: "School & Group Discounts",
    desc: "Groups of 15+ get exclusive rates and a dedicated entertainment slot on the main stage.",
    color: "from-carnival-teal to-carnival-green",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="relative bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-red">
            Special Offers
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            More Fun, Less Spend
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Make your visit even sweeter with our seasonal deals and
            celebration packages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-carnival-navy via-[#1b2a52] to-carnival-navy shadow-[0_25px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:mt-14"
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-carnival-pink/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-carnival-blue/25 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-carnival-yellow/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0 lg:p-0">
            {/* Left: Poster headline panel */}
            <div className="relative flex flex-col justify-center border-white/10 px-1 py-2 lg:border-r lg:px-12 lg:py-14">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-carnival-yellow ring-1 ring-white/10">
                <Sparkles className="h-3.5 w-3.5" />
                Limited Time
              </span>
              <h3 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
                Grab an Offer,
                <br />
                Make it a Day.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                Three easy ways to save on your next visit — pick the one that
                fits your crew.
              </p>
              <a
                href="#visit"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-sm font-bold text-carnival-navy shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Ticket className="h-4 w-4" />
                Claim Your Offer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right: Offer list */}
            <div className="relative divide-y divide-white/10 px-8 py-6 sm:px-10 lg:px-12 lg:py-6">
              {OFFERS.map((offer, i) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-5 py-6 first:pt-2 last:pb-2"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${offer.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <offer.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-carnival-yellow">
                      {offer.tag}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-bold leading-snug text-white">
                      {offer.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {offer.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

