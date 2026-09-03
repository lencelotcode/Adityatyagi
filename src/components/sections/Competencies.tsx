import { motion } from "framer-motion";

export default function Competencies() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32 px-6 lg:px-12 border-b-2 border-black">
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-[#FFE730] border-2 border-black px-3.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_black] mb-3">
              Core Pillars
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black uppercase leading-none"
            >
              FINANCIAL <span className="text-highlight">COMPETENCIES</span>
            </motion.h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 max-w-sm uppercase font-semibold">
            // Bridging precision accounting operations with forward-looking data analytics.
          </p>
        </div>

        {/* Neo-brutalist Bento Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden bg-black border-2 border-black shadow-[6px_8px_0px_0px_black]">
            
            {/* Card 1: Ledger Reconciliation & Auditing (Col 7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 border border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 bg-white rounded-bl-[28px] rounded-br-[28px] md:rounded-bl-none md:rounded-br-[28px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-highlight border-2 border-black flex items-center justify-center font-display font-black text-white shadow-[2px_2px_0px_0px_black]">
                  01
                </div>
                <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-800 border border-black px-3 py-1 rounded-full">
                  100% Reconciled
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                  Ledger Reconciliation &amp; Auditing
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  Executed front-office ledger verification, transactional auditing, and credit card settlements at <strong>Courtyard by Marriott</strong>. Maintained strict audit trails and zero unresolved discrepancies across daily banking sheets.
                </p>
              </div>

              {/* Visual Mini Balance Sheet Widget */}
              <div className="bg-[#F8F7F4] border-2 border-black p-4 rounded-xl font-mono text-xs flex flex-col gap-2 shadow-[2px_2px_0px_0px_black]">
                <div className="flex justify-between text-gray-600 border-b border-black/10 pb-1">
                  <span>Ledger Batch #4092</span>
                  <span className="text-black font-bold">Status: Audited</span>
                </div>
                <div className="flex justify-between items-center font-bold text-sm">
                  <span>General Ledger vs. PMS</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                    Δ £0.00 Balanced
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Variance & Budget Modeling (Col 5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 border border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 bg-white rounded-[28px] md:rounded-none md:rounded-bl-[28px] -mt-[1px] md:mt-0 md:-ml-[1px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#FFE730] border-2 border-black flex items-center justify-center font-display font-black text-black shadow-[2px_2px_0px_0px_black]">
                  02
                </div>
                <span className="font-mono text-xs font-bold text-gray-700 bg-gray-100 border border-gray-300 px-2.5 py-0.5 rounded-full">
                  Planning
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                  Variance &amp; Budget Modeling
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  Evaluating quarterly budget performance against actual operational expenditure. Identifying cost overruns and building dynamic scenario models to support strategic decision-making.
                </p>
              </div>

              <div className="bg-[#FFE730]/30 border-2 border-black p-3.5 rounded-xl font-mono text-xs flex items-center justify-between shadow-[2px_2px_0px_0px_black]">
                <span>Q3 Forecast Accuracy</span>
                <span className="font-bold text-black bg-white px-2 py-1 border border-black rounded">
                  98.4% On-Target
                </span>
              </div>
            </motion.div>

            {/* Card 3: Invoicing & Operations (Col 5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 border border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 bg-white rounded-[28px] md:rounded-none md:rounded-tr-[28px] -mt-[1px] md:-mt-[1px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#F9D4F4] border-2 border-black flex items-center justify-center font-display font-black text-black shadow-[2px_2px_0px_0px_black]">
                  03
                </div>
                <span className="font-mono text-xs font-bold text-gray-700 bg-gray-100 border border-gray-300 px-2.5 py-0.5 rounded-full">
                  Operations
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                  Billing &amp; Financial Operations
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  Processing high-volume corporate invoicing, overseeing accounts receivable/payable, and enforcing strict compliance standards across multi-departmental workflows.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold text-black">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>Zero Billing Disputes · Prompt AR Turnover</span>
              </div>
            </motion.div>

            {/* Card 4: Power BI & Analytics (Col 7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 border border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 bg-white rounded-tl-[28px] rounded-tr-[28px] md:rounded-tr-none md:rounded-tl-[28px] -mt-[1px] md:-mt-[1px] md:-ml-[1px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#B8FF00] border-2 border-black flex items-center justify-center font-display font-black text-black shadow-[2px_2px_0px_0px_black]">
                  04
                </div>
                <span className="font-mono text-xs font-bold bg-black text-white px-2.5 py-1 rounded-full">
                  DAX &amp; SQL
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                  Power BI &amp; Financial Analytics
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  Transforming relational financial databases into automated, interactive executive dashboards. Utilizing advanced Excel macros, Power Query, and DAX measures to deliver real-time financial transparency.
                </p>
              </div>

              {/* Dynamic KPI Bar Indicators */}
              <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[2px_2px_0px_0px_black] flex flex-col gap-2 font-mono text-xs">
                <div className="flex justify-between font-bold">
                  <span>KPI: Operational Margin</span>
                  <span className="text-highlight">+14.2% YoY</span>
                </div>
                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden border border-black">
                  <div className="bg-highlight h-full w-[78%]" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
