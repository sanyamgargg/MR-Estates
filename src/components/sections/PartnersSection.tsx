"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PARTNERS } from "@/lib/data";

/* ============================================
   PARTNERS SECTION
   Glassmorphism partner cards with contact CTAs
   ============================================ */
export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const socialIcons = {
    whatsapp: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    phone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.02-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    email: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative section-padding bg-matteblack overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, #c9a84c, transparent 70%)" }}
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
            Leadership
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Visionaries Behind{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MR Estates
            </span>
          </motion.h2>
          <motion.p
            className="text-muted text-sm leading-relaxed"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "36rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Meet the passionate professionals who have dedicated their careers to crafting extraordinary real estate experiences.
          </motion.p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Card */}
              <div className="relative overflow-hidden border border-gold-900 hover:border-gold-600 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0_60px_rgba(201,168,76,0.12)]">

                {/* Photo */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                  {/* Gold gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                  {/* Gold tint overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    style={{ background: "linear-gradient(135deg, #c9a84c22, transparent)" }}
                  />
                </div>

                {/* Content */}
                <div
                  className="p-6 relative"
                  style={{
                    background: "rgba(13,13,13,0.97)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Gold top accent */}
                  <div className="w-12 h-px bg-gold-600 mb-4 group-hover:w-full transition-all duration-700" />

                  <h3 className="font-display text-fluid-2xl font-light text-warmwhite mb-1">
                    {partner.name}
                  </h3>
                  <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold-600 mb-4">
                    {partner.title}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {partner.bio}
                  </p>

                  {/* Contact buttons */}
                  <div className="flex gap-2">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${partner.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold-800 text-gold-600 hover:bg-gold-500 hover:border-gold-500 hover:text-richblack transition-all duration-400 text-[0.6rem] tracking-wider uppercase font-semibold"
                    >
                      {socialIcons.whatsapp}
                      <span>Chat</span>
                    </a>

                    {/* Call */}
                    <a
                      href={`tel:${partner.phone}`}
                      aria-label="Call"
                      className="flex items-center justify-center w-10 h-10 border border-gold-800 text-gold-700 hover:border-gold-500 hover:text-gold-400 transition-all duration-400"
                    >
                      {socialIcons.phone}
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${partner.email}`}
                      aria-label="Email"
                      className="flex items-center justify-center w-10 h-10 border border-gold-800 text-gold-700 hover:border-gold-500 hover:text-gold-400 transition-all duration-400"
                    >
                      {socialIcons.email}
                    </a>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
