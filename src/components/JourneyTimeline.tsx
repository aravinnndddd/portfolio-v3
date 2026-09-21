import { useState } from "react";
import { journeyData } from "../data";

export default function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Campus Journey", "Work Experience"];

  const filteredItems =
    activeTab === "All"
      ? journeyData
      : journeyData.filter((item) => item.category === activeTab);

  return (
    <div id="journey" className="w-full border border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
      {/* Header Banner */}
      <div className="p-6 md:p-10 border-b border-black dark:border-neutral-800">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-neutral-600 dark:text-neutral-400 mb-3 tracking-widest">
              <span>[03.3]</span>
              <span className="w-px h-3 bg-black dark:bg-white inline-block" />
              <span>EXPERIENCE &amp; EDUCATION</span>
            </div>

            <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.88] text-black dark:text-white">
              MY JOURNEY &amp;<br />
              EXPERIENCE.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#7C8D69] text-black border-black dark:border-white"
                      : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-black dark:border-neutral-800 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dossier Ledger Rows */}
      <div className="divide-y divide-black dark:divide-neutral-800">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="p-6 md:p-8 grid grid-cols-12 gap-6 items-start hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
          >
            {/* Col 1: Number + Period + Category */}
            <div className="col-span-12 md:col-span-3 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500">
                <span>[0{index + 1}]</span>
                <span>//</span>
                <span className="text-black dark:text-white font-extrabold">{item.period}</span>
              </div>
              <div className="inline-block px-2.5 py-0.5 border border-black/25 dark:border-white/25 bg-white/60 dark:bg-black/40 font-mono text-[9px] uppercase tracking-wider font-bold text-neutral-700 dark:text-neutral-300">
                {item.category || "EXPERIENCE"}
              </div>
            </div>

            {/* Col 2: Title & Organization */}
            <div className="col-span-12 md:col-span-5 space-y-1">
              <h3 className="font-condensed text-2xl md:text-3xl font-black uppercase tracking-tight text-black dark:text-white leading-tight group-hover:underline">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-[#7C8D69] dark:text-[#9db387]">
                {item.organization}
              </p>
            </div>

            {/* Col 3: Description */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between space-y-3">
              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 font-bold uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>ACTIVE ROLE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
