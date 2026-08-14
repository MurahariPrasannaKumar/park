"use client";

import { motion } from "framer-motion";
import PandaTrain from "./PandaTrain";

const RIDES = [
  {
    emoji: "🎡",
    name: "The Giant Wheel",
    tagline: "Sky-high views of Kurnool",
    desc: "Rise 100 feet above the fairground in our iconic Giant Wheel and watch the whole park — and the city skyline — unfold beneath you.",
    color: "from-carnival-pink to-carnival-orange",
  },
  {
    emoji: "🐼",
    name: "Panda Train",
    tagline: "Every child's favourite ride",
    desc: "All aboard the adorable Panda Express! A gentle, giggle-filled loop around the park that little explorers ask to ride again and again.",
    color: "from-carnival-teal to-carnival-green",
  },
  {
    emoji: "🎠",
    name: "Merry-Go-Round",
    tagline: "Classic carousel magic",
    desc: "Hand-painted horses, twinkling lights, and nostalgic tunes — our carousel is a timeless favourite for the whole family.",
    color: "from-carnival-purple to-carnival-blue",
  },
  {
    emoji: "🎢",
    name: "Thunder Coaster",
    tagline: "For the thrill-seekers",
    desc: "Twists, drops, and loops that'll have you screaming with delight. Kurnool's fastest ride, built for the brave-hearted.",
    color: "from-carnival-red to-carnival-pink",
  },
  {
    emoji: "🚀",
    name: "Space Bounce",
    tagline: "Zero-gravity fun",
    desc: "Blast off, bounce, and float — a rocket-themed drop tower that sends your stomach on its own little adventure.",
    color: "from-carnival-blue to-carnival-purple",
  },
  {
    emoji: "🎯",
    name: "Fun Fair Games",
    tagline: "Win a prize to remember",
    desc: "Ring toss, balloon darts, and shooting galleries — test your skill and walk away with a cuddly souvenir.",
    color: "from-carnival-yellow to-carnival-orange",
  },
];

export default function Rides() {
  return (
    <section id="rides" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-teal">
            Rides &amp; Attractions
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
            Adventures For Every Age
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From gentle rides for the little ones to heart-pounding thrills
            for the bold — there&apos;s something magical waiting for
            everyone.
          </p>
        </motion.div>

        {/* Featured: Panda Train strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-carnival-teal/10 via-carnival-green/10 to-carnival-yellow/10 p-8 ring-1 ring-carnival-teal/15 sm:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-carnival-green/15 px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-carnival-green">
                Park Favourite
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-carnival-navy sm:text-4xl">
                All Aboard the Panda Train! 🐼
              </h3>
              <p className="mt-4 max-w-lg text-slate-600">
                Chugging happily around the park, our huggable Panda Train
                takes little travellers on a scenic loop past flower gardens,
                the food court, and right beneath the Giant Wheel. Complete
                with panda-ear whistles and confetti stops!
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-white/60 py-6 ring-1 ring-white">
              <div className="w-[160%] max-w-none animate-choo">
                <PandaTrain className="h-auto w-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ride grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RIDES.map((ride, i) => (
            <motion.div
              key={ride.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-100 transition-shadow hover:shadow-2xl hover:shadow-slate-200"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${ride.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-md">
                <span className="transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                  {ride.emoji}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold text-carnival-navy">
                {ride.name}
              </h3>
              <p className="relative mt-1 font-display text-sm font-bold text-carnival-pink">
                {ride.tagline}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                {ride.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
