"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";

/* ============================================
   SOCIAL MEDIA SECTION
   Premium social showcase with gold hover effects
   ============================================ */

const socialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),

  youtube: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
  whatsapp: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
};

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="social"
      className="relative section-padding bg-richblack overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, #c9a84c, transparent)",
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="section-label justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Follow Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Story
            </span>
          </motion.h2>
          <motion.p
            className="text-muted text-sm"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "32rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Stay connected with MR Estates across all platforms for the latest properties, insights, and luxury living inspiration.
          </motion.p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_LINKS.map((social, i) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center text-center p-8 border border-gold-900 hover:border-gold-500 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Gold corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Icon */}
              <motion.div
                className="text-gold-700 group-hover:text-gold-400 transition-colors duration-400 mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="p-4 border border-gold-900 group-hover:border-gold-600 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.2)] transition-all duration-500"
                >
                  {socialIcons[social.icon]}
                </div>
              </motion.div>

              {/* Platform name */}
              <p className="font-display text-fluid-lg font-light text-warmwhite/80 group-hover:text-warmwhite transition-colors duration-300 mb-1 relative z-10">
                {social.platform}
              </p>
              <p className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-700 mb-3 relative z-10">
                {social.handle}
              </p>
              <p className="text-muted text-xs leading-relaxed relative z-10 hidden lg:block">
                {social.description}
              </p>

              {/* Bottom arrow */}
              <div className="mt-4 flex items-center gap-1 text-gold-700 group-hover:text-gold-400 transition-colors duration-300 relative z-10">
                <span className="font-body text-[0.55rem] tracking-[0.2em] uppercase">Follow</span>
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
