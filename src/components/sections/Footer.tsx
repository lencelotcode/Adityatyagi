import { motion } from "framer-motion";

const imgSparklePink = "/images/d1900bb633828b5f083acf134975649dfb4dc629.svg";

const footerLinks = [
  { label: "Competencies", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  {
    label: "LinkedIn",
    tooltip: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Email me",
    tooltip: "Email me",
    href: "mailto:work.adityatyagi@outlook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Call / WhatsApp",
    tooltip: "Call / WhatsApp",
    href: "https://wa.me/447721547258",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Download CV",
    tooltip: "Download CV",
    href: "/Aditya_Tyagi_CV.pdf",
    download: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-black pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-6 lg:px-12 text-white">
      <div className="container mx-auto max-w-[1152px]">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-16">
            
            {/* Left Column: Rotating Badge, 2-line Description & Tooltip Socials */}
            <div className="flex flex-col gap-6 max-w-full md:max-w-[460px] relative pt-16 sm:pt-20">
              
              {/* Rotating Badge */}
              <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24">
                <motion.svg
                  className="absolute -left-[32px] -top-[32px] w-[96px] h-[96px]"
                  viewBox="0 0 132 132"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.5 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <defs>
                    <path
                      id="footerCirclePath"
                      d="M 66, 66 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                    />
                  </defs>
                  <text className="fill-[#F9D4F4] font-mono text-[8px] uppercase tracking-[0.275em] font-bold">
                    <textPath href="#footerCirclePath" startOffset="0%">
                      FINANCE • RECONCILE • REPORT • AUDIT •
                    </textPath>
                  </text>
                </motion.svg>

                <motion.div
                  className="absolute top-[16px] left-[16px] -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 z-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <img alt="" className="w-full h-full" src={imgSparklePink} />
                </motion.div>
              </div>

              {/* Exact Improved 1-2 Line Description */}
              <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
                Finance-focused professional with experience in billing, invoicing, and ledger management.
                <br className="hidden sm:inline" /> Currently pursuing MSc Finance at the University of Hull.
              </p>

              {/* Social Icons Row with Hover Tooltips & Micro-interactions */}
              <div className="flex gap-4 items-center pt-2">
                {socialIcons.map((item) => (
                  <div key={item.label} className="relative group inline-flex items-center justify-center">
                    <a
                      href={item.href}
                      download={item.download ? "Aditya_Tyagi_CV.pdf" : undefined}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className="text-[#F9D4F4] hover:text-highlight transition-all duration-200 p-1.5 rounded-md hover:scale-115 transform inline-block cursor-pointer"
                    >
                      {item.icon}
                    </a>

                    {/* Floating Tooltip */}
                    <span className="absolute -top-8 px-2.5 py-1 bg-white text-black font-mono text-[10px] font-bold rounded shadow-[2px_2px_0px_0px_black] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
                      {item.tooltip}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Refined Navigation Menu */}
            <div className="flex flex-col gap-4 font-mono text-sm sm:text-base md:text-right">
              <span className="text-xs uppercase font-bold text-[#FFE730] tracking-widest">
                // QUICK NAVIGATION
              </span>
              <div className="flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:text-highlight transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Subtle UK Opportunities Line */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wide">Open to opportunities across the UK</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">Hull, United Kingdom</span>
          </div>

          {/* Enhanced Massive Display Text: ADITYA */}
          <div className="w-full pt-4 sm:pt-6 pb-2 overflow-hidden border-t border-white/15">
            <h1 className="font-display font-black text-[18vw] leading-none tracking-[-0.04em] uppercase text-center select-none bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent hover:from-highlight hover:via-orange-400 hover:to-orange-500 transition-all duration-300 cursor-default">
              ADITYA
            </h1>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-xs text-gray-400">
            <p>© 2026 Aditya Tyagi. All rights reserved.</p>
            <p className="text-gray-500">
              Hull, UK &middot; HU6 7EL &middot; work.adityatyagi@outlook.com
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
