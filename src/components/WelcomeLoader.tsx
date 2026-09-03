import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeLoaderProps {
  onLoaded?: () => void;
}

export default function WelcomeLoader({ onLoaded }: WelcomeLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during loader
    document.body.style.overflow = "hidden";

    // 1. Fade out the text & line slightly before the curtain lifts
    const textTimer = setTimeout(() => {
      setContentVisible(false);
    }, 950);

    // 2. Start curtain lift & trigger page reveal
    const curtainTimer = setTimeout(() => {
      setLoading(false);
      onLoaded?.();
      document.body.style.overflow = "auto";
    }, 1150);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(curtainTimer);
      document.body.style.overflow = "auto";
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="welcome-curtain"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 select-none pointer-events-auto"
        >
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                key="welcome-text"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2.5 text-center"
              >
                {/* ADITYA. */}
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
                  ADITYA<span className="text-highlight">.</span>
                </h1>

                {/* Loading Portfolio */}
                <p className="font-mono text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
                  Loading Portfolio
                </p>

                {/* [thin animated line] */}
                <div className="w-36 sm:w-44 h-[2px] bg-white/15 rounded-full overflow-hidden mt-3 relative">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                    className="w-1/2 h-full bg-highlight rounded-full absolute"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
