"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { SITEMAPS } from "@/lib/data";

/* ============================================
   SITEMAP SECTION
   Interactive zoom/pan map viewer with luxury UI
   ============================================ */
export default function SitemapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeMap, setActiveMap] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="sitemaps"
      className="relative section-padding bg-matteblack overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, #c9a84c, transparent)",
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="section-label justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Site Plans
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Interactive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sector Maps
            </span>
          </motion.h2>
          <motion.p
            className="text-muted text-sm leading-relaxed"
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
            Explore our carefully planned residential sectors. Pinch to zoom, drag to pan, and discover your perfect plot.
          </motion.p>
        </div>

        {/* Map selector tabs */}
        <motion.div
          className="flex gap-2 mb-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {SITEMAPS.map((map, i) => (
            <button
              key={map.id}
              onClick={() => setActiveMap(i)}
              className={`px-6 py-3 font-body text-[0.6rem] tracking-[0.2em] uppercase transition-all duration-400 border ${
                activeMap === i
                  ? "border-gold-500 bg-gold-500/10 text-gold-400"
                  : "border-gold-900 text-muted hover:border-gold-700 hover:text-gold-600"
              }`}
            >
              {map.title}
            </button>
          ))}
        </motion.div>

        {/* Map description */}
        <motion.p
          key={activeMap}
          className="text-center text-muted text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {SITEMAPS[activeMap].description}
        </motion.p>

        {/* Interactive Map Viewer */}
        <motion.div
          className="relative border border-gold-900 hover:border-gold-700 transition-colors duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Map container */}
          <div className="relative bg-[#0a0a0a] overflow-hidden" style={{ height: "clamp(400px, 60vh, 650px)" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMap}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TransformWrapper
                  initialScale={1}
                  minScale={0.5}
                  maxScale={5}
                  centerOnInit
                  wheel={{ step: 0.1 }}
                  doubleClick={{ mode: "zoomIn", step: 0.7 }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      {/* Custom controls */}
                      <MapControls
                        onZoomIn={() => zoomIn()}
                        onZoomOut={() => zoomOut()}
                        onReset={() => resetTransform()}
                        onFullscreen={() => setIsFullscreen(true)}
                        downloadUrl={SITEMAPS[activeMap].image}
                      />

                      <TransformComponent
                        wrapperStyle={{ width: "100%", height: "100%" }}
                        contentStyle={{ width: "100%", height: "100%" }}
                      >
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          <Image
                            src={SITEMAPS[activeMap].image}
                            alt={SITEMAPS[activeMap].title}
                            width={1200}
                            height={1000}
                            className="max-w-full max-h-full object-contain"
                            draggable={false}
                            priority={activeMap === 0}
                            unoptimized
                          />
                        </div>
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </motion.div>
            </AnimatePresence>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-gold-700 opacity-40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-gold-700 opacity-40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-gold-700 opacity-40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-gold-700 opacity-40 pointer-events-none" />

            {/* Usage hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
              <p className="font-body text-[0.55rem] tracking-[0.2em] text-muted/60 uppercase bg-richblack/60 px-4 py-2 backdrop-blur-sm">
                Pinch or scroll to zoom · Drag to pan · Double-tap to zoom in
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[9990] bg-richblack flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 border border-gold-700 flex items-center justify-center text-gold-500 hover:bg-gold-500/10 transition-colors duration-300"
              aria-label="Close fullscreen"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <TransformWrapper
              initialScale={1}
              minScale={0.3}
              maxScale={8}
              centerOnInit
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <MapControls
                    onZoomIn={() => zoomIn()}
                    onZoomOut={() => zoomOut()}
                    onReset={() => resetTransform()}
                    downloadUrl={SITEMAPS[activeMap].image}
                  />
                  <TransformComponent
                    wrapperStyle={{ width: "100%", height: "90vh" }}
                    contentStyle={{ width: "100%", height: "100%" }}
                  >
                    <Image
                      src={SITEMAPS[activeMap].image}
                      alt={SITEMAPS[activeMap].title}
                      width={2000}
                      height={1600}
                      className="max-w-full max-h-full object-contain"
                      draggable={false}
                      unoptimized
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* Zoom control buttons */
function MapControls({
  onZoomIn,
  onZoomOut,
  onReset,
  onFullscreen,
  downloadUrl,
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onFullscreen?: () => void;
  downloadUrl?: string;
}) {
  return (
    <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5">
      <button
        onClick={onZoomIn}
        className="w-9 h-9 border border-gold-800 bg-richblack/80 backdrop-blur-sm text-gold-600 hover:text-gold-400 hover:border-gold-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Zoom in"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </button>
      <button
        onClick={onZoomOut}
        className="w-9 h-9 border border-gold-800 bg-richblack/80 backdrop-blur-sm text-gold-600 hover:text-gold-400 hover:border-gold-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Zoom out"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </button>
      <button
        onClick={onReset}
        className="w-9 h-9 border border-gold-800 bg-richblack/80 backdrop-blur-sm text-gold-600 hover:text-gold-400 hover:border-gold-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Reset view"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
      {onFullscreen && (
        <button
          onClick={onFullscreen}
          className="w-9 h-9 border border-gold-800 bg-richblack/80 backdrop-blur-sm text-gold-600 hover:text-gold-400 hover:border-gold-600 transition-all duration-300 flex items-center justify-center"
          aria-label="Fullscreen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      )}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="w-9 h-9 border border-gold-800 bg-richblack/80 backdrop-blur-sm text-gold-600 hover:text-gold-400 hover:border-gold-600 transition-all duration-300 flex items-center justify-center"
          aria-label="Download map"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
      )}
    </div>
  );
}
