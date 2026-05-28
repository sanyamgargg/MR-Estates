"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   PAGE LOADER
   Cinematic gold loader with logo reveal
   ============================================ */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar 0 → 100
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 18 + 6;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
      }
      setProgress(Math.min(val, 100));
    }, 80);

    // Hide after 1.8s
    const t = setTimeout(() => setVisible(false), 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#080808" }}
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Radial glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Corner decorations */}
          {[
            "top-6 left-6 border-l border-t",
            "top-6 right-6 border-r border-t",
            "bottom-6 left-6 border-l border-b",
            "bottom-6 right-6 border-r border-b",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${cls}`}
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative mb-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-28 h-28 mb-6">
              <Image
                src="/logo.png"
                alt="MR Estates"
                fill
                className="object-contain"
                priority
                sizes="112px"
              />
            </div>

            {/* Brand text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p
                className="font-display font-light tracking-[0.28em] mb-1"
                style={{
                  fontSize: "var(--text-2xl)",
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c96d 40%, #c9a84c 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                M R ESTATES
              </p>
              <p
                className="font-body font-light tracking-[0.45em] uppercase"
                style={{ fontSize: "0.52rem", color: "#9a7318" }}
              >
                Luxury Living
              </p>
            </motion.div>
          </motion.div>

          {/* Progress bar container */}
          <motion.div
            className="relative w-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Track */}
            <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />
            {/* Fill */}
            <div
              className="absolute top-0 left-0 h-px transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #8b6914, #c9a84c, #e8c96d)",
                boxShadow: "0 0 8px rgba(201,168,76,0.5)",
              }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.p
            className="mt-4 font-body font-light tracking-[0.2em]"
            style={{ fontSize: "0.6rem", color: "rgba(201,168,76,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {Math.round(progress)}%
          </motion.p>

          {/* Animated dots */}
          <div className="absolute bottom-10 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#9a7318" }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
