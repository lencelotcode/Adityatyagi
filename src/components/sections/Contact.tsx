import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [activeContact, setActiveContact] = useState<"none" | "email" | "phone">("none");
  const [copiedType, setCopiedType] = useState<"none" | "email" | "phone">("none");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType("none"), 2500);
  };

  const toggleContact = (type: "email" | "phone") => {
    setActiveContact((prev) => (prev === type ? "none" : type));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-12 w-full bg-white">
      <div className="container mx-auto max-w-[1152px]">
        
        {/* Fintech-Style Neo-Brutalist Contact Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-[#FF6B00] via-[#FF5800] to-[#E54600] border-3 border-black rounded-3xl p-8 sm:p-14 lg:p-20 shadow-[10px_12px_0px_0px_black] overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight to soften the gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-7 sm:gap-8">
            
            {/* Main Headline: Bold & Impactful */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white drop-shadow-[2px_3px_0px_rgba(0,0,0,0.9)]"
            >
              Let&apos;s Connect
            </motion.h2>

            {/* Approachable, Concise 1-2 Line Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="text-base sm:text-lg lg:text-xl text-black/95 font-medium leading-relaxed max-w-lg"
            >
              Open to part-time, operational, and professional opportunities. Let&apos;s discuss how I can contribute to your team.
            </motion.p>

            {/* CTAs: "Download CV" is Primary, Email and Phone reveal actionable details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full pt-2"
            >
              {/* PRIMARY CTA: Download CV (Highlighted) */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/Aditya_Tyagi_CV.pdf"
                download="Aditya_Tyagi_CV.pdf"
                className="bg-black text-white border-2 border-black h-13 sm:h-14 px-8 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider shadow-[4px_5px_0px_0px_white] hover:bg-white hover:text-black hover:shadow-[4px_5px_0px_0px_black] transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer select-none"
              >
                <span>Download CV</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.a>

              {/* SECONDARY ACTION: Email (Click to Reveal Address & Copy) */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleContact("email")}
                className={`border-2 border-black h-13 sm:h-14 px-7 rounded-full font-bold text-sm sm:text-base shadow-[3px_4px_0px_0px_black] transition-all inline-flex items-center justify-center gap-2 cursor-pointer select-none ${
                  activeContact === "email"
                    ? "bg-black text-white"
                    : "bg-white/95 text-black hover:bg-white"
                }`}
                title="Click to view and copy email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
                <span className="text-xs opacity-70">
                  {activeContact === "email" ? "▲" : "▼"}
                </span>
              </motion.button>

              {/* SECONDARY ACTION: Phone (Click to Reveal Number & Copy) */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleContact("phone")}
                className={`border-2 border-black h-13 sm:h-14 px-7 rounded-full font-bold text-sm sm:text-base shadow-[3px_4px_0px_0px_black] transition-all inline-flex items-center justify-center gap-2 cursor-pointer select-none ${
                  activeContact === "phone"
                    ? "bg-black text-white"
                    : "bg-white/95 text-black hover:bg-white"
                }`}
                title="Click to view and copy phone number"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Phone</span>
                <span className="text-xs opacity-70">
                  {activeContact === "phone" ? "▲" : "▼"}
                </span>
              </motion.button>
            </motion.div>

            {/* EXPANDABLE CONTACT CARD FOR EMAIL & PHONE WITH ULTRA-SMOOTH GPU ANIMATION */}
            <AnimatePresence mode="wait">
              {activeContact === "email" && (
                <motion.div
                  key="email-card"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="w-full max-w-lg bg-white border-2 border-black p-4 sm:p-5 rounded-2xl shadow-[6px_6px_0px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4 text-black mt-2"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-orange-100 border border-black flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-highlight">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block">Direct Email</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-black select-all">
                        work.adityatyagi@outlook.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => handleCopy("work.adityatyagi@outlook.com", "email")}
                      className={`font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] ${
                        copiedType === "email"
                          ? "bg-emerald-500 text-white"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      {copiedType === "email" ? "Copied! ✓" : "Copy"}
                    </button>
                    <a
                      href="mailto:work.adityatyagi@outlook.com"
                      className="bg-highlight text-white font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-black hover:bg-orange-600 transition-colors shadow-[2px_2px_0px_0px_black]"
                    >
                      Mail ↗
                    </a>
                  </div>
                </motion.div>
              )}

              {activeContact === "phone" && (
                <motion.div
                  key="phone-card"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="w-full max-w-lg bg-white border-2 border-black p-4 sm:p-5 rounded-2xl shadow-[6px_6px_0px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4 text-black mt-2"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-black flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-700">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block">Phone / WhatsApp</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-black select-all">
                        +44 7721547258
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => handleCopy("+447721547258", "phone")}
                      className={`font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] ${
                        copiedType === "phone"
                          ? "bg-emerald-500 text-white"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      {copiedType === "phone" ? "Copied! ✓" : "Copy"}
                    </button>
                    <a
                      href="https://wa.me/447721547258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 text-white font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-black hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_black]"
                    >
                      Chat ↗
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Minimal Bottom Info Bar: Location + Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 font-mono text-xs text-black/90 bg-white/75 backdrop-blur-sm border border-black/30 px-4 py-2 rounded-full mt-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
              <span>Hull, UK &middot; Available for Immediate Roles &middot; UK Visa Authorized</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
