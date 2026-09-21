import { ArrowUpRight } from "lucide-react";

interface FilterBarProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
  onCtaClick?: () => void;
}

export default function FilterBar({
  activeFilter = "FEATURED WORK",
  onFilterChange,
  onCtaClick,
}: FilterBarProps) {
  const tabs = ["FEATURED WORK", "OPEN SOURCE", "EVENTS", "THOUGHTS"];

  return (
    <div className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
      {/* Mobile Filter Bar (Matches Image 1 Left) */}
      <div className="flex lg:hidden items-center justify-between px-6 py-3 border-black dark:border-neutral-800">
        <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-800 dark:text-neutral-300">
          TECH &nbsp;/&nbsp; PEOPLE &nbsp;/&nbsp; PRODUCTS
        </div>

        {/* Barcode Graphic */}
        <div className="flex items-center gap-0.5 h-4 opacity-80" aria-hidden="true">
          <span className="w-0.5 h-4 bg-black dark:bg-white" />
          <span className="w-1 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-0.5 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-1.5 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-0.5 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-0.5 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-1 h-4 bg-black dark:bg-white ml-0.5" />
          <span className="w-0.5 h-4 bg-black dark:bg-white ml-0.5" />
        </div>
      </div>

      {/* Desktop Filter Bar (Matches Image 2 Desktop) */}
      <div className="hidden lg:grid grid-cols-12 items-stretch">
        {/* Left Filter Tabs */}
        <div className="col-span-7 flex items-stretch border-r border-black dark:border-neutral-800">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => onFilterChange?.(tab)}
                className={`px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold border-r border-black dark:border-neutral-800 transition-colors cursor-pointer ${
                  isActive
                    ? "text-black dark:text-white bg-black/5 dark:bg-white/5"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Right Execution Banner */}
        <div
          onClick={onCtaClick}
          className="col-span-5 flex items-center justify-between px-6 py-3.5 bg-[#ECEAE5] dark:bg-[#121212] group cursor-pointer"
        >
          <span className="font-condensed text-xl font-black uppercase tracking-tight text-black dark:text-white">
            GOOD IDEAS DESERVE GREAT EXECUTION.
          </span>
          <div className="flex items-center justify-center h-8 w-8 bg-black text-white dark:bg-white dark:text-black transition-transform group-hover:scale-105">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
