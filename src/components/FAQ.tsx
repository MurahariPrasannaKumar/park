"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What are the ticket prices?",
    a: "Adult tickets are ₹150 and kids (under 12) are ₹100. Combo passes covering all rides are also available at the entry counter or online.",
  },
  {
    q: "Is the Giant Wheel safe for young children?",
    a: "Yes — the Giant Wheel is regularly inspected and safety-certified. Children under 90cm must be accompanied by an adult.",
  },
  {
    q: "Are outside food and drinks allowed?",
    a: "We request guests to enjoy our wide range of food stalls inside the park. Small snacks and water bottles for infants are permitted.",
  },
  {
    q: "Do you offer birthday party packages?",
    a: "Absolutely! Our birthday package includes a private stall area, decorations, and a free ride pass for the birthday child. Ask at the front desk.",
  },
  {
    q: "Is parking available at the park?",
    a: "Yes, we have ample two-wheeler and four-wheeler parking right outside the main gate, along with easy auto/cab access.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-carnival-green">
            <HelpCircle className="h-4 w-4" /> Good to Know
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-carnival-navy sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-carnival-pink/40 shadow-[0_8px_24px_rgba(20,33,61,0.10)]"
                    : "border-slate-200 shadow-[0_2px_8px_rgba(20,33,61,0.04)] hover:border-carnival-pink/30 hover:shadow-[0_6px_18px_rgba(20,33,61,0.08)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-carnival-pink/5"
                >
                  <span
                    className={`font-display font-bold transition-colors duration-200 ${
                      isOpen ? "text-carnival-pink" : "text-carnival-navy group-hover:text-carnival-pink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-carnival-pink text-white" : "bg-slate-100 text-carnival-pink group-hover:bg-carnival-pink/15"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

