"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================
   CUSTOM CURSOR
   Animated dot + ring cursor with hover morphing
   ============================================ */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrameId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Smooth ring follow with lag
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);

      if (dot) {
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      if (ring) {
        ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnter = () => setIsHidden(false);
    const onMouseLeave = () => setIsHidden(true);

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic") ||
        getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isInteractive);
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);

    animFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // Don't render on touch devices (server-safe)
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: isHovering ? "#e8c96d" : "#c9a84c",
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.3s, background-color 0.3s, transform 0.05s",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />

      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1px solid ${isHovering ? "rgba(232,201,109,0.8)" : "rgba(201,168,76,0.5)"}`,
          opacity: isHidden ? 0 : 1,
          transform: isPointer ? "scale(1.4)" : "scale(1)",
          transition: "opacity 0.3s, border-color 0.3s, width 0.4s, height 0.4s",
          willChange: "transform",
        }}
      />
    </>
  );
}
