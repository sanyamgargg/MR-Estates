"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ============================================
   DEVELOPERS SECTION
   A premium showcase of elite partnered builders
   ============================================ */
export default function DevelopersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const developers = [
    {
      id: "suncity",
      name: "Suncity Projects",
      reputation: "25+ Years of Architectural Trust",
      description:
        "Renowned for ultra-premium residential developments, luxury infrastructure, and meticulously planned modern living environments that redefine the elite lifestyle paradigm.",
      logo: "/images/developers/suncity.png",
      tag: "Ultra-Luxury Villas & Plots",
    },
    {
      id: "omaxe",
      name: "Omaxe Group",
      reputation: "3 Decades of Township Excellence",
      description:
        "Pioneering integrated luxury township development, high-end commercial destinations, and bold modern architectural landmarks that blend state-of-the-art innovation with premium aesthetics.",
      logo: "/images/developers/omaxe.png",
      tag: "Elite Townships & Commercials",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="developers"
      className="relative py-24 md:py-32 bg-richblack overflow-hidden"
    >
      {/* Cinematic ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none blur-[120px]"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
        }}
      />

      {/* Subtle architectural vertical gridlines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-[0.02]">
        <div className="w-px h-full bg-gold-500 ml-[10%]" />
        <div className="w-px h-full bg-gold-500 ml-[30%]" />
        <div className="w-px h-full bg-gold-500 mr-[30%]" />
        <div className="w-px h-full bg-gold-500 mr-[10%]" />
      </div>

      <div className="container-luxury px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-8 h-[1px] bg-gold-500" />
            <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold-500 font-semibold">
              PREMIUM PARTNERS
            </span>
            <span className="w-8 h-[1px] bg-gold-500" />
          </motion.div>

          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite mb-4"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Developers We{" "}
            <span
              className="italic font-normal"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Deal In
            </span>
          </motion.h2>

          <motion.p
            className="font-body text-muted text-xs md:text-sm tracking-wide leading-relaxed"
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
            Partnering with trusted names in luxury real estate to secure your ultimate legacy.
          </motion.p>
        </div>

        {/* Developer Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.id}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Soft glow behind card on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] blur-[40px] rounded-2xl transition-opacity duration-1000 ease-out pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #c9a84c 0%, transparent 80%)",
                }}
              />

              {/* Main Premium Card Wrapper */}
              <div
                className="relative h-full overflow-hidden border border-gold-800/20 group-hover:border-gold-500/40 rounded-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(201,168,76,0.06)] flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, rgba(13,13,13,0.8) 0%, rgba(20,20,20,0.95) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div>
                  {/* Luxury Developer Gold Logo Showcase instead of property photo */}
                  <div className="relative h-[260px] md:h-[340px] overflow-hidden w-full border-b border-gold-800/10 bg-black flex items-center justify-center p-6 sm:p-10">
                    {/* Brand logo centered */}
                    <div className="relative w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                      <Image
                        src={dev.logo}
                        alt={`${dev.name} Premium Logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                    
                    {/* Shadow/Glow overlay on card visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-matteblack/60 to-transparent pointer-events-none" />
                    
                    {/* Gold light leak effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-[1200ms] ease-out pointer-events-none"
                      style={{
                        background: "linear-gradient(45deg, #c9a84c 0%, transparent 60%)",
                      }}
                    />

                    {/* Tag */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 border border-gold-500/20 bg-black/60 backdrop-blur-md rounded-full">
                      <span className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-400 font-semibold">
                        {dev.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-8 md:p-10 relative">
                    {/* Name Header */}
                    <div className="mb-6">
                      <h3 className="font-display text-fluid-3xl text-warmwhite font-light tracking-wide mb-1.5 transition-colors duration-500 group-hover:text-gold-300">
                        {dev.name}
                      </h3>
                      <p className="font-body text-[0.65rem] tracking-[0.18em] uppercase text-gold-500 font-medium">
                        {dev.reputation}
                      </p>
                    </div>

                    {/* Minimal Divider */}
                    <div className="w-12 h-px bg-gold-500/30 mb-6 group-hover:w-full transition-all duration-1000 ease-luxury" />

                    {/* Description */}
                    <p className="font-body text-muted text-[0.8rem] md:text-[0.875rem] leading-relaxed tracking-wide">
                      {dev.description}
                    </p>
                  </div>
                </div>

                {/* Footer Section of Card */}
                <div className="px-8 pb-8 md:px-10 md:pb-10 pt-0">
                  <div className="relative overflow-hidden w-full">
                    <button
                      className="w-full relative py-4 border border-gold-500/20 hover:border-gold-400 text-gold-500 hover:text-richblack transition-all duration-700 text-[0.65rem] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-3 overflow-hidden rounded-md group/btn cursor-pointer"
                    >
                      {/* Sliding light shimmer bg on hover */}
                      <div
                        className="absolute inset-0 w-0 group-hover/btn:w-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0"
                      />
                      
                      <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-richblack flex items-center gap-2">
                        Explore Projects
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-500 ease-luxury transform group-hover/btn:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Premium Architectural Corner Borders */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-gold-500/10 opacity-60 group-hover:border-gold-400/40 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-gold-500/10 opacity-60 group-hover:border-gold-400/40 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-gold-500/10 opacity-60 group-hover:border-gold-400/40 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-gold-500/10 opacity-60 group-hover:border-gold-400/40 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
