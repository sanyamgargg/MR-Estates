"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Layout components
import PageLoader from "@/components/layout/PageLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import FloatingParticles from "@/components/common/FloatingParticles";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HistorySection from "@/components/sections/HistorySection";
import PartnersSection from "@/components/sections/PartnersSection";
import DevelopersSection from "@/components/sections/DevelopersSection";
import OfficesSection from "@/components/sections/OfficesSection";
import SitemapSection from "@/components/sections/SitemapSection";
import SocialSection from "@/components/sections/SocialSection";
import ContactSection from "@/components/sections/ContactSection";

/* ============================================
   HOME PAGE
   Main page assembling all sections with Lenis
   ============================================ */
export default function HomePage() {
  /* ---- Lenis smooth scrolling ---- */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,           // Smoothness (lower = smoother/slower)
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Global overlays & UI chrome */}
      <PageLoader />
      <CustomCursor />

      {/* Film grain — cinematic texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Floating gold dust particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navbar />

      {/* ======= MAIN CONTENT ======= */}
      <main>
        <HeroSection />

        {/* Elegant gold section divider */}
        <div className="gold-divider" style={{ opacity: 0.15 }} />

        <AboutSection />

        <div className="gold-divider" style={{ opacity: 0.08 }} />

        <HistorySection />
        <PartnersSection />
        <div className="gold-divider" style={{ opacity: 0.08 }} />
        <DevelopersSection />
        <OfficesSection />
        <SitemapSection />
        <SocialSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
