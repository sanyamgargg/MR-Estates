"use client";

import { useEffect, useRef } from "react";

/* ============================================
   FLOATING PARTICLES
   Subtle animated gold dust particles for
   ambient cinematic atmosphere
   ============================================ */
export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Particle config
    const PARTICLE_COUNT = 40;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacityTarget: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: Math.random() * -0.2 - 0.05,
      opacity: Math.random() * 0.4,
      opacityTarget: Math.random() * 0.35 + 0.05,
      opacitySpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;

        // Pulse opacity
        p.opacity += p.opacitySpeed;
        if (p.opacity <= 0.03 || p.opacity >= 0.4) {
          p.opacitySpeed *= -1;
        }
        p.opacity = Math.max(0.03, Math.min(0.4, p.opacity));

        // Draw gold particle
        ctx.save();
        ctx.globalAlpha = p.opacity;

        // Radial glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, "#E8C96D");
        gradient.addColorStop(0.5, "#C9A84C");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = "#F5E4A0";
        ctx.globalAlpha = p.opacity * 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      aria-hidden="true"
      style={{ mixBlendMode: "screen", opacity: 0.6 }}
    />
  );
}
