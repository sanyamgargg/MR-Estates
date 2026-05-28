"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { gsap } from "gsap";
import { STATS, SITE_CONFIG } from "@/lib/data";

/* ============================================
   HERO SECTION
   Cinematic fullscreen hero with GSAP + parallax
   ============================================ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse-follow gradient
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // GSAP cinematic reveal
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.0 }); // After loader

      // Background fade in
      tl.fromTo(".hero-bg-img",
        { scale: 1.08, opacity: 0 },
        { scale: 1.02, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Overlay reveal
      tl.fromTo(".hero-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=1.5"
      );

      // Left gold line
      tl.fromTo(".hero-line-left",
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      );

      // Right gold line
      tl.fromTo(".hero-line-right",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
        "<"
      );

      // Eyebrow
      tl.fromTo(".hero-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // Headline clip reveal - each word
      tl.fromTo(".hero-word",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, ease: "power4.out", stagger: 0.1 },
        "-=0.3"
      );

      // Sub headline
      tl.fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      );

      // Divider line
      tl.fromTo(".hero-divider",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      );

      // CTA buttons
      tl.fromTo(".hero-cta",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 },
        "-=0.4"
      );

      // Scroll indicator
      tl.fromTo(".hero-scroll-ind",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      // Stats strip
      tl.fromTo(".hero-stat",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: "power3.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] min-h-[680px] flex flex-col justify-center overflow-hidden bg-richblack"
    >
      {/* ── Background Image + Parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src="/images/hero/hero-bg.png"
          alt="MR Estates luxury architecture"
          fill
          priority
          quality={90}
          className="hero-bg-img object-cover object-center scale-[1.02] opacity-0"
          sizes="100vw"
          style={{ willChange: "transform, opacity" }}
        />

        {/* Layered dark overlays */}
        <div className="hero-overlay absolute inset-0 opacity-0"
          style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.35) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.92) 100%)" }}
        />

        {/* Mouse-follow ambient gold glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-[1200ms] ease-out"
          style={{
            background: `radial-gradient(ellipse 50% 40% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(201,168,76,0.08) 0%, transparent 70%)`,
          }}
        />

        {/* Animated ambient blobs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[100px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #c9a84c, transparent)",
            top: "20%",
            left: "5%",
            animation: "float 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #e8c96d, transparent)",
            bottom: "20%",
            right: "10%",
            animation: "float 7s ease-in-out infinite 2.5s",
          }}
        />
      </motion.div>

      {/* ── Main Text Content ── */}
      <motion.div
        className="relative z-10 container-luxury pt-28 pb-8"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow with gold lines */}
        <div className="flex items-center gap-5 mb-10">
          <div
            className="hero-line-left h-px w-12 scale-x-0"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c)" }}
          />
          <p className="hero-eyebrow opacity-0 font-body text-[0.58rem] tracking-[0.32em] uppercase"
            style={{ color: "#c9a84c" }}>
            Est. 2009 &nbsp;·&nbsp; Haryana&apos;s Finest
          </p>
          <div
            className="hero-line-right h-px w-12 scale-x-0"
            style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
          />
        </div>

        {/* Headline — clipped words */}
        <div className="mb-3 overflow-hidden">
          <h1 className="font-display font-light leading-[0.93] tracking-tight"
            style={{ fontSize: "var(--text-8xl)" }}>
            {["Luxury", "Living"].map((word, i) => (
              <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
                <span className="hero-word inline-block opacity-0" style={{ color: "#f5f0e8" }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div className="mb-10 overflow-hidden">
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="overflow-hidden inline-block">
              <span
                className="hero-word inline-block opacity-0 font-display font-light italic leading-[0.93]"
                style={{
                  fontSize: "var(--text-8xl)",
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c96d 50%, #c9a84c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Redefined
              </span>
            </span>
            <span
              className="hero-word opacity-0 font-display font-light"
              style={{ fontSize: "var(--text-5xl)", color: "#c9a84c" }}
            >.</span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="hero-sub opacity-0 font-body font-light max-w-md leading-[1.8] mb-10"
          style={{ fontSize: "var(--text-lg)", color: "rgba(245,240,232,0.5)" }}
        >
          Crafting timeless real estate experiences with&nbsp;unparalleled elegance, precision, and vision.
        </p>

        {/* Divider */}
        <div
          className="hero-divider scale-x-0 h-px w-full max-w-[280px] mb-10"
          style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)" }}
        />

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hero-cta opacity-0 btn-gold"
          >
            <span>Explore Properties</span>
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="hero-cta opacity-0 btn-outline-gold"
          >
            <span>Our Story</span>
          </button>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20MR%20Estates%20properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta opacity-0 flex items-center gap-2 font-body text-[0.65rem] tracking-[0.15em] uppercase"
            style={{ color: "#9a7318" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </motion.div>

      {/* ── Stats Bar ── */}
      <motion.div className="relative z-10 mt-auto" style={{ opacity }}>
        <div className="container-luxury pb-10">
          <div className="gold-divider mb-8" style={{ opacity: 0.2 }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="hero-stat opacity-0">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="font-body text-[0.58rem] tracking-[0.22em] uppercase mt-1.5"
                  style={{ color: "#6b6460" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <div className="hero-scroll-ind opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <p className="font-body text-[0.52rem] tracking-[0.35em] uppercase" style={{ color: "#6b6460" }}>
          Scroll
        </p>
        <div className="relative w-px h-14 overflow-hidden" style={{ background: "rgba(201,168,76,0.15)" }}>
          <div
            className="absolute w-full"
            style={{
              height: "50%",
              background: "linear-gradient(180deg, transparent, #c9a84c)",
              animation: "scrollIndicator 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator keyframe */}
      <style jsx>{`
        @keyframes scrollIndicator {
          0% { top: -50%; opacity: 0; }
          40% { opacity: 1; }
          100% { top: 150%; opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
      `}</style>
    </section>
  );
}

/* ── Animated Counter ── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);
      if (ref.current) ref.current.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, suffix]);

  return (
    <span
      ref={ref}
      className="font-display font-light block"
      style={{
        fontSize: "var(--text-4xl)",
        background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      0{suffix}
    </span>
  );
}
