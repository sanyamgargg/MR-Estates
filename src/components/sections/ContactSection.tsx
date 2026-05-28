"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG, OFFICES } from "@/lib/data";

/* ============================================
   CONTACT SECTION
   Premium contact form + map + all CTAs
   ============================================ */
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission (replace with actual API)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-gold-900 focus:border-gold-500 py-3 text-warmwhite/80 text-sm placeholder:text-muted outline-none transition-colors duration-400 font-body";

  const labelClass =
    "block font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold-700 mb-2";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding bg-matteblack overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right top, #c9a84c, transparent 70%)",
        }}
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
            Get In Touch
          </motion.div>
          <motion.h2
            className="font-display text-fluid-5xl font-light text-warmwhite mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Begin Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Journey
            </span>
          </motion.h2>
          <motion.p
            className="text-muted text-sm"
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
            Our dedicated team is ready to help you discover your perfect luxury property. Reach out and let&apos;s craft something extraordinary together.
          </motion.p>
        </div>

        {/* Quick CTAs */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-4 p-6 border border-gold-900 hover:border-gold-500 group transition-all duration-400 hover:bg-gold-500/5"
          >
            <div className="w-10 h-10 border border-gold-800 flex items-center justify-center text-gold-600 group-hover:text-gold-400 group-hover:border-gold-500 transition-all duration-400 shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-700 mb-1">Call Now</p>
              <p className="text-warmwhite/80 text-sm font-light">{SITE_CONFIG.phone}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20MR%20Estates%20properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border border-gold-900 hover:border-gold-500 group transition-all duration-400 hover:bg-gold-500/5"
          >
            <div className="w-10 h-10 border border-gold-800 flex items-center justify-center text-gold-600 group-hover:text-gold-400 group-hover:border-gold-500 transition-all duration-400 shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <div>
              <p className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-700 mb-1">WhatsApp</p>
              <p className="text-warmwhite/80 text-sm font-light">Chat Directly</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-4 p-6 border border-gold-900 hover:border-gold-500 group transition-all duration-400 hover:bg-gold-500/5"
          >
            <div className="w-10 h-10 border border-gold-800 flex items-center justify-center text-gold-600 group-hover:text-gold-400 group-hover:border-gold-500 transition-all duration-400 shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-700 mb-1">Email Us</p>
              <p className="text-warmwhite/80 text-sm font-light">{SITE_CONFIG.email}</p>
            </div>
          </a>
        </motion.div>

        {/* Form + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="border border-gold-900 p-8 lg:p-10"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-fluid-2xl font-light text-warmwhite mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClass} bg-transparent`}
                    required
                  >
                    <option value="" className="bg-matteblack">Select interest</option>
                    <option value="residential-plots" className="bg-matteblack">Residential Plots</option>
                    <option value="villa-projects" className="bg-matteblack">Villa Projects</option>
                    <option value="investment" className="bg-matteblack">Investment Enquiry</option>
                    <option value="general" className="bg-matteblack">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-gold w-full justify-center relative overflow-hidden"
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
                {status === "sending" && <span>Sending...</span>}
                {status === "sent" && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Office hours */}
            <div className="border border-gold-900 p-8">
              <h4 className="section-label mb-6 text-[0.6rem]">Office Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gold-900/50">
                  <span className="text-muted text-sm">Monday – Friday</span>
                  <span className="text-gold-500 text-sm font-light">10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gold-900/50">
                  <span className="text-muted text-sm">Saturday</span>
                  <span className="text-gold-500 text-sm font-light">10:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted text-sm">Sunday</span>
                  <span className="text-muted text-sm font-light">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Main map */}
            <div className="border border-gold-900 overflow-hidden">
              <div className="bg-darkgray px-4 py-3 border-b border-gold-900 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                <span className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-gold-700">
                  {OFFICES[0].city} Office
                </span>
              </div>
              <iframe
                src={OFFICES[0].mapUrl}
                width="100%"
                height="260"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.75)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MR Estates office location"
              />
            </div>

            {/* Additional address info */}
            <div className="grid grid-cols-1 gap-4">
              {OFFICES.map((office) => (
                <a
                  key={office.id}
                  href={office.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 border border-gold-900 hover:border-gold-600 group transition-all duration-400"
                >
                  <svg className="w-4 h-4 text-gold-700 mt-0.5 shrink-0 group-hover:text-gold-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold-700 mb-1">{office.city}</p>
                    <p className="text-muted text-xs leading-relaxed">{office.address}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
