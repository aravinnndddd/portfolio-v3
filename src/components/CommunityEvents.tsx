import { ArrowUpRight } from "lucide-react";

export default function CommunityEvents() {
  const communities = [
    {
      name: "GDG ON CAMPUS CEP",
      sub: "Organizer (2025-2026)",
      logo: (
        <img
          src="/logo/gdg_logo.webp"
          alt="GDG on Campus CEP"
          className="h-8 max-w-[130px] object-contain"
        />
      ),
    },
    {
      name: "IEEE SB CE PERUMON",
      sub: "Technical Coordinator",
      logo: (
        <img
          src="/logo/sb.webp"
          alt="IEEE SB CEP"
          className="h-8 max-w-[110px] object-contain"
        />
      ),
    },
    {
      name: "Tinkerhub CEP",
      sub: "Volunteer",
      logo: (
        <img
          src="/logo/th_logo.webp"
          className="h-8 max-w-[110px] object-contain"
          alt="Tinkerhub CEP"
        />
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]"
    >
      {/* Mobile Community & Events */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between p-6 border-b border-black dark:border-neutral-800">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 block mb-1">
              [04]
            </span>
            <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-black dark:text-white">
              COMMUNITY &amp; EVENTS
            </h2>
          </div>
          <ArrowUpRight className="h-5 w-5 text-black dark:text-white" />
        </div>

        {/* 3-Column Grid with Equal Sizing & Gapping for all 3 communities on Mobile */}
        <div className="grid grid-cols-3 border-b border-black dark:border-neutral-800">
          {communities.map((comm, idx) => (
            <div
              key={comm.name}
              className={`p-3 sm:p-5 flex flex-col items-center justify-center text-center ${idx < 2 ? "border-r border-black dark:border-neutral-800" : ""
                }`}
            >
              {/* Equal height logo box */}
              <div className="h-10 w-full flex items-center justify-center">
                {comm.logo}
              </div>

              {/* Strict uniform gap and typography */}
              <div className="mt-3 space-y-0.5">
                <h3 className="font-condensed text-xs sm:text-sm font-bold text-black dark:text-white uppercase tracking-tight leading-tight">
                  {comm.name}
                </h3>
                <p className="font-mono text-[8px] sm:text-[9px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                  {comm.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audience Banner Below */}
        <div className="relative h-36 overflow-hidden">
          <img
            src="/editorial/cep.webp"
            alt="College of Engineering Perumon"
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-end text-white font-mono text-[10px] leading-tight font-medium bg-black/30">
            <div>PEOPLE • IDEAS • COMMUNITIES</div>
            <div className="text-white/80 text-[9px]">A BETTER TOMORROW.</div>
          </div>
        </div>
      </div>

      {/* Desktop Community & Events */}
      <div className="hidden lg:grid grid-cols-12 items-stretch min-h-[190px]">
        {/* Title Box */}
        <div className="col-span-2 p-6 xl:p-8 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
            [04]
          </span>
          <div>
            <h2 className="font-condensed text-3xl xl:text-4xl font-black uppercase tracking-tight leading-[0.9] text-black dark:text-white">
              COMMUNITY<br />&amp; EVENTS
            </h2>
          </div>
          <div className="pt-2">
            <ArrowUpRight className="h-5 w-5 text-black dark:text-white" />
          </div>
        </div>

        {/* 4 Community Cells with Exact Equal Logo Box Height, Equal Gapping & Balanced Alignment */}
        <div className="col-span-8 grid grid-cols-3 border-r border-black dark:border-neutral-800">
          {communities.map((comm, idx) => (
            <div
              key={comm.name}
              className={`p-6 flex flex-col justify-center items-center text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${idx < 2 ? "border-r border-black dark:border-neutral-800" : ""
                }`}
            >
              {/* Exactly 48px equal height container for image/logo */}
              <div className="h-12 w-full flex items-center justify-center">
                {comm.logo}
              </div>

              {/* Exact uniform top gap (16px / mt-4) between logo and text */}
              <div className="mt-4 space-y-1 flex flex-col items-center">
                <h3 className="font-condensed text-sm xl:text-base font-bold text-black dark:text-white uppercase tracking-tight leading-tight">
                  {comm.name}
                </h3>
                <p className="font-mono text-[9px] xl:text-[10px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                  {comm.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Photo Card: Brutalist Building + Perumon tag */}
        <div className="col-span-2 relative overflow-hidden">
          <img
            src="/editorial/cep.webp"
            alt="College of Engineering Perumon"
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white font-mono text-[9px] uppercase font-bold leading-tight bg-black/25">
            <span>COLLEGE OF</span>
            <span>ENGINEERING</span>
            <span>PERUMON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
