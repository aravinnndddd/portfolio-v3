import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";
import ParallaxElement from "./ParallaxElement";

interface WorksProps {
  projects?: Project[];
  showViewAllButton?: boolean;
  onViewAllWorks?: () => void;
  viewAllLabel?: string;
  title?: string;
  subtitle?: string;
  showFooterCta?: boolean;
}

export default function Works({
  projects = projectsData,
  showViewAllButton = false,
  onViewAllWorks,
  viewAllLabel = "View All Works",
  title = "Selected",
  subtitle = "Works",
  showFooterCta = true,
}: WorksProps) {
  const displayedProjects = projects;

  return (
    <section id="works" className="py-20 md:py-28 text-neutral-900 dark:text-white">
      {/* Title block with flex styling */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
            Curated Showcase
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap">
            {title} <br className="hidden md:block" />
            <span className="text-outline">{subtitle}</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {showViewAllButton && (
            <button
              type="button"
              onClick={onViewAllWorks}
              className="inline-flex items-center justify-center rounded-none border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white dark:text-neutral-900 transition-all duration-300 hover:bg-white dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
            >
              {viewAllLabel}
            </button>
          )}
        </div>
      </div>

      {/* Dynamic Grid alignment */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => {
            const parallaxSpeed = index % 2 === 0 ? -0.05 : -0.11;
            const projectLink = project.liveUrl || project.githubUrl;
            const seoAltText = `${project.title} - ${project.description.slice(0, 100)}`;

            return (
              <ParallaxElement key={project.id} speed={parallaxSpeed}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="group bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 ambient-shadow overflow-hidden transition-all duration-500 hover:shadow-xl rounded-none flex flex-col justify-between"
                >
                  {/* Image Section */}
                  {projectLink ? (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live demo for ${project.title}`}
                      className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative block cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-neutral-900/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={seoAltText}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-95 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  ) : (
                    <div className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                      <img
                        src={project.image}
                        alt={seoAltText}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-95"
                      />
                    </div>
                  )}

                  {/* Info Bar */}
                  <div className="p-6 md:p-8 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div>
                      <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                        {project.number}
                      </span>
                      {projectLink ? (
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="font-display text-xl md:text-2xl font-bold mt-1 text-neutral-900 dark:text-white hover:underline tracking-tight block"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <h3 className="font-display text-xl md:text-2xl font-bold mt-1 text-neutral-900 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                      )}

                      {/* Tiny Tags showcase */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] bg-neutral-50 dark:bg-neutral-800 px-2 py-0.5 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 uppercase rounded-none"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="font-mono text-[9px] bg-neutral-50 dark:bg-neutral-800 px-1.5 py-0.5 text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-700 rounded-none">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Circle interactive arrow button */}
                    {projectLink && (
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-900 dark:hover:bg-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white hover:text-white dark:hover:text-neutral-900 transition-all duration-300 cursor-pointer rounded-none shrink-0"
                        aria-label={`Open external link for ${project.title}`}
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </ParallaxElement>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {showFooterCta && (
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-4 border border-dashed border-neutral-200 dark:border-neutral-800 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest bg-neutral-50 dark:bg-neutral-900/50">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-neutral-900 dark:text-white" />
            <span>Need custom production blueprints designed?</span>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-neutral-900 dark:text-white hover:underline font-bold cursor-pointer"
          >
            Initiate Request →
          </button>
        </div>
      )}
    </section>
  );
}
