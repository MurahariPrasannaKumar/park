"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Content for the right-side flip cards
const HIGHLIGHTS = [
  {
    emoji: "🌳",
    title: "Green & Spacious",
    desc: "12 acres of lush gardens and shaded walkways.",
    backTitle: "Eco-Friendly",
    backDesc: "We maintain 100% renewable energy across all our garden pathways.",
  },
  {
    emoji: "🛡️",
    title: "Safety First",
    desc: "Trained staff and regularly inspected rides.",
    backTitle: "Certified Safe",
    backDesc: "Awarded the highest international amusement safety rating in 2023.",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    desc: "Rides and stalls designed for every age group.",
    backTitle: "All Ages Welcome",
    backDesc: "From toddler zones to senior-friendly rest areas, everyone is covered.",
  },
];

// High-quality placeholder images for the carousel
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573322741548-c9c417935706?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?auto=format&fit=crop&w=800&q=80",
];

const AUTOPLAY_INTERVAL = 4000;

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play logic for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#F5F5F5] py-24 sm:py-32">
      {/* Subtle Background Glow typical in SaaS landing pages */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-teal-100/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-100/30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT: Premium Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg"
          >
            {/* Premium backdrop/container for the carousel */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-slate-100 shadow-2xl shadow-slate-200/50" />
            <div className="absolute inset-0 z-20 rounded-[2.5rem] ring-1 ring-inset ring-slate-900/5" />

            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              {/* Animated Carousel Images */}
              <AnimatePresence>
                <motion.img
                  key={currentImageIndex}
                  src={CAROUSEL_IMAGES[currentImageIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                  alt={`Amusement Park View ${currentImageIndex + 1}`}
                />
              </AnimatePresence>

              {/* Subtle gradient overlay to ensure text/badge readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/20 to-transparent" />

              {/* Floating Badge Overlay over the carousel */}
              <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-[#F5F5F5]/70 px-6 py-3 shadow-lg backdrop-blur-md">
                  <span className="text-xl">🎪</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">Since 1998</span>
                    <span className="text-xs font-medium text-slate-600">A Kurnool Landmark</span>
                  </div>
                </div>
              </div>

              {/* Optional: Minimalist Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? "w-4 bg-[#F5F5F5]" : "w-1.5 bg-[#F5F5F5]/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Typography & Flip Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Story
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              A Legacy of Laughter in Kurnool
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                What began as a small community fairground has blossomed into
                Andhra Pradesh&apos;s most cherished amusement park. For over
                two decades, Children&apos;s Park has been where Kurnool families create
                memories — first Giant Wheel rides, first cotton candy, first Panda Train
                giggles.
              </p>
              <p>
                Today, we combine that same warmth with modern rides, vibrant
                entertainment, and a food court bursting with flavour —
                welcoming over a million happy visitors and counting.
              </p>
            </div>

            {/* Premium SaaS 3D Flip Cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="group relative h-56 w-full cursor-pointer [perspective:1000px]"
                >
                  <div className="relative h-full w-full rounded-2xl shadow-sm transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT FACE */}
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center rounded-2xl border border-amber-100 bg-[#F5F5F5] p-6 text-center [backface-visibility:hidden] hover:shadow-md hover:ring-1 hover:ring-amber-200">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-violet-50 group-hover:ring-violet-100/50">
                        <span className="text-2xl">{h.emoji}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900">
                        {h.title}
                      </p>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500">
                        {h.desc}
                      </p>
                    </div>

                    {/* BACK FACE */}
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-6 text-center text-white shadow-lg ring-1 ring-violet-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="text-sm font-bold tracking-wide">
                        {h.backTitle}
                      </p>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-violet-100">
                        {h.backDesc}
                      </p>
                      <div className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

