import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when full-screen menu is open & listen for Escape key
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#features" },
    { label: "EDUCATION", href: "#education" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "COMPETENCIES", href: "#features" },
    { label: "CONTACT", href: "mailto:work.adityatyagi@outlook.com" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white w-full transition-all duration-200 ${
          isScrolled ? "border-b-2 border-black shadow-sm" : ""
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="container mx-auto max-w-[1240px] flex items-center justify-between h-20 w-full">
            
            {/* Interactive Editorial Logo matching reference image */}
            <a
              href="#"
              className="flex items-center group cursor-pointer select-none py-1"
              aria-label="Aditya Tyagi Portfolio"
            >
              <div className="flex items-center">
                <span className="font-display font-black text-2xl sm:text-[28px] tracking-[-0.03em] text-black uppercase leading-none">
                  ADITYA
                </span>
                {/* Expanding surname on hover */}
                <span className="font-display font-black text-2xl sm:text-[28px] tracking-[-0.03em] text-black uppercase leading-none inline-block max-w-0 opacity-0 overflow-hidden group-hover:max-w-[140px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-out whitespace-nowrap">
                  TYAGI
                </span>
                {/* Signature highlight orange dot */}
                <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-highlight border-2 border-black ml-1.5 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-45" />
              </div>
            </a>

            {/* Right Side: Minimalist MENU Trigger matching reference image */}
            <div className="flex items-center">
              {/* Single MENU Button matching reference design */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-3 font-display font-black text-sm sm:text-base tracking-widest uppercase hover:text-highlight transition-colors group cursor-pointer py-1"
                aria-label="Open full screen navigation menu"
              >
                <span>MENU</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_black] group-hover:bg-highlight group-hover:border-black transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-black group-hover:bg-white transition-colors" />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL-SCREEN NAVIGATION OVERLAY (Screenshot 2 Match with Smooth Curtain Exit) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0.8 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0.95 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#0E0F12] text-white flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between w-full max-w-[1240px] mx-auto"
            >
              <div className="flex items-center">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase">
                  ADITYA
                </span>
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase ml-2">
                  TYAGI
                </span>
                <span className="inline-block w-3 h-3 bg-highlight border-2 border-white ml-1.5" />
              </div>

              {/* Circular CLOSE Button matching reference with 3D spin on tap */}
              <motion.button
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92, rotate: 180 }}
                exit={{ scale: 0, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsMenuOpen(false)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-highlight border-2 border-black text-black flex flex-col items-center justify-center font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] cursor-pointer"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <span className="text-base sm:text-lg leading-none font-sans font-bold">✕</span>
              </motion.button>
            </motion.div>

            {/* Massive Centered Navigation Links with Staggered Entrance & Exit */}
            <nav className="my-auto py-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 lg:gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30, transition: { duration: 0.2, delay: idx * 0.03 } }}
                  transition={{ delay: 0.08 * (idx + 1), duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tight uppercase text-white hover:text-highlight transition-colors duration-200 hover:scale-105 select-none cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Footer inside Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-[1240px] mx-auto border-t border-white/15 pt-6 text-sm text-gray-400 font-mono"
            >
              <div>
                <span>HULL, UNITED KINGDOM · 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:work.adityatyagi@outlook.com"
                  className="text-white hover:text-highlight transition-colors font-bold"
                >
                  work.adityatyagi@outlook.com
                </a>
                <span>·</span>
                <a
                  href="/Aditya_Tyagi_CV.pdf"
                  download="Aditya_Tyagi_CV.pdf"
                  className="text-highlight hover:underline font-bold"
                >
                  Download CV ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}