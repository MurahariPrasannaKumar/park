"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sowmya Reddy",
    role: "Visited with family",
    quote:
      "The Giant Wheel view at sunset is unforgettable. My kids haven't stopped talking about the Panda Train since!",
    avatar: "👩",
  },
  {
    name: "Ravi Kumar",
    role: "Local resident, Kurnool",
    quote:
      "Best-maintained park in the district. Clean, safe, and the food stalls are genuinely delicious. We come every month.",
    avatar: "👨",
  },
  {
    name: "Anjali & Kiran",
    role: "Celebrated a birthday here",
    quote:
      "Booked the birthday package — the staff made our daughter feel like a princess. Highly recommend for celebrations!",
    avatar: "👫",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24">
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
          <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
            Loved By Families Across Kurnool
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100"
            >
              <Quote className="h-8 w-8 text-carnival-pink/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-carnival-yellow text-carnival-yellow"
                  />
                ))}
              </div>
              <p className="mt-4 text-slate-600 leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                  {review.avatar}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-carnival-navy">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
