import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { updateMetaTags, SITE_URL, DEFAULT_OG_IMAGE } from "../lib/seoUtils";

gsap.registerPlugin(ScrollTrigger);

const Works: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update meta tags for the works page
    updateMetaTags({
      title: "My Works - Aravind P's Project Portfolio",
      description:
        "Explore all of Aravind P's projects and works including makeQR, Kochi DevFest, Make Resume, Discord Echo, and CEP Hall.",
      image: DEFAULT_OG_IMAGE,
      url: `${SITE_URL}/works`,
      type: "website",
    });

    // Stagger animation for project cards
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black min-h-screen py-24 md:py-32"
      aria-labelledby="works-heading"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 md:px-24 mb-16">
        <span className="text-secondary text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 opacity-50 font-bold block">
          Complete Portfolio
        </span>
        <h1
          id="works-heading"
          className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8]"
        >
          My
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Works
          </span>
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
              aria-label={`View ${project.title} project - ${project.description}`}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-black/40 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 cursor-pointer">
                {/* Project Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  {/* Project Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-[9px] font-bold text-white/40 tracking-[0.2em]">
                        0{index + 1} / 0{projects.length}
                      </span>
                    </div>
                    <ExternalLink
                      className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
