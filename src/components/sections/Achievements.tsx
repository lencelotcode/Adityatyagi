import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      number: "01",
      tag: "Inter-School Competition",
      title: "Inter-School Football Representative",
      description:
        "Selected to represent school across competitive inter-school football tournaments, executing high-stakes tactical discipline, decisive communication, and collaborative team play under pressure.",
      trait: "Tactical Discipline · Strategic Teamwork",
      accent: "bg-white",
    },
    {
      number: "02",
      tag: "Championship Fixtures",
      title: "House-Level Football Competitor",
      description:
        "Competed rigorously in house-level championship tournaments, driving squad cohesion, peak physical stamina, and mutual accountability across high-intensity matches.",
      trait: "Team Cohesion · Resilience Under Pressure",
      accent: "bg-[#FFE730]",
    },
    {
      number: "03",
      tag: "Performance Ethos",
      title: "Athletic Discipline & Competitive Mindset",
      description:
        "Translated the focus, perseverance, and strategic instincts developed on the pitch into professional finance operations—delivering relentless accuracy, integrity, and composure.",
      trait: "Relentless Focus · Composure",
      accent: "bg-white",
    },
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32 px-6 lg:px-12 border-b-2 border-black bg-[#F8F7F4]">
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-highlight text-white border-2 border-black px-3.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_black] mb-3">
              Leadership &amp; Discipline
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black uppercase leading-none"
            >
              ATHLETIC DRIVE &amp; <span className="text-highlight">MINDSET</span>
            </motion.h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 max-w-sm uppercase font-semibold">
            // Fostering teamwork, tactical discipline, and competitive resilience on and off the field.
          </p>
        </div>

        {/* 3 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`${item.accent} border-2 border-black p-6 sm:p-8 rounded-2xl shadow-[6px_8px_0px_0px_black] flex flex-col justify-between gap-6 hover:translate-y-[-2px] hover:shadow-[8px_10px_0px_0px_black] transition-all`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-black/15 pb-3">
                  <span className="font-mono text-xs font-bold tracking-wider bg-black text-white px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <span className="font-display font-black text-xl text-black">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-black tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-black/15 pt-3 flex items-center gap-2 font-mono text-xs font-bold text-black">
                <span className="w-2 h-2 rounded-full bg-highlight" />
                <span>{item.trait}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
