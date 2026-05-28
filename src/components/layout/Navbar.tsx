"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

/* ============================================
   NAVBAR
   Sticky glass navbar + fullscreen mobile menu
   ============================================ */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 60);
      setScrollProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 420 : 0);
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[9998] h-px pointer-events-none">
        <div
          className="h-full origin-left transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #8b6914, #c9a84c, #e8c96d)",
          }}
        />
      </div>

      {/* ── Navbar ── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[9980] transition-all duration-500 ${
          isScrolled ? "nav-glass" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-luxury flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group shrink-0"
            aria-label="MR Estates home"
          >
            <div className="relative w-9 h-9 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="MR Estates"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="block font-display font-light tracking-[0.18em] leading-none"
                style={{ fontSize: "0.85rem", color: "#c9a84c" }}
              >
                MR ESTATES
              </span>
              <span
                className="block font-body font-light tracking-[0.35em] uppercase mt-0.5"
                style={{ fontSize: "0.44rem", color: "#9a7318" }}
              >
                Luxury Living
              </span>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-body font-medium relative group"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.55)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.55)")}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                  style={{ background: "#c9a84c", width: "100%" }}
                />
              </button>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-outline-gold py-2.5 px-5 text-[0.58rem]"
            >
              <span>Enquire Now</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-7"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                className="block h-px origin-center"
                style={{ background: "#c9a84c", width: "100%" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-px"
                style={{ background: "#c9a84c", width: "75%" }}
                animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 16 : 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-px origin-center"
                style={{ background: "#c9a84c", width: "50%" }}
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0,
                  width: menuOpen ? "100%" : "50%",
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-Screen Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9970] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#080808" }}
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 36px)" }}
            animate={{ clipPath: "circle(180% at calc(100% - 48px) 36px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 36px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* BG glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
              }}
            />
            <div className="grain-overlay" aria-hidden="true" />

            {/* Corner accents */}
            {["top-8 left-8 border-l border-t", "bottom-8 right-8 border-r border-b"].map((cls, i) => (
              <div key={i} className={`absolute w-8 h-8 ${cls}`}
                style={{ borderColor: "rgba(201,168,76,0.25)" }} />
            ))}

            {/* Logo in menu */}
            <motion.div
              className="flex flex-col items-center mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-16 h-16 mb-3">
                <Image src="/logo.png" alt="MR Estates" fill className="object-contain" sizes="64px" />
              </div>
            </motion.div>

            {/* Nav links */}
            <nav className="flex flex-col items-center gap-0 w-full max-w-sm px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-center py-4 font-display font-light border-b"
                  style={{
                    fontSize: "var(--text-4xl)",
                    color: "rgba(245,240,232,0.75)",
                    borderColor: "rgba(255,255,255,0.05)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-10 text-[0.62rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Enquire on WhatsApp</span>
            </motion.a>

            {/* Tagline */}
            <motion.p
              className="absolute bottom-8 font-body tracking-[0.3em] uppercase"
              style={{ fontSize: "0.5rem", color: "#6b6460" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              MR Estates – Luxury Living
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
