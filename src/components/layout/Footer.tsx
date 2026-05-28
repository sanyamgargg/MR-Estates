"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/data";

/* ============================================
   FOOTER
   Luxury minimal footer with logo + links
   ============================================ */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#050505" }}>

      {/* Top gold line */}
      <div className="w-full h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent)"
      }} />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, #c9a84c, transparent)" }}
      />

      {/* ── Main Footer Body ── */}
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* ── Brand Column ── */}
          <div className="md:col-span-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-6 group"
              aria-label="Back to top"
            >
              <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                <Image src="/logo.png" alt="MR Estates" fill className="object-contain" sizes="40px" />
              </div>
              <div>
                <span className="block font-display font-light tracking-[0.18em] leading-none"
                  style={{ fontSize: "0.85rem", color: "#c9a84c" }}>
                  MR ESTATES
                </span>
                <span className="block font-body font-light tracking-[0.35em] uppercase mt-0.5"
                  style={{ fontSize: "0.44rem", color: "#9a7318" }}>
                  Luxury Living
                </span>
              </div>
            </button>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#6b6460" }}>
              Crafting extraordinary real estate experiences since 2009. Where vision meets excellence, and every home tells a story of refined living.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-400 hover:scale-110"
                  style={{
                    borderColor: "rgba(201,168,76,0.2)",
                    color: "#9a7318",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                    (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(201,168,76,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "#9a7318";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="md:col-span-3">
            <h4 className="section-label mb-6 text-[0.6rem]" style={{ justifyContent: "flex-start" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm transition-colors duration-300 flex items-center gap-2 group"
                    style={{ color: "#6b6460" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6460")}
                  >
                    <span className="w-3 h-px inline-block transition-all duration-400 group-hover:w-5"
                      style={{ background: "rgba(201,168,76,0.4)" }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="md:col-span-5">
            <h4 className="section-label mb-6 text-[0.6rem]" style={{ justifyContent: "flex-start" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm group transition-colors duration-300"
                  style={{ color: "#6b6460" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6460")}
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a84c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm group transition-colors duration-300"
                  style={{ color: "#6b6460" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6460")}
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a84c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "#6b6460" }}>
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a84c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="leading-relaxed">
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20MR%20Estates%20properties.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold mt-6 inline-flex text-[0.58rem] py-3 px-6"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(201,168,76,0.08)" }}
      >
        <div className="container-luxury py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[0.58rem] tracking-[0.12em]" style={{ color: "#4a4440" }}>
            © {currentYear} MR Estates – Luxury Living. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#c9a84c", boxShadow: "0 0 6px rgba(201,168,76,0.5)" }} />
            <p className="font-body text-[0.58rem] tracking-[0.12em]" style={{ color: "#4a4440" }}>
              Crafted with excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Inline Social Icon ── */
function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    youtube: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    whatsapp: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}
