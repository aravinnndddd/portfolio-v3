import { Code, Terminal, Database, Globe, ArrowUpRight } from "lucide-react";
import { skillsData } from "../data";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    const iconClass = "h-4 w-4 text-black dark:text-white";
    switch (iconName) {
      case "code":
        return <Code className={iconClass} />;
      case "terminal":
        return <Terminal className={iconClass} />;
      case "database":
        return <Database className={iconClass} />;
      case "globe":
        return <Globe className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <div id="skills" className="w-full border border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
      {/* Header Banner */}
      <div className="p-6 md:p-10 border-b border-black dark:border-neutral-800">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-neutral-600 dark:text-neutral-400 mb-3 tracking-widest">
              <span>[03.1]</span>
              <span className="w-px h-3 bg-black dark:bg-white inline-block" />
              <span>SKILLS &amp; TECHNOLOGIES</span>
            </div>

            <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.88] text-black dark:text-white">
              SKILLS &amp;<br />
              EXPERTISE.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I build fast, responsive web applications using React, Next.js, and TypeScript, focused
              on clean code, high performance, and search engine optimization (SEO).
            </p>
          </div>
        </div>
      </div>

      {/* 4-Column Modular Swiss Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-black dark:border-neutral-800">
        {skillsData.map((category, index) => {
          const isLastCol = index === skillsData.length - 1;
          const isRightCol2 = index % 2 === 1;

          return (
            <div
              key={category.title}
              className={`p-6 xl:p-8 flex flex-col justify-between border-b lg:border-b-0 border-black dark:border-neutral-800 hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                !isLastCol ? "lg:border-r" : ""
              } ${!isRightCol2 ? "sm:border-r lg:border-r-0" : ""}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 mb-5 pb-3 border-b border-black/15 dark:border-white/15">
                  <div className="flex items-center gap-2">
                    <div className="p-1 border border-black dark:border-white">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <span className="text-black dark:text-white uppercase tracking-wider font-extrabold">
                      {category.title}
                    </span>
                  </div>
                  <span>[0{index + 1}]</span>
                </div>

                {/* Skills Ledger */}
                <div className="space-y-2 mt-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-black/10 dark:border-white/10 font-mono text-xs font-bold text-black dark:text-white"
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-neutral-500 font-mono text-[10px] uppercase">
                <span>{category.items.length} SKILLS</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-black dark:text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom 3 Principles Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black dark:border-neutral-800 font-mono text-xs">
        <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-black dark:border-neutral-800 flex items-start gap-3">
          <span className="font-extrabold text-black dark:text-white">01</span>
          <div>
            <div className="font-bold text-black dark:text-white uppercase mb-1">
              CLEAN CODE
            </div>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Writing readable, type-safe TypeScript and reusable React components that are easy to maintain.
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-black dark:border-neutral-800 flex items-start gap-3 bg-white/40 dark:bg-black/40">
          <span className="font-extrabold text-black dark:text-white">02</span>
          <div>
            <div className="font-bold text-black dark:text-white uppercase mb-1">
              RESPONSIVE DESIGN
            </div>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Mobile-first layouts designed to look sharp, clean, and interactive on any screen size.
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6 flex items-start gap-3">
          <span className="font-extrabold text-black dark:text-white">03</span>
          <div>
            <div className="font-bold text-black dark:text-white uppercase mb-1">
              FAST &amp; SEO FRIENDLY
            </div>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Quick page loading speeds, proper meta tags, semantic HTML, and accessibility best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
