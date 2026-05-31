import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";

interface WorksProps {
  onSelectProject: (project: Project) => void;
  projects?: Project[];
  showViewAllButton?: boolean;
  onViewAllWorks?: () => void;
  viewAllLabel?: string;
  title?: string;
  subtitle?: string;
  showFooterCta?: boolean;
}

export default function Works({
  onSelectProject,
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
    <section id="works" className="py-20 md:py-28 text-black">
      {/* Title block with flex styling */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
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
              className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              {viewAllLabel}
            </button>
          )}
        </div>
      </div>

      {/* Dynamic Grid alignment */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`group bg-white border border-neutral-100 ambient-shadow overflow-hidden transition-all duration-500 hover:shadow-xl rounded-sm flex flex-col justify-between`}
              >
                {/* Image Section */}
                <div
                  onClick={() => onSelectProject(project)}
                  className={`w-full overflow-hidden bg-neutral-100  relative cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Category overlay badge */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-95 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Bar */}
                <div className="p-6 md:p-8 flex items-center justify-between border-t border-neutral-100 bg-white">
                  <div>
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold flex items-center gap-1">
                      {project.number}{" "}
                    </span>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display text-xl md:text-2xl font-bold mt-1 text-black hover:underline cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>

                    {/* Tiny Tags showcase */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] bg-neutral-50 px-2 py-0.5 text-neutral-500 border border-neutral-200 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="font-mono text-[9px] bg-neutral-50 px-1.5 py-0.5 text-neutral-400 border border-neutral-200">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Circle interactive arrow button triggers modal */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex h-12 w-12 items-center justify-center bg-neutral-50 hover:bg-black border border-neutral-200 hover:border-black text-black hover:text-white transition-all duration-300 cursor-pointer rounded-full"
                    aria-label={`View details of ${project.title}`}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {showFooterCta && (
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-4 border border-dashed border-[#e5e5e5] font-mono text-[10px] text-secondary uppercase tracking-widest bg-neutral-50">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-black" />
            <span>Need custom production blueprints designed?</span>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-black hover:underline font-bold"
          >
            Initiate Request →
          </button>
        </div>
      )}
    </section>
  );
}
