import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "makeQR",
    url: "https://www.makeqr.site/",
    description: "Create custom QR codes with colors, logos, and unique styles. Built for simple, reliable QR creation.",
    image: "./makeqr.png",

  },
  {
    title: "Kochi DevFest",
    url: "https://www.devfestkochi.in/",
    description: "The official website for Google DevFest Kochi 2025.",
    image: "./devfest.png",

  },
  {
    title: "Discord Echo",
    url: "https://github.com/aravinnndddd/Discord-Echo",
    description: "Show your live Discord status, coding activity, and Spotify presence on the web with a self-hosted API.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=2074&auto=format&fit=crop",

  }
];

const SelectedWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Horizontal Pinning and Scroll
      gsap.to(sectionRef.current, {
        x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top 85px top",
          end: () => `+=${sectionRef.current!.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="relative overflow-hidden bg-[#030303] min-h-screen py-24  md:py-32">
      <div ref={triggerRef} className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-end px-8 md:px-24 mb-10">
          <span className="text-secondary text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 opacity-50 font-bold">Curated Showcase</span>
          <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8]">
            Selected<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Works</span>
          </h2>
        </div>

        {/* Horizontal Container with Reduced Height */}
        <div
          ref={sectionRef}
          className="flex flex-row flex-nowrap relative h-[65vh] md:h-[60vh]"
          style={{ width: "fit-content" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen h-full flex items-center justify-center px-4 md:px-48"
            >
              {/* Simplified Card with Sliding Hover Reveal */}
              <div className="group relative w-full h-full max-w-full md:max-w-7xl overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-700">

                {/* Visual Indicator */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-bold text-white/40 tracking-[0.2em]">0{index + 1} / 0{projects.length}</span>
                </div>

                {/* Media Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-10 transition-all duration-1000 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                </div>

                {/* Project Info: Sliding Reveal */}
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end overflow-hidden">
                  <div className="translate-y-[60%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <h3 className="text-4xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
                      {project.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm md:text-lg text-white/50 mb-10 leading-relaxed max-w-2xl font-medium">
                        {project.description}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-10 py-4 bg-white text-black rounded-full font-black text-xs md:text-sm hover:scale-105 transition-all"
                      >
                        EXPLORE PROJECT <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative BG Number */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;