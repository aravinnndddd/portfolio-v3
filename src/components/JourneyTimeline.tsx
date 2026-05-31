import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Pin, CheckCircle } from "lucide-react";
import { journeyData } from "../data";

export default function JourneyTimeline() {
  const [activeItem, setActiveItem] = useState<string | null>("freelancer");

  return (
    <section
      id="journey"
      className="py-20 md:py-28 bg-neutral-100 border-t border-b border-neutral-200 -mx-6 px-6 md:-mx-12 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 mb-16">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            Trajectory
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-outline">Journey</span>
          </h2>
          <p className="font-sans text-xs text-neutral-500 max-w-sm">
            Click on any trajectory point below to inspect detailed success
            milestones and project scopes.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Split Center Indicator Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 transform -translate-x-1/2" />
          {/* Direct Mobile Side Line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-16">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isOpen = activeItem === item.id;

              // Custom placements depending on position
              const sideClass = isEven ? "md:text-right md:pr-12" : "md:pl-12";
              const alignContainer = isEven
                ? "md:flex-row"
                : "md:flex-row-reverse";

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${alignContainer}`}
                >
                  {/* Left or Right info card based on grid order */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-end justify-center" : "items-start justify-center"} ${sideClass}`}
                  >
                    <button
                      onClick={() => setActiveItem(isOpen ? null : item.id)}
                      className={`text-left ${isEven ? "md:text-right" : "text-left"} cursor-pointer group mt-2 transition-all p-4 border rounded ${
                        isOpen
                          ? "border-neutral-400 bg-white shadow-sm"
                          : "border-transparent hover:bg-neutral-50"
                      }`}
                      aria-label={`Show key milestones for ${item.title}`}
                    >
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block font-semibold">
                        {item.period}
                      </span>

                      <h3 className="font-display text-xl md:text-2xl font-extrabold text-black mt-1 group-hover:underline">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-[#5e5e5e] font-semibold mt-1">
                        {item.organization}
                      </p>

                      <p className="font-sans text-xs text-[#5e5e5e] mt-1.5 leading-relaxed font-light">
                        {item.description}
                      </p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-dashed border-neutral-200"
                          >
                            <span className="font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">
                              SUCCESS TARGET ACHIEVED
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>

                  {/* Bullet Marker anchor on timeline */}
                  <button
                    onClick={() => setActiveItem(isOpen ? null : item.id)}
                    className="absolute left-[-40px] md:left-1/2 hover:scale-125 transition-transform duration-300 z-10 block cursor-pointer"
                    style={{ transform: "translateX(-50%)", top: "24px" }}
                    aria-label="Select trajectory node"
                  >
                    <span
                      className={`flex h-4 w-4 rounded-full border-4 ${
                        isOpen
                          ? "bg-black border-neutral-300 scale-110"
                          : "bg-[#e5e5e5] border-white"
                      }`}
                    />
                  </button>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical milestone footer line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-200 bg-white rounded-full text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-black" />
            <span>
              Currently based in India, accepting global agency partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
