"use client";

import { motion } from "framer-motion";
import { Gift, PartyPopper, Users } from "lucide-react";

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
    <section id="offers" className="relative bg-[#f9f8f6] py-24">
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
          <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
            More Fun, Less Spend
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Make your visit even sweeter with our seasonal deals and
            celebration packages.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_10px_25px_rgba(20,33,61,0.08)] ring-1 ring-slate-100"
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${offer.color} opacity-20 blur-2xl`}
              />
              <div
                className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${offer.color} text-white shadow-md`}
              >
                <offer.icon className="h-6 w-6" />
              </div>
              <span className="relative mt-5 block font-display text-xs font-bold uppercase tracking-wider text-carnival-pink">
                {offer.tag}
              </span>
              <h3 className="relative mt-2 font-display text-xl font-bold text-carnival-navy">
                {offer.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
