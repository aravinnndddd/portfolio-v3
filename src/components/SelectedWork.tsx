import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const SelectedWork: React.FC = () => {
  const homeProjects = projects.slice(0, 3);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#030303] min-h-screen py-24  md:py-32"
      aria-labelledby="selected-works-heading"
    >
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-end px-8 md:px-24 mb-10">
          <span className="text-secondary text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 opacity-50 font-bold">
            Curated Showcase
          </span>
          <h2
            id="selected-works-heading"
            className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8]"
          >
            Selected
            <br />
            <Link
              to="/works"
              className="inline-block md:hidden text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
              aria-label="Open all works"
            >
              Works
            </Link>
            <span
              className="hidden md:inline text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Works
            </span>
          </h2>
        </div>

        {/* Vertical list with native scroll for better UX */}
        <div className="px-4 md:px-24">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:gap-10">
            {homeProjects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[60vh] min-h-105 w-full overflow-hidden rounded-[2rem] md:h-[65vh] md:rounded-[3rem] bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-700"
              >
                {/* Visual Indicator */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-bold text-white/40 tracking-[0.2em]">
                    0{index + 1} / 0{homeProjects.length}
                  </span>
                </div>

                {/* Media Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-10 transition-all duration-1000 ease-out"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />
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
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/2 select-none pointer-events-none leading-none">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Works Button */}
      <div className="flex justify-center mt-20">
        <Link
          to="/works"
          className="inline-flex items-center gap-4 px-10 py-4 bg-accent text-black rounded-full font-black text-xs md:text-sm hover:scale-105 transition-all"
        >
          VIEW MORE PROJECTS <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default SelectedWork;
