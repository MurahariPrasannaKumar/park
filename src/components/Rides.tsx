"use client";

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
    <section className="relative flex min-h-[800px] w-full flex-col overflow-hidden bg-[#f9f8f6] lg:flex-row">
      {/* 
        =========================================
        LEFT SIDEBAR: CATEGORY NAVIGATION
        =========================================
      */}
      <div className="relative flex w-full flex-col justify-center px-6 pt-12 lg:w-[320px] xl:w-[400px] lg:shrink-0 lg:px-0 lg:pt-0">
        {/* Desktop Arc Visual - Shifted slightly left to create the gap */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[600px] w-[600px] -translate-x-[55%] -translate-y-1/2 rounded-full border-[30px] border-zinc-100 lg:block xl:h-[800px] xl:w-[800px] xl:border-[40px]" />

        {/* Mobile Navigation (Horizontal Scroll) */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-6 sm:gap-4 lg:hidden">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 sm:px-5 sm:py-3 transition-all ${
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:bg-zinc-100"
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
        <div className="relative z-10 hidden flex-col gap-10 pl-6 xl:pl-12 lg:flex">
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
                className={`flex items-center gap-5 xl:gap-6 transition-transform duration-500 ${translateX}`}
              >
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex h-16 w-16 xl:h-20 xl:w-20 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-900 text-white shadow-xl shadow-zinc-200"
                      : "border border-zinc-200 bg-white text-zinc-400 hover:border-zinc-300 hover:bg-zinc-100"
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
                          className="stroke-zinc-200"
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
                          className="stroke-zinc-900"
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
                        ? "text-zinc-900"
                        : "text-zinc-500 group-hover:text-zinc-700"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span className="mt-1 inline-flex w-fit items-center rounded-full bg-zinc-200/60 px-2.5 py-0.5 text-[10px] xl:text-xs font-semibold text-zinc-600">
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
      <div className="relative flex w-full flex-col pb-12 pt-6 pl-6 sm:pl-8 lg:py-24 lg:pl-10 xl:pl-16">
        {/* Header & Controls */}
        <div className="mb-8 mr-6 flex items-end justify-between sm:mb-10 lg:mr-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Iconic Rides
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 sm:mt-4">
              Discover our world-class attractions, engineered for unforgettable
              memories.
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Previous ride"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md transition-colors hover:bg-zinc-800"
              aria-label="Next ride"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto pb-8 pr-6 lg:pr-16"
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
                  className="group relative h-[380px] w-[260px] sm:h-[480px] sm:w-[320px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-zinc-200 shadow-sm"
                >
                  <img
                    src={ride.image}
                    alt={ride.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="absolute bottom-0 flex w-full flex-col p-6 sm:p-8">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300">
                      {ride.location}
                    </span>
                    <h3 className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold leading-tight text-white">
                      {ride.name}
                    </h3>
                    <p className="line-clamp-3 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {ride.desc}
                    </p>

                    <button className="mt-4 sm:mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200">
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
        <div className="mt-2 sm:mt-6 pr-6 lg:pr-16">
          <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:decoration-zinc-900">
            Explore All Attractions
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
