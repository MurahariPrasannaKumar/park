"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const COLOR_STYLES = {
  pink: { icon: "bg-carnival-pink/10 text-carnival-pink", ring: "ring-carnival-pink/40" },
  blue: { icon: "bg-carnival-blue/10 text-carnival-blue", ring: "ring-carnival-blue/40" },
  orange: { icon: "bg-carnival-orange/10 text-carnival-orange", ring: "ring-carnival-orange/40" },
  green: { icon: "bg-carnival-green/10 text-carnival-green", ring: "ring-carnival-green/40" },
  teal: { icon: "bg-carnival-teal/10 text-carnival-teal", ring: "ring-carnival-teal/40" },
  purple: { icon: "bg-carnival-purple/10 text-carnival-purple", ring: "ring-carnival-purple/40" },
} as const;

const REVIEWS = [
  {
    name: "Sowmya Reddy",
    role: "Visited with family",
    quote:
      "The Giant Wheel view at sunset is unforgettable. My kids haven't stopped talking about the Panda Train since!",
    avatar: "👩",
    color: "pink",
  },
  {
    name: "Ravi Kumar",
    role: "Local resident, Kurnool",
    quote:
      "Best-maintained park in the district. Clean, safe, and the food stalls are genuinely delicious. We come every month.",
    avatar: "👨",
    color: "blue",
  },
  {
    name: "Anjali & Kiran",
    role: "Celebrated a birthday here",
    quote:
      "Booked the birthday package — the staff made our daughter feel like a princess. Highly recommend for celebrations!",
    avatar: "👫",
    color: "orange",
  },
  {
    name: "Meera Prasad",
    role: "First-time visitor",
    quote:
      "Loved how spotless and well-organized everything was. The staff went out of their way to help us with the little ones.",
    avatar: "👩‍🦱",
    color: "green",
  },
  {
    name: "Arjun Reddy",
    role: "Weekend regular",
    quote:
      "The water park rides are a blast in summer, and the queues move fast. Best value ticket in Kurnool, hands down.",
    avatar: "🧑",
    color: "teal",
  },
  {
    name: "Lakshmi Devi",
    role: "Visited with grandkids",
    quote:
      "Safe, clean, and full of joy. Watching my grandkids light up on the Classic Carousel made my whole week.",
    avatar: "👵",
    color: "purple",
  },
] satisfies { name: string; role: string; quote: string; avatar: string; color: keyof typeof COLOR_STYLES }[];

const LOOP = [...REVIEWS, ...REVIEWS];

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  const styles = COLOR_STYLES[review.color];
  return (
    <div
      className="group relative flex h-80 w-75 shrink-0 flex-col overflow-hidden rounded-3xl bg-slate-50 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] sm:h-85 sm:w-85 sm:p-8"
    >
      {/* Accent glow on hover */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-3xl opacity-0 ring-2 transition-opacity duration-300 group-hover:opacity-100 ${styles.ring}`}
      />

      <div className="flex items-center justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${styles.icon}`}
        >
          <Quote className="h-5 w-5 fill-current" />
        </span>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className="h-3.5 w-3.5 fill-carnival-yellow text-carnival-yellow"
            />
          ))}
        </div>
      </div>

      <p className="mt-5 line-clamp-4 flex-1 text-[15px] leading-relaxed text-slate-600">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-3 border-t border-slate-200/70 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-slate-100">
          {review.avatar}
        </span>
        <div>
          <p className="font-display text-sm font-bold text-carnival-navy">
            {review.name}
          </p>
          <p className="text-xs text-slate-500">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-blue">
            Happy Visitors
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Loved By Families Across Kurnool
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mt-14"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-32" />

        <div className="group/track flex w-max gap-6 py-4 [animation-play-state:running] animate-marquee hover:[animation-play-state:paused] sm:gap-8">
          {LOOP.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
