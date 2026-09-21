import { ArrowUpRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onViewWorkClick?: () => void;
}

export default function Hero({ onViewWorkClick }: HeroProps) {
  const scrollToWorks = () => {
    if (onViewWorkClick) {
      onViewWorkClick();
      return;
    }
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="w-full border-b border-black dark:border-neutral-800">
      {/* Mobile Hero (Matching Image 1 Left) */}
      <div className="block lg:hidden">
        {/* Top Header Label with mini portrait */}
        <div className="grid grid-cols-12 border-b border-black dark:border-neutral-800">
          <div className="col-span-7 p-4 sm:p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-800 dark:text-neutral-300 font-bold">
              <span>01</span>
              <span className="w-px h-3 bg-black dark:bg-white inline-block mx-1" />
              <span>TURNING IDEAS INTO IMPACT.</span>
            </div>
          </div>
          <div className="col-span-5 border-l border-black dark:border-neutral-800 h-48 sm:h-56 overflow-hidden bg-[#dedbd3] dark:bg-neutral-800 relative">
            <img
              src="/editorial/hero_portrait.png"
              alt="Aravind P"
              className="w-full h-full object-cover grayscale object-[center_24%] contrast-105"
            />
          </div>
        </div>

        {/* Big Headline */}
        <div className="p-6 sm:p-8 border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
          <h1 className="font-condensed text-[56px] sm:text-[72px] font-black uppercase tracking-tighter leading-[0.88] text-black dark:text-white">
            BUILD<br />
            WHAT<br />
            MATTERS.<span className="text-xl sm:text-2xl font-light align-top ml-1">©</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-6 leading-relaxed max-w-md">
            I&apos;m Aravind P, a developer and artist who loves building web apps, drawing, and bringing creative ideas to life.
          </p>

          <div className="mt-6">
            <button
              onClick={scrollToWorks}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7C8D69] hover:bg-[#71815E] text-black font-mono text-xs uppercase tracking-wider font-bold border border-black dark:border-neutral-800 shadow-none transition-colors cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Hero (Matching Image 2 Desktop, fitting 100vh) */}
      <div className="hidden lg:grid grid-cols-12 items-stretch h-[calc(100vh-65px)] min-h-[560px] max-h-[760px]">
        {/* Left Column: Headline, Bio, CTA */}
        <div className="col-span-6 p-8 xl:p-12 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-300 font-bold mb-6">
              <div className="flex items-center gap-2">
                <span>01</span>
                <span className="w-px h-3.5 bg-black dark:bg-white inline-block mx-1" />
                <span>TURNING IDEAS INTO IMPACT.</span>
              </div>
              <div className="hidden xl:flex items-center gap-3 text-[10px] tracking-widest text-neutral-500 dark:text-neutral-400">
                <span>DEVELOPER</span>
                <span>•</span>
                <span>ARTIST</span>
                <span>•</span>
                <span>CREATIVE</span>
              </div>
            </div>

            <h1 className="font-condensed text-[84px] xl:text-[104px] font-black uppercase tracking-tighter leading-[0.86] text-black dark:text-white">
              BUILD<br />
              WHAT<br />
              MATTERS.<span className="text-2xl xl:text-3xl font-light align-top ml-1">©</span>
            </h1>

            <p className="font-sans text-sm xl:text-base text-neutral-700 dark:text-neutral-300 mt-6 xl:mt-8 leading-relaxed max-w-lg">
              I&apos;m Aravind P, a developer and artist who loves building web apps, drawing, and bringing creative ideas to life.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={scrollToWorks}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7C8D69] hover:bg-[#71815E] text-black font-mono text-xs uppercase tracking-wider font-bold border border-black dark:border-neutral-800 shadow-none transition-colors cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Center / Middle Column: Full Height Portrait + Overlaid Brutalist Cards */}
        <div className="col-span-5 relative flex flex-col border-r border-black dark:border-neutral-800 bg-[#E5E3DC] dark:bg-[#161616] overflow-hidden">
          {/* Photo filling full height with face and shoulders completely visible */}
          <div className="w-full h-full relative overflow-hidden bg-[#dedbd3] dark:bg-neutral-800">
            <img
              src="/editorial/hero_portrait.png"
              alt="Aravind P - Portfolio Hero"
              className="w-full h-full object-cover grayscale contrast-105 object-[center_18%]"
            />

            {/* Overlaid Based In Card (Top Right) */}
            <div className="absolute top-4 right-4 p-3.5 bg-white/95 dark:bg-neutral-900/95 border border-black dark:border-neutral-800 text-black dark:text-white font-mono text-[10px] uppercase font-bold tracking-wider leading-snug shadow-sm backdrop-blur-xs z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  BASED IN<br />
                  KERALA, INDIA<br />
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">(UTC +5:30)</span>
                </div>
                <ArrowDown className="h-3.5 w-3.5 text-black dark:text-white -rotate-45" />
              </div>
            </div>

            {/* Overlaid Keywords Vertical Pill (Top Left) */}
            <div className="absolute top-4 left-4 p-2.5 bg-black/85 text-white border border-black dark:border-neutral-800 font-mono text-[9px] uppercase tracking-widest leading-loose font-bold hidden sm:flex flex-col z-10">
              <span>DEVELOP</span>
              <span>DESIGN</span>
              <span>ORGANIZE</span>
              <span>REPEAT</span>
            </div>

            {/* Solid Green Box overlay (Bottom Left) */}
            <div className="absolute bottom-4 left-4 p-3 xl:p-3.5 bg-[#7C8D69] text-black border border-black dark:border-neutral-800 font-mono text-[9px] xl:text-[10px] uppercase tracking-wider font-bold leading-tight shadow-sm z-10">
              <div>CODE</div>
              <div>DRAWING</div>
              <div>CREATIVE</div>
              <div className="text-black/75">BUILDING IDEAS.</div>
            </div>

            {/* Currently Card (Bottom Right) */}
            <div className="absolute bottom-4 right-4 p-3 xl:p-3.5 bg-white/95 dark:bg-neutral-900/95 border border-black dark:border-neutral-800 text-black dark:text-white font-mono text-[9px] xl:text-[10px] uppercase font-bold leading-tight max-w-[190px] shadow-sm backdrop-blur-xs z-10">
              <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 mb-1">
                <span>CURRENTLY</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
              <div className="text-black dark:text-white">
                S5 CSE<br />
                COLLEGE OF ENGINEERING<br />
                PERUMON
              </div>
            </div>
          </div>
        </div>

        {/* Right Margin Strip (Desktop) */}
        <div className="col-span-1 p-4 flex flex-col justify-between items-center text-center font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-600 dark:text-neutral-400">
          <div className="py-4 [writing-mode:vertical-rl] tracking-widest">
            MAKE IDEAS REAL
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-16 bg-black dark:bg-neutral-700" />
            <div className="font-condensed text-base font-extrabold tracking-widest text-black dark:text-white">
              20<br />26
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 py-4">
            <span className="text-[9px]">SCROLL<br />DOWN</span>
            <span className="w-px h-6 bg-black dark:bg-neutral-700 inline-block mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
