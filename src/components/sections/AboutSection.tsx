"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ============================================
   ABOUT / COMPANY PROFILE SECTION
   Elegant storytelling layout with editorial design
   ============================================ */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding bg-matteblack overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right top, #c9a84c 0%, transparent 70%)",
        }}
      />

      <div className="container-luxury">
        {/* Section label */}
        <motion.div
          className="section-label mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Company Profile
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Main text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              {/* Large quote mark */}
              <span
                className="font-display text-[8rem] leading-none text-gold-900 select-none block -mb-6 -ml-2"
                aria-hidden
              >
                &ldquo;
              </span>
              <h2 className="font-display text-fluid-5xl font-light leading-tight text-warmwhite mb-6">
                Where Vision<br />
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meets Excellence
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-warmwhite/60 text-fluid-lg leading-relaxed mb-8"
            >
              At MR Estates, we believe that a home is more than a structure — it is an expression of identity, a sanctuary of aspiration, and a legacy for generations to come.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted text-sm leading-relaxed mb-10"
            >
              Founded in 2009 with an unwavering commitment to quality, MR Estates has become synonymous with luxury residential development that exceeds expectations at every turn. Our portfolio spans premium plotted developments, curated villa townships, and bespoke residential experiences designed for the discerning few.
            </motion.p>

            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline-gold inline-flex"
            >
              <span>Speak With Us</span>
            </motion.a>
          </motion.div>

          {/* Right: Vision / Mission / Philosophy cards */}
          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              {
                label: "Our Vision",
                title: "To Redefine Luxury Living",
                body: "To be India's most admired luxury real estate brand — one that consistently delivers homes of extraordinary beauty, craftsmanship, and enduring value.",
                number: "01",
              },
              {
                label: "Our Mission",
                title: "Excellence in Every Detail",
                body: "To create premium residential experiences that surpass client aspirations through meticulous planning, superior construction, and bespoke service.",
                number: "02",
              },
              {
                label: "Our Philosophy",
                title: "Timeless Over Trendy",
                body: "We believe in creating spaces that age gracefully — where classical elegance meets contemporary living, resulting in homes that feel relevant decades from now.",
                number: "03",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-hover p-8 relative group"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 font-display text-4xl font-light text-gold-900/50 group-hover:text-gold-800/70 transition-colors duration-500">
                  {card.number}
                </span>

                <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold-600 mb-3">
                  {card.label}
                </p>
                <h3 className="font-display text-fluid-2xl font-light text-warmwhite mb-3">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {card.body}
                </p>

                {/* Bottom gold line reveal */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-700 to-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
