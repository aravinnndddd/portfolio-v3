import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { journeyData } from "../data";

export default function JourneyTimeline() {
  return (
    <section
      id="journey"
      className="py-20 md:py-28 bg-neutral-100 dark:bg-neutral-900/60 border-t border-b border-neutral-200 dark:border-neutral-800 -mx-6 px-6 md:-mx-12 md:px-12 overflow-hidden text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 mb-16">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-none" />
            Trajectory
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-outline">Journey</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Split Center Indicator Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-800 transform -translate-x-1/2" />
          {/* Direct Mobile Side Line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-800" />

          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2 bg-neutral-900 dark:bg-white"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <div className="space-y-16">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              const sideClass = isEven ? "md:text-right md:pr-12" : "md:pl-12";
              const alignContainer = isEven
                ? "md:flex-row"
                : "md:flex-row-reverse";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-stretch ${alignContainer}`}
                >
                  {/* Info block based on grid order */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-end justify-center" : "items-start justify-center"} ${sideClass}`}
                  >
                    <div
                      className={`text-left ${isEven ? "md:text-right" : "text-left"} py-2`}
                    >
                      <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest block font-semibold">
                        {item.period}
                      </span>

                      <h3 className="font-display text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-white mt-1">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-neutral-600 dark:text-neutral-300 font-semibold mt-1">
                        {item.organization}
                      </p>

                      <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Sharp Square Marker anchor on timeline */}
                  <div
                    className="absolute left-[-40px] md:left-1/2 z-10 block"
                    style={{ transform: "translateX(-50%)", top: "24px" }}
                  >
                    <span className="flex h-3.5 w-3.5 rounded-none bg-neutral-900 dark:bg-white border-2 border-neutral-300 dark:border-neutral-700" />
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical milestone footer line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-none text-[10px] font-mono uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-neutral-900 dark:text-white" />
            <span>
              Currently based in India, accepting global agency partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
