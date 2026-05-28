"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TIMELINE } from "@/lib/data";

/* ============================================
   HISTORY / JOURNEY TIMELINE SECTION
   Animated timeline with gold glowing indicators
   ============================================ */
export default function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative section-padding bg-richblack overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }}
      />

      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="section-label justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Journey
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A Decade of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)" }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Mobile: left-aligned line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px lg:hidden"
            style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)" }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-12 lg:space-y-0">
            {TIMELINE.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-0 lg:gap-0 pl-16 lg:pl-0 lg:mb-16`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="glass-card-hover p-6 lg:p-8 relative group">
                      {/* Year badge */}
                      <span
                        className="inline-block font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold-600 mb-3"
                      >
                        {item.year}
                      </span>
                      <h3 className="font-display text-fluid-2xl font-light text-warmwhite mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover line */}
                      <div className={`absolute bottom-0 h-px bg-gradient-to-r from-gold-700 to-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-0 group-hover:w-full ${isLeft ? "right-0 rotate-180" : "left-0"}`} />
                    </div>
                  </div>

                  {/* Center dot – desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 items-center justify-center z-10">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gold-500"
                      style={{
                        boxShadow: "0 0 0 4px rgba(201,168,76,0.15), 0 0 20px rgba(201,168,76,0.4)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 4px rgba(201,168,76,0.15), 0 0 20px rgba(201,168,76,0.4)",
                          "0 0 0 8px rgba(201,168,76,0.05), 0 0 40px rgba(201,168,76,0.6)",
                          "0 0 0 4px rgba(201,168,76,0.15), 0 0 20px rgba(201,168,76,0.4)",
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>

                  {/* Mobile dot */}
                  <div className="lg:hidden absolute left-[18px] top-8 w-4 h-4 flex items-center justify-center z-10">
                    <div
                      className="w-2.5 h-2.5 rounded-full bg-gold-500"
                      style={{ boxShadow: "0 0 10px rgba(201,168,76,0.5)" }}
                    />
                  </div>

                  {/* Spacer for right side – desktop */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
