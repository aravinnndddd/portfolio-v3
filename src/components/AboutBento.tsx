import { ArrowUpRight } from "lucide-react";

interface AboutBentoProps {
  onMoreAboutMeClick?: () => void;
}

export default function AboutBento({ onMoreAboutMeClick }: AboutBentoProps) {
  return (
    <section
      id="about"
      className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]"
    >
      {/* Mobile Layout (Matches Image 1 Left Bottom & Right Middle) */}
      <div className="block lg:hidden">
        {/* Nature photo banner */}
        <div className="relative h-72 sm:h-80 overflow-hidden border-b border-black dark:border-neutral-800">
          <img
            src="/editorial/forest_canopy.webp"
            alt="Nature Canopy"
            className="w-full h-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                FIND<br />
                BEAUTY<br />
                IN THE<br />
                PROCESS.
              </div>
              <span className="font-mono text-xs font-bold text-white/80">[03]</span>
            </div>

            <div>
              <div className="w-8 h-px bg-white mb-2" />
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/90">
                A SMALL STEP<br />EVERYDAY.
              </div>
              <ArrowUpRight className="h-5 w-5 mt-2" />
            </div>
          </div>
        </div>

        {/* Mobile About Me Card */}
        <div className="p-6 sm:p-8 border-b border-black dark:border-neutral-800">
          <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 block mb-2">
            [03]
          </span>
          <h2 className="font-condensed text-4xl font-black uppercase tracking-tight text-black dark:text-white mb-4">
            ABOUT ME
          </h2>
          <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I&apos;m a developer and artist who loves creating things. Along with building web apps and organizing tech events, I love to draw, sketch, and explore creative visual ideas. Art gives me an eye for detail, composition, and aesthetics in everything I build.
          </p>

          {/* Mobile 3 Focus Pillars */}
          <div className="grid grid-cols-3 gap-3 my-6 pt-6 border-t border-black dark:border-neutral-800">
            <div>
              <div className="font-condensed text-2xl font-black text-black dark:text-white uppercase">ARTIST</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-bold mt-1">
                DRAWING &amp; ART
              </div>
            </div>
            <div className="border-l border-black/30 dark:border-neutral-700/50 pl-3">
              <div className="font-condensed text-2xl font-black text-black dark:text-white uppercase">CREATIVE</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-bold mt-1">
                UI &amp; VISUALS
              </div>
            </div>
            <div className="border-l border-black/30 dark:border-neutral-700/50 pl-3">
              <div className="font-condensed text-2xl font-black text-black dark:text-white uppercase">DEV</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-bold mt-1">
                WEB APPS
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onMoreAboutMeClick}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold tracking-wider text-black dark:text-white hover:underline cursor-pointer"
            >
              <span>MORE ABOUT ME</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Matches Image 2 Desktop 4-Part Bento) */}
      <div className="hidden lg:grid grid-cols-12 items-stretch min-h-[480px]">
        {/* Card 1: Nature Forest Photo & Process Quote */}
        <div className="col-span-3 relative border-r border-black dark:border-neutral-800 overflow-hidden">
          <img
            src="/editorial/forest_canopy.webp"
            alt="Forest Canopy"
            className="w-full h-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-black/45 p-8 flex flex-col justify-between text-white">
            <div className="font-condensed text-3xl xl:text-4xl font-black uppercase tracking-tight leading-[0.95]">
              FIND<br />
              BEAUTY<br />
              IN THE<br />
              PROCESS.
            </div>

            <div>
              <div className="w-8 h-px bg-white mb-2" />
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/80">
                A SMALL STEP<br />
                EVERYDAY.
              </div>
              <ArrowUpRight className="h-6 w-6 mt-4" />
            </div>
          </div>
        </div>

        {/* Card 2: About Me Bio & Tech Stack */}
        <div className="col-span-4 p-8 xl:p-10 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 block mb-4">
              [03]
            </span>
            <h2 className="font-condensed text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[0.88] text-black dark:text-white mb-6">
              ABOUT<br />ME
            </h2>
            <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-sm">
              I&apos;m a developer and artist who loves creating things. Alongside coding web applications, I spend time drawing, sketching, and exploring creative visual arts. That artistic mindset shapes every interface I build — with care, aesthetics, and attention to detail.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={onMoreAboutMeClick}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold tracking-wider text-black dark:text-white hover:underline cursor-pointer"
            >
              <span>MORE ABOUT ME</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Green Focus & Creative Column */}
        <div className="col-span-3 bg-[#7C8D69] p-8 xl:p-10 border-r border-black dark:border-neutral-800 flex flex-col justify-between text-black">
          <div className="pb-4 border-b border-black/30">
            <div className="font-condensed text-4xl xl:text-5xl font-black leading-none uppercase">
              ARTIST
            </div>
            <div className="font-mono text-[10px] uppercase font-bold tracking-wider mt-1.5">
              DRAWING &amp; SKETCHING
            </div>
          </div>

          <div className="py-4 border-b border-black/30">
            <div className="font-condensed text-4xl xl:text-5xl font-black leading-none uppercase">
              CREATIVE
            </div>
            <div className="font-mono text-[10px] uppercase font-bold tracking-wider mt-1.5">
              VISUAL ART &amp; UI DESIGN
            </div>
          </div>

          <div className="py-4 border-b border-black/30">
            <div className="font-condensed text-4xl xl:text-5xl font-black leading-none uppercase">
              DEVELOPER
            </div>
            <div className="font-mono text-[10px] uppercase font-bold tracking-wider mt-1.5">
              WEB APPLICATIONS
            </div>
          </div>

          <div className="pt-4">
            <div className="font-condensed text-4xl xl:text-5xl font-black leading-none uppercase">
              COMMUNITY
            </div>
            <div className="font-mono text-[10px] uppercase font-bold tracking-wider mt-1.5">
              TECH TALKS &amp; WORKSHOPS
            </div>
          </div>
        </div>

        {/* Card 4: Solid Black Quote Column */}
        <div className="col-span-2 bg-black text-white p-8 xl:p-10 flex flex-col justify-between">
          <div className="font-serif text-5xl font-light leading-none text-white/50">
            “
          </div>

          <div className="font-sans text-base xl:text-lg font-light leading-snug space-y-2">
            <p>Better products.</p>
            <p>Stronger communities.</p>
            <p>A brighter tomorrow.</p>
          </div>

          <div className="font-serif text-5xl font-light leading-none text-white/50 self-end">
            ”
          </div>
        </div>
      </div>
    </section>
  );
}
