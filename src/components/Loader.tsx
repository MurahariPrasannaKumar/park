"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]); 
 
  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[999] overflow-hidden" aria-hidden="true">
          {/* top half — white bg, black text */}
          l <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="absolute inset-x-0 top-0 flex h-1/2 items-end justify-center overflow-hidden bg-[#F5F5F5]"
          >
            <motion.span
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="select-none whitespace-nowrap font-pixel text-[13vw] leading-none tracking-tight text-carnival-navy sm:text-[9vw]"
            >
              CHILDRENS
            </motion.span>
          </motion.div>

          {/* bottom half — black bg, white text */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="absolute inset-x-0 bottom-0 flex h-1/2 items-start justify-center overflow-hidden bg-carnival-navy"
          >
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="select-none whitespace-nowrap font-pixel text-[13vw] leading-none tracking-tight text-carnival-yellow sm:text-[9vw]"
            >
              PARK
            </motion.span>
          </motion.div>

          {/* dividing line */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-carnival-pink/60"
          />
        </div>
      )}
    </AnimatePresence>
  );
}

