"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ENTERTAINMENT = [
  {
    emoji: "🤹",
    name: "Street Performers",
    desc: "Jugglers, magicians & stilt walkers roam the park all day.",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🎭",
    name: "Puppet Theatre",
    desc: "Live puppet shows with local folk tales every hour.",
    image:
      "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🎨",
    name: "Face Painting",
    desc: "Turn into your favourite animal or superhero in minutes.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🎶",
    name: "Live Band Stage",
    desc: "Toe-tapping music every evening on the main stage.",
    image:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=800&q=80",
  },
];

const FOOD = [
  {
    emoji: "🍿",
    name: "Popcorn Palace",
    desc: "Buttery, caramel & spicy masala popcorn.",
    image:
      "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🍭",
    name: "Candy Corner",
    desc: "Cotton candy clouds in every colour of the rainbow.",
    image:
      "https://images.unsplash.com/photo-1611329857570-f02f340e7378?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🌭",
    name: "Kurnool Street Bites",
    desc: "Local favourites — mirchi bajji, punugulu & more.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🍦",
    name: "Ice Cream Igloo",
    desc: "Creamy scoops and soft-serve swirls to beat the heat.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🍕",
    name: "Pizza & Snacks",
    desc: "Cheesy slices and quick bites for hungry explorers.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    emoji: "🥤",
    name: "Juice & Mocktail Bar",
    desc: "Fresh fruit juices and fizzy mocktails.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
  },
];

// 1. Parent variant handles staggering both on entry and exit
const gridVariants: Variants = {
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
const scatterVariants: Variants = {
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
        ease: [0.25, 0.8, 0.25, 1] as const, // Smooth deceleration
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24, transition: { duration: 0.8 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Stalls() {
  return (
    <section
      className="relative bg-[#F5F5F5] py-24 overflow-hidden"
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
                className="group relative h-70 w-full max-w-70 overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" />

                <div className="relative flex h-full flex-col items-center justify-end p-6 text-center">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-md backdrop-blur">
                    {item.emoji}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {item.desc}
                  </p>
                </div>
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
                className="group relative h-70 w-full max-w-70 overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" />

                <div className="relative flex h-full flex-col items-center justify-end p-6 text-center">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-md backdrop-blur">
                    {item.emoji}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

