"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FerrisWheel,
  Waves,
  Baby,
  ArrowRight,
} from "lucide-react";

// --- Data Structure ---
const CATEGORIES = [
  { id: "land", label: "Land Rides", count: "42 Rides", icon: FerrisWheel },
  { id: "water", label: "Water Park", count: "24 Rides", icon: Waves },
  { id: "kids", label: "Kids Zone", count: "18 Rides", icon: Baby },
];

const RIDES_DATA: Record<
  string,
  { id: string; name: string; location: string; desc: string; image: string }[]
> = {
  land: [
    {
      id: "l1",
      name: "Velocity Coaster",
      location: "Thrill Sector",
      desc: "Experience zero gravity on this state-of-the-art inverted steel roller coaster.",
      image:
        "https://images.unsplash.com/photo-1531594896955-305cb6ae616a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "l2",
      name: "The Zenith Wheel",
      location: "Central Plaza",
      desc: "Take in panoramic views of the entire park from 150 feet in the air.",
      image:
        "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "l3",
      name: "Pendulum Drop",
      location: "Thrill Sector",
      desc: "Swing higher and higher before a heart-stopping freefall back to earth.",
      image:
        "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "l4",
      name: "Neon Spin",
      location: "Arcade Avenue",
      desc: "A high-speed centrifuge ride that blurs the line between light and sound.",
      image:
        "https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  water: [
    {
      id: "w1",
      name: "Tidal Wave",
      location: "Aqua Zone",
      desc: "Plunge down a 50-foot vertical drop and create a massive splash.",
      image:
        "https://images.unsplash.com/photo-1572004245999-5264b38bfd24?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "w2",
      name: "Lazy River",
      location: "Oasis",
      desc: "Relax and float along a winding tropical river under the sun.",
      image:
        "https://images.unsplash.com/photo-1583313931668-38b4d89fae01?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "w3",
      name: "Abyss Tube",
      location: "Aqua Zone",
      desc: "A pitch-black enclosed water slide with unexpected twists and turns.",
      image:
        "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80",
    },
  ],
  kids: [
    {
      id: "k1",
      name: "Classic Carousel",
      location: "Family Court",
      desc: "A timeless, beautifully hand-painted merry-go-round for all ages.",
      image:
        "https://images.unsplash.com/photo-1573322741548-c9c417935706?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "k2",
      name: "Mini Express",
      location: "Family Court",
      desc: "A gentle train ride that tours the scenic gardens of the park.",
      image:
        "https://images.unsplash.com/photo-1603525206120-d30bebe209b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "k3",
      name: "Balloon Flight",
      location: "Sky Zone",
      desc: "Soar gently in rotating hot air balloon baskets.",
      image:
        "https://images.unsplash.com/photo-1567600350243-4077d5f30302?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

const AUTO_PLAY_INTERVAL = 5000;

export default function IconicRides() {
  const [activeCategory, setActiveCategory] = useState("land");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play categories
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = CATEGORIES.findIndex((c) => c.id === prevCategory);
        const nextIndex = (currentIndex + 1) % CATEGORIES.length;
        return CATEGORIES[nextIndex].id;
      });
    }, AUTO_PLAY_INTERVAL);

    // Cleanup timer on component unmount or when activeCategory changes (resets timer on manual click)
    return () => clearInterval(timer);
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Responsive scroll amount based on screen size
      const isMobile = window.innerWidth < 640;
      const scrollAmount =
        direction === "left" ? (isMobile ? -280 : -350) : isMobile ? 280 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const currentRides = RIDES_DATA[activeCategory] || [];

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-black py-16 sm:py-20 lg:min-h-[820px] lg:flex-row lg:py-0">
      {/* 
        =========================================
        LEFT SIDEBAR: CATEGORY NAVIGATION
        =========================================
      */}
      <div className="relative flex w-full flex-col justify-center px-5 sm:px-8 lg:w-[360px] lg:shrink-0 lg:px-0 xl:w-[440px]">
        {/* Desktop Arc Visual - Shifted slightly left to create the gap */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[600px] w-[600px] -translate-x-[55%] -translate-y-1/2 rounded-full border-[30px] border-white/10 lg:block xl:h-[800px] xl:w-[800px] xl:border-[40px]" />

        {/* Mobile Navigation (Horizontal Scroll) */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-10 sm:gap-4 lg:hidden">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 sm:px-5 sm:py-3 transition-all ${
                  isActive
                    ? "border-[#F5F5F5] bg-[#F5F5F5] text-zinc-950"
                    : "border-white/15 bg-white/10 text-zinc-300 hover:border-white/30 hover:bg-white/15"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm font-semibold sm:text-base">
                  {cat.label}
                </span>

                {/* Mobile active indicator bar */}
                {isActive && (
                  <motion.div
                    key={activeCategory}
                    className="absolute bottom-0 left-0 h-1 rounded-full bg-white/30"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: AUTO_PLAY_INTERVAL / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Navigation (Arc Alignment with visual gap) */}
        <div className="relative z-10 hidden flex-col gap-12 pl-8 lg:flex xl:gap-14 xl:pl-14">
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            // Artificial curve positioning to follow the background arc while maintaining a gap
            let translateX = "translate-x-0";
            if (index === 0) translateX = "translate-x-12 xl:translate-x-16";
            if (index === 1) translateX = "translate-x-20 xl:translate-x-28";
            if (index === 2) translateX = "translate-x-12 xl:translate-x-16";

            return (
              <div
                key={cat.id}
                className={`flex items-center gap-6 transition-transform duration-500 xl:gap-7 ${translateX}`}
              >
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex h-16 w-16 xl:h-20 xl:w-20 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#F5F5F5] text-zinc-950 shadow-xl shadow-white/10"
                      : "border border-white/15 bg-white/10 text-zinc-400 hover:border-white/30 hover:bg-white/15"
                  }`}
                >
                  <Icon
                    className="z-10 h-6 w-6 xl:h-8 xl:w-8"
                    strokeWidth={isActive ? 2 : 1.5}
                  />

                  {/* Animated Circular Loader for Active Item */}
                  {isActive && (
                    <motion.div
                      layoutId="active-ring-wrapper"
                      className="absolute -inset-2 h-20 w-20 xl:h-24 xl:w-24 -rotate-90 rounded-full"
                    >
                      <svg viewBox="0 0 96 96" className="h-full w-full">
                        {/* Background Track */}
                        <circle
                          cx="48"
                          cy="48"
                          r="47"
                          strokeWidth="2"
                          fill="none"
                          className="stroke-white/20"
                        />
                        {/* Progress Fill */}
                        <motion.circle
                          key={activeCategory} // Force re-render/restart on category change
                          cx="48"
                          cy="48"
                          r="47"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          className="stroke-white"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: AUTO_PLAY_INTERVAL / 1000,
                            ease: "linear",
                          }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </button>

                <div
                  className="group flex cursor-pointer flex-col text-left"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span
                    className={`text-base xl:text-lg font-bold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span className="mt-1 inline-flex w-fit items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] xl:text-xs font-semibold text-zinc-300">
                    {cat.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        =========================================
        RIGHT SIDE: CAROUSEL CONTENT
        =========================================
      */}
      <div className="relative flex w-full min-w-0 flex-col px-5 sm:px-8 lg:py-24 lg:pl-12 lg:pr-10 xl:pl-16 xl:pr-20">
        {/* Header & Controls */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between lg:mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Iconic Rides
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
              Discover our world-class attractions, engineered for unforgettable
              memories.
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/15 hover:text-white"
              aria-label="Previous ride"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#F5F5F5] text-zinc-950 shadow-md transition-colors hover:bg-yellow-100"
              aria-label="Next ride"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full min-w-0 overflow-hidden">
          <div
            ref={carouselRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-10 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {currentRides.map((ride, index) => (
                <motion.div
                  key={ride.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative h-[400px] w-[min(82vw,300px)] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-zinc-200 shadow-sm sm:h-[470px] sm:w-[320px] lg:h-[480px] xl:w-[340px]"
                >
                  <Image
                    src={ride.image}
                    alt={ride.name}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1280px) 320px, 340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/55 to-transparent transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="absolute bottom-0 flex w-full flex-col px-6 pb-7 pt-16 sm:px-8 sm:pb-8">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 sm:text-xs">
                      {ride.location}
                    </span>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                      {ride.name}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                      {ride.desc}
                    </p>

                    <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2 text-xs font-semibold text-zinc-900 transition-colors hover:bg-yellow-100 sm:px-5 sm:py-2.5 sm:text-sm">
                      Ride Details
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-2 sm:mt-4">
          <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white underline decoration-white/30 decoration-2 underline-offset-4 transition-colors hover:decoration-white">
            Explore All Attractions
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

