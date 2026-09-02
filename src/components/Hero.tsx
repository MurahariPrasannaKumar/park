"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import {
  PlayCircle,
  Sparkles,
  Ticket,
  Clock,
  MapPin,
  Tag,
  Star,
} from "lucide-react";

type AnimationPhase = "start" | "ring" | "spin" | "explode" | "horizontal";

const heroSlides = [
  {
    src: "/park-01.jpg",
    alt: "Evening Vibes at the park",
    label: "Evening Vibes",
    icon: Star,
  },
  {
    src: "/park-02.jpg",
    alt: "Thrill Seekers roller coaster",
    label: "Thrill Seekers",
    icon: MapPin,
  },
  {
    src: "/park-03.jpg",
    alt: "Sweet Treats and cotton candy",
    label: "Sweet Treats",
    icon: Tag,
  },
  {
    src: "/park-04.jpg",
    alt: "Giant Wheel glowing at sunset",
    label: "Giant Wheel",
    icon: MapPin,
  },
  {
    src: "/park-05.jpg",
    alt: "Panda Train for kids",
    label: "Panda Train",
    icon: Clock,
  },
  {
    src: "/park-06.jpg",
    alt: "Roller Coaster track loop",
    label: "Roller Coaster",
    icon: MapPin,
  },
  {
    src: "/park-07.jpg",
    alt: "Family Rides section",
    label: "Family Rides",
    icon: Clock,
  },
  {
    src: "/park-08.jpg",
    alt: "Family Carousel",
    label: "Family Carousel",
    icon: Star,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState<AnimationPhase>("start");
  const [radius, setRadius] = useState(340);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 180 : 340);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎬 Sequence Orchestration (Delayed start by 300ms to allow DOM to paint first)
  useEffect(() => {
    const playIntroSequence = () => {
      setPhase("start");
      const t1 = setTimeout(() => setPhase("ring"), 300); // Give browser time to paint before animating
      const t2 = setTimeout(() => setPhase("spin"), 2000);
      const t3 = setTimeout(() => setPhase("explode"), 2900);
      const t4 = setTimeout(() => setPhase("horizontal"), 3500);

      return [t1, t2, t3, t4];
    };

    const timers = playIntroSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  // Background Auto-Play
  useEffect(() => {
    if (isPaused || phase !== "horizontal") return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [isPaused, phase]);

  const slide = heroSlides[activeSlide];
  const isHorizontal = phase === "horizontal";

  const getCircularStyle = (
    index: number,
    total: number,
    currentPhase: AnimationPhase,
  ) => {
    let currentRadius = radius;

    if (currentPhase === "start") {
      currentRadius = 30;
    } else if (currentPhase === "explode") {
      currentRadius = radius * 4.5;
    }

    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * currentRadius;
    const y = Math.sin(angle) * currentRadius;
    let rotate = angle * (180 / Math.PI) + 90;

    if (currentPhase === "start" || currentPhase === "ring") {
      if (rotate > 90) rotate -= 180;
      if (rotate < -90) rotate += 180;
    }

    return { x, y, rotate };
  };

  // Determine wrapper rotation
  let wrapperRotation = 0;
  if (phase === "start") wrapperRotation = -270;
  else if (phase === "ring") wrapperRotation = 0;
  else if (phase === "spin") wrapperRotation = 180;
  else if (phase === "explode") wrapperRotation = 360;

  // Mixed Easing Configurations
  const getSmoothTransition = (currentPhase: AnimationPhase): Transition => {
    if (currentPhase === "ring") {
      return { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 1.8 };
    }
    if (currentPhase === "spin") {
      return { type: "tween", ease: "easeIn", duration: 0.9 };
    }
    if (currentPhase === "explode") {
      return { type: "tween", ease: "easeIn", duration: 0.6 };
    }
    return {
      type: "spring",
      bounce: 0.08,
      stiffness: 150,
      damping: 25,
      duration: 1,
    };
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image (Using Next/Image for optimization) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isHorizontal ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ willChange: "opacity, transform" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            quality={60}
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          animate={{
            opacity: isHorizontal ? 1 : 0,
            y: isHorizontal ? 0 : -30,
            pointerEvents: isHorizontal ? "auto" : "none",
            filter: isHorizontal ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            delay: isHorizontal ? 0.2 : 0,
            ease: "easeOut",
          }}
          className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-8"
        >
          <span className="inline-flex w-max items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-pink-400" />
            Kurnool&apos;s #1 Family Amusement Park
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem]">
            Where Every Day
            <br />
            Feels Like a{" "}
            <span className="text-yellow-400 drop-shadow-[0_2px_10px_rgba(250,204,21,0.5)]">
              Carnival
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Soar high on the Giant Wheel, chug along with our beloved Panda
            Train, and lose yourself in a world of thrilling rides, live
            entertainment, and mouth-watering food stalls.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-pink-400"
            >
              <Ticket className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Book Your Tickets
            </a>
            <a
              href="#rides"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 font-bold text-white shadow-md backdrop-blur ring-1 ring-white/30 transition-all hover:-translate-y-1 hover:bg-white/20"
            >
              <PlayCircle className="h-5 w-5" />
              Explore Rides
            </a>
          </div>
        </motion.div>

        {/* WRAPPER CONTAINER */}
        <motion.div
          layout
          initial={{ rotate: -270 }}
          animate={{ rotate: wrapperRotation }}
          transition={{
            rotate: isHorizontal
              ? { duration: 0 }
              : getSmoothTransition(phase),
            layout: { type: "spring", bounce: 0.15, duration: 0.8 },
          }}
          style={{ willChange: "transform" }}
          className={`absolute z-30 ${
            !isHorizontal
              ? "inset-0 flex items-center justify-center"
              : "bottom-12 left-0 right-0 flex justify-center gap-4 px-8 overflow-x-auto pb-6 items-end"
          }`}
        >
          <AnimatePresence>
            {(phase === "start" || phase === "ring") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.5, filter: "blur(15px)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute z-0 flex items-center gap-2 font-display text-4xl sm:text-5xl font-extrabold text-white pointer-events-none drop-shadow-[0_4px_16px_rgba(255,93,143,0.5)]"
              >
                <span className="text-[#FF5D8F]">Kurnool&apos;s #1</span>
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </motion.div>
            )}
          </AnimatePresence>

          {heroSlides.map((item, index) => {
            const circularPos = getCircularStyle(
              index,
              heroSlides.length,
              phase,
            );
            const isActive = activeSlide === index;
            const Icon = item.icon;

            let currentScale = 1;
            let currentOpacity = 1;

            if (phase === "start") {
              currentScale = 0.2;
              currentOpacity = 0;
            } else if (phase === "explode") {
              currentScale = 1.3;
              currentOpacity = 0;
            } else if (isHorizontal) {
              currentScale = isActive ? 1.05 : 0.95;
            }

            return (
              <motion.div
                key={item.label}
                layout
                initial={false}
                animate={{
                  x: isHorizontal ? 0 : circularPos.x,
                  y: isHorizontal ? 0 : circularPos.y,
                  rotate: isHorizontal ? 0 : circularPos.rotate,
                  scale: currentScale,
                  opacity: currentOpacity,
                  zIndex: isHorizontal && isActive ? 40 : 30,
                }}
                transition={getSmoothTransition(phase)}
                style={{ willChange: "transform, opacity" }}
                onMouseEnter={() => {
                  if (isHorizontal) {
                    setActiveSlide(index);
                    setIsPaused(true);
                  }
                }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setPhase("horizontal")}
                className={`group overflow-hidden rounded-2xl cursor-pointer bg-black/40 shadow-2xl ring-1 ring-white/10 transition-shadow hover:ring-white/40 ${
                  isHorizontal
                    ? "relative h-28 w-44 shrink-0 sm:h-36 sm:w-56"
                    : "absolute h-24 w-36 sm:h-36 sm:w-52"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse z-0" />

                {/* Replaced img with optimized Next/Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 30vw, 15vw"
                  priority={index < 4} // Only prioritize the first few to speed up load
                  className="object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 pointer-events-none z-20 ${
                    isHorizontal
                      ? "opacity-90 group-hover:opacity-100"
                      : "opacity-0"
                  }`}
                />

                <div
                  className={`absolute bottom-3 left-3 right-3 flex items-center gap-2 pointer-events-none transition-all duration-500 delay-200 z-30 ${
                    isHorizontal
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex shrink-0 items-center justify-center rounded-full bg-white/20 p-1.5 backdrop-blur-md ring-1 ring-white/30">
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-semibold text-white text-xs sm:text-sm tracking-wide truncate drop-shadow-md">
                    {item.label}
                  </span>
                </div>

                {isHorizontal && isActive && (
                  <motion.div
                    layoutId="active-outline"
                    className="absolute inset-0 rounded-2xl ring-2 ring-yellow-400 z-40 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
