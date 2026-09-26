import { ArrowUpRight } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";

interface WorksProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
  onViewAllWorks?: () => void;
  showViewAllButton?: boolean;
}

export default function Works({
  projects = projectsData,
  title = "FEATURED",
  subtitle = "PROJECTS",
  onViewAllWorks,
  showViewAllButton = true,
}: WorksProps) {
  // If view all button is disabled (e.g. on Works page), show all projects
  const isFullList = !showViewAllButton;

  const featuredIds = ["make-it-join", "makeqr", "cep-hall", "kochi-devfest"];
  const featuredList = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  const displayItems = isFullList
    ? projects
    : featuredList.length >= 4
      ? featuredList
      : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]"
    >
      {/* Mobile Projects Layout (Matches Image 1 Left 2x2 Grid) */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between p-6 border-b border-black dark:border-neutral-800">
          <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-black dark:text-white">
            {title} {subtitle}
          </h2>
          <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
            [02]
          </span>
        </div>

        <div className="grid grid-cols-2 border-black dark:border-neutral-800">
          {displayItems.map((project, index) => {
            const projectUrl = project.liveUrl || project.githubUrl || "#";
            const isRightCol = index % 2 === 1;
            const isBottomRow = index >= 2;
            const imgSrc = project.image || "/projects/makeitjoin.webp";

            return (
              <a
                key={project.id}
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-4 flex flex-col justify-between group transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${!isRightCol ? "border-r border-black dark:border-neutral-800" : ""
                  } ${!isBottomRow ? "border-b border-black dark:border-neutral-800" : ""}`}
              >
                {/* Artwork Box */}
                <div className="w-full aspect-square overflow-hidden bg-black/5 dark:bg-white/5 border border-black/20 dark:border-neutral-700/50 mb-3 relative">
                  <img
                    src={imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  {project.articleUrl && (
                    <span className="absolute top-1.5 left-1.5 z-10 bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 font-mono text-[8px] uppercase font-bold tracking-wider">
                      ARTICLE
                    </span>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-condensed text-lg font-black uppercase tracking-tight text-black dark:text-white group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-0.5 leading-tight">
                    {project.tagline || project.description}
                  </p>
                </div>

                <div className="flex justify-end mt-2">
                  <ArrowUpRight className="h-4 w-4 text-black dark:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {showViewAllButton && (
          <div className="p-4 border-t border-black dark:border-neutral-800 text-center">
            <button
              onClick={onViewAllWorks}
              className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 cursor-pointer"
            >
              VIEW ALL WORKS ({projects.length}) →
            </button>
          </div>
        )}
      </div>

      {/* Desktop Projects Layout (Matches Image 2 Desktop 5-Column Grid) */}
      <div className="hidden lg:grid grid-cols-5 items-stretch">
        {/* Left Header Box */}
        <div className="p-6 xl:p-8 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 block mb-6">
              [02]
            </span>
            <h2 className="font-condensed text-3xl xl:text-4xl font-black uppercase tracking-tight leading-[0.9] text-black dark:text-white">
              {title}<br />
              {subtitle}
            </h2>
          </div>

          <div className="pt-8">
            <button
              onClick={onViewAllWorks}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:underline cursor-pointer"
            >
              <span>ALL</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 4 Project Columns */}
        {displayItems.map((project, index) => {
          const projectUrl = project.liveUrl || project.githubUrl || "#";
          const isLast = index === displayItems.length - 1;
          const imgSrc = project.image || "/projects/makeitjoin.webp";

          return (
            <a
              key={project.id}
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-5 xl:p-6 flex flex-col justify-between group transition-colors hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${!isLast ? "border-r border-black dark:border-neutral-800" : ""
                }`}
            >
              {/* Image Tile */}
              <div className="w-full aspect-square overflow-hidden bg-black/5 dark:bg-white/5 border border-black dark:border-neutral-700/50 mb-4 relative">
                <img
                  src={imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {project.articleUrl && (
                  <span className="absolute top-2 left-2 z-10 bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider">
                    ARTICLE
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-condensed text-lg xl:text-xl font-black uppercase tracking-tight text-black dark:text-white group-hover:underline truncate">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[11px] xl:text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2 leading-snug">
                    {project.tagline || project.description}
                  </p>
                </div>

                <div className="flex justify-end pt-3">
                  <div className="flex items-center justify-center h-8 w-8 border border-transparent group-hover:border-black dark:group-hover:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
