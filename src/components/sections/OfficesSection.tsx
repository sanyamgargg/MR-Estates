"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { OFFICES } from "@/lib/data";

/* ============================================
   OFFICES SECTION
   Cinematic location cards with embedded maps
   ============================================ */
export default function OfficesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="offices"
      className="relative section-padding bg-richblack overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 opacity-[0.04] pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at right, #c9a84c, transparent 70%)" }}
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
            Our Presence
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Where to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Find Us
            </span>
          </motion.h2>
        </div>

        {/* Office cards */}
        <div className="space-y-20">
          {OFFICES.map((office, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={office.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-gold-900 hover:border-gold-700 transition-all duration-700 group`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ flexDirection: isReversed ? "row-reverse" : "row" }}
              >
                {/* Image side */}
                <div className={`relative h-72 lg:h-auto overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={office.image}
                    alt={`MR Estates ${office.city} office`}
                    fill
                    className="object-cover object-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-richblack/80 via-richblack/20 to-transparent" />

                  {/* City badge */}
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                    <span className="font-display text-fluid-4xl font-light text-warmwhite/80">
                      {office.city}
                    </span>
                    <p className="font-body text-[0.55rem] tracking-[0.3em] text-gold-600 uppercase mt-1">
                      {office.country}
                    </p>
                  </div>
                </div>

                {/* Info side */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-between ${isReversed ? "lg:order-1" : ""}`}
                  style={{ background: "rgba(13,13,13,0.98)" }}
                >
                  <div>
                    {/* Office number */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-display text-4xl font-light text-gold-900">
                        0{office.id}
                      </span>
                      <div className="h-px flex-1 bg-gold-900" />
                    </div>

                    <h3 className="font-display text-fluid-3xl font-light text-warmwhite mb-6">
                      {office.city} Office
                    </h3>

                    {/* Details */}
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-muted text-sm">
                        <svg className="w-4 h-4 text-gold-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span className="leading-relaxed">{office.address}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted text-sm">
                        <svg className="w-4 h-4 text-gold-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <a href={`tel:${office.phone}`} className="hover:text-gold-400 transition-colors duration-300">
                          {office.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-3 text-muted text-sm">
                        <svg className="w-4 h-4 text-gold-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <a href={`mailto:${office.email}`} className="hover:text-gold-400 transition-colors duration-300">
                          {office.email}
                        </a>
                      </li>
                      <li className="flex items-center gap-3 text-muted text-sm">
                        <svg className="w-4 h-4 text-gold-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {office.hours}
                      </li>
                    </ul>
                  </div>

                  {/* Map embed */}
                  <div className="mb-6 overflow-hidden border border-gold-900 group-hover:border-gold-700 transition-colors duration-500">
                    <iframe
                      src={office.mapUrl}
                      width="100%"
                      height="160"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${office.city} office map`}
                    />
                  </div>

                  {/* Direction button */}
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full justify-center text-center"
                  >
                    <span>Get Directions</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
