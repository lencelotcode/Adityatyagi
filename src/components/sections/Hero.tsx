import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgIcon = "/images/dd6c36abbd704b03e1997b404542ec260273d97c.svg";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Lock body scroll when resume viewer is open & close on Escape key
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsResumeOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen]);

  return (
    <>
      <section className="relative border-b-2 border-black bg-white overflow-hidden">
        {/* Content Container with Responsive Grid Layout */}
        <div className="container mx-auto px-6 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-20 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Credential Badge, Summary & CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
              
              {/* Credential Badge */}
              <motion.div
                className="flex items-start gap-0 h-7 sm:h-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                  <img alt="" className="w-full h-full" src={imgIcon} />
                </div>
                <div className="bg-white border-2 border-black px-3 py-1 h-7 sm:h-8 flex items-center shadow-[2px_2px_0px_0px_black]">
                  <p className="text-xs sm:text-sm font-bold text-black leading-tight font-mono tracking-wide">
                    <span className="hidden sm:inline">MSc Accounting &amp; Finance &middot; University of Hull</span>
                    <span className="sm:hidden">MSc Finance &middot; Univ. of Hull</span>
                  </p>
                </div>
              </motion.div>

              {/* Bold 3-Line Impact Headline */}
              <div className="flex flex-col font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] sm:leading-[0.95] tracking-[-1.6px] sm:tracking-[-2px] lg:tracking-[-2.4px] text-black uppercase">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Audit It.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Balance It.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-highlight"
                >
                  Deliver It.
                </motion.p>
              </div>

              {/* Concise 1-2 line Professional Summary */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 max-w-xl font-normal"
              >
                Finance professional pursuing MSc Accounting &amp; Finance at the <strong>University of Hull</strong>, specializing in precision financial reporting, variance modeling, and automated ledger analytics.
              </motion.p>

              {/* CTA Buttons: View CV (Modal) & Let's Connect */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-1"
              >
                {/* Primary Action: View CV */}
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="bg-highlight text-white border-2 border-black h-12 sm:h-14 lg:h-16 px-8 sm:px-10 rounded-full text-base lg:text-lg font-bold shadow-[4px_6px_0px_0px_black] sm:shadow-[6px_8px_0px_0px_black] hover:shadow-[3px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-200 ease-out inline-flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>View CV</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                {/* Secondary Action: Let's Connect */}
                <a
                  href="#contact"
                  className="bg-white text-black border-2 border-black h-12 sm:h-14 lg:h-16 px-8 sm:px-10 rounded-full text-base lg:text-lg font-bold shadow-[4px_6px_0px_0px_black] hover:bg-gray-100 hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 ease-out inline-flex items-center justify-center"
                >
                  Let&apos;s Connect
                </a>
              </motion.div>
            </div>

            {/* Right Column: Clean & Minimal Current Availability Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            >
              <div className="bg-white border-2 border-black rounded-3xl p-7 sm:p-9 shadow-[8px_10px_0px_0px_black] w-full max-w-[440px] flex flex-col gap-6 transition-all duration-200">
                
                {/* Title */}
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
                    CURRENT AVAILABILITY
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Main Status */}
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-full w-fit">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs font-bold text-emerald-800 tracking-wide">
                      Open to Opportunities
                    </span>
                  </div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                    Open to Part-Time &amp; Flexible Roles
                  </h4>
                </div>

                {/* Content Details */}
                <div className="flex flex-col gap-3.5 pt-1 text-sm sm:text-base font-semibold text-gray-900">
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">📍</span>
                    <span>Hull, United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">🛂</span>
                    <span>UK Student Visa (Up to 20 hrs/wk)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">💼</span>
                    <span>On-site &amp; Remote &middot; Immediate Start</span>
                  </div>
                </div>

                {/* Footer Line */}
                <div className="border-t border-black/10 pt-4">
                  <p className="font-mono text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <span>Hull, UK &middot; GMT/BST</span>
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Resume Preview Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border-2 sm:border-3 border-black w-full max-w-[960px] h-[90vh] rounded-2xl shadow-[8px_10px_0px_0px_black] sm:shadow-[12px_14px_0px_0px_black] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-black bg-[#F4F2EC]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-display font-bold text-sm sm:text-base tracking-tight text-black">
                    Aditya Tyagi &mdash; Curriculum Vitae
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/Aditya_Tyagi_CV.pdf"
                    download="Aditya_Tyagi_CV.pdf"
                    className="inline-flex items-center gap-2 bg-highlight text-white border-2 border-black px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_0px_black] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    <span>Download PDF</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>

                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-black bg-white flex items-center justify-center font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-colors cursor-pointer"
                    aria-label="Close resume viewer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Embedded Document View */}
              <div className="flex-1 w-full bg-gray-100 p-2 sm:p-4 overflow-hidden flex flex-col">
                <iframe
                  src="/Aditya_Tyagi_CV.pdf#toolbar=0"
                  className="w-full h-full rounded-lg border border-black/20 bg-white"
                  title="Aditya Tyagi Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
