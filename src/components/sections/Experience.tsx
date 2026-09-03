import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [stickyMode, setStickyMode] = useState<"static" | "fixed" | "bottom">("static");
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(0);
  const [bottomTop, setBottomTop] = useState(0);
  const [leftContentHeight, setLeftContentHeight] = useState(0);
  const [leftColMinHeight, setLeftColMinHeight] = useState<number | null>(null);

  const HEADER_HEIGHT = 80;

  useEffect(() => {
    const handleScrollAndResize = () => {
      if (window.innerWidth < 1024) {
        setStickyMode("static");
        setLeftColMinHeight(null);
        return;
      }

      if (!leftColRef.current || !leftContentRef.current || !rightColRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset || 0;

      const leftColRect = leftColRef.current.getBoundingClientRect();
      const leftContentRect = leftContentRef.current.getBoundingClientRect();
      const rightColRect = rightColRef.current.getBoundingClientRect();

      const leftColTop = scrollY + leftColRect.top;
      const rightColTop = scrollY + rightColRect.top;
      const rightColHeight = rightColRef.current.offsetHeight;

      const contentHeight = leftContentRef.current.offsetHeight;
      setLeftContentHeight(contentHeight);
      setLeftColMinHeight(rightColHeight);

      const startY = leftColTop - HEADER_HEIGHT;
      const endY = rightColTop + rightColHeight - contentHeight - HEADER_HEIGHT - 32;

      if (scrollY < startY) {
        setStickyMode("static");
        return;
      }

      if (scrollY >= startY && scrollY < endY) {
        setStickyMode("fixed");
        setFixedLeft(leftContentRect.left);
        setFixedWidth(leftContentRect.width);
        return;
      }

      if (scrollY >= endY) {
        setStickyMode("bottom");
        setBottomTop(rightColHeight - contentHeight - 32);
        return;
      }
    };

    handleScrollAndResize();
    window.addEventListener("scroll", handleScrollAndResize, { passive: true });
    window.addEventListener("resize", handleScrollAndResize);

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  const skillsList = [
    "Billing & Invoicing",
    "Ledger Reconciliation",
    "Financial Operations",
    "Expense Governance",
    "Discrepancy Resolution",
    "Cross-Team Reporting",
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 px-6 lg:px-12 border-b-2 border-black bg-white">
      <div className="container mx-auto max-w-[1240px]" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Sticky Summary & Skills */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 relative"
            style={leftColMinHeight ? { minHeight: `${leftColMinHeight}px` } : undefined}
          >
            <div
              ref={leftContentRef}
              className="flex flex-col gap-6"
              style={
                stickyMode === "fixed"
                  ? {
                      position: "fixed",
                      top: HEADER_HEIGHT + 32,
                      left: fixedLeft,
                      width: fixedWidth,
                      zIndex: 10,
                    }
                  : stickyMode === "bottom"
                    ? {
                        position: "absolute",
                        top: bottomTop,
                        left: 0,
                        right: 0,
                      }
                    : undefined
              }
            >
              <div className="inline-block bg-[#FFE730] border-2 border-black px-3.5 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_black] w-fit">
                Professional History
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-black uppercase mb-0"
              >
                WORK
                <br />
                <span className="text-highlight">EXPERIENCE</span>
              </motion.h2>

              {/* Concise 1-2 line statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium max-w-md"
              >
                Hands-on background in financial operations, transactional reconciliation, and corporate accounting across hospitality and commercial trading.
              </motion.p>

              {/* Skills Tags with Tactile Hover Effects */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold text-black bg-white border border-black px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_0px_black] hover:bg-highlight hover:text-white hover:border-black hover:scale-105 hover:shadow-[3px_3px_0px_0px_black] transition-all duration-200 cursor-default select-none inline-block"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Cards with Clean Hierarchy */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Primary Role: Courtyard By Marriott (Clean Title Case & Realistic Metrics) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black p-7 sm:p-9 rounded-2xl shadow-[8px_10px_0px_0px_black] flex flex-col gap-6 relative hover:-translate-y-1 transition-transform"
            >
              {/* Header: Role Title in Title Case + Date Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                    Finance Trainee
                  </h3>
                  <div className="flex items-center gap-2 pt-1 font-mono text-xs">
                    <span className="font-bold text-gray-900">Courtyard by Marriott</span>
                    <span className="text-gray-400 font-bold">&middot;</span>
                    <div className="inline-flex items-center gap-1 text-gray-600 font-semibold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-highlight">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Surat, India</span>
                    </div>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                  Nov 2024 — Jul 2025
                </span>
              </div>

              {/* Clean, Minimal Bullet List with Proper Spacing & Realistic Impact */}
              <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-800">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                  <span>Managed daily billing, invoicing, and transactional ledger entries, maintaining accurate financial records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                  <span>Streamlined multi-department reporting workflows, reducing invoice reconciliation turnaround time by ~15%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                  <span>Audited high-volume guest and vendor accounts, promptly resolving billing discrepancies and ledger offsets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                  <span>Monitored operating expenditures to ensure full compliance with corporate financial governance policies.</span>
                </li>
              </ul>
            </motion.div>

            {/* Secondary Role: Shree Ambaji Traders (Softened Subtle Neutral Tone) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FAF9F6] border-2 border-black/80 p-7 sm:p-9 rounded-2xl shadow-[5px_6px_0px_0px_black] flex flex-col gap-6 relative hover:-translate-y-1 transition-transform"
            >
              {/* Header: Role Title in Title Case + Date Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                    Finance Intern
                  </h3>
                  <div className="flex items-center gap-2 pt-1 font-mono text-xs">
                    <span className="font-bold text-gray-900">Shree Ambaji Traders</span>
                    <span className="text-gray-400 font-bold">&middot;</span>
                    <div className="inline-flex items-center gap-1 text-gray-600 font-semibold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Surat, India</span>
                    </div>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold bg-white text-black px-3 py-1 border border-black rounded-full shadow-[1px_1px_0px_0px_black]">
                  Jun 2023 — Sep 2023
                </span>
              </div>

              {/* Clean, Minimal Bullet List with Proper Spacing */}
              <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-800">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                  <span>Structured commercial ledger datasets, improving transaction entry efficiency and routine bookkeeping speed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                  <span>Audited trade invoicing and vendor statements to support timely accounts payable disbursements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                  <span>Conducted regular balance reconciliations, preserving data integrity across wholesale customer accounts.</span>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
