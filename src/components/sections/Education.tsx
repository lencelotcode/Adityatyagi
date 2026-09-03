import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 px-6 lg:px-12 border-b-2 border-black bg-white">
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-block bg-[#FFE730] border-2 border-black px-3.5 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_black] mb-3">
              Academic Background
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black uppercase leading-none"
            >
              EDUCATION &amp; <span className="text-highlight">DEGREES</span>
            </motion.h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 max-w-sm uppercase font-semibold">
            // Postgraduate and undergraduate qualifications in accounting, finance, and business management.
          </p>
        </div>

        {/* 2 Education Degree Cards with Clear Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12 items-stretch">
          
          {/* Degree 1: MSc Accounting & Finance (PRIMARY / PROMINENT) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black p-7 sm:p-9 lg:p-10 rounded-2xl shadow-[8px_10px_0px_0px_black] flex flex-col justify-between gap-8 relative hover:-translate-y-1 transition-transform"
          >
            <div className="flex flex-col gap-5">
              {/* Header Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                  Postgraduate
                </span>
                <span className="font-mono text-xs font-bold text-highlight bg-orange-50/80 px-3 py-1 border border-orange-200 rounded-full">
                  Sep 2026 — Present
                </span>
              </div>

              {/* Title, University & Location */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight">
                  MSc Accounting &amp; Finance
                </h3>
                <h4 className="font-mono text-sm sm:text-base font-bold text-black/85">
                  University of Hull
                </h4>
                <div className="flex items-center gap-1.5 font-mono text-xs text-gray-600 font-semibold pt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-highlight shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Hull, United Kingdom</span>
                </div>

                {/* Focus Description */}
                <p className="text-xs sm:text-sm font-medium text-gray-700 pt-2 border-t border-black/5 mt-2 leading-relaxed">
                  <strong className="text-black font-semibold">Focus:</strong> Advanced financial analysis, corporate valuation, and econometric risk modeling.
                </p>
              </div>

              {/* Clean, Minimal Bullet List (No Heavy Box) */}
              <div className="flex flex-col gap-2.5 pt-2">
                <p className="font-mono text-[11px] font-bold uppercase text-gray-500 tracking-wider">
                  Key Academic Modules
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                    <span>Advanced Corporate Financial Management &amp; Valuation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                    <span>International Financial Reporting Standards (IFRS)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                    <span>Quantitative Econometric Modeling &amp; Data Analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 shrink-0" />
                    <span>Portfolio Management &amp; Financial Risk Sensitivity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="flex items-center justify-between border-t border-black/10 pt-4 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 bg-emerald-50 px-3 py-1 border border-emerald-300 rounded-full shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Candidate</span>
              </span>
              <span className="text-gray-500 font-semibold">UK Higher Education</span>
            </div>
          </motion.div>

          {/* Degree 2: BBA Marketing (SOFTENED WARM CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFFDF0] border-2 border-black p-7 sm:p-9 lg:p-10 rounded-2xl shadow-[6px_7px_0px_0px_black] flex flex-col justify-between gap-8 relative hover:-translate-y-1 transition-transform"
          >
            <div className="flex flex-col gap-5">
              {/* Header Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                  Undergraduate
                </span>
                <span className="font-mono text-xs font-bold text-black bg-white px-3 py-1 border border-black rounded-full shadow-[1px_1px_0px_0px_black]">
                  Mar 2021 — Oct 2024
                </span>
              </div>

              {/* Title, University & Location */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight">
                  Bachelor of Business Administration (BBA)
                </h3>
                <h4 className="font-mono text-sm sm:text-base font-bold text-black/85">
                  Bhagwan Mahavir University
                </h4>
                <div className="flex items-center gap-1.5 font-mono text-xs text-black/75 font-semibold pt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Surat, India &middot; Major: Marketing</span>
                </div>

                {/* Focus Description */}
                <p className="text-xs sm:text-sm font-medium text-gray-700 pt-2 border-t border-black/5 mt-2 leading-relaxed">
                  <strong className="text-black font-semibold">Focus:</strong> Business economics, managerial accounting, and commercial market dynamics.
                </p>
              </div>

              {/* Clean, Minimal Bullet List (No Heavy Box) */}
              <div className="flex flex-col gap-2.5 pt-2">
                <p className="font-mono text-[11px] font-bold uppercase text-gray-500 tracking-wider">
                  Key Academic Modules
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>Financial Accounting, Auditing Principles &amp; Cost Analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>Business Statistics, Quantitative Methods &amp; Market Research</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>Corporate Strategy, Organizational Planning &amp; Operations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>Brand Management &amp; Commercial Economics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="flex items-center justify-between border-t border-black/10 pt-4 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 font-bold text-gray-900 bg-white px-3 py-1 border border-black rounded-full shadow-[2px_2px_0px_0px_black]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Degree Conferred</span>
              </span>
              <span className="text-gray-600 font-semibold">Graduated Oct 2024</span>
            </div>
          </motion.div>

        </div>

        {/* Additional Information / Visa Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F8F7F4] border-2 border-black p-6 sm:p-8 rounded-2xl shadow-[5px_6px_0px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_0px_black]">
              <span className="text-lg font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-black tracking-tight">
                Additional Information &amp; Work Authorization
              </h4>
              <p className="font-mono text-xs sm:text-sm text-gray-700 pt-0.5">
                Currently on a UK Student Visa permitted to work up to 20 hours per week during term time and full-time during university holidays.
              </p>
            </div>
          </div>

          <a
            href="mailto:work.adityatyagi@outlook.com"
            className="bg-black text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 border-2 border-black rounded-full hover:bg-highlight hover:text-white transition-colors flex-shrink-0 shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px]"
          >
            Get In Touch ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}
