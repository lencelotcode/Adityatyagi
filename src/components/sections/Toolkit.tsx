import { motion } from "framer-motion";

interface CredentialItem {
  group: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
}

const credentials: CredentialItem[] = [
  {
    group: "Core Finance",
    name: "Financial Operations",
    tag: "Ledger Auditing · Invoicing",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h6" />
      </svg>
    ),
  },
  {
    group: "Core Finance",
    name: "Financial Analysis",
    tag: "Variance Modeling · Forecasting",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    group: "Data & Analytics",
    name: "Advanced Excel",
    tag: "Financial Modeling · Data Structuring",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
  },
  {
    group: "Data & Analytics",
    name: "Power BI",
    tag: "Data Visualization · Dashboards",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    group: "Data & Analytics",
    name: "SQL",
    tag: "Data Querying · Reconciliation",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    group: "Systems & Platforms",
    name: "SAP ERP",
    tag: "Transaction Processing · Auditing",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
];

export default function Toolkit() {
  return (
    <section className="bg-white py-14 lg:py-20 px-6 lg:px-12 border-b-2 border-black">
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Eyebrow & Meaningful Capabilities Statement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-black/10">
          <div>
            <p className="font-mono text-xs uppercase font-bold tracking-widest text-gray-500 mb-0.5">
              // Core Capabilities &amp; Technical Toolkit
            </p>
            <p className="font-mono text-xs text-gray-700 font-semibold">
              Specialized in financial operations, quantitative modeling, and data-driven decision support.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase font-bold text-black bg-[#FFE730] px-3 py-1 border border-black rounded-sm shadow-[1.5px_1.5px_0px_0px_black] self-start sm:self-auto shrink-0">
            Verified Expertise
          </span>
        </div>

        {/* 6-Column Interconnected Neo-Brutalist Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 bg-black border-2 border-black shadow-[4px_4px_0px_0px_black]">
          {credentials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-white border border-black p-4 sm:p-5 flex flex-col justify-between min-h-[120px] group hover:bg-[#FFE730] transition-colors duration-200 cursor-default select-none"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-gray-500 group-hover:text-black transition-colors">
                  {item.group}
                </span>
                <span className="text-gray-400 group-hover:text-black transition-colors group-hover:scale-110 transform">
                  {item.icon}
                </span>
              </div>

              <div className="pt-3">
                <h4 className="font-display font-bold text-base sm:text-lg tracking-tight text-black leading-tight group-hover:translate-x-0.5 transition-transform">
                  {item.name}
                </h4>
                <p className="font-mono text-[10px] text-gray-600 font-semibold tracking-tight pt-1 group-hover:text-black transition-colors leading-snug">
                  {item.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
