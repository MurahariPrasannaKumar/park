"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// High-quality placeholder images for the park gallery
const IMAGES = [
  "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9",
  "https://images.unsplash.com/photo-1567600350243-4077d5f30302",
  "https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c",
  "https://images.unsplash.com/photo-1531594896955-305cb6ae616a",
  "https://images.unsplash.com/photo-1508253730651-e5ace80a7025",
  "https://images.unsplash.com/photo-1573322741548-c9c417935706",
  "https://images.unsplash.com/photo-1600860888206-815d742b7814",
];

export default function Gallery() {
  // We duplicate the array to create a seamless, gapless infinite loop
  const loop = [...IMAGES, ...IMAGES];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-5 text-center sm:px-8">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-yellow-400">
          Moments &amp; Memories
        </span>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
          A Little Taste of the Fun
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex items-center overflow-hidden">
        {/* Gradient fades for the edges to make the marquee fade in and out smoothly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent sm:w-48" />

        {/* Framer Motion container for reliable, perfectly smooth infinite scrolling */}
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Adjust this to speed up or slow down the marquee
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {loop.map((src, i) => (
            <div
              key={i}
              className="group relative h-48 w-72 shrink-0 overflow-hidden rounded-3xl bg-white/10 shadow-2xl ring-1 ring-white/10 sm:h-64 sm:w-96"
            >
              <Image
                src={src}
                alt={`Park memory ${i + 1}`}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Optional dark overlay that lifts on hover */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
