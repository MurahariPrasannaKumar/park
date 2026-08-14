"use client";

import { motion } from "framer-motion";

const ENTERTAINMENT = [
  { emoji: "🤹", name: "Street Performers", desc: "Jugglers, magicians & stilt walkers roam the park all day." },
  { emoji: "🎭", name: "Puppet Theatre", desc: "Live puppet shows with local folk tales every hour." },
  { emoji: "🎨", name: "Face Painting", desc: "Turn into your favourite animal or superhero in minutes." },
  { emoji: "🎶", name: "Live Band Stage", desc: "Toe-tapping music every evening on the main stage." },
];

const FOOD = [
  { emoji: "🍿", name: "Popcorn Palace", desc: "Buttery, caramel & spicy masala popcorn." },
  { emoji: "🍭", name: "Candy Corner", desc: "Cotton candy clouds in every colour of the rainbow." },
  { emoji: "🌭", name: "Kurnool Street Bites", desc: "Local favourites — mirchi bajji, punugulu & more." },
  { emoji: "🍦", name: "Ice Cream Igloo", desc: "Creamy scoops and soft-serve swirls to beat the heat." },
  { emoji: "🍕", name: "Pizza & Snacks", desc: "Cheesy slices and quick bites for hungry explorers." },
  { emoji: "🥤", name: "Juice & Mocktail Bar", desc: "Fresh fruit juices and fizzy mocktails." },
];

export default function Stalls() {
  return (
    <section id="stalls" className="relative bg-gradient-to-b from-white via-carnival-yellow/5 to-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-orange">
            Entertainment &amp; Food
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
            Fun For The Eyes, Treats For The Tongue
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Between rides, wander through our lively stalls — packed with
            performers, games, and irresistible local flavours.
          </p>
        </motion.div>

        {/* Entertainment */}
        <div className="mt-16">
          <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-carnival-navy">
            <span className="text-3xl">🎪</span> Entertainment Stalls
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ENTERTAINMENT.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: -1 }}
                className="rounded-2xl bg-white p-6 text-center shadow-[0_10px_25px_rgba(20,33,61,0.06)] ring-1 ring-slate-100"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-carnival-purple/10 text-2xl">
                  {item.emoji}
                </div>
                <p className="mt-4 font-display font-bold text-carnival-navy">
                  {item.name}
                </p>
                <p className="mt-1.5 text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Food stalls */}
        <div className="mt-16">
          <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-carnival-navy">
            <span className="text-3xl">🍔</span> Food Stalls
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FOOD.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_25px_rgba(20,33,61,0.06)] ring-1 ring-slate-100"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-carnival-yellow/30 to-carnival-orange/20 text-3xl">
                  {item.emoji}
                </div>
                <div>
                  <p className="font-display font-bold text-carnival-navy">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
