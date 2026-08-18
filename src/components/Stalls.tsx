"use client";

import { motion } from "framer-motion";

const ENTERTAINMENT = [
  {
    emoji: "🤹",
    name: "Street Performers",
    desc: "Jugglers, magicians & stilt walkers roam the park all day.",
  },
  {
    emoji: "🎭",
    name: "Puppet Theatre",
    desc: "Live puppet shows with local folk tales every hour.",
  },
  {
    emoji: "🎨",
    name: "Face Painting",
    desc: "Turn into your favourite animal or superhero in minutes.",
  },
  {
    emoji: "🎶",
    name: "Live Band Stage",
    desc: "Toe-tapping music every evening on the main stage.",
  },
];

const FOOD = [
  {
    emoji: "🍿",
    name: "Popcorn Palace",
    desc: "Buttery, caramel & spicy masala popcorn.",
  },
  {
    emoji: "🍭",
    name: "Candy Corner",
    desc: "Cotton candy clouds in every colour of the rainbow.",
  },
  {
    emoji: "🌭",
    name: "Kurnool Street Bites",
    desc: "Local favourites — mirchi bajji, punugulu & more.",
  },
  {
    emoji: "🍦",
    name: "Ice Cream Igloo",
    desc: "Creamy scoops and soft-serve swirls to beat the heat.",
  },
  {
    emoji: "🍕",
    name: "Pizza & Snacks",
    desc: "Cheesy slices and quick bites for hungry explorers.",
  },
  {
    emoji: "🥤",
    name: "Juice & Mocktail Bar",
    desc: "Fresh fruit juices and fizzy mocktails.",
  },
];

// 1. Parent variant handles staggering both on entry and exit
const gridVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverses the stagger order when flying out
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 2. Child variants with a slow, smooth transition for the 'hidden' state
const scatterVariants = {
  hidden: (index: number) => {
    const entryPoints = [
      { x: -800, y: -400, rotate: -35 }, // 0: Top-Left
      { x: 0, y: -800, rotate: 15 }, // 1: Top-Center
      { x: 800, y: -400, rotate: 45 }, // 2: Top-Right
      { x: -800, y: 400, rotate: -40 }, // 3: Bottom-Left
      { x: 0, y: 800, rotate: -15 }, // 4: Bottom-Center
      { x: 800, y: 400, rotate: 30 }, // 5: Bottom-Right
    ];

    const pos = entryPoints[index % entryPoints.length];

    return {
      opacity: 0,
      x: pos.x,
      y: pos.y,
      rotate: pos.rotate,
      scale: 0.5,
      transition: {
        duration: 1.2, // SLOW EXIT: Makes them float away gently
        ease: [0.25, 0.8, 0.25, 1], // Smooth deceleration
      },
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 70,
      mass: 1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24, transition: { duration: 0.8 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Stalls() {
  return (
    <section
      className="relative bg-[#f9f8f6] py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // once: false allows re-triggering
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-orange-500">
            Entertainment &amp; Food
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Fun For The Eyes, Treats For The Tongue
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Between rides, wander through our lively stalls — packed with
            performers, games, and irresistible local flavours.
          </p>
        </motion.div>

        {/* Entertainment Stalls */}
        <div className="mt-20">
          <h3 className="mb-8 flex items-center justify-center sm:justify-start gap-3 font-display text-2xl font-bold text-slate-900">
            <span className="text-3xl">🎪</span> Entertainment Stalls
          </h3>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            // Set once to false, and trigger when 15% of the grid is in view
            viewport={{ once: false, amount: 0.15 }}
            className="flex flex-wrap justify-center sm:justify-start gap-6"
          >
            {ENTERTAINMENT.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={scatterVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ willChange: "transform, opacity" }}
                className="flex h-[260px] w-full max-w-[280px] flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-100 transition-colors hover:ring-orange-100"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-2xl">
                  {item.emoji}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Food Stalls */}
        <div className="mt-20">
          <h3 className="mb-8 flex items-center justify-center sm:justify-start gap-3 font-display text-2xl font-bold text-slate-900">
            <span className="text-3xl">🍔</span> Food Stalls
          </h3>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="flex flex-wrap justify-center sm:justify-start gap-6"
          >
            {FOOD.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i + ENTERTAINMENT.length}
                variants={scatterVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ willChange: "transform, opacity" }}
                className="flex h-[260px] w-full max-w-[280px] flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-100 transition-colors hover:ring-orange-100"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-2xl">
                  {item.emoji}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
